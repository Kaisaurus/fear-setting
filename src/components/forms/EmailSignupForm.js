import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const CenteredFormGroup = styled(Form.Group)`
  justify-content: center;
`

export default class EmailSignup extends Component {
  // static propTypes = {
  // prop: PropTypes
  // }

  state = {
    email: '',
    success: false
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'mailing', ...this.state })
    })
      .then(() => this.setState({ success: true }))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { email, success } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <p>
          Leave me your email and I'll send an update when the project is up and
          running!
        </p>
        {success ? (
          <p>Sign up has been successful! Ill send you a update to {email}</p>
        ) : (
          <CenteredFormGroup>
            {/* <label>email</label> */}
            <Input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email address"
            />
            <Form.Button type="submit" content="Sign Up" />
          </CenteredFormGroup>
        )}
      </Form>
    )
  }
}
