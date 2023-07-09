import axios from 'axios';
import { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toaster from './Toaster';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [encodedToken, setEncodedToken] = useState();
  const [loggedInUser, setLoggedInUser] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const registerHandler = async (
    event,
    firstName,
    lastName,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response);
      setLoggedInUser(response.data.foundUser);
      sessionStorage.setItem('token', response.data.encodedToken);
      sessionStorage.setItem('user', JSON.stringify(response.data.createdUser));
      navigate('/products');
      toaster('SUCCESS', "You've Been Registered Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setLoggedInUser(response.data.foundUser);
      setEncodedToken(response.data.encodedToken);
      sessionStorage.setItem('user', JSON.stringify(response.data.foundUser));
      sessionStorage.setItem('token', response.data.encodedToken);
      navigate(location?.state?.from?.pathname);
      toaster('SUCCESS', "You've Been Logged In Successfully");
    } catch (err) {
      console.log(err.response);
    }
  };

  const logoutHandler = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate('/');
    toaster('SUCCESS', "You've Been Logged Out Successfully");
  };

  const addressHandler = (currentAddress) => {
    console.log(currentAddress);
    setLoggedInUser(() => {
      const temp = { ...JSON.parse(sessionStorage.getItem('user')) };
      const tempAddress = temp.address ? [...temp.address] : [];
      if (currentAddress.id.length) {
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            ...temp,
            address: [
              ...tempAddress.filter((item) => item.id !== currentAddress.id),
              currentAddress,
            ],
          })
        );
        return {
          ...temp,
          address: [
            ...tempAddress.filter((item) => item.id !== currentAddress.id),
            currentAddress,
          ],
        };
      } else {
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            ...temp,
            address: [...tempAddress, currentAddress],
          })
        );
        return {
          ...temp,
          address: [...tempAddress, currentAddress],
        };
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        encodedToken,
        loginHandler,
        registerHandler,
        logoutHandler,
        loggedInUser,
        addressHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
