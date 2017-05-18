import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { linkTo } from '@kadira/storybook';

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={linkTo("My Pages", "HomePage")} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={linkTo("My Pages", "MessagesPage")} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={linkTo("My Pages", "FriendsPage")} />
      </Menu>
    )
  }
}