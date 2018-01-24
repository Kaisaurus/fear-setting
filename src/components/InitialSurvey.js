import React from 'react'
import Subtitle from '../components/Subtitle'
import SurveyForm from './forms/SurveyForm'

export default class InitialSurvey {
  state = {
    isMobile: false
  }
  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isMobile: false
      })
    })
    this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isMobile: true
      })
    })
  }
  render() {
    const { isMobile } = this.state
    return (
      <React.Fragment>
        {isMobile ? (
          <Subtitle>
            I would be incredibly grateful if you have a moment to{' '}
            <a href="survey">fill in a short survey </a>for some feedback!
          </Subtitle>
        ) : (
          <React.Fragment>
            <Subtitle>
              I would be incredibly grateful if you have a moment for some
              feedback!
            </Subtitle>
            <SurveyForm />
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
