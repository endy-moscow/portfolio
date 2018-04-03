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
          title='Инсталляции для 1-го и 2-го экспозиционного уровня Тульского оружейного музея'
          bgImage='http://endy.moscow/media/tula/inner-cover.jpg'
          />
        <article>
          <div className='content_container'>
            <p>В феврале 2015 года в Тульском оружейном музее открылась первая часть новой постоянной экспозиции «История стрелкового и холодного оружия с XIV века до современности».</p>
            <p>Оформлением экспозиции вел <a href='http://art-courier.ru'>Арт-курьер</a>, мультимедийной частью занималось агентство <a href='http://visuals.ru'>Visuals</a>. А я сделал интерфейсы для некоторых инсталляций.</p>

            <h2>Электронные этикетки</h2>
            <p>Экспонаты сопровождают электронные этикетки. Главные преимущества которых, перед бумажными – использование мультимедийного контента, интерактивность, а так же удобство обновления.</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/label1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/label2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/label3.jpg'/></div>
            </Swiper>
            <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
            <p>Вот так выглядели макеты:</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/label_1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/label_2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/label_3.jpg'/></div>
            </Swiper>

            <h2>Энциклопедия оружия</h2>
            <p>Интерактивный стол с информацией об оружии, термине или личности, значимой в контексте экспозиции.</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-3.jpg'/></div>
            </Swiper>
            <p>Макеты энциклопедии:</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-draft-1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-draft-2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-draft-3.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-draft-4.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-draft-5.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/enc-draft-6.jpg'/></div>
            </Swiper>

            <h2>Фотокиоск</h2>
            <p>На память о посещение музея посетитель мог сделать коллаж в образе стрельца, гренадера, фузелера или другого персонажа из 9-и. Коллаж отправляется на электронную почту.</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/imagine-1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/imagine-2.jpg'/></div>
            </Swiper>
            <p>Макеты:</p>
            <Swiper{...params}>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_1.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_2.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_3.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_4.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_5.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_6.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_7.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_8.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_9.jpg'/></div>
              <div style={{ textAlign:'center' }}><img height='100%' width='auto' src='http://endy.moscow/media/tula/photo_slide_10.jpg'/></div>
            </Swiper>

            <h2>Викторина</h2>
            <p>В викторине собраны общие вопросы о военной истории.</p>
            <img height='auto' width='100%' src='http://endy.moscow/media/tula/quiz-photo.jpg'/>
            <p className='source'>Фотография с <a href='http://museum-arms.ru/'>сайта музея</a></p>
            <p>Макеты викторины:</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/quiz-1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/quiz-2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/quiz-3.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/tula/quiz-4.jpg'/></div>
            </Swiper>
          </div>
        </article>
      </div>
    )
  }
}
