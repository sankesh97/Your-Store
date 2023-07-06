import axios from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import toaster from './Toaster';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const encodedToken = sessionStorage.getItem('token');
  const [getCartTotals, setGetCartTotals] = useState({
    totalPrice: '',
    tax: '',
    totalPriceBeforeTaxes: '',
  });
  const navigate = useNavigate();

  //  Cart Totals
  const getTotal = (cartList) => {
    const totalPrice = cartList.reduce(
      (total, current) => total + current.price * current.qty,
      0
    );
    const taxes = 0.18 * totalPrice;
    const totalPriceBeforeTaxes = totalPrice - taxes;
    setGetCartTotals({ totalPrice, taxes, totalPriceBeforeTaxes });
  };

  // Fetching Inital Cart Details
  const fetchCartDetails = async () => {
    try {
      const response = await axios.get('/api/user/cart', {
        headers: { authorization: encodedToken },
      });
      setCartList(response.data.cart);
      getTotal(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCartHandler = (product) => {
    console.log(product);
    if (sessionStorage.getItem('token')) {
      if (cartList.find((item) => item._id === product._id)) {
        navigate('/cart');
      } else {
        addToCart(product);
        toaster('SUCCESS', `${product.title} has been added to the cart`);
      }
    } else {
      toaster('ERROR', 'Please Login to add to cart');
    }
  };

  // Add to Cart Call
  const addToCart = async (addedProduct) => {
    if (!cartList.find((e) => e._id === addedProduct._id)) {
      try {
        const response = await axios.post(
          '/api/user/cart',
          {
            product: addedProduct,
          },
          {
            headers: { authorization: encodedToken },
          }
        );
        setCartList(response.data.cart);
      } catch (err) {
        console.log(err);
      }
    } else {
      incrementCart(addedProduct);
    }
  };

  // Increment Cart
  const incrementCart = async ({ _id: productId }) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: 'increment' } },
        {
          headers: { authorization: encodedToken },
        }
      );
      setCartList(response.data.cart);
      console.log(cartList);
    } catch (err) {
      console.log(err);
    }
  };

  // Increment Cart
  const decrementCart = async ({ _id: productId }) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: 'decrement' } },
        {
          headers: { authorization: encodedToken },
        }
      );
      setCartList(response.data.cart);
      console.log(cartList);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Cart
  const deleteCart = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: encodedToken },
      });

      setCartList(response.data.cart);
      getTotal(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        fetchCartDetails,
        cartList,
        addToCart,
        deleteCart,
        incrementCart,
        addToCartHandler,
        getCartTotals,
        decrementCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
