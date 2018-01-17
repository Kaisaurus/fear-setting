import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'

export default function BackBtn({ onClick, text }) {
  return (
    <Button onClick={onClick} type="button">
      <Icon name="arrow left" />
      {text}
    </Button>
  )
}

BackBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}
