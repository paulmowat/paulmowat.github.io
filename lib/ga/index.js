// log the page view with their URL
export const pageView = (url) => {
  window.gtag('config', 'UA-45992131-1', {
    page_path: url
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
