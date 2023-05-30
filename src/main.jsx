import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducer/todoReducer.js';
import logger from 'redux-logger';


const store = configureStore({reducer:{todoReducer:todoReducer}})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
