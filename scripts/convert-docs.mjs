#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'

const SRC = 'content/docs'

const files = readdirSync(SRC).filter((f) => f.endsWith('.md')).sort()
const slugs = []

for (const file of files) {
  const md = readFileSync(join(SRC, file), 'utf8')
  const slug = file.replace(/^\d+-/, '').replace(/\.md$/, '')
  slugs.push(slug === 'introduction' ? 'index' : slug)

  const titleMatch = md.match(/^#\s+(.+)$/m)
  const title = titleMatch ? titleMatch[1].trim() : slug
  const body = md.replace(/^#\s+.+\n/, '')

  const mdx = `---
title: ${JSON.stringify(title).slice(1, -1)}
description: traintrack documentation — ${title}.
---

${body.trimStart()}
`

  writeFileSync(join(SRC, `${slug}.mdx`), mdx)
  unlinkSync(join(SRC, file))
}

writeFileSync(
  join(SRC, 'meta.json'),
  JSON.stringify(
    {
      title: 'Documentation',
      pages: slugs,
    },
    null,
    2,
  ) + '\n',
)

console.log(`converted ${slugs.length} pages → ${SRC}/*.mdx`)
