import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserContextProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductProvider>
      <UserContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserContextProvider>
    </ProductProvider>
  </CartProvider>
);
