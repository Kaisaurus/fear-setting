import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const FixedContainer = styled.div`
  flex: 1 0 auto;
  z-index: 101;
  width: 100%;
  text-align: center;
  padding: 1em 0;
  /* background-color: ${props => props.theme.bg_color}; */
  border-bottom: solid 1px ${props => props.theme.border_color};
`

class ChallengeTitle extends Component {
  static propTypes = {
    challenge: PropTypes.string
  }

  render() {
    const { challenge } = this.props
    return (
      <FixedContainer>
        <Container text>
          <Header as="h1">What if I {challenge || '...'}</Header>
        </Container>
      </FixedContainer>
    )
  }
}

const mapStateToProps = ({ challenge }) => ({
  challenge: challenge.challenge
})

export default connect(mapStateToProps)(ChallengeTitle)
