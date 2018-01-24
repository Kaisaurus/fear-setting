import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const StyledBtn = styled(Button)`
  && {
    padding: 0.7em 0.9em;
    margin: 0.25em;
  }
`
export default function FormBottomBtn({ children, onClick }) {
  return (
    <StyledBtn type="button" onClick={onClick}>
      {children}
    </StyledBtn>
  )
}

FormBottomBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
