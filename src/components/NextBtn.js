import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import FormBottomBtn from './FormBottomBtn'

export default function NextBtn({ onClick, translate }) {
  return (
    <FormBottomBtn onClick={onClick}>
      {translate('button.next')}
      <Icon name="arrow right" />
    </FormBottomBtn>
  )
}

NextBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
}
