import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

import GetComic from './components/GetComic';
import './index.css';


const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <GetComic />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
