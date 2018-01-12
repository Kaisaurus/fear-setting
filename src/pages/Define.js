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
    challenge: PropTypes.string.isRequired,
    translate: PropTypes.func.isRequired
  }
  handleUpdate = challenge => this.props.setChallenge(challenge)
  handleNext = () => this.props.history.push('/define')
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
