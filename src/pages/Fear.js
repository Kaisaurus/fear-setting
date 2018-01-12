import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import { setFears } from '../actions/challengeActions'
import Challenge from '../components/overview/Challenge'
import MultiInputForm from '../components/forms/MultiInputForm'

class Fear extends Component {
  static propTypes = {
    fears: PropTypes.array.isRequired,
    challenge: PropTypes.string,
    translate: PropTypes.func.isRequired
  }
  state = {
    fears: this.props.fears
  }
  handleUpdate = fears => this.props.setFears(fears)
  handleNext = () => this.props.history.push('/prevent')
  handleBack = () => this.props.history.push('/')
  render() {
    const { fears } = this.state
    const { translate, challenge } = this.props
    return (
      <PageWrapper>
        <Challenge challenge={challenge} translate={translate} />
        <Title>{translate('fear.title')}</Title>
        <Subtitle>{translate('fear.subtitle')}</Subtitle>
        <MultiInputForm
          items={fears}
          translateItem={'fear'}
          translate={translate}
          handleUpdate={this.handleUpdate}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
        />
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  fears: challenge.fears,
  challenge: challenge.challenge
})

export default withRouter(connect(mapStateToProps, { setFears })(Fear))
