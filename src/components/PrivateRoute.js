import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, emailType }) => {
  const isAuthenticated = !!localStorage.getItem(emailType); 
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
