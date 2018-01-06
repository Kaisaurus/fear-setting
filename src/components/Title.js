import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Title = props => {
  return (
    <Header as="h1" textAlign="center">
      {props.children}
    </Header>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
