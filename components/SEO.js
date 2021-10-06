import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/config/siteMetadata'

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={description} />
      <meta property='og:url' content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content={siteMetadata.title} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      {ogImage.constructor.name === 'Array'
        ? (ogImage.map(({ url }) => <meta property='og:image' content={url} key={url} />))
        : (<meta property='og:image' content={ogImage} key={ogImage} />)}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={siteMetadata.twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={twImage} />
    </Head>
  )
}

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType='website'
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}

export const TagSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType='website'
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel='alternate'
          type='application/rss+xml'
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/rss.xml`}
        />
      </Head>
    </>
  )
}

export const BlogSEO = ({ title, summary, date, lastmod, images = [], canonicalUrl }) => {
  const router = useRouter()
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()
  const imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
        ? [images]
        : images

  const featuredImages = imagesArr.map((img) => {
    return {
      url: `${siteMetadata.siteUrl}${img}`,
      alt: title
    }
  })

  const postPath = `${siteMetadata.siteUrl}${router.asPath}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='robots' content='follow, index' />
        <meta name='description' content={summary} />
        <meta property='og:url' content={postPath} />
        <meta property='og:type' content='article' />
        <meta property='og:site_name' content={siteMetadata.title} />
        <meta property='og:description' content={summary} />
        <meta property='og:title' content={title} />
        {featuredImages.map((img) => (
          <meta property='og:image' content={img.url} key={img.url} />
        ))}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={siteMetadata.twitter} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={summary} />
        <meta name='twitter:image' content={featuredImages[0].url} />
        {date && <meta property='article:published_time' content={publishedAt} />}
        {lastmod && <meta property='article:modified_time' content={modifiedAt} />}
        <link rel='canonical' href={canonicalUrl || postPath} />
      </Head>
    </>
  )
}
