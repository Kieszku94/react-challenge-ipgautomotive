import React, { useState } from "react";
import "./Login.css";
import {
  useUsername,
  usePassword,
  useSetUsername,
  useSetPassword,
} from "../../context/userContext";

const Login = () => {
  const username = useUsername();
  const setUsername = useSetUsername();
  const password = usePassword();
  const setPassword = useSetPassword();
  const [userNameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <h2 className="signIn">Sign In</h2>
        <div className="loginInput">
          <span className="loginSpan">
            Username <abbr className="loginRequired">*</abbr>
          </span>
          <input
            className={userNameError ? "input inputRequired" : "input"}
            type="text"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="loginInput">
          <span className="loginSpan">
            Password <abbr className="loginRequired">*</abbr>
          </span>
          <input
            className={passwordError ? "input inputRequired" : "input"}
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button type="submit" className="loginBtn">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
