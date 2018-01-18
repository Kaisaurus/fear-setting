import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Icon } from 'semantic-ui-react'

export default class FearOverview extends Component {
  static propTypes = {
    fear: PropTypes.object.isRequired
  }
  generateTableRows = () => {
    const { preventions, fixes } = this.props.fear
    const longestList = preventions.length > fixes.length ? preventions : fixes
    return longestList.map((item, index) => (
      <Table.Row key={index}>
        <Table.Cell textAlign="center">{preventions[index]}</Table.Cell>
        <Table.Cell textAlign="center">{fixes[index]}</Table.Cell>
      </Table.Row>
    ))
  }
  render() {
    const { fear } = this.props.fear
    return (
      <div>
        <Table celled compact="very" padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={2} textAlign="center">
                <Icon name="lightning" />
                {fear}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={8} textAlign="center">
                Preventions
              </Table.HeaderCell>
              <Table.HeaderCell width={8} textAlign="center">
                Fixes
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.generateTableRows()}</Table.Body>
        </Table>
      </div>
    )
  }
}
