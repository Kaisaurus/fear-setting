import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import { setPreventions } from '../actions/challengeActions'
import Challenge from '../components/overview/Challenge'
import MultiInputForm from '../components/forms/MultiInputForm'

class Prevent extends Component {
  static propTypes = {
    fears: PropTypes.array.isRequired,
    preventions: PropTypes.array.isRequired,
    challenge: PropTypes.string,
    translate: PropTypes.func.isRequired
  }
  state = {
    currentFear: 0,
    preventions: this.props.preventions
  }
  handleUpdate = preventions => this.props.setPreventions(preventions)
  handleNext = () => {
    // this.props.history.push('/prevent')
  }
  handleBack = () => {
    this.props.history.push('/define')
  }
  render() {
    const { preventions, currentFear } = this.state
    const { translate, fears } = this.props
    return (
      <PageWrapper>
        {/* <Challenge challenge={challenge} translate={translate} /> */}
        <Title>{translate('prevent.title')}</Title>
        <Subtitle>{translate('prevent.subtitle')}</Subtitle>
        <Subtitle>
          {currentFear + 1}/ {fears.length} {fears[currentFear]}
        </Subtitle>
        <MultiInputForm
          items={preventions[currentFear]}
          translateItem={'prevent'}
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
  preventions: challenge.preventions,
  challenge: challenge.challenge
})

export default withRouter(connect(mapStateToProps, { setPreventions })(Prevent))
