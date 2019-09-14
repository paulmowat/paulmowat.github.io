import React from 'react'
import { MainInner } from '../../components/layout'
import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const items = [
  {
    id: 1,
    src: () => {
      return (
        <blockquote>
          <p>I worked with Paul for a number of years at Advanced where Paul worked as Principle Developer and Architect on our Payroll and Cash Flow Forecasting products.
            Paul is a natural communicator and problem solver, with a friendly, can do attitude. He has a great ability to learn new technologies whilst applying rigour through good development
            and architectural principles. A natural technical communicator that translates to an easy and friendly communication and leadership style.
            No challenge was too big and always executed with a smile, good humour and technical adeptness.
            An asset to any Engineering team!
          </p>
          <cite>Ben Bishop <span>&bull;</span> Chief Operating Officer @ XCD Limited</cite>
        </blockquote>
      )
    }
  }, {
    id: 2,
    src: () => {
      return (
        <blockquote>
          <p>I worked closely with Paul at Advanced Computer Software for over 7 years - I headed up the payroll product function and he was a key member of the payroll development team.
            Paul has very strong technical skills with a genuine aptitude to think out of the box. He grasps complex issues quickly offering suggested solutions in a timely manner.
            He is engaging, a fantastic mentor and always willing to give time to support his peers.
            Paul has since taken up the role of Technical Architect at Advanced, a role entirely suited to him providing access to new technologies and processes,
            and allowing influence over product direction.
          </p>
          <cite>Graeme Walker <span>&bull;</span> Payroll Product Manager @ XCD Limited</cite>
        </blockquote>
      )
    }
  },
  {
    id: 3,
    src: () => {
      return (
        <blockquote>
          <p>Not only is Paul a very amiable fellow , he is quite simply one of the most talented developers I've had the pleasure of working with in my IT career.
            We worked together as developers in Aberdeen at Advanced. The majority of jobs at that time dealt mainly working with Progress/OpenEdge technologies on
            many in-house systems. Paul has that "can-do" attitude you'd wish in a developer, and an ability to rapidly learn IT technologies that are thrown at him.
            He excels in learning new systems. Coupled together with his understanding for business requirements and a belief in getting things done properly,
            I can't recommend Paul highly enough.
          </p>
          <cite>David Walker <span>&bull;</span> Senior Developer @ Pace IT Systems Ltd</cite>
        </blockquote>
      )
    }
  },
  {
    id: 4,
    src: () => {
      return (
        <blockquote>
          <p>Talented Individual’ is the phrase that comes to mind when I think about Paul.
          I had the pleasure of working with Paul for near on three years at Advanced, collaborating on many high profile projects. I was particularly impressed by Paul's ability to understand new technology and able to research and find the solution to the problems we faced.
          Oh, and he made sure I got emailed about Friday lunchtime staff choices be it Chinese, Thai, chippy etc even though there was some 450+ miles between our office's. Talk about motivating a team!
          Paul would be an asset to any team.
          </p>
          <cite>John Goodland <span>&bull;</span> Principal Presales Consultant @ Axway</cite>
        </blockquote>
      )
    }
  }, {
    id: 5,
    src: () => {
      return (
        <blockquote>
          <p>Paul is a top class developer who can be relied on to deliver excellent work. He will introduce new development techniques/processes to the team in order to improve the output of the whole department. Is always looking to find new ways to improve his own knowledge.
          </p>
          <cite>Barry Moar <span>&bull;</span> Senior QA Analyst @ Advanced Computer Software</cite>
        </blockquote>
      )
    }
  }, {
    id: 6,
    src: () => {
      return (
        <blockquote>
          <p>Paul is a highly organized, goal oriented, independent and hardworking perfectionist always ready to put
            all his energy and stamina to get the job done. He has many years of experience in software development
            and he is always passionate about his field.
          </p>
          <cite>Rajesh Kumar Plamthottathil <span>&bull;</span> Senior Developer @  Advanced Computer Software</cite>
        </blockquote>
      )
    }
  }, {
    id: 7,
    src: () => {
      return (
        <blockquote>
          <p>Paul is a very knowledgeable and experienced developer. When I worked with him I always found him to grasp
          new ideas quickly and the standard of his work was always very high. He was also very easy to work with
          and popular in the office.
          </p>
          <cite>Michael Charles <span>&bull;</span> Director and Co-founder @ Escone Solutions Ltd</cite>
        </blockquote>
      )
    }
  }, {
    id: 8,
    src: () => {
      return (
        <blockquote>
          <p>Paul is committed to his work and sets very high personal standards. He has a great sense of personal responsibility
            and always takes ownership of problems within his area. Rather than letting a situation escalate, he
            acts immediately to get a handle on the problem and resolve it. He does a great job of spotting the underlying
            elements of problems. He would be an asset to any company.
          </p>
          <cite>Saroj Kumar Maharana <span>&bull;</span> Senior Development Programmer @ Advanced India</cite>
        </blockquote>
      )
    }
  }, {
    id: 9,
    src: () => {
      return (
        <blockquote>
          <p>During Paul's time as the Software Engineer at Achilles Information in Aberdeen, he showed his excellent
            abilities in learning new technologies, applying his skills in thinking and problem solving to provide
            a top level of service to the company. This included delivering to multiple projects on different platforms
            and technologies at the same time to tight time-scales. I have thoroughly enjoyed working with Paul and
            would welcome the opportunity to work with him again in the future, I have no hesitation in recommending
            Paul as a first class Software Engineer who I'm sure will quickly move onwards and upwards in his chosen
            profession.
          </p>
          <cite>Steve Gunn <span>&bull;</span> IT Projects Manager @ Atlas Knowledge</cite>
        </blockquote>
      )
    }
  }
]

class Recommendations extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.handleGoToIndex = this.handleGoToIndex.bind(this)
    this.handleOnExiting = this.handleOnExiting.bind(this)
    this.handleOnExited = this.handleOnExited.bind(this)
  }

  handleOnExiting () {
    this.animating = true
  }

  handleOnExited () {
    this.animating = false
  }

  next () {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous () {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  handleGoToIndex (newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render () {
    const { activeIndex } = this.state

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.handleOnExiting}
          onExited={this.handleOnExited}
          key={item.id}
        >
          {item.src()}
        </CarouselItem>
      )
    })

    return (
      <MainInner id='recommendations' title='Recommendations' fluid>
        <div className='row'>
          <div className='col-md-2'>
            <FontAwesomeIcon icon={faQuoteLeft} className='recommendation-icon' />
          </div>
          <div className='col-md-10'>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {slides}
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.handleGoToIndex} />
            </Carousel>
          </div>
        </div>
      </MainInner>
    )
  }
}

export { Recommendations }
