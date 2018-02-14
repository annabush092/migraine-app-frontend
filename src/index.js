import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import App from './containers/App';
import {store} from './reducers/rootReducer.js'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
