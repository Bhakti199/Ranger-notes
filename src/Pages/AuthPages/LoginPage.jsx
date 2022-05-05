import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { loginCall } from "../../ApiCalls";
import { useMainContext } from "../../Context";

export const LoginPage = () => {
  const { isUserLoggedIn, setIsUserLoggedIn, setUserInfo } = useMainContext();
  const navigate = useNavigate();
  const loginDetailsHandler = async (event) => {
    event.preventDefault();
    let [email, password] = event.target.elements;
    const { data, status } = await loginCall(email.value, password.value);
    if (status === 200 || status === 201) {
      setIsUserLoggedIn(true);
      setUserInfo({ ...data.foundUser });
      localStorage.setItem("userLoginToken", data.encodedToken);
      navigate(location?.state?.from?.pathname || "/note-taking-page");
    }
  };
  const guestLoginHandler = async (email, password) => {
    const { data, status } = await loginCall(email, password);
    if (status === 200 || status === 201) {
      setIsUserLoggedIn(true);
      setUserInfo({ ...data.foundUser });
      localStorage.setItem("userLoginToken", data.encodedToken);
      navigate(location?.state?.from?.pathname || "/note-taking-page");
    }
  };
  return (
    <>
      {isUserLoggedIn ? (
        <div className="user-profile">
          <div>User Profile page will be here.</div>
          <button
            onClick={() => {
              setIsUserLoggedIn(false);
              localStorage.removeItem("userLoginToken");
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <div className="auth-page">
          <form
            className="login-form"
            onSubmit={(event) => {
              loginDetailsHandler(event);
            }}
          >
            <h2 className="margin-top-bottom-zero center-text">LOG IN</h2>
            <div className="form-inputs">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="form-input-ecom"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input-ecom"
                required
              />
            </div>
            <button type="submit" className="login-form-btn">
              Login
            </button>
            <span className="register-text">
              Don't have an account?{" "}
              <Link to="/sign-up" className="link">
                REGISTER
              </Link>
            </span>
          </form>
          <span
            className="login-guest"
            onClick={() =>
              guestLoginHandler("adarshbalika@gmail.com", "adarshBalika123")
            }
          >
            Log in as a guest.
          </span>
        </div>
      )}
    </>
  );
};
