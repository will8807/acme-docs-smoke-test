import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import { readFile } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { cache } from 'react'

const DOCS_ROOT = join(process.cwd(), 'content')

export interface Frontmatter {
  title: string
  description?: string
  updatedAt?: string
  tags?: string[]
}

export interface DocPage {
  slug: string
  title: string
  description: string | null
  html: string
  frontmatter: Frontmatter
}

const processor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
  .use(rehypeStringify)

export const getDocPage = cache(async (slug: string): Promise<DocPage> => {
  const filePath = join(DOCS_ROOT, `${slug}.md`)
  const raw = await readFile(filePath, 'utf8')

  const { data, content } = matter(raw)
  const frontmatter = data as Frontmatter

  const file = await processor.process(content)
  const html = String(file)

  return {
    slug,
    title: frontmatter.title ?? slug,
    description: frontmatter.description ?? null,
    html,
    frontmatter,
  }
})

export async function getAllSlugs(): Promise<string[]> {
  const { readdir } = await import('fs/promises')
  const entries = await readdir(DOCS_ROOT)
  return entries
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.slice(0, -3))
    .sort()
}

export async function getAllPages(): Promise<DocPage[]> {
  const slugs = await getAllSlugs()
  return Promise.all(slugs.map(getDocPage))
}
