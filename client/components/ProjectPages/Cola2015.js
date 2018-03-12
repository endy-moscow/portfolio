import React from 'react'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
import {connect} from 'react-redux'
import Swiper from 'react-id-swiper'
import Tile from '../tile/tile.jsx'
import store from '../../store/index'

function Page(props) {

  // find current project
  let projects = props.projects.filter(function(project) {
    return project.keyword == 'cola2015';
  })
  let currentProject = projects[0]
  console.log(currentProject)

  //swiper settings
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
  return (<div className='canvas'>

    <Header
      title='Интерфейсы для стенда Coca-cola Helenic на Metro Expo 2015: фотозона, тач-экран и анкета'
      imgUrl='http://postpeople.ru/media/cola2015/cover.gif'
      />
    <p><a href='#yo'>visuals.ru</a></p>

    <article>
      <div className='content_container'>

        <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
        <p>Точечное воздействие нетривиально. Маркетинговая коммуникация существенно индуцирует связанный PR. До недавнего времени считалось, что мониторинг активности непосредственно усиливает инвестиционный продукт.</p>
        <h2>Бутылка с именем</h2>
        <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>
        <Swiper{...params}>
          <div className='article_img' style={{backgroundImage: 'url(http://postpeople.ru/media/cola2015/coca-cola_bottle1.jpg)'}}></div>
        </Swiper>
        <p className='p2' id='yo'>За фотографии спасибо <a href='http://visuals.ru'>visuals.ru</a></p>
        <h2>Бутылка с именем</h2>
        <p>Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.</p>


      </div>
    </article>
  </div>);
}
function mapStateToProps(state) {
  return {projects: state.projects};
}

const Cola2015 = connect(mapStateToProps)(Page)
export default Cola2015
