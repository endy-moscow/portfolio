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
import Cola from './components/ProjectPages/cola'
import SevenApps from './components/ProjectPages/7apps'
import Suzuki from './components/ProjectPages/suzuki'
import Geely from './components/ProjectPages/geely2015'
import Transport from './components/ProjectPages/mt'
import Tula from './components/ProjectPages/tula'
import RusImp from './components/ProjectPages/mri'
import About from './components/About/About.jsx'
import Visuals from './components/ProjectPages/visuals'

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/cola" component={Cola}/>
      <Route path="/7apps" component={SevenApps}/>
      <Route path="/suzuki" component={Suzuki}/>
      <Route path="/geely" component={Geely}/>
      <Route path="/moscow-transport-na-urbanforum" component={Transport}/>
      <Route path="/tula" component={Tula}/>
      <Route path="/rusimp" component={RusImp}/>
      <Route path="/visuals" component={Visuals}/>

      <Route component={Page404}/>

    </Switch>
  </Router>
</Provider>, document.getElementById('root'))
