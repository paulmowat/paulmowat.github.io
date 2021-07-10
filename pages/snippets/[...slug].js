import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import SnippetLayout from '@/layouts/SnippetLayout'
import generateRss from '@/lib/generate-rss'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

export async function getStaticPaths() {
  const posts = getFiles('snippets')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('snippets')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('snippets', params.slug.join('/'))

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/index.xml', rss)

  return { props: { post, prev, next } }
}

export default function Snippets({ post, prev, next }) {
  const { mdxSource, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <SnippetLayout frontMatter={frontMatter} prev={prev} next={next}>
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </SnippetLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
