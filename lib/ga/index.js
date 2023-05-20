// log the page view with their URL
export const pageView = (url) => {
  window.gtag('config', 'G-7D2VG23DVE', {
    page_location: url
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
