import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index';
import WebPage from './components/web-page.jsx';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById('root')
);
