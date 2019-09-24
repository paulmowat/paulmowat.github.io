import React from 'react'
import { MainInner } from '../../components/layout'

class About extends React.Component {
  render () {
    return (
      <MainInner id='about' title='About' fluid>
        <div className='row'>
          <div className='col-md-3'>
            <img className='profile-pic' src='/static/images/profilepic.jpg' alt='Paul Mowat Picture' />
          </div>
          <div className='col-md-8'>
            <p>Based in Boddam/Aberdeen, Scotland, I currently work for <a href='http://www.oneadvanced.com'>Advanced</a> as a Software Architect.</p>
            <p>I'm a hardworking, organized and motivated software developer with 10+ years experience designing and supporting large scale enterprise applications on a variety of platforms and technologies including AWS, Node.js, React, Progress OpenEdge, C#, SQL Server and Java.</p>
            <p>I have strong problem solving skills and am an advocate of best practices and coding standards. I believe if your going to do something, then do it to the best of your abilities.</p>
            <p>I enjoy working within a team and have experience leading teams of developers using traditional and agile methodologies to meet tight deadlines.</p>
            <p>During my spare time, I also seek to continually improve my skills and knowledge and as such I enjoy learning about new emerging technologies. I'm always playing around with emerging technologies and frameworks.</p>
            <p>My other interests include photography, watching movies, football and spending time with my wife and son.</p>
          </div>
        </div>
      </MainInner>
    )
  }
}

export { About }
