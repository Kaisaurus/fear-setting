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
    handleUpdate: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }
  state = {
    items: this.props.items,
    showAlert: false
  }
  componentDidMount() {
    this.firstInput.focus()
  }

  addItem = () => {
    this.setState(prevState => ({
      items: prevState.items.concat('')
    }))
  }
  removeItem = index => event => {
    if (this.state.items.length > 1) {
      this.setState(prevState => {
        const newItems = [...prevState.items]
        newItems.splice(index, 1)
        return { items: newItems }
      })
    }
  }
  getNonEmptyItems = () => {
    return this.state.items.filter(item => item !== '')
  }
  handleNext = e => {
    const { handleNext } = this.props
    if (this.getNonEmptyItems().length > 0) {
      this.handleUpdate()
      handleNext()
    } else {
      this.setState({ showAlert: true })
    }
  }
  handleBack = e => {
    this.props.handleBack()
    this.handleUpdate()
  }
  handleUpdate = () => this.props.handleUpdate(this.getNonEmptyItems())
  handleChange = index => event => {
    if (this.getNonEmptyItems().length > 0) {
      this.setState({ showAlert: false })
    }
    const changedItem = event.target.value
    this.setState(prevState => {
      const items = [...prevState.items]
      items[index] = changedItem
      return { items }
    })
    this.handleUpdate()
  }
  render() {
    const { translate, translateItem } = this.props
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
                  onClick={this.removeItem(index)}
                  label={translate('button.remove')}
                />
              )}
            </FormField>
          )
        })}
        {showAlert && (
          <AlertTxt>{translate(`${translateItem}.alert`)}</AlertTxt>
        )}
        <Button type="button" onClick={this.addItem} basic>
          <Icon name="plus" />
          {translate('button.add')}
        </Button>
        <Button type="button" onClick={this.handleBack}>
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
