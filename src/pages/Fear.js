import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import { setFears, removeFears } from '../actions/challengeActions'
import Challenge from '../components/overview/Challenge'
import MultiInputForm from '../components/forms/MultiInputForm'

class Fear extends Component {
  static propTypes = {
    fears: PropTypes.array.isRequired,
    challenge: PropTypes.string,
    translate: PropTypes.func.isRequired
  }
  state = {
    fears: this.props.fears
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ fears: nextProps.fears })
  }
  handleAdd = () => {
    this.setState(prevState => ({ fears: [...prevState.fears].concat('') }))
  }
  handleChange = fears => this.props.setFears(fears)
  handleRemove = index => this.props.removeFears([index])
  submitNotEmptyFears = () => {
    const emptyFears = this.state.fears.reduce((removeList, fear, index) => {
      fear === '' && removeList.push(index)
      return removeList
    }, [])
    this.props.removeFears(emptyFears)
  }
  handleNext = () => {
    this.submitNotEmptyFears()
    this.props.history.push('/prevent')
  }
  handleBack = () => {
    this.submitNotEmptyFears()
    this.props.history.push('/')
  }
  render() {
    const { fears } = this.state
    const { translate, challenge } = this.props
    return (
      <PageWrapper>
        <Challenge challenge={challenge} translate={translate} />
        <Title>{translate('fear.title')}</Title>
        <Subtitle>{translate('fear.subtitle')}</Subtitle>
        <MultiInputForm
          items={fears}
          translateItem={'fear'}
          translate={translate}
          handleChange={this.handleChange}
          handleRemove={this.handleRemove}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
          handleAdd={this.handleAdd}
        />
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  fears: challenge.fears.map(fear => fear.fear),
  challenge: challenge.challenge
})

export default withRouter(
  connect(mapStateToProps, { setFears, removeFears })(Fear)
)
