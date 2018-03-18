import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import Swiper from 'react-id-swiper'

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
      title='Мультимедийная зона в Музее русского импрессионизма'
      imgUrl='http://postpeople.ru/media/cola2015/cover.gif'
      />
    <article>
      <div className='content_container'>
        <p>
          Это мой любимый проект.
          В мае 2016 на фабрике открылся
        </p>
        <h2>Бутылка с именем</h2>
        <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
        <Swiper{...params}>
        </Swiper>
        <h2>Бутылка с именем</h2>
        <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
      </div>
    </article>
  </div>);
}
