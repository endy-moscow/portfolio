import React from 'react'
import Gallery from '../gallery/Gallery.js'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Header />
        <Gallery />
        <Footer />
      </div>
    )
  }
}
