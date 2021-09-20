import PageWrapper from '@/components/PageWrapper'
import { PageSeo } from '@/components/SEO'

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
        <PageSeo
          title={`Blog - ${siteMetadata.author}`}
          description={siteMetadata.description}
          url={`${siteMetadata.siteUrl}/blog`}
        />
        <BlogList root='blog' posts={posts} title='Blog' />
      </PageWrapper>
    </>
  )
}
