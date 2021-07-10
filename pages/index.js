import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/config/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-wrap pt-5 md:pt-40 ">
          <div className="pb-5 space-y-2 md:space-y-5 flex-auto w-4/5">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-6xl md:text-6xl">
              Hey, I'm Paul
            </h1>
            <p className="pt-5 text-3xl leading-relaxed text-gray-500 dark:text-gray-400 sm:text-4xl sm:leading-relaxed  md:text-4xl md:leading-relaxed ">
              I'm a developer based in North East Scotland who currently works for{' '}
              <a href="https://www.oneadvanced.com">Advanced</a> as a Principal DevOps Architect.
            </p>
          </div>
          <div className="pt-3 pb-5 space-y-2 md:space-y-5 flex-auto sm:pt-12">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
          </div>
        </div>
        {/* <div>
          <div className="pt-5 text-lg font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-5 md:text-lg md:leading-5">
            Latest Posts
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>
                            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )} */}
      </div>
    </>
  )
}
