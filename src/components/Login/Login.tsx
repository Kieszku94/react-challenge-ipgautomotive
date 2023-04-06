import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useUsername,
  usePassword,
  useSetUsername,
  useSetPassword,
  useSetUserAuthenticated,
} from "../../context/userContext";

const Login = (): JSX.Element => {
  const username = useUsername();
  const setUsername = useSetUsername();
  const password = usePassword();
  const setPassword = useSetPassword();
  const [loginError, setLoginError] = useState(false);
  const setUserAuthenticated = useSetUserAuthenticated();
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (username !== "ipgautomotive" || password !== "carmaker") {
      setLoginError(true);
      return;
    }
    setUserAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <h2 className="signIn">Sign In</h2>
        <div className="loginInput">
          <span className="loginSpan">
            Username <abbr className="loginRequired">*</abbr>
          </span>
          <input
            className={loginError ? "input inputRequired" : "input"}
            type="text"
            required
            onChange={(e) => {
              setUsername(e.target.value);
              setLoginError(false);
            }}
            value={username}
          />
        </div>
        <div className="loginInput">
          <span className="loginSpan">
            Password <abbr className="loginRequired">*</abbr>
          </span>
          <input
            className={loginError ? "input inputRequired" : "input"}
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginError(false);
            }}
            value={password}
          />
          <div className="inputError">
            {loginError
              ? "Invalid username or password. Please try again."
              : null}
          </div>
          <button
            type="submit"
            className="loginBtn"
            onClick={(e) => handleSubmit(e)}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
