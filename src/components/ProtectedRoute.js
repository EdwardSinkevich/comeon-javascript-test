import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../auth/authContext";

export const ProtectedRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to="/login"  replace state={{ from: location }} />;
};
