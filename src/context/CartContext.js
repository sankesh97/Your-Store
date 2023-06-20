import axios from 'axios';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const encodedToken = localStorage.getItem('token');

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

  // Add to Cart
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
  const incrementCart = async (product) => {
    try {
      const response = await axios.post(`/api/user/cart/${product._id}`, {
        data: {
          action: { type: 'increment' },
        },
        headers: { authorization: encodedToken },
      });
      setCartList(response.data.cart);
      console.log(cartList);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Cart
  const deleteCart = async (product) => {
    console.log(product._id);
    try {
      const response = await fetch('/api/user/cart/' + product._id, {
        method: 'DELETE',
        headers: { authorization: encodedToken },
      });
      // const response = await axios.delete(`/api/user/cart/${product._id}`, {
      //   headers: { authorization: encodedToken },
      // });
      const data = await response.json();
      console.log(data);
      setCartList(data.cart);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
