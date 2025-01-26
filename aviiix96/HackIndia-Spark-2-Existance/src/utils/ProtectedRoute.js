import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { currentUser } = useAuth();

  // Redirect to /login if user is not authenticated
  return currentUser ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;