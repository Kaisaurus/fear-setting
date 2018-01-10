import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
// import FearsForm from '../components/FearsForm'
import { localize } from 'react-localize-redux'

const Fix = ({ translate }) => (
  <PageWrapper>
    <Title>{translate('fix.title')}</Title>
    <Subtitle>{translate('fix.subtitle')}</Subtitle>
    {/* <FearsForm /> */}
  </PageWrapper>
)

export default localize(Fix, 'locale')
