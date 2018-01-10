import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import { setChallenge } from '../actions/challengeActions'
import DefineForm from '../components/forms/DefineForm'
import Quote from '../components/Quote'
import PageWrapper from '../components/PageWrapper'

class Define extends Component {
  static propTypes = {
    challenge: PropTypes.string.isRequired
  }
  state = {
    challenge: this.props.challenge
  }
  handleUpdate = e => {
    this.setState({ challenge: e.target.value })
  }
  handleNext = e => {
    // e.preventDefault()
    if (this.state.challenge !== '') {
      this.props.setChallenge(this.state.challenge)
      this.props.history.push('/define')
    } else {
      this.setState({ empty: true })
    }
  }
  render() {
    const { translate, challenge } = this.props
    return (
      <PageWrapper>
        <Quote translate={translate} id="1" />
        <DefineForm
          challenge={challenge}
          translate={translate}
          handleUpdate={this.handleUpdate}
          handleNext={this.handleNext}
        />
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  challenge: challenge.challenge
})
export default withRouter(connect(mapStateToProps, { setChallenge })(Define))
