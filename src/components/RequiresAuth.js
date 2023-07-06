import { Navigate, useLocation } from 'react-router-dom';

export const RequiresAuth = ({ children }) => {
  let location = useLocation();
  const loggedInUser = sessionStorage.getItem('user');
  return loggedInUser ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};
