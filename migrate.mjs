#!/usr/bin/env node

import path from "node:path";
import syncFS from 'node:fs'
import fs from 'node:fs/promises'
import fg from 'fast-glob'
import { parse } from 'yaml'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { markdownToTxt } = require('markdown-to-txt');

const fromDirectory = "/Users/pepibumur/src/github.com/pepicrft/pepicrft.me/priv/posts"
const toDirectory = "/Users/pepibumur/Downloads/tailwindui-spotlight/src/pages/blog"

const posts = await fg("*.md", { cwd: fromDirectory, absolute: true})

for (const postPath of posts) {
    const postname = path.basename(postPath)
    const date = postname.split("-").slice(0, 3).join("-")
    const postBody = (await fs.readFile(postPath)).toString()
    const components = postBody.split("---")
    const frontmatter = parse(components[1])
    const body = components[2]
    const meta = {
        author: "Pedro Piñera",
        date: date,
        title: frontmatter.title,
        description: frontmatter.description || `${markdownToTxt(body.slice(0, 200))}...`
    }

    const newBody = `import { ArticleLayout } from '@/components/ArticleLayout'

export const meta = ${JSON.stringify(meta, null, 2)}

export default (props) => <ArticleLayout meta={meta} {...props} />

${body}
    `
    const outputPath = path.join(toDirectory, `/${date.replaceAll("-", "/")}`, postname.replace(`${date}-`, '').replace('.mdx', '').replace('.md', ''), "index.mdx")
    if (!syncFS.existsSync(path.dirname(outputPath))) {
        await syncFS.mkdirSync(path.dirname(outputPath), { recursive: true })
    }
    console.log(outputPath)
    await fs.writeFile(outputPath, newBody)
}


// date: '2022-09-02',
