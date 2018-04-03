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
          title='Интерфейсы для стенда Geely на&nbsp;выставке внедорожников Off&#x2060;-&#x2060;road&nbsp;2015 и MMAC&nbsp;2016'
          bgImage='http://postpeople.ru/media/geely/cover.gif'/>
        <article>
          <div className='content_container'>
            <section className='block'>
              <p>В августе 2015 года в «Крокус Экспо» прошла международная выставка внедорожников, кроссоверов и вездеходов Moscow Off-road Show. Geely презентовала на ней новую модель автомобиля. Агенство <a href='http://visuals.ru'>Visuals</a> огранизовало декорации и пригласила фотографов. А я сделал интерфейс для фотомеханики.</p>
              <p>Видео от Visuals:</p>
              <div className='article_video'>
                <iframe src="https://player.vimeo.com/video/140510515" width="100%" height="100%" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
              </div>
              <h2>Тач-стол для фотографий</h2>
              <p>Посетители стенда фотогафировались с автомобилями. Фотографии в реальном времени появлялись на интерактивном столе, где гости могли выбрать понравившийся кадр и разместить его в социальных сетях или отправить на e-mail, используя персонифицированную карту с QR-кодом. Получить карту и привязать к ней профили можно было на стойке рецепции.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://postpeople.ru/media/geely/geely_photo4.jpg'/></div>
                <div><img height='auto' width='100%' src='http://postpeople.ru/media/geely/geely_photo1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://postpeople.ru/media/geely/geely_photo2.jpg'/></div>
              </Swiper>
              <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
              <h2>Планшеты рядом с машинами на ММАС 2016</h2>
              <p>В 2016 году я проектировал дизайн интерфейса для планшетов рядом с автомобилями компании. Мне нужно было выбрать фотографии и адаптировать спецификации.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://postpeople.ru/media/geely/2016-1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://postpeople.ru/media/geely/2016-2.jpg'/></div>
                <div><img height='auto' width='100%' src='http://postpeople.ru/media/geely/2016-3.jpg'/></div>
                <div><img height='auto' width='100%' src='http://postpeople.ru/media/geely/2016-4.jpg'/></div>
              </Swiper>
            </section>
          </div>
        </article>
      </div>
    )
  }
}
