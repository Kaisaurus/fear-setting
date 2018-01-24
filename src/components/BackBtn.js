import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import FormBottomBtn from './FormBottomBtn'

export default function BackBtn({ onClick, translate }) {
  return (
    <FormBottomBtn onClick={onClick}>
      <Icon name="arrow left" />
      {translate('button.back')}
    </FormBottomBtn>
  )
}

BackBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
}
