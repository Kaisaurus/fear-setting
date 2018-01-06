import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Icon, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class ChallengeSidebar extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  state = { visible: true }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    const { children } = this.props
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          width="thin"
          visible={visible}
          icon="labeled"
          vertical
          inverted
        >
          <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
          <Menu.Item name="home">Home</Menu.Item>
          <Menu.Item name="gamepad">Games</Menu.Item>
          <Menu.Item name="camera">Channels</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>{children}</Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
