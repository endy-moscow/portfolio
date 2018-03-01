import React from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <Link className='menu_link' to='/projects' >projects</Link>
        <Link className='menu_link' to='/about'>about me</Link>
      </div>
    )
  }
}
