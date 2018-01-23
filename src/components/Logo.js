import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { localize } from 'react-localize-redux'

const LogoTitle = styled(Header)`
  &&& {
    font-size: 3em;
    margin: 0;
  }
`
const LogoSubtitle = styled.p`
  font-size: 0.9em;
  margin: 0;
`
const LogoWrapper = styled.div`
  margin-bottom: 3em;
`
function Logo({ translate }) {
  return (
    <LogoWrapper>
      <a href="/">
        <LogoTitle as="h1">{translate('logo.fear-setting')}</LogoTitle>
      </a>
      <LogoSubtitle>
        {translate('logo.inspired_by')}{' '}
        <a href="https://youtu.be/5J6jAC6XxAI">{translate('logo.tims_talk')}</a>
      </LogoSubtitle>
    </LogoWrapper>
  )
}
Logo.propTypes = {
  translate: PropTypes.func.isRequired
}
export default localize(Logo, 'locale')
