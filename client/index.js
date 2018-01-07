import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import reducers from './reducers/index'
import Home from './components/Home.jsx'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

store.subscribe((render) => {
  console.log(store.getState())
})
