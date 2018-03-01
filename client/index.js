import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'normalize.css'
import './style.scss'
import store from './store/index'
import Home from './components/Home.jsx'
import Page404 from './components/404.jsx'
import Cola2015 from './components/Cola2015.jsx'

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cola2015" component={Cola2015}/>
      <Route component={Page404}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'))
