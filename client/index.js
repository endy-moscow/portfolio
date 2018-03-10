import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './style.scss'
import store from './store/index'
import Home from './components/Home/Home.jsx'
import Page404 from './components/404Page/404.jsx'
import Cola2015 from './components/ProjectPages/Cola2015.js'

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cola2015" component={Cola2015}/>
      <Route component={Page404}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'))
