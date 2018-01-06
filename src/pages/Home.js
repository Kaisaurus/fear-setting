import React from 'react'
import ChallengeForm from '../components/ChallengeForm'
import Quote from '../components/Quote'
import PageWrapper from '../components/PageWrapper'

export default () => {
  return (
    <PageWrapper>
      <Quote author="Yoda">
        Named must your fear be before banish it you can.
      </Quote>
      <ChallengeForm />
    </PageWrapper>
  )
}
