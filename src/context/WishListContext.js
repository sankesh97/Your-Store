import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import toaster from './Toaster';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const navigate = useNavigate();
  const [wishList, setWishList] = useState([]);

  // Fetching Inital Cart Details
  const fetchWishList = async () => {
    try {
      const response = await axios.get('/api/user/wishlist', {
        headers: { authorization: sessionStorage.getItem('token') },
      });
      setWishList(response.data.wishlist);
    } catch (err) {
      toaster('ERROR', err.response.data.errors[0]);
    }
  };

  // Add to WishList
  const addWishList = async (product) => {
    if (wishList.find((item) => item._id === product._id)) {
      navigate('/wishlist');
      return;
    }
    if (sessionStorage.getItem('token')) {
      try {
        const response = await axios.post(
          '/api/user/wishlist',
          { product },
          {
            headers: { authorization: sessionStorage.getItem('token') },
          }
        );
        setWishList(response.data.wishlist);
        toaster(
          'SUCCESS',
          `${product.title} has been added to the Wishlist :)`
        );
      } catch (err) {
        toaster('ERROR', err.response.data.errors[0]);
      }
    } else {
      toaster('ERROR', 'Please Login to add the product to wishlist');
    }
  };

  // Delete Item in WishList
  const deleteWishList = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: { authorization: sessionStorage.getItem('token') },
      });
      console.log(response);
      setWishList(response.data.wishlist);
      toaster(
        'SUCCESS',
        `${product.title} has been removed from the wishlist `
      );
    } catch (err) {
      toaster('ERROR', err.response.data.errors[0]);
    }
  };

  return (
    <WishListContext.Provider
      value={{ fetchWishList, addWishList, deleteWishList, wishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
