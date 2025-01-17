import MDXComponents from '@/components/MDXComponents'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import readingTime from 'reading-time'
import { visit } from 'unist-util-visit'
import imgToJsx from './remark-img-to-jsx'
import getAllFilesRecursively from './utils/files'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkCodeTitles from './remark-code-title'

// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrismPlus from 'rehype-prism-plus'

const root = process.cwd()

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic'
}

export function getFiles (type, includeType = false) {
  const prefixPaths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map(
    (file) =>
      (includeType ? `${type}/` : '') + file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  )
}

export function formatSlug (slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc (a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug (type, slug) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`)
  const mdPath = path.join(root, 'data', type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkMath,
        remarkCodeTitles,
        imgToJsx
      ],
      inlineNotes: true,
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypePrismPlus, { ignoreMissing: true }],
        () => {
          return (tree) => {
            visit(tree, 'element', (node, index, parent) => {
              const [token, type] = node.properties.className || []
              if (token === 'token') {
                node.properties.className = [tokenClassNames[type]]
              }
            })
          }
        }
      ]
    }
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...data
    }
  }
}

export async function getAllFilesFrontMatter (type) {
  const prefixPaths = path.join(root, 'data', type)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontMatter = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    const source = fs.readFileSync(file, 'utf8')
    const { data } = matter(source)
    if (data.draft !== true) {
      allFrontMatter.push({ type, ...data, slug: formatSlug(fileName) })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}
