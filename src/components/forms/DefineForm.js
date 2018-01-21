import React, { Component } from 'react'
import { Header, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AlertTxt from '../AlertTxt'
import NextBtn from '../NextBtn'
import Title from '../Title'

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
  static displayName = 'DefineForm'
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
  componentWillReceiveProps(nextProps) {
    this.setState({ challenge: nextProps.challenge })
  }
  handleNext = () => {
    this.state.challenge === ''
      ? this.setState({ showAlert: true })
      : this.props.handleNext()
  }
  handleChange = event => {
    const challenge = event.target.value
    challenge !== '' && this.setState({ showAlert: false })
    this.props.handleUpdate(challenge)
  }
  handleKeyPress = e => e.key === 'Enter' && this.handleNext()
  render() {
    const { challenge, showAlert } = this.state
    const { translate } = this.props
    return (
      <Form onSubmit={this.handleNext}>
        <ChallengeWrapper>
          <Title>{translate('define.what_if')}</Title>
          <InputWrapper>
            <input
              ref={input => (this.defineInput = input)}
              placeholder={translate('example.define')}
              value={challenge}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
            {/* <textarea
              rows="2"
              ref={input => (this.defineInput = input)}
              placeholder={translate('example.define')}
              value={challenge}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            /> */}
          </InputWrapper>
        </ChallengeWrapper>
        {showAlert && <AlertTxt>{translate('define.alert')}</AlertTxt>}
        <NextBtn onClick={this.handleNext} text={translate('button.next')} />
      </Form>
    )
  }
}

export default DefineForm
