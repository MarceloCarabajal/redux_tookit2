import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyRouter from './routes/MyRouter.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <MyRouter>
        <App />
      </MyRouter>
    </Provider>
  </React.StrictMode>
  
);
