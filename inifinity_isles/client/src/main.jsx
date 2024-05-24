/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../apps/store.js'
import { NewProvider } from './context/state.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <NewProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode >
      </Router>
    </NewProvider>
  </Provider>
)
