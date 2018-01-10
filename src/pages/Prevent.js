import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import { localize } from 'react-localize-redux'

const Prevent = ({ translate }) => (
  <PageWrapper>
    <Title>Prevent</Title>
    {/* <Title>{translate('prevent.title')}</Title> */}
    {/* <Subtitle>{translate('prevent.subtitle')}</Subtitle> */}
    {/* <PreventForm /> */}
  </PageWrapper>
)

export default localize(Prevent, 'locale')
