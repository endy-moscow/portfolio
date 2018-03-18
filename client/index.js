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
import Cola2015 from './components/ProjectPages/Cola2015'
import SevenApps from './components/ProjectPages/7apps'
import Suzuki from './components/ProjectPages/suzuki'
import Geely from './components/ProjectPages/geely2015'
import Transport from './components/ProjectPages/mt'
import Tula14 from './components/ProjectPages/tula14'
import RusImp from './components/ProjectPages/mri'

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>

      <Route exact path="/" component={Home}/>
      <Route path="/cola" component={Cola2015}/>
      <Route path="/7apps" component={SevenApps}/>
      <Route path="/suzuki" component={Suzuki}/>
      <Route path="/geely" component={Geely}/>
      <Route path="/moscow-transport-na-urbanforum-2017" component={Transport}/>
      <Route path="/tula14" component={Tula14}/>
      <Route path="/rusimp" component={RusImp}/>

      <Route component={Page404}/>

    </Switch>
  </Router>
</Provider>, document.getElementById('root'))
