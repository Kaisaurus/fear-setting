import React, { Component } from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import FearsForm from '../components/FearsForm'
import ChallengeTitle from '../components/ChallengeTitle'

class Fears extends Component {
  render() {
    return (
      <PageWrapper>
        <ChallengeTitle />
        <Title>
          Define the worst things you can image happening if you took this step
        </Title>
        <Subtitle>
          Putting these fears in words will help you get them out of your head
          and see if they are well founded. In the following steps we will also
          see if they weigh up against the down-side of inaction.
        </Subtitle>
        <FearsForm />
      </PageWrapper>
    )
  }
}

export default Fears
