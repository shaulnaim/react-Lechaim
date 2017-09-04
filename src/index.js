import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import lechaimStore from './store/lechaimStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={lechaimStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
