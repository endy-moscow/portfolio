import React from 'react'
import { Link } from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Menu extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        value: 'endy124@gmail.com',
        copied: false,
      }
      this.onCopy = this.onCopy.bind(this)
  }
  onCopy(state) {
    setTimeout(function(state) {
      this.setState({copied: false})
    }.bind(this), 5000, this.setState({copied: true}))
  }
  render() {
    return (
      <div className='menu'>
        <a className='menu_link' href='mailto:endy124@gmail.com'>{this.state.value}</a>
      </div>
    )
  }
}
// прототип иконки копирования
// <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
//   {this.state.copied ? <span className='copyIcon' style={{background: 'green'}}/> : <span className='copyIcon' style={{background: 'red'}}/>}
// </CopyToClipboard>
