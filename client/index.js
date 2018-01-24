import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './store/index'
import Home from './Home'
// <Route exact path='/' component={Home} />
// <Switch>

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>,
  document.getElementById('root')
)
store.subscribe((render) => {
  console.log(store.getState())
})
