import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import Swiper from 'react-id-swiper'
import InstagramEmbed from 'react-instagram-embed'
import params from './params'

export default class Home extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Header
          title='Мультимедийная зона в Музее русского импрессионизма'
          imgUrl='http://postpeople.ru/media/mri/cover.jpg'
          />
        <article>
          <div className='content_container'>
            <p>Музей был открыт в мае 2016 года на территории бывшей кондитерской фабрики Большевик. Подробности можно узнать <a href='http://rusimp.su'>на сайте музея</a>.</p>
            <p>Над проектом интерактивной зоны со стороны музея работала команда экспертов. Они совместно с <a href='http://visuals.ru'>агентством Visuals</a> придумали конструкции и идеи для инсталляций. Архитектором конструкций выступил <a href='http://osin.design/'>Михаил Осин</a>.</p>
            <p>К началу проекта у музея уже был логотип и фирменный стиль. Мне оставалось только продумать реализацию пользовательского интерфейса и донести идеи до гостей музея.</p>
            <p>В интернете опубликовано множество развернутых отзывов и рецензий о музее. Например, в <a href='https://www.google.ru/search?newwindow=1&dcr=0&source=hp&ei=CAixWtNN4sPpBKDuo9gL&q=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9+%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D0%B8%D0%BC%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B8%D0%B7%D0%BC%D0%B0&oq=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&gs_l=psy-ab.3.0.35i39k1j0i67k1j0l8.3071.4547.0.5996.8.7.0.0.0.0.71.385.6.7.0....0...1c.1.64.psy-ab..1.7.442.6..0i131i67k1j0i20i263k1j0i131k1.60.lm93bye8mq4#lrd=0x46b5498a41eb933b:0x80fa6271fb1d6e4a,1,,,'>google</a>, на <a href='https://www.tripadvisor.ru/Attraction_Review-g298484-d10379451-Reviews-Museum_of_Russian_Impressionism-Moscow_Central_Russia.html'>tripadvisor</a> или <a href='https://www.afisha.ru/msk/museum/20360/'>афише.</a></p>
            <h2>Инсталляция «Цвет и свет»</h2>
            <p>Содержание можно условно разделить на две части: теоретическую и практическую.</p>
            <p>В теоретической, после краткой предыстории, посетителю предлогается построить цветовой круг по Йоханессу Иттену, разобраться чем отличается аддитивное смешение цветов от субтрактивного и как это используют художники.</p>
            <p>В практической части гостю предлагается раскрасить бабочку на основе полученных знаний и выпустить её летать в голографическом экране. Так же в этой части можно посмотреть как меняется падающий цвет в зависивости от формы предмета, его цвета, угла и цвета источника.</p>
            <p>Стоит отметить, что я не делал симуляции смешения краски и анимации бабочки. Я принимал участие только в создании идеи и давал комментарии к промежуточным версиям.</p>
            <p>Работу инсталляции можно увидеть во многих инстаграм-постах посетителей музея. Я выбрал несколько:</p>
          </div>
          <div className='insta3'>
            <InstagramEmbed
              url='https://instagr.am/p/BIDj7KYgQhw/'
              maxWidth={320}
              hideCaption={false}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/BIQRoLdARFF/'
              maxWidth={320}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/BJF2l7sBC4o/'
              maxWidth={320}
              containerTagName='div'
            />
          </div>
          <div className='content_container'>
            <h2>Диорама</h2>
            <p>С появлением фотографии cтановилось понятно, что соревноваться с ней в реализме не имеет смысла. Передовые художники сконцентрировались на передаче впечатлений. В это время стали появлять краски в тюбиках и переносные мольберты — этюдники, что позволило выходить на пленэр, чтобы писать природу с натуры, здесь и сейчас.</p>
            <p>Инсталляция проявляет различия между рабочим окружением старых мастеров и импрессионистов на примере студии Ильи Репина и работе на пленэре Игоря Грабаря.</p>
            <p>Несколько постов из инстаграм:</p>
          </div>
          <div className='insta3'>
            <InstagramEmbed
              url='https://instagr.am/p/BRYfv-hALJ6/'
              maxWidth={320}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/BZDQbfvgkeS/'
              maxWidth={320}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/BPzzJU8FlyP/'
              maxWidth={320}
              containerTagName='div'
            />
          </div>
          <div className='content_container'>
            <h2>Как рисуются картины</h2>
            <p>Старые мастера писали слоями, долго ждали пока каждый из них просохнет. Импрессионисты чаще писали одним слоем, грубями мазками.</p>
            <p>Отличий много. Инсталляция показывает разницу между подходами. Художник <a href='https://www.instagram.com/l_m_ll_k_l/'>Марсель Хасанов</a> нарисовал две картины. Работы сняли сверху. Управление с помощью колеса-контроллера, </p>
          </div>
          <div className='insta3'>
            <InstagramEmbed
              url='https://instagr.am/p/BgabKzhF2Dh/'
              maxWidth={320}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/Bb842CTB9Oe/'
              maxWidth={320}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/BbpS6N8j4ii/'
              maxWidth={320}
              containerTagName='div'
            />
          </div>
          <div className='content_container'>
            <h2>Инструменты художника</h2>
            <p>Инсталляция проявляет различия между рабочим окружением старых мастеров и импрессионистов на примере студии Ильи Репина и работе на пленэре Игоря Грабаря.</p>
            <p>С появлением фотографии у художника появились новые вызовы. Становилось понятно, что соревноваться в точности передачи картинки с фотографией не имеет смысла. Передовые художники сконцентрировались на передаче впечатлений. К этому времени изобрели краски в тюбиках и переносные мольберты — этюдники, что позволило писать природу с натуры, здесь и сейчас.</p>
          </div>
          <div className='insta3'>
            <InstagramEmbed
              url='https://instagr.am/p/BajbVs6DjvY/'
              maxWidth={320}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/BX663yDl3x9/'
              maxWidth={320}
              containerTagName='div'
            />
            <InstagramEmbed
              url='https://instagr.am/p/BO2uGdmActU/'
              maxWidth={320}
              containerTagName='div'
            />
          </div>
          <div className='content_container'>
            <h2>Бутылка с именем</h2>
            <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
          </div>
        </article>
      </div>
    )
  }
}
