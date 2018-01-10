import React, { Component } from 'react'
import { Icon, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setFears } from '../../actions/challengeActions'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getTranslate } from 'react-localize-redux'
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
class PreventForm extends Component {
  static propTypes = {
    preventions: PropTypes.array
  }
  state = {
    preventions: this.props.fears,
    empty: false
  }
  _handleSubmit = e => {
    e.preventDefault()
    const submittedFears = this.state.fears.filter(fear => fear !== '')
    if (submittedFears.length > 0) {
      this.props.setFears(submittedFears)
      this.props.history.push('/prevent')
    } else {
      this.setState({ empty: true })
    }
  }
  componentDidMount() {
    this.firstInput.focus()
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
          const ref = index === 0 ? input => (this.firstInput = input) : false
          return (
            <FormField inline key={index}>
              <label>{index + 1}.</label>
              <InputWrapper>
                <input
                  ref={ref}
                  placeholder={translate(`example.fear_${index + 1}`) || ''}
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
        {empty && <AlertTxt>{translate('fear.alert')}</AlertTxt>}
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

const mapStateToProps = ({ locale, challenge }) => ({
  translate: getTranslate(locale),
  fears: challenge.fears
})

export default withRouter(connect(mapStateToProps, { setFears })(PreventForm))
