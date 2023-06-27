import axios from 'axios';
import { createContext, useState } from 'react';
import toaster from './Toaster';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  // Fetching Inital Cart Details
  const fetchWishList = async () => {
    try {
      const response = await axios.get('/api/user/wishlist', {
        headers: { authorization: localStorage.getItem('token') },
      });
      setWishList(response.data.wishlist);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Add to WishList
  const addWishList = async (product) => {
    if (localStorage.getItem('token')) {
      try {
        const response = await axios.post(
          '/api/user/wishlist',
          { product },
          {
            headers: { authorization: localStorage.getItem('token') },
          }
        );
        setWishList(response.data.wishlist);
        toaster(
          'SUCCESS',
          `${product.title} has been added to the Wishlist :)`
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      toaster('ERROR', 'Please Login to add the product to wishlist');
    }
  };

  // Delete Item in WishList
  const deleteWishList = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: { authorization: localStorage.getItem('token') },
      });
      console.log(response);
      setWishList(response.data.wishlist);
      toaster(
        'SUCCESS',
        `${product.title} has been removed from the wishlist `
      );
    } catch (err) {
      console.log(err);
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
