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
import { setAcceptable } from '../actions/challengeActions'
import FearOverview from '../components/overview/FearOverview'

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
  render() {
    const { challenge, fears, benefits } = this.props.challenge
    const { translate } = this.props
    const { choice } = this.state
    return (
      <PageWrapper>
        <Subtitle>{translate('overview.overview')}</Subtitle>
        <Title>
          {translate('define.what_if')} {challenge}?
        </Title>
        <Subtitle>{translate('overview.fears')}</Subtitle>
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
        <Title>{translate('choice.remind')}</Title>
        <Button size="huge" disabled>
          Send a Reminder
        </Button>
        <Button size="huge" disabled>
          Save to Account
        </Button>
        <Divider />
        <InitialSurvey />
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  challenge
})

export default withRouter(connect(mapStateToProps, { setAcceptable })(Choice))
