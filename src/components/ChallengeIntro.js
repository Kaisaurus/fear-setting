import React from 'react'
import { Grid } from 'semantic-ui-react'

export default () => {
  return (
    <div>
      <p>“Named must your fear be before banish it you can.”</p>
      <p>Yoda</p>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <p>Define a decision you are contemplating on.</p>
          </Grid.Column>
          <Grid.Column>
            <p>
              Doing something new or making a change in your live can be scary.
            </p>
            <p>
              This is step-by-step exercise to get out whats lingering in your
              head and help you take a step.
            </p>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </div>
  )
}
