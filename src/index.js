import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './containers/App/App';
import {store} from './store/store'
import './styles/index.css'
import './styles/consts.css'

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
