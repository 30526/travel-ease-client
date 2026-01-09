import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center py-20 min-h-screen">
        <span className="loading loading-spinner text-amber-500"></span>
      </div>
    );
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;
