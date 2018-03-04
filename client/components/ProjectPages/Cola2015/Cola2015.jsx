import React from 'react'
import Menu from '../../menu/menu.jsx'
import Header from '../../header/header.jsx'
import Article from '../../article/article.jsx'
export default class Cola2015 extends React.Component {
  render() {
    return (
      <div className='canvas'>
        <Header
          keyword='cola2015'
          title='Title for Cola2015'
        />
        <Article />
      </div>
    )
  }
}
