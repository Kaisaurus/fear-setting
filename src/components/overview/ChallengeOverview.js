import React from 'react'
import PropTypes from 'prop-types'

export default () => {
  return (
    <div>
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
    </div>
  )
}

ChallengeOverview.propTypes = {}
