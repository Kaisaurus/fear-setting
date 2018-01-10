import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
// import FearsForm from '../components/FearsForm'
import { localize } from 'react-localize-redux'

const Inaction = ({ translate }) => (
  <PageWrapper>
    <Title>{translate('inaction.title')}</Title>
    <Subtitle>{translate('inaction.subtitle')}</Subtitle>
    {/* <FearsForm /> */}
  </PageWrapper>
)

export default localize(Inaction, 'locale')
