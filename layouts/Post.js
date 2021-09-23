import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import PageWrapper from '@/components/PageWrapper'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/config/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function Post ({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <PageWrapper>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div className='xl:divide-y xl:divide-gray-700'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 '>
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className='py-2 xl:py-3'>
                <div className='text-xs tracking-wide '>
                  <div className=' text-center'>
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div
            className='pb-8 divide-y xl:divide-y-0 divide-gray-700'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className='divide-y divide-gray-700 xl:pb-0'>
              <div className='pt-10 pb-8 prose max-w-none'>{children}</div>
              <div className='pt-6 pb-6 text-sm '>
                <Link href={discussUrl(slug)} rel='nofollow'>
                  Discuss on Twitter
                </Link>
                {' • '}
                <Link href={editUrl(fileName)}>View on GitHub</Link>
              </div>
            </div>
            <footer>
              <div className='text-sm font-medium leading-5 xl:divide-y divide-gray-700 xl:col-start-1 xl:row-start-2'>
                {(next || prev) && (
                  <div className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>
                    {prev && (
                      <div>
                        <h2 className='text-xs tracking-wide uppercase'>
                          Previous Article
                        </h2>
                        <div className='text-blue-500 hover:text-blue-400'>
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className='text-xs tracking-wide uppercase'>
                          Next Article
                        </h2>
                        <div className='text-blue-500 hover:text-blue-400'>
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </PageWrapper>
  )
}
