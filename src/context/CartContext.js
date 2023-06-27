import axios from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import toaster from './Toaster';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const encodedToken = localStorage.getItem('token');
  const navigate = useNavigate();

  // Fetching Inital Cart Details
  const fetchCartDetails = async () => {
    try {
      const response = await axios.get('/api/user/cart', {
        headers: { authorization: encodedToken },
      });
      setCartList(response.data.cart);
      console.log(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCartHandler = (product) => {
    console.log(product);
    if (localStorage.getItem('token')) {
      if (cartList.filter((items) => items._id === product._id).length) {
        incrementCart(product);
      } else {
        addToCart(product);
        toaster('SUCCESS', `${product.title} has been added to the cart`);
      }
    } else {
      toaster('ERROR', 'Please Login to add to cart');
      navigate('/login');
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

  // Delete Cart
  const deleteCart = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: encodedToken },
      });

      setCartList(response.data.cart);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
