import React, { Component } from 'react'
import { Header, Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AlertTxt from '../AlertTxt'

const ChallengeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const InputWrapper = styled.div`
  flex: 1 0 auto;
`
// const DefineInput = styled.input`
//   border-top: 0 none;
//   border-right: 0 none;
//   border-left: 0 none;
//   border-bottom: 1px solid #000;
// `

class DefineForm extends Component {
  static propTypes = {
    challenge: PropTypes.string.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    challenge: this.props.challenge,
    showAlert: false
  }
  componentDidMount() {
    this.defineInput.focus()
  }
  handleNext = () => {
    const { challenge } = this.state
    this.props.handleUpdate(challenge)
    this.props.handleNext()
  }
  handleChange = event => {
    const challenge = event.target.value
    this.setState({ challenge })
    this.props.handleUpdate(challenge)
  }
  render() {
    const { challenge, showAlert } = this.state
    const { translate } = this.props
    return (
      <Form onSubmit={this.handleNext}>
        <ChallengeWrapper>
          <Header as="h1">{translate('define.what_if')}</Header>
          <InputWrapper>
            <input
              ref={input => (this.defineInput = input)}
              placeholder={translate('example.define')}
              value={challenge}
              onChange={this.handleChange}
            />
          </InputWrapper>
        </ChallengeWrapper>
        {showAlert && <AlertTxt>{translate('define.alert')}</AlertTxt>}
        <Button onClick={this._handleSubmit}>{translate('button.next')}</Button>
      </Form>
    )
  }
}

export default DefineForm
