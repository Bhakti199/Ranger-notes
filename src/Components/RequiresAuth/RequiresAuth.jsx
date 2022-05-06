import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useMainContext } from "../../Context";
import { LoginPage } from "../../Pages";
export const RequiresAuth = ({ children }) => {
  const { isUserLoggedIn } = useMainContext();
  const location = useLocation();
  return (
    <div>
      {isUserLoggedIn ? (
        children
      ) : (
        <Navigate
          to="/login"
          element={<LoginPage />}
          state={{ from: location }}
          replace
        />
      )}
    </div>
  );
};
