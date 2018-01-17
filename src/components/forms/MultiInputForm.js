import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import RemoveBtn from '../RemoveBtn'
import AlertTxt from '../AlertTxt'
import NextBtn from '../NextBtn'
import BackBtn from '../BackBtn'

const InputWrapper = styled.div`
  flex: 1 0 auto;
`
const FormField = styled(Form.Field)`
  & {
    display: flex;
  }
`
class MultiInputForm extends Component {
  static displayName = 'MultiInputForm'
  static propTypes = {
    items: PropTypes.array.isRequired,
    translateItem: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    items: this.props.items,
    showAlert: false,
    inputs: []
  }
  componentDidMount = () => this.focusFirstInput()
  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.items })
  }
  focusFirstInput = () => this['input_0'] && this['input_0'].focus()
  handleRemove = index => event => {
    const newItems = [...this.state.items]
    newItems.splice(index, 1)
    this.props.handleChange(newItems)
  }
  isItemsNotEmpty = () => {
    return !!this.state.items.find(item => item !== '')
  }
  handleNext = e => {
    this.isItemsNotEmpty()
      ? this.props.handleNext(this.focusFirstInput)
      : this.setState({ showAlert: true })
  }
  handleKeyPress = e => {
    e.key === 'Enter' && this.handleNext()
  }
  handleChange = index => event => {
    if (this.isItemsNotEmpty()) this.setState({ showAlert: false })
    const newItems = [...this.state.items]
    newItems[index] = event.target.value
    this.props.handleChange(newItems)
  }
  setRef = index => input => (this[`input_${index}`] = input)
  render() {
    const { translate, translateItem, handleAdd, handleBack } = this.props
    const { items, showAlert } = this.state
    return (
      <Form onSubmit={e => e.preventDefault}>
        {items.map((item, index) => {
          return (
            <FormField inline key={index}>
              <label>{index + 1}.</label>
              <InputWrapper>
                <input
                  ref={this.setRef(index)}
                  placeholder={
                    translate(`example.${translateItem}_${index + 1}`) || ''
                  }
                  value={item}
                  onKeyPress={this.handleKeyPress}
                  onChange={this.handleChange(index)}
                />
              </InputWrapper>
              {items.length > 1 && (
                <RemoveBtn
                  onClick={this.handleRemove(index)}
                  label={translate('button.remove')}
                />
              )}
            </FormField>
          )
        })}
        {showAlert && (
          <AlertTxt>{translate(`${translateItem}.alert`)}</AlertTxt>
        )}
        <Button type="button" onClick={handleAdd} basic>
          <Icon name="plus" />
          {translate('button.add')}
        </Button>
        <BackBtn onClick={handleBack} text={translate('button.back')} />
        <NextBtn onClick={this.handleNext} text={translate('button.next')} />
      </Form>
    )
  }
}
export default MultiInputForm
