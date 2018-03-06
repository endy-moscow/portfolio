import React from 'react'
import Menu from '../../menu/menu.jsx'
import Header from '../../header/header.jsx'
import Swiper from 'react-id-swiper'

export default class Cola2015 extends React.Component {

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
      <div className='canvas'>
        <Header
          keyword='cola2015'
          title='Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
        />
      <article>
        <section className='content_container'>
            <br/>
            <br/>
            <br/>
            <h2>Связка экран-ipad</h2>
            <p className='article_txt'>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию.
            </p>
            <p className='article_txt'>
              Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
            </p>
            <br/>
            <br/>
            <Swiper {...params}>
              <div className={'article-img cola2015-img1'}/>
              <div className={'article-img cola2015-img2'}/>
              <div className={'article-img cola2015-img3'}/>
            </Swiper>
            <div className='p2'>Давно <a href='#'>выяснено</a></div>
            <br/>
            <br/>
              <h2>Title</h2>
              <p className='article_txt'>
                Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию.
              </p>
              <p className='article_txt'>
                Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
              </p>

              <br/>
              <br/>
              <Swiper {...params}>
                <div className={'article-img cola2015-img1'}/>
                <div className={'article-img cola2015-img2'}/>
                <div className={'article-img cola2015-img3'}/>
              </Swiper>
              <div className='p2'>Давно <a href='#'>выяснено</a></div>
              <br/>
              <br/>


          </section>
        </article>
      </div>
    )
  }
}
