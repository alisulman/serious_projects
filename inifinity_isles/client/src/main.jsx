/* eslint-disable no-undef */
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../apps/store.js'
import { NewProvider } from './context/state.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <NewProvider>
      <GoogleOAuthProvider clientId="715673759189-ivvfst733u4tm0apml3blb5tr7ase62l.apps.googleusercontent.com">
        <Router>
          <App />
        </Router>
      </GoogleOAuthProvider>
    </NewProvider>
  </Provider>
)
