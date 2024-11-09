import React from "react";
// import { Navigate } from 'react-router-dom';

interface Route {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<Route> = ({ element }) => {
  // const isAuthenticated = false;
  return (
    // isAuthenticated ? element : <Navigate to="/"/>
    element
  );
};

export default ProtectedRoute;
