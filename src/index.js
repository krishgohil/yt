import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './_base.scss';
import { Provider } from 'react-redux'
import store from './redux/store';
import 'react-lazy-load-image-component/src/effects/blur.css';

// to use usehistory hook in app.js we need browserouter in index.js and we also need to remove router tag from app.js
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


