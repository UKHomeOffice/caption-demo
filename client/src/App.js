import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

import Layout from './containers/Layout';

let store = createStore(reducers, applyMiddleware(reduxThunk));

if (process.env.NODE_ENV === 'development') {
  // dev only
  store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
}

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
