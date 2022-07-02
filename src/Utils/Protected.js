import React from "react";
import { Navigate , Outlet } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
console.log("321",children)
let user = localStorage.getItem('login-token');
if (!user) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;

};

export default ProtectedRoute