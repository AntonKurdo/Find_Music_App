import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { HashRouter as Router } from "react-router-dom";
import reducer from './reducers/reducer';

import { watchLoadData } from './sagas/sagaMusic';
import { watchLoadData1 } from './sagas/sagaMusic';

 const logger = createLogger();
 const sagaMiddleware = createSagaMiddleware();

 const store = createStore(reducer, compose(applyMiddleware(logger, sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


sagaMiddleware.run(watchLoadData)
sagaMiddleware.run(watchLoadData1)
 
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


