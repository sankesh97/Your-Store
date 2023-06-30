import axios from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [encodedToken, setEncodedToken] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  const navigate = useNavigate();

  const registerHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: 'Adarsh',
        lastName: 'Balika',
        email: 'adarshbalika@neog.camp',
        password: 'adarshBalika',
      });
      setLoggedInUser(response.data.foundUser);
      localStorage.setItem('token', response.data.encodedToken);
      console.log(loggedInUser);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log(response.data);
      setLoggedInUser(response.data.foundUser);
      setEncodedToken(response.data.encodedToken);
      localStorage.setItem('token', response.data.encodedToken);
      console.log(loggedInUser);
      navigate('/');
    } catch (err) {
      console.log(err.response);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        encodedToken,
        loginHandler,
        registerHandler,
        logoutHandler,
        loggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
