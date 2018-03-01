import React from 'react'
import Menu from '../menu/menu.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div className='header-conainer'>
        <header>
          <Menu />
          <h1>
              Yo! I'am Sergey Duzenko,
              digital designer from Moscow.
              Currently my focus on the interface.
              And
          </h1>
        </header>
      </div>
    )
  }
}
