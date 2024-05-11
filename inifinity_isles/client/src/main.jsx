/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../apps/store.js'
import { Newprovider } from './context/state.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Newprovider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode >
      </Router>
    </Newprovider>
  </Provider>
)
