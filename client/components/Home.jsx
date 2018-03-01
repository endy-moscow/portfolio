import React from 'react'
import Gallery from './Gallery.js'
import Menu from './Menu.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div className='canvas'>
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
        <Gallery />
        <div className='footer'>
          <h1>footer</h1>
        </div>
      </div>
    )
  }
}
