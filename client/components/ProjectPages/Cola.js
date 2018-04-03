import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Swiper from 'react-id-swiper'
import params from './params'

export default class Home extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Menu/>
        <Header
          bgImage='http://endy.moscow/media/cola/inner-cover.jpg'
          title='Интерфейсы для стенда Coca-Cola Hellenic на Metro Expo 2015'>
        </Header>
        <article>
          <div className='content_container'>
            <section className='block'>
              <p>Metro Expo — это платформы для взаимодействия представителей малого и среднего бизнеса, государственных органов, поставщиков товаров и услуг, СМИ и независимых ассоциаций при поддержке компании METRO. </p>
              <p><a href='http://visuals.ru'>Агентство Visuals</a>, с которым я работал над этим проектом, сняло видео:</p>
              <div className='article_video'>
                <iframe src="https://player.vimeo.com/video/132819665" width="100%" height="100%" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
              </div>
            </section>
            <section className='block'>
              <h2>Интерактивная фотозона с управлением через iPad</h2>
              <p>Многие помнят маркетинговую компанию «Это твоя Coca-Cola». На стенде была фотозона посвященная ей. В качестве фона для фотографий был установлен макет бутылки с экраном на месте этикетки. Девушка-промоутер с помощью планшета вводила имя гостя. После, фотограф делал несколько снимков, которые отправлялись на почту гостю.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_bottle1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_bottle2.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_bottle3.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_bottle4.jpg'/></div>
              </Swiper>
              <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
              <p className='fact'><span>726</span><br/>фотографий на фоне бутылки отправили гости за время выставки</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola-bottle-control_1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola-bottle-control_2.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola-bottle-control_3.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola-bottle-control_4.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola-bottle-control_5.jpg'/></div>
              </Swiper>
            </section>
            <section className='block'>
              <h2>Тач-экран с презентациями</h2>
              <p>Coca-cola подготовила 7 обучающих презентаций полезных для бизнеса. В&nbsp;стены стенда вмонтировали 3 тач-панели, с помощью которых гости знакомились с содержанием презентаций и, при желании, высылали их себе на почту. В режиме ожидания на экранах проигрывались рекламные ролики бренда.</p>
              <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_infotouchwall1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_infotouchwall2.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_infotouchwall3.jpg'/></div>
              </Swiper>
              <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
              <p className='fact'><span>220</span><br/>презентаций отправили гости за время выставки</p>
            </section>
            <section className='block'>
              <h2>Анкета на iPad</h2>
              <p>Для сбора данных с посетителей стенда, в стойку рецепции вмонтировали планшеты с анкетами. Я разработал для них простой и лаконичный дизайн.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_questionnaire1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/cola/coca-cola_questionnaire2.jpg'/></div>
              </Swiper>
              <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
              <p className='fact'><span>421</span><br/>анкет заполнили гости за время выставки</p>
            </section>
          </div>
        </article>
      </div>
    )
  }
}
