#!/usr/bin/env node
// Validador del contrato tecnico de los temas de OpenCode.
// Verifica estructura, set completo de tokens, variantes dark/light,
// referencias a defs y un piso minimo de legibilidad. NO aplica WCAG:
// estos temas priorizan la fidelidad estetica retro sobre el contraste;
// el piso solo detecta pares que en la TUI quedan practicamente invisibles.
//
// Uso:
//   node scripts/validate.js            los fallos de legibilidad son avisos
//   node scripts/validate.js --strict   los fallos de legibilidad rompen el build
const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.join(__dirname, '..', 'themes');
const SCHEMA = 'https://opencode.ai/theme.json';
const STRICT = process.argv.includes('--strict');

// Contrato completo de tokens que OpenCode espera en un tema.
const REQUIRED_TOKENS = [
  'primary', 'secondary', 'accent', 'error', 'warning', 'success', 'info',
  'text', 'textMuted', 'background', 'backgroundPanel', 'backgroundElement',
  'border', 'borderActive', 'borderSubtle',
  'diffAdded', 'diffRemoved', 'diffContext', 'diffHunkHeader',
  'diffHighlightAdded', 'diffHighlightRemoved', 'diffAddedBg', 'diffRemovedBg',
  'diffContextBg', 'diffLineNumber', 'diffAddedLineNumberBg', 'diffRemovedLineNumberBg',
  'markdownText', 'markdownHeading', 'markdownLink', 'markdownLinkText', 'markdownCode',
  'markdownBlockQuote', 'markdownEmph', 'markdownStrong', 'markdownHorizontalRule',
  'markdownListItem', 'markdownListEnumeration', 'markdownImage', 'markdownImageText',
  'markdownCodeBlock',
  'syntaxComment', 'syntaxKeyword', 'syntaxFunction', 'syntaxVariable', 'syntaxString',
  'syntaxNumber', 'syntaxType', 'syntaxOperator', 'syntaxPunctuation',
];

// Tokens opcionales que OpenCode acepta fuera del contrato.
// selectedListItemText es el texto del item seleccionado; si falta, la TUI usa background.
const OPTIONAL_COLOR_TOKENS = ['selectedListItemText', 'backgroundMenu'];
const OPTIONAL_NUMBER_TOKENS = ['thinkingOpacity'];

const HEX = /^#[0-9a-fA-F]{6}$/;

// Piso de legibilidad: contraste minimo (formula WCAG) entre texto y fondo.
const MIN_CONTRAST = 1.8;

// Pares [texto, fondo] segun donde los pinta la TUI: las respuestas y su markdown
// van sobre background; los bloques de codigo y el sidebar, sobre backgroundPanel;
// las lineas de contexto del diff, sobre diffContextBg.
const STATUS_TOKENS = ['primary', 'secondary', 'accent', 'error', 'warning', 'success', 'info', 'textMuted'];
const SYNTAX_TOKENS = REQUIRED_TOKENS.filter(t => t.startsWith('syntax'));
const MARKDOWN_TOKENS = REQUIRED_TOKENS.filter(t => t.startsWith('markdown') && t !== 'markdownHorizontalRule');
const CONTRAST_PAIRS = [
  ...['background', 'backgroundPanel', 'backgroundElement', 'diffAddedBg', 'diffRemovedBg', 'diffContextBg']
    .map(bg => ['text', bg]),
  ['diffHighlightAdded', 'diffAddedBg'], ['diffHighlightRemoved', 'diffRemovedBg'],
  ['selectedListItemText', 'primary'],
  ...STATUS_TOKENS.flatMap(t => [[t, 'background'], [t, 'backgroundPanel']]),
  ...SYNTAX_TOKENS.flatMap(t => [[t, 'backgroundPanel'], [t, 'diffContextBg']]),
  ...MARKDOWN_TOKENS.map(t => [t, 'background']),
];

function validateTheme(filePath) {
  const name = path.basename(filePath);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error('❌ ' + name + ': JSON invalido → ' + err.message);
    return false;
  }

  const errors = [];
  const warnings = [];

  // $schema
  if (data.$schema !== SCHEMA) {
    errors.push('"$schema" debe ser "' + SCHEMA + '"');
  }

  // defs
  const defs = data.defs;
  if (defs !== undefined && (typeof defs !== 'object' || defs === null || Array.isArray(defs))) {
    errors.push('"defs" debe ser un objeto');
  }
  const defKeys = defs && typeof defs === 'object' ? Object.keys(defs) : [];
  for (const k of defKeys) {
    if (!HEX.test(defs[k])) errors.push('defs.' + k + ' no es un color hex #RRGGBB (' + defs[k] + ')');
  }

  // theme
  const theme = data.theme;
  if (!theme || typeof theme !== 'object' || Array.isArray(theme)) {
    errors.push('falta seccion "theme"');
    report(name, errors, warnings);
    return errors.length === 0;
  }

  // tokens requeridos + opcionales + variantes + refs
  const usedDefs = new Set();
  for (const token of REQUIRED_TOKENS) {
    if (theme[token] === undefined) { errors.push('falta token "' + token + '"'); continue; }
    checkColor(token, theme[token], defs, usedDefs, errors);
  }
  for (const token of OPTIONAL_COLOR_TOKENS) {
    if (theme[token] !== undefined) checkColor(token, theme[token], defs, usedDefs, errors);
  }
  for (const token of OPTIONAL_NUMBER_TOKENS) {
    const v = theme[token];
    if (v !== undefined && (typeof v !== 'number' || v < 0 || v > 1)) {
      errors.push('"' + token + '" debe ser un numero entre 0 y 1');
    }
  }

  // tokens fuera del contrato (typo?)
  const known = [...REQUIRED_TOKENS, ...OPTIONAL_COLOR_TOKENS, ...OPTIONAL_NUMBER_TOKENS];
  for (const token of Object.keys(theme)) {
    if (!known.includes(token)) warnings.push('token desconocido "' + token + '" (typo?)');
  }

  // defs sin usar (solo aviso, no rompe el build)
  const unused = defKeys.filter(k => !usedDefs.has(k));
  if (unused.length) warnings.push('defs sin usar: ' + unused.join(', '));

  // legibilidad: solo con la estructura valida, para poder resolver los colores
  if (errors.length === 0) {
    (STRICT ? errors : warnings).push(...legibilityIssues(theme, defs || {}));
  }

  report(name, errors, warnings);
  return errors.length === 0;
}

function checkColor(token, v, defs, usedDefs, errors) {
  if (typeof v !== 'object' || v === null) { errors.push('"' + token + '" debe ser { dark, light }'); return; }
  for (const mode of ['dark', 'light']) {
    const raw = v[mode];
    if (raw === undefined) { errors.push('"' + token + '" falta variante "' + mode + '"'); continue; }
    if (typeof raw !== 'string') { errors.push('"' + token + '.' + mode + '" debe ser string'); continue; }
    if (HEX.test(raw)) continue;                  // color hex directo: valido
    if (raw in (defs || {})) { usedDefs.add(raw); continue; } // ref a def: valido
    errors.push('"' + token + '.' + mode + '" → "' + raw + '" no es hex ni def existente');
  }
}

// Pares de CONTRAST_PAIRS por debajo de MIN_CONTRAST. Junta los modos con el
// mismo resultado para que las paletas fijas no repitan cada aviso.
function legibilityIssues(theme, defs) {
  const found = new Map();
  for (const [fg, bg] of CONTRAST_PAIRS) {
    const fgToken = fg === 'selectedListItemText' && theme[fg] === undefined ? 'background' : fg;
    const label = fg === 'selectedListItemText' ? fgToken + ' (item seleccionado)' : fgToken;
    for (const mode of ['dark', 'light']) {
      const ratio = contrast(resolveColor(theme, defs, fgToken, mode), resolveColor(theme, defs, bg, mode));
      if (ratio >= MIN_CONTRAST) continue;
      const key = label + ' sobre ' + bg + ': ' + ratio.toFixed(2);
      found.set(key, [...(found.get(key) || []), mode]);
    }
  }
  return [...found].map(([key, modes]) => 'legibilidad ' + key + ' < ' + MIN_CONTRAST + ' (' + modes.join(', ') + ')');
}

function resolveColor(theme, defs, token, mode) {
  const raw = theme[token][mode];
  return HEX.test(raw) ? raw : defs[raw];
}

// Contraste WCAG entre dos colores #RRGGBB: de 1 (iguales) a 21 (negro/blanco).
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map(i => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function report(name, errors, warnings) {
  if (errors.length === 0) {
    const tag = warnings.length ? '  (' + warnings.length + ' aviso' + (warnings.length > 1 ? 's' : '') + ')' : '';
    console.log('✅ ' + name + tag);
  } else {
    console.error('❌ ' + name);
    errors.forEach(e => console.error('     ✗ ' + e));
  }
  warnings.forEach(w => console.warn('     ⚠ ' + w));
}

const files = fs.readdirSync(THEMES_DIR).filter(f => f.endsWith('.json'));
if (files.length === 0) {
  console.error('No se encontraron temas en themes/');
  process.exit(1);
}
console.log('Validando ' + files.length + ' tema(s) contra ' + REQUIRED_TOKENS.length + ' tokens'
  + (STRICT ? ' (legibilidad estricta)' : '') + '...\n');
let exitCode = 0;
for (const file of files.sort()) {
  if (!validateTheme(path.join(THEMES_DIR, file))) exitCode = 1;
}
process.exit(exitCode);
