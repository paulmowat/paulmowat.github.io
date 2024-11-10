import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/blog/tags/${kebabCase(text)}`}
      className='mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-400 hover:underline'
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
