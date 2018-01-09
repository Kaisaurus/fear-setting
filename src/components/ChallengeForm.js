import React, { Component } from 'react'
import { Header, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setChallenge } from '../actions/challengeActions'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { getTranslate } from 'react-localize-redux'

const ChallengeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const InputWrapper = styled.div`
  flex: 1 0 auto;
`
const ChallengeInput = styled.input`
  border-top: 0 none;
  border-right: 0 none;
  border-left: 0 none;
  border-bottom: 1px solid #000;
`
const example =
  'Example: Try to make a app that helps you put down your fears and take a next step in your life.'

class ChallengeForm extends Component {
  state = {
    challenge: ''
  }
  _handleSubmit = e => {
    e.preventDefault()
    this.props.setChallenge(this.state.challenge)
    this.props.history.push('/define')
  }
  _handleChange = e => {
    this.setState({ challenge: e.target.value })
  }
  componentDidMount() {
    this.challengeInput.focus()
  }
  render() {
    const { challenge } = this.state
    const { translate } = this.props
    return (
      <Form onSubmit={this._handleSubmit}>
        <ChallengeWrapper>
          <Header as="h1" />
          <InputWrapper>
            <input
              ref={input => (this.challengeInput = input)}
              placeholder={example}
              value={challenge}
              onChange={this._handleChange}
            />
          </InputWrapper>
        </ChallengeWrapper>
        <Button onClick={this._handleSubmit}>{translate('button.next')}</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
})

export default withRouter(
  connect(mapStateToProps, { setChallenge })(ChallengeForm)
)
