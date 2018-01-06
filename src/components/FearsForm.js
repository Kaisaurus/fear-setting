import React, { Component } from 'react'
import { Header, Form, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { setChallenge } from '../actions/challengeActions'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const examples = [
  'Example: It will take forever to complete it ',
  'Example: No one will use it',
  "Example: I won't be able to complete it because of a technical hurdle"
]
const InputWrapper = styled.div`
  flex: 1 0 auto;
`
const FormField = styled(Form.Field)`
  display: flex !important;
  /* justify-content: center !important; */
`
class FearsForm extends Component {
  static propTypes = {
    // challenge: PropTypes.string
  }
  state = {
    fields: examples.length
  }
  _handleSubmit = e => {
    e.preventDefault()
    // this.props.history.push('/define')
  }
  _handleChange = e => {
    // this.props.setChallenge(e.target.value)
  }
  componentDidMount() {
    // this.challengeInput.focus()
  }
  render() {
    const { fears } = this.props
    return (
      <Form onSubmit={this._handleSubmit}>
        {examples.map((example, i) => {
          return (
            <FormField inline key={i}>
              <label>{i + 1}.</label>
              <InputWrapper>
                <input placeholder={example} />
              </InputWrapper>
              <Button icon="trash" basic />
            </FormField>
          )
        })}

        <Button onClick={() => this.props.history.push('/')}>Back</Button>
        <Button onClick={this._handleSubmit}>Next</Button>
      </Form>
    )
  }
}

export default withRouter(connect(null, {})(FearsForm))
