import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu/Menu.jsx'

export default class Page404 extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Menu />
        <h1>404</h1>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
