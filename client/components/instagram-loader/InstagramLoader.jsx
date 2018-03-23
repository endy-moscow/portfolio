'use strict'

import React, { Component } from "react";
import InstagramEmbed from 'react-instagram-embed'


export default class InstagramLoader extends Component {

  constructor(props) {
    super(props)

    this.state = {
        isLoaded: false
    }

    this._onLoad = this._onLoad.bind(this)
    this._loadInstagram = this._loadInstagram.bind(this)
  }

  _loadInstagram() {
    if (!window.instgrm) {
      const s = document.createElement('script')
      s.async = s.defer = true
      s.src = `https://platform.instagram.com/en_US/embeds.js`
      s.id = 'react-instagram-embed-script'
      s.onload = this._onLoad
      const body = document.body || null
      if (body) {
        body.appendChild(s)
      }
    }
  }

  _onLoad() {
    console.log('Loaded instagram')
    this.setState({
      isLoaded: true
    })
  }

  componentDidMount() {
    this._loadInstagram()
  }

  render() {
    const {
      url = '',
      hideCaption = false,
      maxWidth = '',
      containerTagName = 'div',
      protocol = '',
      onLoading = () => {},
      onSuccess= () => {},
      onAfterRender=() => {},
      onFailure=() => {},

    } = this.props
    const { isLoaded } = this.state

    const css = {
      outer: {},
      blank: {
        padding: 12
      }
    }

    return (
      <div style={css.outer}>
        {url.length > 0 && isLoaded ? (
          <InstagramEmbed key={url}
            url={url}
            hideCaption={hideCaption}
            maxWidth={maxWidth}
            containerTagName={containerTagName}
            protocol={protocol}
            onLoading={onLoading}
            onSuccess={onSuccess}
            onAfterRender={onAfterRender}
            onFailure={onFailure}
          />
        ) : (
          <div style={css.blank}>Instagram URL not provided</div>
        )}
      </div>
    )
  }
}
