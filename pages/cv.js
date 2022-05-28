import PageWrapper from '@/components/PageWrapper'
import { PageSEO } from '@/components/SEO'

import experience from '@/config/experience'

import SvgIcon from '@/components/svgs'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const buildTimeLineElements = (data) => {
  return data.map(function (item, i) {
    const technologies = item.technologies || []
    const details = item.details || []
    const certifications = item.certifications || []

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

    const certs = certifications.map((cert, i) => {
      return (
        <a key={i} href={cert.url}><img src={cert.img} /></a>
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

        {certs.length > 0 &&
          <div>
            <h4 className='text-gray-700'>
              Certifications
            </h4>
            <div className='text-gray-700'>
              {certs}
            </div>
          </div>}

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
            title='CV'
            description="Find out a full background around Paul Mowat's career and education to date. Including the key courses and job roles."
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
