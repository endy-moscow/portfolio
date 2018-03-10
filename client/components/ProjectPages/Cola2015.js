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
      keyword={currentProject.keyword}
      title={currentProject.title}
      imgUrl={currentProject.headerImg}
      />

    <article>
      <section className='content_container'>
        <p className='article_subject'>{currentProject.paragraph}</p>
      </section>

      {
        currentProject.content.map((content, index) => <section key={index} className='content_container'>

          <h2>{content.subtitle}</h2>

          {
            content.paragraph.map((content, index) => <p key={index} className='article_txt'>
              {content}
            </p>)
          }
          <Swiper{...params}>
              {
                content.image.map((content, index) => <div key={index} className='article_img' style={{backgroundImage: 'url('+content+')'}}>
                </div>)
              }
          </Swiper>

        </section>)
      }

      <section className='content_container'>
        <p className='article_thanks'>{currentProject.thanks[0]}</p>
        <p className='article_thanks'>{currentProject.thanks[1]}</p>
        <p className='article_thanks'>{currentProject.thanks[2]}</p>
      </section>
    </article>
  </div>);
}
function mapStateToProps(state) {
  return {projects: state.projects};
}

const Cola2015 = connect(mapStateToProps)(Page)
export default Cola2015
