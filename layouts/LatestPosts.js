import Link from '@/components/Link'
import Tag from '@/components/Tag'

import siteMetadata from '@/config/siteMetadata'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function LatestPosts ({ posts }) {
  return (
    <>
      <div>
        <div className='pt-5 text-lg font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-5 md:text-lg md:leading-5'>
          Latest Posts
        </div>
        <div className='items-start space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:space-y-0'>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, title, summary, tags, date } = frontMatter
            return (
              <div key={slug} className='flex flex-col items-center pt-8 space-x-2'>
                <article>
                  <div className='space-y-2 :space-y-0 xl:items-baseline'>
                    <div className='space-y-5'>
                      <div className='space-y-6'>
                        <div>
                          <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                            <Link
                              href={`/blog/${slug}`}
                              className='text-gray-900 dark:text-gray-100'
                            >
                              {title}
                            </Link>
                          </h2>
                          <div>
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <div>
                            <dl>
                              <dt className='sr-only'>Published on</dt>
                              <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                                <time dateTime={date}>
                                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                                </time>
                              </dd>
                            </dl>
                          </div>
                        </div>
                        <div className='prose text-gray-500 dark:text-gray-400'>
                          {summary}
                        </div>
                      </div>
                      <div className='text-base font-medium leading-6'>
                        <Link
                          href={`/blog/${slug}`}
                          className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
