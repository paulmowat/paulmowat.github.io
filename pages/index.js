import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/config/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
// import SvgIcon from '@/components/svgs'

const MAX_DISPLAY = 5
// const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps () {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home ({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='flex flex-wrap pt-5'>
          <div className='pb-5 space-y-2 md:space-y-5 flex-auto w-4/5'>
            <h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-6xl md:text-6xl'>
              Hey, I'm Paul
            </h1>
            <p className='pt-5 text-3xl leading-relaxed text-gray-500 dark:text-gray-400 sm:text-4xl sm:leading-relaxed  md:text-4xl md:leading-relaxed '>
              I'm a software architect based in North East Scotland who currently works for{' '}
              <a href='https://www.oneadvanced.com' className='underline'>Advanced</a> as a Principal DevOps Architect.
            </p>
            {/* <div className='flex space-x-3'>
              <SvgIcon kind='github' href={siteMetadata.github} />
              <SvgIcon kind='facebook' href={siteMetadata.facebook} />
              <SvgIcon kind='linkedin' href={siteMetadata.linkedin} />
              <SvgIcon kind='twitter' href={siteMetadata.twitter} />
            </div> */}
          </div>
          <div className='pt-3 pb-5 space-y-2 md:space-y-5 flex-auto sm:pt-12'>
            <img src={siteMetadata.image} alt='avatar' className='w-48 h-48 rounded-full' />
          </div>
        </div>
        <div>
          <div className='pt-5 text-lg font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-5 md:text-lg md:leading-5'>
            Latest Posts
          </div>
          <div className='items-start space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:space-y-0'>
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, title, summary, tags } = frontMatter
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
                                {/* <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                                  <time dateTime={date}>
                                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                                  </time>
                                </dd> */}
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
      </div>
    </>
  )
}
