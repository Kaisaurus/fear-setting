import React, { Component } from 'react'
import Subtitle from '../components/Subtitle'
import SurveyForm from './forms/SurveyForm'
import { Default, Mobile } from '../utils/Responsive'

export default class InitialSurvey extends Component {
  render() {
    return (
      <React.Fragment>
        <Mobile>
          <Subtitle>
            I would be incredibly grateful if you have a moment to{' '}
            <a href="survey">fill in a short survey </a>for some feedback!
          </Subtitle>
        </Mobile>
        <Default>
          <Subtitle>
            I would be incredibly grateful if you have a moment for some
            feedback!
          </Subtitle>
          <SurveyForm />
        </Default>
      </React.Fragment>
    )
  }
}
