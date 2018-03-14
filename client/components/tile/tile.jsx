import React from 'react'

export default class Tile extends React.Component {
  render() {
    return (
      <div>
        <div
          className={'tile_wrapper'}
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
        </div>
      </div>
    )
  }
}
