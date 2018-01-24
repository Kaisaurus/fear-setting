import React from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AuthorP = styled.i`
  display: block;
  margin-top: 1em;
`
const QuoteContainer = styled(Container)`
  margin: 2em;
`

const QuoteContent = styled.q`
  font-weight: bold;
  font-size: 1.4rem;
`

const Quote = props => {
  return (
    <QuoteContainer text textAlign="center">
      <QuoteContent>{props.translate(`quote.quote_${props.id}`)}</QuoteContent>
      <AuthorP>- {props.translate(`quote.author_${props.id}`)}</AuthorP>
    </QuoteContainer>
  )
}

Quote.propTypes = {
  translate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default Quote
