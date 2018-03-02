import React from 'react'
import Menu from '../menu/menu.jsx'

export default class Header extends React.Component {
  render() {
    return (
      <div className={'header_conainer header_container-'+this.props.keyword}>
        <header>
          <Menu />
          <div className='container'>
            <div className='header_title_container'>
              <span className='h1 header_title'>
                  Yo! I'am Sergey Duzenko, digital designer from Moscow. Currently my focus on the interface
              </span>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
