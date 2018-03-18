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
      title='Интерфейсы для стенда Coca-cola Hellenic на Metro Expo 2015'
      imgUrl='http://postpeople.ru/media/cola2015/cover.gif'
      />
    <article>
      <div className='content_container'>
        <section className='block'>
          <p>Metro Expo — это платформы для взаимодействия ключевых игроков рынка – представителей малого и среднего бизнеса, государственных органов, поставщиков товаров и услуг, СМИ, независимых ассоциаций при поддержке компании METRO. </p>
          <p>Видео которое сняло <a href='http://visuals.ru'>агентство Visuals</a> с которым я работал над этим проектом:</p>
          <div className='article_img'>
            <iframe src="https://player.vimeo.com/video/132819665" width="100%" height="100%" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
          </div>
        </section>

        <section className='block'>
          <h2>Интерактивная фотозона с управлением через iPad</h2>
          <p>Многие помнят маркетинговую компанию «Это твоя Coca-Cola». На стенде была фотозона посвященная ей. В качестве фона для фотографий был установлен макет бутылки с экраном на месте этикетки. С помощью iPad девушка-промоутер вводила имя гостя. После, фотограф делал несколько фото, которые отправлялись на почту гостю.</p>
          <p>За время выставки гостям было отправлено <b>726</b> фотографий</p>
          <Swiper{...params}>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_bottle1.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_bottle2.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_bottle3.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_bottle4.jpg)'}}></div>
          </Swiper>
          <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
        </section>

        <section className='block'>
          <h2>Тач-экран с презентациями</h2>
          <p>Coca-cola подготовила 7 обучающих презентаций полезных для бизнеса. В&nbsp;стены стенда вмонтировали 3 тач-панели, с помощью которых гости знакомились с содержанием презентаций и, при желании, высылали их себе на почту. В режиме ожидания на экранах проигрывались рекламные ролики бренда.</p>
          <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
          <p>За время выставки гости отправили <b>220</b> презентаций</p>
          <Swiper{...params}>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_infotouchwall1.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_infotouchwall2.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_infotouchwall3.jpg)'}}></div>
          </Swiper>
          <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
        </section>

        <section className='block'>
          <h2>Анкета на iPad</h2>
          <p>Для сбора данных с посетителей стенда, в стойку рецепции вмонтировали планшеты с анкетами. Я разработал для них простой и лаконичный дизайн.</p>
          <p>За время выставки гости заполнили <b>421</b> анкету.</p>
          <Swiper{...params}>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_questionnaire1.jpg)'}}></div>
            <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_questionnaire2.jpg)'}}></div>
          </Swiper>
        </section>
      </div>
    </article>
  </div>);
}
