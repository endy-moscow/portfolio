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
          title='Мультимедийная зона в Музее русского импрессионизма'
          bgImage='http://endy.moscow/media/mri/cover.jpg' />
        <article>
          <div className='content_container'>
            <p><a href='http://rusimp.su'>Музей русского импрессионизма</a> открыт в мае 2016 года на территории бывшей кондитерской фабрики Большевик. Отзывы можно прочитать в <a href='https://www.google.ru/search?newwindow=1&dcr=0&source=hp&ei=CAixWtNN4sPpBKDuo9gL&q=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9+%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D0%B8%D0%BC%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B8%D0%B7%D0%BC%D0%B0&oq=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&gs_l=psy-ab.3.0.35i39k1j0i67k1j0l8.3071.4547.0.5996.8.7.0.0.0.0.71.385.6.7.0....0...1c.1.64.psy-ab..1.7.442.6..0i131i67k1j0i20i263k1j0i131k1.60.lm93bye8mq4#lrd=0x46b5498a41eb933b:0x80fa6271fb1d6e4a,1,,,'>google</a>, на <a href='https://www.tripadvisor.ru/Attraction_Review-g298484-d10379451-Reviews-Museum_of_Russian_Impressionism-Moscow_Central_Russia.html'>tripadvisor</a> или <a href='https://www.afisha.ru/msk/museum/20360/'>афише.</a></p>
            <p>Над проектом интерактивной зоны со стороны музея работала команда экспертов. Они совместно с <a href='http://visuals.ru'>агентством Visuals</a> придумали конструкции и идеи для инсталляций. Архитектором конструкций выступил <a href='http://osin.design/'>Михаил Осин</a>.</p>
            <p>К началу проекта у музея уже был логотип и фирменный стиль. Мне оставалось придумать и реализовать пользовательский интерфейс, сохранить и улучшить идеи команды.</p>
            <p>Видео снятое агентством Visuals:</p>
            <div className='article_video'>
              <iframe src="https://player.vimeo.com/video/180589885" width="100%" height="100%" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
            </div>
            <h2>Цвет и свет</h2>
            <p>Идея инсталляции дать гостям музея базовые знание о цвете, свете и форме. Конструкция состоит из двух частей. Снизу расположен планшет, через который пользователь взаимодействует с интсалляцией, а сверху голографический экран, который показывает всю «магию».</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mri/color_and_light_1.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mri/color_and_light_2.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mri/color-mixing.jpg'/></div>
            </Swiper>
            <p className='comment'>Макеты для нижнего экрана</p>
            <p>Содержание разделено на две части. Первая часть посвящена цвету. После краткой предыстории, посетитель строит цветовой круг Йоханнеса Иттена и знакомится с популярными цветовыми сочетаниями на его основе. Далее, на основе полученных знаний, раскрашивает бабочку и выпустить её летать в голографический экран.</p>
            <p>Вторая часть посвящена светотени. Гость знакомится с основными понятиями. После этого, на примере глянцевого и матого шаров знакомится с ними на практике</p>
            <p>Работу инсталляции можно увидеть во многих инстаграм-постах посетителей музея. Я выбрал несколько:</p>
          </div>
          <div className='instagram_container'>
            <InstagramLoader
              url='https://instagr.am/p/BIDj7KYgQhw/'
              hideCaption={false}
              containerTagName='div'
            />
            <InstagramLoader
              url='https://instagr.am/p/BIQRoLdARFF/'
              containerTagName='div'
            />
            <InstagramLoader
              url='https://instagr.am/p/BJF2l7sBC4o/'
              containerTagName='div'
            />
          </div>
          <div className='content_container'>
            <h2>Диорама</h2>
            <p>С появлением фотографии cтановилось понятно, что соревноваться с ней в реализме не имеет смысла. Передовые художники сконцентрировались на передаче впечатлений. В это время стали появлять краски в тюбиках и переносные мольберты — этюдники, что позволило выходить на пленэр, чтобы писать природу с натуры, здесь и сейчас.</p>
            <p>Инсталляция проявляет различия между рабочим окружением старых мастеров и импрессионистов на примере студии Ильи Репина и работе на пленэре Игоря Грабаря.</p>
            <p>Несколько постов из инстаграм:</p>
          </div>
          <div className='instagram_container'>
            <InstagramLoader
              url='https://instagr.am/p/BRYfv-hALJ6/'
              containerTagName='div'
              maxWidth={360}
            />
            <InstagramLoader
              url='https://instagr.am/p/BZDQbfvgkeS/'
              containerTagName='div'
              maxWidth={360}
            />
            <InstagramLoader
              url='https://instagr.am/p/BPzzJU8FlyP/'
              containerTagName='div'
              maxWidth={360}
            />
          </div>
          <div className='content_container'>
            <h2>Как рисуются картины</h2>
            <p>В чем разница в написание картин старыми мастерами и импрессионистами? Для этой инсталляции <a href='https://www.instagram.com/l_m_ll_k_l/'>Марсель Хасанов</a> написал две картины. Одну в стиле старых мастеров, другую в стиле импрессионизма. Процесс его работы снимался на камеру.</p>
            <p>В интерфейсе ролики показаны в ускоренном видео, которое сопровождено поясняющими подсказками. А с помощью колеса-контроллера и элементов интерфейса доступно управление скоростью и переход по этапам работы.</p>
            <Swiper{...params}>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mri/main-choice.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mri/all-visible.jpg'/></div>
              <div><img height='auto' width='100%' src='http://endy.moscow/media/mri/all-hide.jpg'/></div>
            </Swiper>
            <p className='comment'>1. Выбрать раздел можно не только с помощью касания экрана, но и с помощью колеса-контроллера. <br/> 2. Экранные контроллеры. <br/> 3. Все их можно свернуть.</p>
          </div>
          <div className='instagram_container'>
            <InstagramLoader
              url='https://instagr.am/p/Bb842CTB9Oe/'
              containerTagName='div'
            />
            <InstagramLoader
              url='https://instagr.am/p/BHiLdTADWIl/'
              containerTagName='div'
            />
            <InstagramLoader
              url='https://instagr.am/p/BgabKzhF2Dh/'
              containerTagName='div'
            />
          </div>
          <div className='content_container'>
            <h2>Инструменты художника</h2>
            <p>Что такое мастихин? Как используют веерную кисть? Что такое темпера? Ответы на эти вопросы можно найти в инсталляции «Инструменты художника». Для неё я придумал композицию предметов внутри бокса и дизайн всего происходящего на экране, включая анимацию.</p>
            <p>Инструменты стоят за прозрачным экраном и продублированны на полке ниже, так что их можно потрогать. Инсталляция устроена таким образом, что касание предмета на нижей полке активирует рассказ о нём.</p>
          </div>
          <div className='instagram_container'>
            <InstagramLoader
              url='https://instagr.am/p/BajbVs6DjvY/'
              containerTagName='div'
            />
            <InstagramLoader
              url='https://instagr.am/p/BX663yDl3x9/'
              containerTagName='div'
            />
            <InstagramLoader
              url='https://instagr.am/p/BO2uGdmActU/'
              containerTagName='div'
            />
          </div>
          <div className='content_container'>
            <h2>Карта русского импрессионизма</h2>
            <p>Инсталляция наглядно показывает, что русский импрессионизм выходит далеко за пределы России. Многие художники были в эмиграции, путешествовали или были в рабочей командировке. Точки, раскиданные по всему миру, обозначают места где художники писали свои картины. Это интересно в первую очередь с точки зрения того, что на этих картинах изображены эти самые места.</p>
            <img height='auto' width='100%' src='http://endy.moscow/media/mri/map.jpg'/>
            <p className='source'>За фотографию спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
          </div>
        </article>
      </div>
    )
  }
}
