import React from 'react'
import { Link } from 'react-router-dom'


export default class Tile extends React.Component {
  render() {
    return (
      <Link
        to={'/' + this.props.keyword}
        className={'tile_wrapper tile_wrapper-'+this.props.keyword}
        style={{backgroundImage:'url('+this.props.cover+')'}}>
        <div
          className={'fade'}
          style={{backgroundColor: this.props.color}}>
          <h3>
            <span className='tile_title'>
              {this.props.title}
            </span>
          </h3>
        </div>
      </Link>
    )
  }
}
