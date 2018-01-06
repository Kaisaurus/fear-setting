import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Subtitle = props => {
  return (
    <Header as="h4" textAlign="center">
      {props.children}
    </Header>
  )
}

Subtitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default Subtitle
