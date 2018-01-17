import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'

export default function NextBtn({ onClick, text }) {
  return (
    <Button onClick={onClick} type="button">
      {text}
      <Icon name="arrow right" />
    </Button>
  )
}

NextBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}
