import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import Swiper from 'react-id-swiper'
import InstagramLoader from '../instagram-loader/InstagramLoader.jsx'
import params from './params'

export default function Page(props) {
  const params = {
    ContainerEl: 'section',
    WrapperEl: 'section',
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    grabCursor: true,
    loop: true
  }
  return (
    <div className='canvas'>
      <Header
        title='MT'
        imgUrl='http://postpeople.ru/media/mt/cover.gif'
        />
      <article>
        <div className='content_container'>
          <InstagramLoader
            url='https://instagr.am/p/Bb842CTB9Oe/'
            maxWidth={480}
            containerTagName='div'
            />
          <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
          <p>Точечное воздействие нетривиально. Маркетинговая коммуникация существенно индуцирует связанный PR. До недавнего времени считалось, что мониторинг активности непосредственно усиливает инвестиционный продукт.</p>

          <h2>Бутылка с именем</h2>
          <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
          <Swiper{...params}>
            <img height='100%' src='http://postpeople.ru/media/cola2015/coca-cola_bottle1.jpg'/>
            <img height='100%' src='http://postpeople.ru/media/cola2015/coca-cola_bottle1.jpg'/>
            <img height='100%' src='http://postpeople.ru/media/cola2015/coca-cola_bottle1.jpg'/>
            <img height='100%' src='http://postpeople.ru/media/cola2015/coca-cola_bottle1.jpg'/>
          </Swiper>
          <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
          <h2>Бутылка с именем</h2>
          <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
        </div>
      </article>
  </div>
  )
}