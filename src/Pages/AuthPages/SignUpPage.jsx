import React from "react";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <div className="auth-page">
      <form
        className="login-form"
        onSubmit={(event) => {
          loginDetailsHandler(event);
        }}
      >
        <h2 className="margin-top-bottom-zero center-text">SIGN UP</h2>
        <div className="form-inputs">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-input-ecom"
            required
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            className="form-input-ecom"
            required
          />
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
          Sign Up
        </button>
        <span className="register-text">
          Already have an account?{" "}
          <Link to="/login" className="link">
            LOGIN
          </Link>
        </span>
      </form>
    </div>
  );
};
