import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ProtectedRoute = ({ children }) => {
  const { isFormSubmitted } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Short timeout to ensure context has updated
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  if (!isFormSubmitted) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;