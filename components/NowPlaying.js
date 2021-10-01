import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

import SvgIcon from '@/components/svgs'

export default function NowPlaying () {
  const { data } = useSWR('/api/now-playing', fetcher)

  return (
    <div className='flex flex-row-reverse sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full'>
      <SvgIcon kind='spotify' height='5' width='5' />
      <div className='inline-flex flex-col sm:flex-row w-full max-w-full truncate'>
        {data?.songUrl
          ? (
            <a
              className='font-medium  max-w-max truncate'
              href={data.songUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.title}
            </a>
            )
          : (
            <p className='font-medium'>
              Not Playing
            </p>
            )}
        <span className='mx-2 hidden sm:block'>
          {' – '}
        </span>
        <p className='max-w-max truncate'>
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  )
}
