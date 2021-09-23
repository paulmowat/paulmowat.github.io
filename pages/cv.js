import PageWrapper from '@/components/PageWrapper'
import { PageSeo } from '@/components/SEO'

import siteMetadata from '@/config/siteMetadata'
import experience from '@/config/experience'

import SvgIcon from '@/components/svgs'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const buildTimeLineElements = (data) => {
  return data.map(function (item, i) {
    const technologies = item.technologies || []
    const details = item.details || []

    const tech = technologies.map((technology, i) => {
      return (
        <span key={i} className='pill'>
          {technology}
        </span>
      )
    })

    const det = details.map((detail, i) => {
      return (
        <li key={i}>{detail}</li>
      )
    })

    return (
      <VerticalTimelineElement
        date={item.years}
        iconClassName='bg-blue-600'
        icon={<SvgIcon kind={item.icon} containerClassName='mtp-50' />}
        key={i}
      >
        <h3 className='mt-0 text-gray-900'>
          {item.title}
        </h3>
        <h4 className='text-gray-700'>
          {item.company}
        </h4>

        <ul className='text-gray-700'>
          {det}
        </ul>

        <div>{tech}</div>
      </VerticalTimelineElement>
    )
  })
}

export default function CV () {
  if (experience) {
    const work = buildTimeLineElements(experience.work)
    const education = buildTimeLineElements(experience.education)

    return (
      <>
        <PageWrapper>
          <PageSeo
            title={`CV - ${siteMetadata.author}`}
            description={`CV - ${siteMetadata.author}`}
            url={`${siteMetadata.siteUrl}/cv`}
          />
          <main id='cv' className='divide-y'>
            <h1 className='pageTitle'>
              CV
            </h1>
            <section className='main'>
              <VerticalTimeline className='vertical-timeline-custom-line'>
                {work}
                {education}
              </VerticalTimeline>
            </section>
          </main>
        </PageWrapper>
      </>
    )
  }
}
