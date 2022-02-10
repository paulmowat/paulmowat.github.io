import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'

import siteMetadata from '@/config/siteMetadata'

const Giscus = ({ mapping }) => {
  const { theme, resolvedTheme } = useTheme()
  const COMMENTS_ID = 'comments-container'

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
    <div className='pt-6 pb-6 text-center'>
      <div>
        <h3>Comments</h3>
        <p>Do you have a problem, want to share feedback, or discuss further ideas? Feel free to leave a comment here! This comment thread directly maps to a discussion on GitHub, so you can also comment there if you prefer.</p>
      </div>
      <div className='giscus' id={COMMENTS_ID} />
      <div>
        <p class='comment-directly-on-github'>
          Instead of authenticating the <a href='https://giscus.app'>giscus</a> application, you can also comment directly <a href='{{ discussion_url | safe }}'><em>on GitHub</em></a>.
        </p>
      </div>
    </div>
  )
}

export default Giscus
