import React from 'react'
import Gallery from '../gallery/Gallery.js'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Header
          keyword='home'
          imgUrl= 'http://postpeople.ru/media/me.gif'
          title='Привет! Я Сергей Дузенко, digital-дизайнер из Москвы. Открыт для предложений'
        />
        <Gallery />
        <Footer />
      </div>
    )
  }
}
