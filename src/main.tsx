import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './app/Posts';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Posts />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
