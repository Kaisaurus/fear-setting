import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import { Icon, Button } from 'semantic-ui-react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import { setAcceptable } from '../actions/challengeActions'
import FearOverview from '../components/overview/FearOverview'

class Choice extends Component {
  static displayName = 'Choice'
  static propTypes = {
    challenge: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    choice: true
  }
  generateFearOverview = (fear, index) => (
    <FearOverview key={index} fear={fear} />
  )
  generateBenefits = benefit => {
    return <Subtitle>{benefit}</Subtitle>
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
  render() {
    const { challenge, fears, benefits } = this.props.challenge
    const { translate } = this.props
    console.log(challenge)
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
        <Subtitle>{translate('overview.consequences')}</Subtitle>
        {this.generateConsequences()}
        <Title>{translate('choice.title')}</Title>
        <Button size="huge" yellow>
          {translate('choice.yes')}
        </Button>
        <Button size="huge" olive>
          {translate('choice.no')}
        </Button>
        <Title>{translate('choice.remind')}</Title>
        <Button size="huge">Send a Reminder</Button>
        <Button size="huge">Save to Account</Button>
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  challenge
})

export default withRouter(connect(mapStateToProps, { setAcceptable })(Choice))
