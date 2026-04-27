#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.join(__dirname, '..', 'themes');
let exitCode = 0;

function validateTheme(filePath) {
  const name = path.basename(filePath);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(`❌ ${name}: JSON inválido → ${err.message}`);
    return false;
  }

  const errors = [];
  if (typeof data.$schema !== 'string') errors.push('falta "$schema"');
  if (!data.theme || typeof data.theme !== 'object') errors.push('falta sección "theme"');
  else {
    for (const key of ['primary', 'background', 'text']) {
      if (!data.theme[key]) errors.push(`falta "theme.${key}"`);
    }
  }

  if (errors.length > 0) {
    console.error(`❌ ${name}: ${errors.join(', ')}`);
    return false;
  }
  console.log(`✅ ${name}`);
  return true;
}

const files = fs.readdirSync(THEMES_DIR).filter(f => f.endsWith('.json'));
if (files.length === 0) {
  console.error('No se encontraron temas en themes/');
  process.exit(1);
}
console.log(`Validando ${files.length} tema(s)...\n`);
for (const file of files) {
  if (!validateTheme(path.join(THEMES_DIR, file))) exitCode = 1;
}
process.exit(exitCode);
