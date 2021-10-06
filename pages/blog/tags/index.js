import PageWrapper from '@/components/PageWrapper'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/config/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps () {
  const tags = await getAllTags(['blog'])

  return { props: { tags } }
}

export default function Tags ({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageWrapper>
        <PageSEO
          title={`Blog Tags - ${siteMetadata.author}`}
          description='Things I blog about'
        />
        <div className='divide-y'>
          <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              Blog Tags
            </h1>
          </div>
          <div className='flex flex-col items-start justify-start divide-y divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6'>
            <div className='flex flex-wrap max-w-lg pt-6'>
              {Object.keys(tags).length === 0 && 'No tags found.'}
              {sortedTags.map((t) => {
                return (
                  <div key={t} className='mt-2 mb-2 mr-5'>
                    <Tag text={t} />
                    <Link
                      href={`/blog/tags/${kebabCase(t)}`}
                      className='-ml-2 text-sm font-semibold uppercase'
                    >
                      {` (${tags[t]})`}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}
