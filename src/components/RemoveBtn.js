import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const BorderlessBtn = styled(Button)`
  border: 0 none;
`

const RemoveBtn = props => {
  return <Button icon="trash" onClick={props.onClick || undefined} basic />
}

RemoveBtn.propTypes = {
  onClick: PropTypes.func
}

export default RemoveBtn
