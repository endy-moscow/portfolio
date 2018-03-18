import React from 'react'
import Tile from '../tile/tile.jsx'

export default class Gallery extends React.Component {
  render() {
    return (
        <div className='gallery'>

          <Tile
            link='rusimp'
            title='Мультимедийная зона в Музее русского импрессионизма'
            gif='http://postpeople.ru/media/mri/mri.gif'
            color='rgba(255, 94, 0, .95)'/>

          <Tile
            link='cola'
            title='Интерфейсы для стенда Coca&#x2060;-&#x2060;cola&nbsp;Hellenic на&nbsp;Metro&nbsp;Expo&nbsp;2015'
            gif='http://postpeople.ru/media/cola2015/cover.gif'
            color='rgba(199, 0, 23, .95)'/>

          <Tile
            link='7apps'
            title='Баннеры на CSS и jQuery для игр студии 7apps'
            gif='http://postpeople.ru/media/7apps/cover.gif'
            color='rgba(72, 180, 80, .95)'/>

          <Tile
            link='geely'
            title='Интерфейсы для стенда Geely на&nbsp;выставке внедорожников Off&#x2060;-&#x2060;road&nbsp;2015'
            gif='http://postpeople.ru/media/geely2015/cover.gif'
            color='rgba(39, 86, 132, .95)'/>

          <Tile
            link='suzuki'
            title='Интерфейсы на стенде Suzuki на Московском международном автомобильном салоне&nbsp;2014'
            gif='http://postpeople.ru/media/suzuki/suzuki.gif'
            color='rgba(0, 51, 153, .95)'/>

          <Tile
            link='moscow-transport-na-urbanforum-2017'
            title='Московский транспорт на UrbanForum 2017'
            gif='http://postpeople.ru/media/mt/mt.gif'
            color='rgba(217, 35, 46, .95)'/>

          <Tile
            link='tula14'
            title='Инсталляции для Тульского оружейного музея 2014 (нижние уровни)'
            gif='http://postpeople.ru/media/tula14/tula.gif'
            color='rgba(118, 23, 3, .95)'/>

          <Tile
            link='phoenix-contact'
            title='Phoenix Contact'
            gif='http://postpeople.ru/media/tula14/tula.gif'
            color='rgba(118, 23, 3, .95)'/>



        </div>
    )
  }
}
