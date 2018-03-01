import React from 'react'
import Menu from './Menu.jsx'
export default class Cola2015 extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <div className='header-conainer'>
          <header>
            <Menu />
            <h1>
                Message
            </h1>
          </header>
        </div>
        <div className='footer'>
          <h1>footer</h1>
        </div>
      </div>
    )
  }
}
