import React from 'react'
import { MainInner } from '../../components/layout'

class About extends React.Component {
  render () {
    return (
      <MainInner id="about" title="About" fluid>
        <div className="row">
          <div className="col-md-3">
            <img className="profile-pic" src="/static/images/profilepic.jpg" alt="Paul Mowat Picture" />
          </div>
          <div className="col-md-8">
            <p>Based in Boddam/Aberdeen, Scotland, I currently work for <a href="http://www.oneadvanced.com">Advanced Computer Software</a> as a Principal Software Developer.</p>
            <p>I'm a hardworking, organized and motivated software developer with 10+ years experience designing and supporting large scale applications on a variety of platforms and technologies including Progress OpenEdge, C#, SQL Server and Java.</p>
            <p>My experience also extends to web development using HTML, CSS, Javascript, PHP and hybrid mobile applications.</p>
            <p>I have strong problem solving skills and am an advocate of best practices and coding standards.</p>
            <p>I enjoy working within a team and have experience leading teams of developers using traditional and agile methodologies to meet tight deadlines.</p>
            <p>During my spare time, I also seek to continually improve my skills and knowledge and as such I enjoy learning about new emerging technologies. I am currently increasing my knowledge of Node.js and Angular 2 as I see this as a key technology of the future.</p>
            <p>My other interests include photography, watching movies and spending time with my wife and son.</p>
          </div>
        </div>
      </MainInner>
    )
  }
}

export { About }