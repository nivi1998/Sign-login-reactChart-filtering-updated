import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const tokenStatus = useSelector((state) => state.login.token);
  console.log('tokenStatus', tokenStatus);

  const outlet = useOutlet();

  return <>{tokenStatus ? [outlet] : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
