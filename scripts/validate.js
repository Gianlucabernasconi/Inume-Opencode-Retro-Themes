#!/usr/bin/env node
// Validador del contrato tecnico de los temas de OpenCode.
// Verifica estructura, set completo de tokens, variantes dark/light y
// referencias a defs. NO evalua accesibilidad/contraste: estos temas
// priorizan la fidelidad estetica retro sobre el contraste WCAG.
const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.join(__dirname, '..', 'themes');
const SCHEMA = 'https://opencode.ai/theme.json';

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

const HEX = /^#[0-9a-fA-F]{6}$/;

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

  // tokens requeridos + variantes + refs
  const usedDefs = new Set();
  for (const token of REQUIRED_TOKENS) {
    const v = theme[token];
    if (v === undefined) { errors.push('falta token "' + token + '"'); continue; }
    if (typeof v !== 'object' || v === null) { errors.push('"' + token + '" debe ser { dark, light }'); continue; }
    for (const mode of ['dark', 'light']) {
      const raw = v[mode];
      if (raw === undefined) { errors.push('"' + token + '" falta variante "' + mode + '"'); continue; }
      if (typeof raw !== 'string') { errors.push('"' + token + '.' + mode + '" debe ser string'); continue; }
      if (HEX.test(raw)) continue;                  // color hex directo: valido
      if (raw in (defs || {})) { usedDefs.add(raw); continue; } // ref a def: valido
      errors.push('"' + token + '.' + mode + '" → "' + raw + '" no es hex ni def existente');
    }
  }

  // tokens fuera del contrato (typo?)
  for (const token of Object.keys(theme)) {
    if (!REQUIRED_TOKENS.includes(token)) warnings.push('token desconocido "' + token + '" (typo?)');
  }

  // defs sin usar (solo aviso, no rompe el build)
  const unused = defKeys.filter(k => !usedDefs.has(k));
  if (unused.length) warnings.push('defs sin usar: ' + unused.join(', '));

  report(name, errors, warnings);
  return errors.length === 0;
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
console.log('Validando ' + files.length + ' tema(s) contra ' + REQUIRED_TOKENS.length + ' tokens...\n');
let exitCode = 0;
for (const file of files.sort()) {
  if (!validateTheme(path.join(THEMES_DIR, file))) exitCode = 1;
}
process.exit(exitCode);
