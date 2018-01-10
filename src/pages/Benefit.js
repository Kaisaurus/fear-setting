import React from 'react'
import Title from '../components/Title'
// import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
// import FearsForm from '../components/FearsForm'
import { localize } from 'react-localize-redux'

const Benefits = ({ translate }) => (
  <PageWrapper>
    <Title>{translate('benefits.title')}</Title>
    {/* <FearsForm /> */}
  </PageWrapper>
)

export default localize(Benefits, 'locale')
