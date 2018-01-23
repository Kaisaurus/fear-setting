import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'

export default function ClearBtn({ onClick, translate }) {
  return (
    <Button onClick={onClick} type="button" color="red">
      <Icon name="bomb" />
      {translate('button.clear')}
    </Button>
  )
}

ClearBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
}
