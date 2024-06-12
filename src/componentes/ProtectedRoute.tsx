// src/componentes/ProtectedRoute.tsx

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }:any) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;
