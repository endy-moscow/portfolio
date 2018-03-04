import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from './header.jsx'
export default class headerHome extends React.Component {
  render() {
    return (
      <Header
        keyword='home'
        title="Yo! I'am Sergey Duzenko, digital designer from Moscow. Currently my focus on the interface"
      />
    )
  }
}
