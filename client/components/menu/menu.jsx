import React from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <Link className='menu_link' to='/'>Проекты</Link>
        <Link className='menu_link' to='/about'>Обо мне</Link>
      </div>
    )
  }
}
