import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import PageWrapper from '@/components/PageWrapper'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/config/siteMetadata'
import Comments from '@/components/comments'

import ShareButton from '@/components/ShareButton'
import ViewCounter from 'components/ViewCounter'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function Post ({ children, frontMatter, next, prev }) {
  const { slug, date, title, tags } = frontMatter

  const pageUrl = `${siteMetadata.siteUrl}/blog/${slug}`
  return (
    <PageWrapper>
      <BlogSEO {...frontMatter} url={pageUrl} title={title} />
      <article>
        <div className='divide-y'>
          <div
            className='divide-y xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className='divide-y xl:pb-0'>
              <header className='pt-6 pb-6'>
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
                      <div className='text-center '>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='text-xs tracking-wide '>
                      <div className='text-center'>
                        <p>{frontMatter.readingTime.text.replace('min', 'minute')}{' • '}<ViewCounter slug={frontMatter.slug} /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className='pt-6 pb-6 prose max-w-none'>{children}</div>
              <div className='pb-6 prose max-w-none'>
                <div className='flex flex-col items-center justify-center pt-6 space-x-4 space-y-4 xl:space-y-0 xl:flex-row xl:items-baseline'>
                  <p className='m-0'>Useful post? Please share it with your friends.</p>
                  <ShareButton kind='twitter' label='Share on Twitter' title={title} href={pageUrl} />
                  <ShareButton kind='facebook' label='Share on Facebook' title={title} href={pageUrl} />
                  <ShareButton kind='linkedin' label='Share on LinkedIn' title={title} href={pageUrl} />
                </div>
                {/* <div className='flex justify-center'>
                  <p>Get the latest posts. Sign up to the <a href='/newsletter'>newsletter</a>.</p>
                </div> */}

              </div>
              <div className='pt-6'>
                <Comments frontMatter={frontMatter} />
              </div>
              <footer className='pt-6'>
                <div className='divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700'>
                  {(next || prev) && (
                    <div className='flex justify-between py-2'>
                      {prev && (
                        <div>
                          <h2 className='text-xs tracking-wide uppercase'>
                            Previous Post
                          </h2>
                          <div className='text-blue-500 hover:text-blue-400'>
                            <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                          </div>
                        </div>
                      )}
                      {next && (
                        <div>
                          <h2 className='text-xs tracking-wide uppercase'>
                            Next Post
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
        </div>
      </article>
    </PageWrapper>
  )
}
