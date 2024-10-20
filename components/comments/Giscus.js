import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'

import siteMetadata from '@/config/siteMetadata'

const Giscus = ({ mapping }) => {
  const { theme, resolvedTheme } = useTheme()
  const COMMENTS_ID = 'comments-container'

  const searchEncoded = encodeURIComponent(mapping)
  const discussionUrl = `https://github.com/${siteMetadata.comment.giscusConfig.repo}/discussions/categories/post-comments?discussions_q=${searchEncoded}`

  useEffect(() => {
    const commentsTheme =
      siteMetadata.comment.giscusConfig.themeURL === ''
        ? theme === 'dark' || resolvedTheme === 'dark'
          ? siteMetadata.comment.giscusConfig.darkTheme
          : siteMetadata.comment.giscusConfig.theme
        : siteMetadata.comment.giscusConfig.themeURL

    // setEnabledLoadComments(false)
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', siteMetadata.comment.giscusConfig.repo)
    script.setAttribute('data-repo-id', siteMetadata.comment.giscusConfig.repositoryId)
    script.setAttribute('data-category', siteMetadata.comment.giscusConfig.category)
    script.setAttribute('data-category-id', siteMetadata.comment.giscusConfig.categoryId)
    script.setAttribute('data-mapping', 'og:title')
    script.setAttribute('data-reactions-enabled', siteMetadata.comment.giscusConfig.reactions)
    script.setAttribute('data-emit-metadata', siteMetadata.comment.giscusConfig.metadata)
    script.setAttribute('data-theme', commentsTheme)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [theme, resolvedTheme])

  return (
    <div className='pt-3 prose pb-6 max-w-none'>
      <div className='pb-3'>
        <h2>Comments</h2>
        <p>Do you want to share feedback, or discuss further ideas? Feel free to leave a comment here! This comment thread maps to a <a href={discussionUrl}>discussion on GitHub</a>, so you can also comment there directly if you prefer.</p>
      </div>
      <div className='giscus' id={COMMENTS_ID} />
    </div>
  )
}

export default Giscus
