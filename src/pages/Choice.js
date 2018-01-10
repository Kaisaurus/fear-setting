import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
// import FearsForm from '../components/FearsForm'
import { localize } from 'react-localize-redux'

const Choice = ({ translate }) => (
  <PageWrapper>
    <Title>{translate('choice.title')}</Title>
    <Subtitle>{translate('choice.subtitle')}</Subtitle>
    {/* <FearsForm /> */}
  </PageWrapper>
)

export default localize(Choice, 'locale')
