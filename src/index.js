import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './reducers/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cat from "./reducers/cat";
import game from "./reducers/game";



const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = persistReducer(persistConfig, combineReducers({ auth, cat, game }));
const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App/>
      </Router>
    </PersistGate>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
