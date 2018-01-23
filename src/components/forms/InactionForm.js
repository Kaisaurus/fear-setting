import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'
import AlertTxt from '../AlertTxt'
import Subtitle from '../Subtitle'
import BackBtn from '../BackBtn'
import NextBtn from '../NextBtn'

const InputWrapper = styled.div`
  flex: 1 0 auto;
`
const FormField = styled(Form.Field)`
  & {
    display: flex;
  }
`
const CenterInput = styled.input`
  text-align: center;
`
class InactionForm extends Component {
  static displayName = 'InactionForm'
  static propTypes = {
    items: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    items: this.props.items,
    showAlert: false
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.items })
  }
  componentDidMount() {
    this.firstInput.focus()
  }
  isItemsNotEmpty = () => {
    return this.state.items.find(item => item === '') === undefined
  }
  handleNext = e => {
    const { handleNext } = this.props
    this.isItemsNotEmpty() ? handleNext() : this.setState({ showAlert: true })
  }
  handleChange = index => event => {
    const { handleChange } = this.props
    const { items } = this.state
    if (this.isItemsNotEmpty()) this.setState({ showAlert: false })
    const newItems = [...items]
    newItems[index] = event.target.value
    handleChange(newItems)
  }
  handleKeyPress = e => e.key === 'Enter' && this.handleNext()
  render() {
    const { translate, handleBack } = this.props
    const { items, showAlert } = this.state
    return (
      <Form onSubmit={e => e.preventDefault}>
        <Subtitle>{translate('inaction.6_months')}</Subtitle>
        <FormField>
          <InputWrapper>
            <CenterInput
              innerRef={input => (this.firstInput = input)}
              value={items[0]}
              onChange={this.handleChange(0)}
              onKeyPress={this.handleKeyPress}
            />
          </InputWrapper>
        </FormField>
        <Subtitle>{translate('inaction.1_year')}</Subtitle>
        <FormField>
          <InputWrapper>
            <CenterInput
              onKeyPress={this.handleKeyPress}
              value={items[1]}
              onChange={this.handleChange(1)}
            />
          </InputWrapper>
        </FormField>
        <Subtitle>{translate('inaction.3_years')}</Subtitle>
        <FormField>
          <InputWrapper>
            <CenterInput
              onKeyPress={this.handleKeyPress}
              value={items[2]}
              onChange={this.handleChange(2)}
            />
          </InputWrapper>
        </FormField>

        {showAlert && <AlertTxt>{translate(`inaction.alert`)}</AlertTxt>}

        <BackBtn onClick={handleBack} translate={translate} />
        <NextBtn onClick={this.handleNext} translate={translate} />
      </Form>
    )
  }
}
export default InactionForm
