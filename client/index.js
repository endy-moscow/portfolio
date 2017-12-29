import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import WebPage from './components/WebPage';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
//
// import App from './App';
//
// const initialState = [
//   'TRACK 1',
//   'TRACK 2',
//   'TRACK 3'
// ]
//
// function playlist(state = initialState, action) {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ];
//   }
//   return state;
// }
//
// const store = createStore(playlist);
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = trackName;
//     list.appendChild('li');
//   });
// })
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// addTrackBtn.addEventListener('click', () => {
//   const trackName = document.querySelectorAll('.trackInput')[0].value;
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// })
//
//
// // render(AppRouter);
// // if (module.hot) {
// //   module.hot.accept('./routes', () => {
// //     require('./routes');
// //     render(AppRouter);
// //   });
// // }
