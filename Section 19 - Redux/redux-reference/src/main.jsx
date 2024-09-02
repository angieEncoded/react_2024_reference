import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import { Provider } from 'react-redux' // import the provider
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the whole app in our provider - note we could also wrap this around whatever we needed access to this store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
