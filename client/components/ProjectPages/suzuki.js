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
          title='Интерфейсы на стенде Suzuki на Московском международном автомобильном салоне&nbsp;2014'
          bgImage='http://endy.moscow/media/suzuki/cover3.jpg'/>
        <article>
          <div className='content_container'>
            <section className='block'>
              <p>Каждые 2 года в Москве проводится Международный Автомобильный Салон. В 2014 году я проектировал инсталляции для стенда Suzuki. </p>
            </section>
            <section className='block'>
              <h2>Планшеты рядом с автомобилями</h2>
              <p>Рядом с каждым автомобилем был установлен планшет, который содержал информацию о возможных цветах, характеристики, специальные предложения и маркетинговые фотографии автомобилей.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/ipad_auto1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/ipad_auto2.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/ipad_auto3.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/ipad_auto4.jpg'/></div>
              </Swiper>
              <Swiper {...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/suzuki_1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/suzuki_2.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/suzuki_3.jpg'/></div>
              </Swiper>
              <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
            </section>
            <section className='block'>
              <h2>Планшеты рядом с мотоциклами</h2>
              <p>Рядом с мотоциклами так же были установлены планшеты. В отличии от автомобильных, они совмещали в себе все модели сразу. Информация о каждой модели была подана на одном экране.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/ipad_moto1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/ipad_moto2.jpg'/></div>
              </Swiper>
            </section>
            <section className='block'>
              <h2>Тач-стол для отправки фотографий</h2>
              <p>На стенде организовали фотосессию. Cделали фон с изображением городской трассы, поставили спорт-байк и фотографа с камерой. Сделанные фотографии загружались на тач-стол. Гости стенда отправляли их на электронную почту. Либо делали <a href='https://www.instagram.com/explore/tags/suzukimias2014/'>пост в социальные сети с хеш-тегом #SuzukiMIAS2014</a>, тем самым принимали участие в конкурсе.</p>
              <Swiper{...params}>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/suzuki_social1.jpg'/></div>
                <div><img height='auto' width='100%' src='http://endy.moscow/media/suzuki/suzuki_social2.jpg'/></div>
              </Swiper>
              <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
            </section>
          </div>
        </article>
      </div>);
  }
}
