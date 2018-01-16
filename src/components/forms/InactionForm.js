import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import RemoveBtn from '../RemoveBtn'
import AlertTxt from '../AlertTxt'

const InputWrapper = styled.div`
  flex: 1 0 auto;
`
const FormField = styled(Form.Field)`
  & {
    display: flex;
  }
`
class MultiInputForm extends Component {
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
    showAlert: false
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.items })
  }
  componentDidMount() {
    this.firstInput.focus()
  }
  handleRemove = index => event => {
    const { handleRemove } = this.props
    this.setState(prevState => {
      const newItems = [...prevState.items]
      newItems.splice(index, 1)
      return { items: newItems }
    })
    handleRemove(index)
  }
  isItemsNotEmpty = () => {
    return this.state.items.filter(item => item !== '').length > 0
  }
  handleNext = e => {
    const { handleNext } = this.props
    this.isItemsNotEmpty()
      ? handleNext(this.firstInput)
      : this.setState({ showAlert: true })
  }
  handleChange = index => event => {
    const { handleChange } = this.props
    const { items } = this.state
    if (this.isItemsNotEmpty()) this.setState({ showAlert: false })
    const newItems = [...items]
    newItems[index] = event.target.value
    handleChange(newItems)
    // state is updated through parents handleChange function
  }
  render() {
    const { translate, translateItem, handleAdd, handleBack } = this.props
    const { items, showAlert } = this.state
    return (
      <Form onSubmit={e => e.preventDefault}>
        {items.map((item, index) => {
          const ref = index === 0 ? input => (this.firstInput = input) : false
          return (
            <FormField inline key={index}>
              <label>{index + 1}.</label>
              <InputWrapper>
                <input
                  ref={ref}
                  placeholder={
                    translate(`example.${translateItem}_${index + 1}`) || ''
                  }
                  value={item}
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
        <Button type="button" onClick={handleBack}>
          {translate('button.back')}
        </Button>
        <Button type="submit" onClick={this.handleNext}>
          {translate('button.next')}
        </Button>
      </Form>
    )
  }
}
export default MultiInputForm
