import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import { setFixes } from '../actions/challengeActions'
import MultiInputForm from '../components/forms/MultiInputForm'
import { filterEmptyItems, handleAdd } from '../utils/index'
import paths from '../utils/paths'
import { Icon } from 'semantic-ui-react'

class Fix extends Component {
  static displayName = 'Fix'
  static propTypes = {
    fears: PropTypes.array.isRequired,
    translate: PropTypes.func.isRequired
  }

  state = {
    currentFear:
      (this.props.location.state && this.props.location.state.currentFear) || 0,
    fixes: this.props.fears[0].fixes
  }
  componentWillReceiveProps(nextProps) {
    const { currentFear } = this.state
    this.setState({ fixes: nextProps.fears[currentFear].fixes })
  }
  handleAdd = () => handleAdd(this, 'fixes')
  handleChange = fixes => {
    this.props.setFixes(fixes, this.state.currentFear)
  }
  handleNext = focusFirstInput => {
    const { currentFear } = this.state
    const { fears } = this.props
    if (currentFear < fears.length - 1) {
      this.setState(prevState => ({
        currentFear: prevState.currentFear + 1,
        fixes: fears[currentFear + 1].fixes
      }))
      focusFirstInput()
    } else {
      setFixes(filterEmptyItems(fears[currentFear].fixes))
      this.props.history.push(paths.benefit)
    }
  }
  handleBack = () => {
    const { currentFear } = this.state
    const { fears } = this.props
    if (currentFear > 0) {
      this.setState(prevState => ({
        currentFear: prevState.currentFear - 1,
        fixes: fears[currentFear - 1].fixes
      }))
    } else {
      this.props.history.push(paths.prevent, { currentFear: fears.length - 1 })
    }
  }
  render() {
    const { fixes, currentFear } = this.state
    const { translate, fears } = this.props
    return (
      <PageWrapper>
        <Title>
          <Icon name="fire extinguisher" />
          {translate('fix.title')}
        </Title>
        <Subtitle>{fears[currentFear].fear}</Subtitle>
        <Subtitle>
          {currentFear + 1} / {fears.length}
        </Subtitle>
        <MultiInputForm
          items={fixes}
          translateItem={'fix'}
          translate={translate}
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
          handleAdd={this.handleAdd}
        />
        <Subtitle>{translate('fix.subtitle')}</Subtitle>
      </PageWrapper>
    )
  }
}
const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  fears: challenge.fears
})

export default withRouter(connect(mapStateToProps, { setFixes })(Fix))
