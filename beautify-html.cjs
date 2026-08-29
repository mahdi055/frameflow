'use strict'
const fs = require('fs')
const path = require('path')
const { html: beautify } = require('js-beautify')

const OPTS = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 1,
  wrap_line_length: 0,
  extra_liners: ['head', 'body', '/html'],
  content_unformatted: ['pre', 'script', 'style', 'textarea'],
  inline: [],
}

function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else if (entry.name.endsWith('.html')) files.push(full)
  }
  return files
}

const outDir = path.join(__dirname, 'out')
const htmlFiles = walk(outDir)
for (const file of htmlFiles) {
  const raw = fs.readFileSync(file, 'utf-8')
  fs.writeFileSync(file, beautify(raw, OPTS), 'utf-8')
  console.log('Beautified:', path.relative(__dirname, file))
}
console.log(`\nDone: ${htmlFiles.length} files beautified.`)
