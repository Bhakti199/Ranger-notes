import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpCall } from "../../ApiCalls";
import { useMainContext } from "../../Context";
export const SignUpPage = () => {
  const { setIsUserLoggedIn, setUserInfo } = useMainContext();
  const navigate = useNavigate();
  const signUpDetailsHandler = async (event) => {
    event.preventDefault();
    let [firstName, lastName, email, password] = event.target.elements;
    const { data, status } = await signUpCall(
      email.value,
      password.value,
      firstName.value,
      lastName.value
    );
    if (status === 200 || status === 201) {
      setIsUserLoggedIn(true);
      setUserInfo({ ...data.createdUser });
      localStorage.setItem("userLoginToken", data.encodedToken);
      navigate(location?.state?.from?.pathname || "/note-taking-page");
    }
  };

  return (
    <div className="auth-page">
      <form
        className="login-form"
        onSubmit={(event) => {
          signUpDetailsHandler(event);
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
