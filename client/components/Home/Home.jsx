import React from 'react'
import Header from '../header/header.jsx'
import Gallery from '../gallery/gallery'
import Filter from '../filter/filter'
import Footer from '../footer/footer.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Header
          keyword='home'
          imgUrl= 'http://postpeople.ru/media/me.gif'
          title='Привет! Я Сергей Дузенко, digital-дизайнер из Открыт для предложений'
          linkName='yo'
          link='#'/>
        <Filter />
        <Gallery />
        <Footer />
      </div>
    )
  }
}
