import React from 'react'
import { MainInner } from '../../components/layout'

class Skills extends React.Component {
  render () {
    return (
      <MainInner id='skills' fluid>
        <div className='row'>
          <div className='col-md-3'>
            <h2><span>Skills</span></h2>
          </div>
          <div className='col-md-9'>
            <h3>Application Development</h3>
            <div className='bars'>
              <div className='skillbar clearfix ' data-percent='95%'>
                <div className='skillbar-title'><span>Progress/OpenEdge 4GL</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>95%</div>
              </div>
              <div className='skillbar clearfix ' data-percent='80%'>
                <div className='skillbar-title'><span>C#/.Net & SQL Server</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>80%</div>
              </div>
              <div className='skillbar clearfix ' data-percent='75%'>
                <div className='skillbar-title'><span>Java</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>75%</div>
              </div>
            </div>
            <h3><span>Web Development</span></h3>
            <div className='bars'>
              <div className='skillbar clearfix ' data-percent='90%'>
                <div className='skillbar-title'><span>HTML5</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>90%</div>
              </div>
              <div className='skillbar clearfix ' data-percent='85%'>
                <div className='skillbar-title'><span>CSS</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>85%</div>
              </div>
              <div className='skillbar clearfix ' data-percent='75%'>
                <div className='skillbar-title'><span>Javascript</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>75%</div>
              </div>
              <div className='skillbar clearfix ' data-percent='80%'>
                <div className='skillbar-title'><span>PHP</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>80%</div>
              </div>
            </div>
            <h3><span>Other</span></h3>
            <div className='bars'>
              <div className='skillbar clearfix ' data-percent='85%'>
                <div className='skillbar-title'><span>Subversion/Git</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>85%</div>
              </div>
              <div className='skillbar clearfix ' data-percent='60%'>
                <div className='skillbar-title'><span>Installshield</span></div>
                <div className='skillbar-bar' />
                <div className='skill-bar-percent'>60%</div>
              </div>
            </div>
          </div>
        </div>
      </MainInner>
    )
  }
}

export { Skills }
