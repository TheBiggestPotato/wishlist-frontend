import InputField from "../components/InputField/InputField";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { logoSrc } from "./constants.js";
import "./Login.css";
import React, { useState, useContext } from "react";
import { useAuth } from "../hooks/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailOnChange(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  function passwordOnChange(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const { loginUser } = useAuth();

  async function handleClick() {
    const data = { email, password };

    loginUser(data);
  }

  return (
    <div className="login-component">
      <div className="login-logo">
        <img src={logoSrc} />
      </div>
      <div className="login-form">
        <form>
          <InputField
            type="text"
            placeholder="Email"
            onChange={emailOnChange}
          />
          <InputField
            type="password"
            placeholder="Password"
            onChange={passwordOnChange}
          />
          <div className="login-button-component">
            <SubmitButton
              text="Log in"
              className="login-button"
              onClick={handleClick}
            />
          </div>
        </form>
        <div className="register-heading">
          <p>Don't have an account?</p>
          <Link className="register-link" to="/register">
            Register here!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
