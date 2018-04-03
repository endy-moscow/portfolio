import React from 'react'
import Header from '../header/header.jsx'
import Menu from '../menu/menu.jsx'
import Gallery from '../gallery/gallery'
import Filter from '../filter/filter'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Menu/>
        <Link to='/about'>
          <Header bgImage='http://postpeople.ru/media/me.gif'
            title='Я Сергей Дузенко, digital-дизайнер из Москвы'/>
        </Link>
        <Gallery />
      </div>
    )
  }
}
