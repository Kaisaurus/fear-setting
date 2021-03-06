import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import PageWrapper from '../components/PageWrapper'
import { setConsequences } from '../actions/challengeActions'
import InactionForm from '../components/forms/InactionForm'
import { handleAdd } from '../utils/index'
import paths from '../utils/paths'
import { Icon } from 'semantic-ui-react'

class Inaction extends Component {
  static displayName = 'Inaction'
  static propTypes = {
    consequences: PropTypes.array.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    consequences: this.props.consequences
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ consequences: nextProps.consequences })
  }
  handleAdd = () => handleAdd(this, 'consequences')
  handleChange = consequences => this.props.setConsequences(consequences)
  handleNext = () => this.props.history.push(paths.choice)
  handleBack = () => this.props.history.push(paths.benefit)
  render() {
    const { consequences } = this.state
    const { translate } = this.props
    return (
      <PageWrapper>
        <Title>
          <Icon name="wait" />
          {translate('inaction.title')}
        </Title>
        <InactionForm
          items={consequences}
          translateItem={'inaction'}
          translate={translate}
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
        />
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  consequences: challenge.consequences
})

export default withRouter(
  connect(mapStateToProps, { setConsequences })(Inaction)
)
