import React from 'react'
import Header from '../header/header.jsx'
import Menu from '../menu/menu.jsx'
import Gallery from '../gallery/gallery'
import Filter from '../filter/filter'

export default class About extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Menu/>
        <Header bgImage='http://postpeople.ru/media/me.gif'
            title='Я Сергей Дузенко, digital-дизайнер из Москвы'/>
        <article>
          <div className='content_container'>
            <section className='block'>
              <p>Специализируюсь на дизайне интерфейсов. Интересны и другие направления: брендинг, дизайн презентаций, дизайн навигации, гейм-дизайн, печатные материалы. Умею работать с растровой и векторной графикой, 3d и анимацией. Умею обрабатывать и структурировать информацию, работать с текстом, как в плане типографики, так и в плане смысла. Умею аргументировать свои решения.</p>
              <p>Есть опыт проектной работы с государственными компаниями, такими как Московский транспорт и Тульский музей оружия. Работал c крупными частными компаниями, типа Coca-cola, Suzuki и Транснефть. И небольшими стартапами — Atlas Biomed, Visuals, Напитки «У».</p>
              <p>Хорошо знаю Photoshop, Illustrator и Sketch. Неплохо — After Effects, InDesign, Cinema 4d, Unity 3d и SpeedTree. Могу разобраться в чем-то новом.</p>
              <p>Хорошо понимаю HTML, CSS. Базово знаю JS. Есть опыт работы с командной строкой, пакетными менеджерами, Webpack, React, Redux, Gulp, Pug (Jade), SCSS/SASS/LESS. Умею пользоваться Git.</p>
            </section>
          </div>
        </article>
      </div>
    )
  }
}
