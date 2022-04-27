import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
export const LoginPage = () => {
  return (
    <div className="auth-page">
      <Link to="/">Back to home page</Link>
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
      <span className="login-guest">Log in as a guest.</span>
    </div>
  );
};
