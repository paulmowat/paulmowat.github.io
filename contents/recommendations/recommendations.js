import React from 'react'
import { MainInner } from '../../components/layout'
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const items = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render () {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          {item.src()}
        </CarouselItem>
      );
    });

    return (
      <MainInner id="recommendations" title="Recommendations" fluid>
        <div className="row">
          <div className="col-md-2">
            <FontAwesomeIcon icon={faQuoteLeft} className="recommendation-icon" />
          </div>
          <div className="col-md-10">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            {slides}
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
          </Carousel>
          </div>
        </div>
      </MainInner>
    )
  }
}

export { Recommendations }