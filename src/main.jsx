import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserContextProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContextProvider>
,
)
