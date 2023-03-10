import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Account from "./pages/Account"
import Cart from "./pages/Cart"
import Signin from "./pages/Signin"
import Products from "./pages/products/Products"
import ProductsDetails from "./pages/products/ProductsDetails"
import Checkout from "./pages/Checkout"

function App() {
  

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path="register" element={<Register />} />
              <Route path="account" element={<Account />} />
              <Route path="cart" element={<Cart />} />
              <Route path="signin" element={<Signin />} />
              <Route path="products" element={<Products />} />
              <Route path="products:/id" element={<ProductsDetails />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
      </Router>  
    </>
  )
}

export default App
