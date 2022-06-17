import React from "react";
import "../AuthPages/Auth.css";
import { useMainContext } from "../../Context";
export const ProfilePage = () => {
  const { isUserLoggedIn, setIsUserLoggedIn, userInfo } = useMainContext();
  return (
    <div className="user-profile">
      <h1>
        {userInfo.firstName} {userInfo.lastName}
      </h1>
      <button
        className="log-out"
        onClick={() => {
          setIsUserLoggedIn(false);
          localStorage.removeItem("userLoginToken");
        }}
      >
        log out
      </button>
    </div>
  );
};
