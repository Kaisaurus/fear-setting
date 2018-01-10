import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const BorderlessBtn = styled(Button)`
  && {
    border: none;
    background: transparent;
  }
`

const RemoveBtn = props => {
  return (
    <BorderlessBtn
      type="button"
      icon="remove"
      aria-label={props.label}
      onClick={props.onClick}
    />
  )
}

RemoveBtn.propTypes = {
  onClick: PropTypes.func
}

export default RemoveBtn
