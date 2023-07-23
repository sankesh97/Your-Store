import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import toaster from './Toaster';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const navigate = useNavigate();
  const [checkoutData, setCheckoutData] = useState();

  const checkOutHandler = (
    loggedInUser,
    cartList,
    currentAddress,
    getCartTotals
  ) => {
    if (!currentAddress) toaster('ERROR', 'Please select the address');
    if (!cartList.length) toaster('ERROR', 'Please add items to the cart');
    if (!getCartTotals) toaster('ERROR', 'Issue with Cart Totals');
    if (loggedInUser && cartList.length && currentAddress) {
      setCheckoutData({
        loggedInUser,
        cartList,
        currentAddress,
        getCartTotals,
      });
      navigate('/orderSummary');
    }
  };

  return (
    <CheckoutContext.Provider
      value={{ checkoutData, setCheckoutData, checkOutHandler }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
