import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Use the hook to access authentication state

const RedirectIfAuthenticated = ({ element }) => {
  const { currentUser } = useAuth();

  // Redirect to /home if user is already authenticated
  return currentUser ? <Navigate to="/home" replace /> : element;
};

export default RedirectIfAuthenticated;