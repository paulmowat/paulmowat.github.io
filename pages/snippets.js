import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/config/siteMetadata'
import SnippetsListLayout from '@/layouts/SnippetsListLayout'
import { PageSeo } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('snippets')

  return { props: { posts } }
}

export default function Snippets({ posts }) {
  return (
    <>
      <PageSeo
        title={`Snippets - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/snippets`}
      />
      <SnippetsListLayout root="snippets" posts={posts} title="All Snippets" />
    </>
  )
}
