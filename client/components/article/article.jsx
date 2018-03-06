import React from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'

export default class Article extends React.Component {
  render() {
    const params = {
          ContainerEl: 'section',
          WrapperEl: 'section',
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          grabCursor: true,
          loop: true,
        }
    return (
      <article>
        <div className='content_container'>
          <div className='article'>
            <h2>Title</h2>
            <p className='article_txt'>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
            </p>
        </div>
        <Swiper {...params}>
          <div className={'article-img '+ this.props.keyword +'-img1'}/>
          <div className={'article-img '+ this.props.keyword +'-img2'}/>
          <div className={'article-img '+ this.props.keyword +'-img3'}/>
        </Swiper>
        <div className={'p2'}>источник: <a href='http://google.com'>google</a></div>
        <div className='content_container'>
            <h2>Title</h2>

          </div>
        </div>
      </article>
    )
  }
}
