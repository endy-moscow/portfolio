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
              <h1><span className='header_title'>
                {this.props.title}
              </span></h1>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
