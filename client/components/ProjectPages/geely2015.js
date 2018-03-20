import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import Swiper from 'react-id-swiper'
import { params } from './params'
export default function Page(props) {
  return (
  <div className='canvas'>
    <Header
      title='Интерфейсы для стенда Geely на&nbsp;выставке внедорожников Off&#x2060;-&#x2060;road&nbsp;2015'
      imgUrl='http://postpeople.ru/media/geely2015/cover.gif'
      />
    <article>
      <div className='content_container'>
        <section className='block'>
          <p>В августе 2015 года в «Крокус Экспо» прошла международная выставка внедорожников, кроссоверов и вездеходов Moscow Off-road Show. Компания Geely презентовала на ней новую модель автомобиля.</p>
          <p>На стенд привезли демонстрационные модели и установили декорации. На протяжении всего мероприятия на стенде работали фотографы. Актуальным вопросом было быстрое и легкое получени фотографий.</p>
          <p>Гости регистрировались с помощью планшетов вмонтированных в стойку рецепции и получали карточку с QR-кодом. Фотографии с автомобилем в реальном времени появлялись на интерактивном столе. Посетители постили их в социальные сети или отправляли на почту, используя персонифицированную карту с QR-кодом.</p>
          <Swiper{...params}>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/geely2015/geely_photo4.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/geely2015/geely_photo1.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/geely2015/geely_photo2.jpg)'}}></div>
          </Swiper>
          <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
        </section>
        <section className='block'>
          <p><a href='http://visuals.ru'>Агентство Visuals</a> с которым я работал над этим проектом сняло видео:</p>
          <div className='article_img'>
            <iframe src="https://player.vimeo.com/video/140510515" width="100%" height="100%" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
          </div>
        </section>
      </div>
    </article>
  </div>);
}
