import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import Swiper from 'react-id-swiper'
import InstagramLoader from '../instagram-loader/InstagramLoader.jsx'
import params from './params'

export default class Page extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Menu/>
        <Header
          title='Московский транспорт на UrbanForum 2015&nbsp;-&nbsp;2017'
          bgImage='http://endy.moscow/media/mt/cover.gif'/>
        <article>
          <div className='content_container'>
            <p>В 2015, 2016 и 2017 годах я спроектировал интерфейс для нескольких инсталляций для стенда Московского Транспорта на <a href='http://mosurbanforum.ru/'>Moscow Urban Forum.</a></p>
            <h2>Фотомеханика</h2>
            <p>Посетитель стенда выбирает объект с которым хочет сфотографироваться. Запускает обратный отсчёт: у гостя есть 10 секунд чтобы приготовится к фотографии. Выбранный предмет появляется между разведенными руками. В итоге получается фотография, которую он может распечатать прямо на стенде и отправить на e-mail.</p>
            <p>В первой версии, в 2015 году, гости фотографировались с картой «Тройка» которую активно популяризировали и в других инсталляциях на стенде.</p>
            <p>В следующем году был добавлен поезд Аэроэкспресс. А в 2017 последние модели общественного городского транспорта.</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mt/mt-photo1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mt/mt-photo2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mt/mt-photo3.jpg'/></div>
            </Swiper>
            <p className='source'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
          </div>
          <div className='content_container'>
            <h2>История развиятия московского наземного транспорта в фотографиях</h2>
            <div><img height='auto' width='100%' src='http://endy.moscow/media/mt/touch.jpg'/></div>
            <p className='source'>За фотографию спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
            <p>Для инсталляции клиент предоставил фотографии, видео и тексты. Мне оставалось всё «причесать» и продумать навигацию.</p>
            <Swiper{...params} className='shadow'>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mt/timeline1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mt/timeline2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mt/timeline3.jpg'/></div>
            </Swiper>
          </div>
        </article>
    </div>
    )
  }
}
