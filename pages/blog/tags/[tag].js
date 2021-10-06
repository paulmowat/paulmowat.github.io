import PageWrapper from '@/components/PageWrapper'
import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/config/siteMetadata'
import PostsTagsList from '@/layouts/PostsTagsList'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths () {
  const tags = await getAllTags(['blog'])

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const blogPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = blogPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss
  const rss = generateRss(filteredPosts, `blog/tags/${params.tag}/rss.xml`)
  const rssPath = path.join(root, 'public', 'blog', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'rss.xml'), rss)

  return { props: { posts: filteredPosts, tag: params.tag } }
}

export default function Tag ({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <PageWrapper>
        <TagSEO
          title={`${tag} - ${siteMetadata.title}`}
          description={`${tag} tags - ${siteMetadata.title}`}
        />
        <PostsTagsList posts={posts} title={title} />
      </PageWrapper>
    </>
  )
}
