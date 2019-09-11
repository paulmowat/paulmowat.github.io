import React from 'react'
import PropTypes from 'prop-types'

class MainContainer extends React.Component {
  render () {
    return (
      <div className='main-container' role='main'>
        {this.props.children}
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export { MainContainer }
