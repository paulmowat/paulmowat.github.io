import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/config/siteMetadata'
import { useState } from 'react'
import * as ga from '@/lib/ga'
import debounce from '@/lib/utils/debounce'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function BlogList ({ root, posts, title }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const search = (value) => {
    ga.event({
      action: 'search',
      params: {
        event_category: 'blog',
        search_term: value
      }
    })
    setSearchValue(value)
  }

  return (
    <>
      <div id='blog-list' className='divide-y'>
        <div className='pb-8'>
          <h1 className='pageTitle'>
            {title}
          </h1>
          <section className='flex pt-5'>
            <div className='pt-2 pr-2'>
              Browse <Link href='/blog/tags' className='text-blue-500 hover:text-blue-400 hover:underline'>tags</Link> or
            </div>
            <div className='w-3/5 relative'>
              <input
                aria-label='Search all posts'
                type='text'
                onChange={debounce((e) => search(e.target.value), 500)}
                placeholder='Search all posts'
                className='w-full px-4 bg-white text-gray-700 border rounded-md border-gray-900 focus:ring-blue-500 focus:border-blue-500'
              />
              <svg
                className='absolute w-5 h-5 right-3 top-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </section>
        </div>
        <section className='main'>
          <ul>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className='py-4'>
                  <article className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
                    <dl>
                      <dt className='sr-only'>Published on</dt>
                      <dd className='text-base font-medium leading-6'>
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl>
                    <div className='space-y-3 xl:col-span-3'>
                      <div>
                        <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                          <Link
                            href={`/${root}/${slug}`}
                          >
                            {title}
                          </Link>
                        </h3>
                        <div className='flex flex-wrap'>
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className='prose max-w-none '>
                        {summary}
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </>
  )
}
