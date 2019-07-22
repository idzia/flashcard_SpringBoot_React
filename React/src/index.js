import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// import {createStore} from 'redux';
// import allReducers from './reducers/reducers_index';
// import {Provider} from 'react-redux';
// import New from './components/New'

// const store = createStore(allReducers);

ReactDOM.render(
  <App/>,
  document.getElementById('root')

 
  // <Provider store={store}>
  //   {/* <New/> */}
  //   <App/>,
  // </Provider>,
  // document.getElementById('root')
);
