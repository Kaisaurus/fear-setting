import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import PageWrapper from '../components/PageWrapper'
import { setBenefits } from '../actions/challengeActions'
import MultiInputForm from '../components/forms/MultiInputForm'
import { handleAdd } from '../utils/index'

class Benefits extends Component {
  static displayName = 'Benefits'
  static propTypes = {
    benefits: PropTypes.array.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    benefits: this.props.benefits
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ benefits: nextProps.benefits })
  }
  handleAdd = () => handleAdd(this, 'benefits')
  handleChange = benefits => this.props.setBenefits(benefits)
  handleNext = () => this.props.history.push('/inaction')
  handleBack = () => {
    const { fears } = this.props
    this.props.history.push('/fix', { currentFear: fears.length - 1 })
  }
  render() {
    const { benefits } = this.state
    const { translate } = this.props
    return (
      <PageWrapper>
        <Title>{translate('benefit.title')}</Title>
        <MultiInputForm
          items={benefits}
          translateItem={'benefit'}
          translate={translate}
          handleChange={this.handleChange}
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
  benefits: challenge.benefits,
  fears: challenge.fears
})

export default withRouter(connect(mapStateToProps, { setBenefits })(Benefits))
