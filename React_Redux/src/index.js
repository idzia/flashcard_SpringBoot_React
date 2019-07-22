import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/reducerIndex';
import {getAllCategory} from './actions/actionIndex';
import App from './App';
import './css/index.css';


const store = createStore(allReducers, applyMiddleware(thunk));
store.dispatch(getAllCategory());

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
