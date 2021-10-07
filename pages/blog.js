import PageWrapper from '@/components/PageWrapper'
import { PageSEO } from '@/components/SEO'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/config/siteMetadata'
import BlogList from '@/layouts/BlogList'

export async function getStaticProps () {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Blog ({ posts }) {
  return (
    <>
      <PageWrapper>
        <PageSEO
          title={`Blog - ${siteMetadata.author}`}
          description="View Paul Mowat's blog posts. Topics include Software, DevOps, Javascript, Node.js and AWS."
        />
        <BlogList root='blog' posts={posts} title='Blog' />
      </PageWrapper>
    </>
  )
}
