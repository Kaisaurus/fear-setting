import React from 'react'
import ChallengeForm from '../components/ChallengeForm'
import Quote from '../components/Quote'
import PageWrapper from '../components/PageWrapper'
import { localize } from 'react-localize-redux'

const Home = ({ translate, currentLanguage }) => {
  return (
    <PageWrapper>
      <Quote author={translate('quotes.author_1')}>
        {translate('quotes.quote_1')}
      </Quote>
      <ChallengeForm />
    </PageWrapper>
  )
}

export default localize(Home, 'locale')
