/* eslint-disable no-unused-vars */

import * as React from 'react'
import { BrowserRouter as Rotuer } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../app/store.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Rotuer>
    <Provider store={store}>
      <App />
    </Provider>
  </Rotuer>
)
