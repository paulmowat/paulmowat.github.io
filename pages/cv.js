import PageWrapper from '@/components/PageWrapper'
import { PageSEO } from '@/components/SEO'

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
        dateClassName='opacity-100'
        icon={<SvgIcon kind={item.icon} containerClassName='mtp-50' />}
        key={i}
      >
        <h3 className='mt-0 text-gray-800'>
          {item.title}
        </h3>
        <h4 className='text-gray-700'>
          {item.company}
        </h4>

        <ul className='text-gray-700'>
          {det}
        </ul>

        {tech.length > 0 && <div>{tech}</div>}
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
          <PageSEO
            title={`CV - ${siteMetadata.author}`}
            description='Find out more about my career and education.'
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
