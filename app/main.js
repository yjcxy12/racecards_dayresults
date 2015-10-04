import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';
import { createStore } from 'redux';

const store = createStore(rootReducer);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('sis-racecards-dayresults')
);