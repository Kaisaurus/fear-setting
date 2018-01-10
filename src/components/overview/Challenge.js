import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Challenge = ({ challenge, translate }) => {
  const emptyFiller = <Link to="/">{translate('empty_challenge')}</Link>
  return (
    <Header as="h3">
      {translate('define.what_if')} {challenge || emptyFiller}
    </Header>
  )
}

Challenge.propTypes = {
  challenge: PropTypes.string
}

export default Challenge
