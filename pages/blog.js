import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/config/siteMetadata'
import BlogListLayout from '@/layouts/BlogListLayout'
import { PageSeo } from '@/components/SEO'

export async function getStaticProps () {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Blog ({ posts }) {
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <BlogListLayout root='blog' posts={posts} title='Blog' />
    </>
  )
}
