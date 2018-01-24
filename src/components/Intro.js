import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image } from 'semantic-ui-react'
import bob from '../img/contemplating-spongebob.jpg'
import Subtitle from './Subtitle'

export default function Intro() {
  return (
    <Grid divided="vertically" stackable>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Subtitle>
            Thinking about doing something new or making a change in your life
            but not quite sure about it yet?
          </Subtitle>
          <p>
            This thought exercise will walk through 7 questions to help you put
            your thoughts in words and come to a deliberate decision.
          </p>
          {/* <p>Define your challenge</p>
          <Icon name="arrow down" />
          <p>Write down worst things you can imagine happening</p>
          <Icon name="arrow down" />
          <p>What can you do to prevent these?</p>
          <Icon name="arrow down" />
          <p>What can you do to fix it if this happens?</p>
          <Icon name="arrow down" />
          <p>What are the benefits of trying? or (partial) success?</p>
          <Icon name="arrow down" />
          <p>What are the consequences of inaction?</p>
          <Icon name="arrow down" />
          <p>Deliberate decision</p>
          <Icon name="law" /> */}
        </Grid.Column>
        <Grid.Column>
          <Image src={bob} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Intro.propTypes = {
  translate: PropTypes.func.isRequired
}
