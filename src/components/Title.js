import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

const TitleHeader = styled(Header)`
  &&& {
    /* margin-top: 1em; */
  }
`

const Title = props => {
  return (
    <TitleHeader as="h1" textAlign="center">
      {props.children}
    </TitleHeader>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
