import React, { Component } from 'react'
import { Header, Container, Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setChallenge } from '../actions/challengeActions'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ChallangeField = styled.label`
  font-size: 6em;
`

// const ChallengeWrapper = styled.div`
// display: flex;
// flex-direction: column;
// height: 100vh;
// `
// const ChallengeContentWrapper = styled.div`
// flex: 1 1 auto;
// overflow: auto;
// `

const example =
  'Example: Try to create a web app that will help people define their fears and take a next step in their lives.'

class ChallengeForm extends Component {
  static propTypes = {
    challenge: PropTypes.string
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  handleChange = (e, { name, value }) => {
    this.props.setChallenge(value)
  }
  componentDidMount() {
    this.challengeInput.focus()
  }
  render() {
    const { challenge } = this.props
    return (
      <Container text>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <Form.Field>
              <ChallangeField>What if I</ChallangeField>
              <Input
                ref={input => (this.challengeInput = input)}
                placeholder={example}
                value={challenge}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Button content="Continue" />
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({ challenge }) => ({
  challenge: challenge.challenge
})

export default connect(mapStateToProps, { setChallenge })(ChallengeForm)
