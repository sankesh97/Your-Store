// External Imports
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Internal Imports
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductListing from './pages/ProductListing/ProductListing';
import MockAPI from './pages/MockMan';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import WishList from './pages/WishList/WishList';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { RequiresAuth } from './components/RequiresAuth';
import Account from './pages/Authentication/Account';
import OrderSummary from './pages/OrderSummary/OrderSummary';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='py-5 min-vh-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<ProductListing />} />
          <Route
            path='/products/category/:categoriesSelection'
            element={<ProductListing />}
          />
          <Route
            path='/cart'
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route
            path='/wishlist'
            element={
              <RequiresAuth>
                <WishList />
              </RequiresAuth>
            }
          />
          <Route
            path='/checkout'
            element={
              <RequiresAuth>
                x<Checkout />
              </RequiresAuth>
            }
          />
          <Route
            path='/account'
            element={
              <RequiresAuth>
                <Account />
              </RequiresAuth>
            }
          />
          <Route
            path='orderSummary'
            element={
              <RequiresAuth>
                <OrderSummary />
              </RequiresAuth>
            }
          />
          <Route path='/products/:productId' element={<SingleProduct />} />
          <Route path='/mockman' element={<MockAPI />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
      <ScrollToTop />
    </>
  );
}

export default App;
