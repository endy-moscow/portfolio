import React from 'react'
import Menu from '../../menu/menu.jsx'
import Header from '../../header/header.jsx'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'
import Tile from '../../tile/tile.jsx'
import store from '../../../store/index'

function Page (props) {
    let projects = props.projects
    let positive = projects.filter(function(project) {
      return project.keyword == 'Cola2015';
    })
    console.log(positive)
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
        <div className='canvas'>
          <article>
            <section className='content_container'>
              <h2>Связка экран-ipad</h2>
              <p className='article_txt'>
                Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию.
              </p>
              <p className='article_txt'>
                Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
              </p>
              <Swiper {...params}>
                <div className={'article-img cola2015-img1'}/>
                <div className={'article-img cola2015-img2'}/>
                <div className={'article-img cola2015-img3'}/>
              </Swiper>
              <div className='p2'>Давно <a href='#'>выяснено</a></div>
              <h2>Title</h2>
              <p className='article_txt'>
                Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию.
              </p>
              <p className='article_txt'>
                Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
              </p>
              <Swiper {...params}>
                <div className={'article-img cola2015-img1'}/>
                <div className={'article-img cola2015-img2'}/>
                <div className={'article-img cola2015-img3'}/>
              </Swiper>
              <div className='p2'>Давно <a href='#'>выяснено</a></div>
            </section>
          </article>
        </div>

    );
}
function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}
const Cola2015 = connect(mapStateToProps)(Page)
export default Cola2015
