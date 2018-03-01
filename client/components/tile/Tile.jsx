import React from 'react'
import { Link } from 'react-router-dom'


export default class Tile extends React.Component {

  render() {
    return (
      <Link to={'/' + this.props.keyword + this.props.date} className={'tile_wrapper tile_wrapper-'+this.props.keyword}>
        <div className={'fade fade-'+this.props.keyword}>
          <div className='title'>{this.props.title}</div>
        </div>
      </Link>
    )
  }
}
