import React from "react";
import ReactDOM from 'react-dom';
//Provider lets us access state from anywhere
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from 'redux';
//Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
 document.getElementById('root'));