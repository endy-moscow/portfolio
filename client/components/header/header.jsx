import React from 'react'
import Menu from '../menu/menu.jsx'

export default class Header extends React.Component {
  render() {
    return (
      <section
        className={'header_container'}
        style={{backgroundImage: 'url('+this.props.imgUrl+')'}}
        >
        <header>
          <Menu />
          <div className='header_wrapper'>
            <div className='header_title_container'>
              <h1 id='header'><span className='header_title'>
                {this.props.title}
              </span></h1>
            </div>
          </div>
        </header>
      </section>
    )
  }
}
