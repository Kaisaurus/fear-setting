import React, { Component } from 'react'
import { Header, Icon, Form, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setFears } from '../actions/challengeActions'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getTranslate } from 'react-localize-redux'
import RemoveBtn from './RemoveBtn'

const examples = [
  'Example: It will take forever to complete it ',
  'Example: No one will use it',
  "Example: I won't be able to complete it because of a technical hurdle"
]
const InputWrapper = styled.div`
  flex: 1 0 auto;
`
const FormField = styled(Form.Field)`
  display: flex !important;
  /* justify-content: center !important; */
`
class FearsForm extends Component {
  static propTypes = {
    // challenge: PropTypes.string
  }
  state = {
    fears: Array(examples.length).fill(''),
    empty: false
  }
  _handleSubmit = e => {
    e.preventDefault()
    const submittedFears = this.state.fears.filter(fear => fear !== '')
    console.log(submittedFears)
    if (submittedFears.length > 0) {
      this.props.setFears(submittedFears)
    } else {
      this.setState({ empty: true })
    }
    // this.props.history.push('/define')
  }
  componentDidMount() {
    // this.challengeInput.focus()
  }
  _addField = () => {
    this.setState(prevState => ({
      fears: prevState.fears.concat('')
    }))
  }
  _removeField = index => event => {
    if (this.state.fears.length > 1) {
      this.setState(prevState => {
        const newFears = [...prevState.fears]
        newFears.splice(index, 1)
        return { fears: newFears }
      })
    } else {
      this.setState({ fears: [''] })
    }
  }
  _handleChange = index => event => {
    const changedFear = event.target.value
    this.setState(prevState => {
      const fears = [...prevState.fears]
      fears[index] = changedFear
      return { fears }
    })
  }
  render() {
    const { translate } = this.props
    const { fears, empty } = this.state
    return (
      <Form onSubmit={this._handleSubmit} ref={form => (this.form = form)}>
        {fears.map((fear, index) => {
          return (
            <FormField inline key={index}>
              <label>{index + 1}.</label>
              <InputWrapper>
                <input
                  placeholder={examples[index]}
                  value={fears[index]}
                  onChange={this._handleChange(index)}
                />
              </InputWrapper>
              {fears.length > 1 && (
                <RemoveBtn
                  onClick={this._removeField(index)}
                  label={translate('button.remove')}
                />
              )}
            </FormField>
          )
        })}
        {empty && <p>You must fill in at least 1 fear</p>}
        <Button onClick={this._addField} basic>
          <Icon name="plus" />
          {translate('button.add')}
        </Button>
        <Button onClick={() => this.props.history.push('/')}>
          {translate('button.back')}
        </Button>
        <Button onClick={this._handleSubmit}>{translate('button.next')}</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
})

export default withRouter(connect(mapStateToProps, { setFears })(FearsForm))
