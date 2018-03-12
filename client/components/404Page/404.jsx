import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'

export default class Page404 extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Header
          title='Страница не найдена'
          imgUrl='http://78.media.tumblr.com/tumblr_lwuf26MDND1qg39ewo1_500.gif'
          />
      </div>
    )
  }
}
