import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

export function MainInner (props) {
  return (
    <ScrollableAnchor id={props.id}>
      <section id={props.id} className={`main-inner${props.fluid ? '-fluid' : ''}`}>
        <div className={`container${props.fluid ? '-fluid' : ''} ${props.full ? 'full' : 'center'}`}>
          {props.title &&
            <h2><span>{props.title}</span></h2>
          }
          {props.children}
        </div>
      </section>
    </ScrollableAnchor>
  )
}

MainInner.defaultProps = {
  fluid: false
}

MainInner.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  full: PropTypes.bool
}
