import React from "react";
import { Navigate } from "react-router-dom";
import {useAuth} from '../contexts/AuthContext'
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  console.log("Check user in Private: ", currentUser);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;