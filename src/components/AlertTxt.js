import React from 'react'
import styled from 'styled-components'

const AlertP = styled.p`
  color: ${props => props.theme.alert_text_color};
`

export default props => {
  return <AlertP>{props.children}</AlertP>
}
