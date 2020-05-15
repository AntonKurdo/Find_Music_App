import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";
import reducer from './reducers/reducer';

import { watchLoadData } from './sagas/sagaMusic';

 const logger = createLogger();
 const sagaMiddleware = createSagaMiddleware();

 const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));


sagaMiddleware.run(watchLoadData)
 
ReactDOM.render(
  <React.StrictMode>
   <Router>
      <Provider store = {store}>     
          <App />
      </Provider>
    </Router>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

