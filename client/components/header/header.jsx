import React from 'react'
import Menu from '../menu/menu.jsx'

export default class Header extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <section className='header_container' style={{backgroundImage: 'url('+this.props.bgImage+')'}}>
        <header>
          <div className='header_wrapper'>
            <div className='header_title_container'>
              <h1>
                <span className='header_title'>
                  {this.props.title}<a href={this.props.link}>{this.props.linkName}</a>
                </span>
              </h1>
            </div>
          </div>
        </header>
      </section>
    )
  }
}
