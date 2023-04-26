import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Account from "./pages/Account"
import Cart from "./pages/Cart"
import Signin from "./pages/Signin"
import Products from "./pages/products/Products"
import ProductsDetails from "./pages/products/ProductsDetails"
import Checkout from "./pages/Checkout"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop"

function App() {
  

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="account" element={<Account />} />
              <Route path="cart" element={<Cart />} />
              <Route path="signin" element={<Signin />} />
              <Route path="products" element={<Products />} />
              <Route path="/products/:id" element={<ProductsDetails />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
      <ToastContainer
        // style={{width: '300px'}}
        className="foo"
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App
