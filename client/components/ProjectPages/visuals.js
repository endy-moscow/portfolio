import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import Swiper from 'react-id-swiper'
import params from './params'

export default class Page extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Menu/>
        <Header
          title='Шаблон презентации для агентства Visuals'
          bgImage='http://endy.moscow/media/visuals/cover.gif'
          />
        <article>
          <div className='content_container'>
            <p>В начале 2015 года я создал шаблон презентаций для Visuals. Вот некоторые типовые слайды:</p>
            <img style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}} height='auto' width='100%' src='http://endy.moscow/media/visuals/pres_label_s1.png'/>
            <img style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}} height='auto' width='100%' src='http://endy.moscow/media/visuals/pres_label_s2.png'/>
            <img style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}} height='auto' width='100%' src='http://endy.moscow/media/visuals/pres_label_s3.png'/>
            <img style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}} height='auto' width='100%' src='http://endy.moscow/media/visuals/pres_label_s4.png'/>
            <img style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}} height='auto' width='100%' src='http://endy.moscow/media/visuals/pres_label_s5.png'/>
            <img style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}} height='auto' width='100%' src='http://endy.moscow/media/visuals/pres_label_s6.png'/>
          </div>
        </article>
      </div>
    )
  }
}
