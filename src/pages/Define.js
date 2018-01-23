import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import { Divider } from 'semantic-ui-react'
import { setChallenge, resetForm } from '../actions/challengeActions'
import DefineForm from '../components/forms/DefineForm'
import PageWrapper from '../components/PageWrapper'
import Intro from '../components/Intro'
import EmailSignupForm from '../components/forms/EmailSignupForm'
import paths from '../utils/paths'

class Define extends Component {
  static displayName = 'Define'
  static propTypes = {
    challenge: PropTypes.string.isRequired,
    translate: PropTypes.func.isRequired
  }
  handleUpdate = challenge => this.props.setChallenge(challenge)
  handleNext = () => this.props.history.push(paths.fear)
  render() {
    const { translate, challenge, resetForm } = this.props
    return (
      <PageWrapper>
        <DefineForm
          challenge={challenge}
          translate={translate}
          handleUpdate={this.handleUpdate}
          handleNext={this.handleNext}
          handleReset={resetForm}
        />
        <Divider />
        <Intro translate={translate} />
        <Divider />
        <EmailSignupForm />
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  challenge: challenge.challenge
})
export default withRouter(
  connect(mapStateToProps, { setChallenge, resetForm })(Define)
)
