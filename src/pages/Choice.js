import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import { Icon, Button, Divider } from 'semantic-ui-react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import InitialSurvey from '../components/InitialSurvey'
import BackBtn from '../components/BackBtn'
import ClearBtn from '../components/ClearBtn'
import { setAcceptable, resetForm } from '../actions/challengeActions'
import FearOverview from '../components/overview/FearOverview'
import paths from '../utils/paths'
import styled from 'styled-components'

const LargeBtn = styled(Button)`
  && {
    margin: 0.25em;
  }
`

class Choice extends Component {
  static displayName = 'Choice'
  static propTypes = {
    challenge: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    choice: ''
  }
  generateFearOverview = (fear, index) => (
    <FearOverview key={index} fear={fear} />
  )
  generateBenefits = (benefit, index) => {
    return <Subtitle key={index}>{benefit}</Subtitle>
  }
  generateConsequences = () => {
    const { consequences } = this.props.challenge
    return (
      <div>
        <Subtitle>6 months</Subtitle>
        <Subtitle>{consequences[0]}</Subtitle>
        <Subtitle>1 year</Subtitle>
        <Subtitle>{consequences[1]}</Subtitle>
        <Subtitle>3 years</Subtitle>
        <Subtitle>{consequences[2]}</Subtitle>
      </div>
    )
  }
  setChoice = choice => () => this.setState({ choice })
  handleBack = () => this.props.history.push(paths.inaction)
  onClear = () => this.props.resetForm()
  render() {
    const { challenge, fears, benefits } = this.props.challenge
    const { translate, resetForm } = this.props
    const { choice } = this.state
    return (
      <PageWrapper>
        <BackBtn onClick={this.handleBack} translate={translate} />
        <Subtitle>{translate('overview.overview')}</Subtitle>
        <Title>
          {translate('define.what_if')} {challenge}?
        </Title>
        <Subtitle>
          <Icon name="lightning" />
          {translate('overview.fears')}
        </Subtitle>
        {fears.map(this.generateFearOverview)}
        <Subtitle>
          <Icon name="wizard" />
          {translate('overview.benefits')}
        </Subtitle>
        {benefits.map(this.generateBenefits)}
        <Subtitle>
          <Icon name="wait" />
          {translate('overview.consequences')}
        </Subtitle>
        {this.generateConsequences()}
        <Title>{translate('choice.title')}</Title>
        <Button
          size="huge"
          onClick={this.setChoice(translate('choice.inaction'))}
        >
          {translate('choice.yes')}
        </Button>
        <Button
          size="huge"
          onClick={this.setChoice(translate('choice.action'))}
        >
          {translate('choice.no')}
        </Button>
        {choice !== '' && (
          <Title>
            Result: {choice}
            {choice === translate('choice.inaction') && <Icon name="send" />}
            {choice === translate('choice.action') && <Icon name="rocket" />}
          </Title>
        )}

        <Subtitle>{translate('choice.remind')}</Subtitle>
        {challenge === '' && (
          <ClearBtn translate={translate} onClick={resetForm} />
        )}
        <LargeBtn size="large" disabled>
          Send a Reminder
        </LargeBtn>
        <LargeBtn size="large" disabled>
          Save to Account
        </LargeBtn>
        <Divider />
        <InitialSurvey />
        <Divider />
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  challenge
})

export default withRouter(
  connect(mapStateToProps, { setAcceptable, resetForm })(Choice)
)
