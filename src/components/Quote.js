import React from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AuthorP = styled.p`
  margin-top: 1em;
`
const QuoteContainer = styled(Container)`
  margin: 2em;
`

const QuoteContent = styled.q`
  font-weight: bold;
`

const Quote = props => {
  return (
    <QuoteContainer text textAlign="center">
      <QuoteContent>{props.children}</QuoteContent>
      {props.author && <AuthorP>-{props.author}</AuthorP>}
    </QuoteContainer>
  )
}

Quote.propTypes = {
  author: PropTypes.string
}

export default Quote
