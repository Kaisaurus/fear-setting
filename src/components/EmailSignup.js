import React, { Component } from 'react'
import PropTypes from 'prop-types'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class EmailSignup extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  state = {
    email: ''
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { email } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          This is still a work in progress, if you're interested in the end
          result leave you email adress and I'll let you know when I've made it
          into a presentable product!
        </p>
        <p>
          <label>
            Email:{' '}
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}
