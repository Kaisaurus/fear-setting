import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

const PageContainer = styled(Container)`
  margin: 4em;import PageWrapper from '../components/PageWrapper'

`

const PageWrapper = props => {
  return (
    <PageContainer text textAlign="center">
      {props.children}
    </PageContainer>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageWrapper
