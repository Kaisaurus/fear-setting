import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'

export default function NextBtn({ onClick, translate }) {
  return (
    <Button onClick={onClick} type="button">
      {translate('button.next')}
      <Icon name="arrow right" />
    </Button>
  )
}

NextBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
}
