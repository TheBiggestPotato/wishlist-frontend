import InputField from "../components/InputField/InputField";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { logoSrc } from "./constants.js";
import "./Login.css";
import React, { useState } from "react";
import { loginUser } from "../api/index.js";
import { useAuth } from "../hooks/auth/index.js";
import Footer from "../components/Footer/Footer.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, setLogged } = useAuth();

  const navigate = useNavigate();

  function emailOnChange(e) {
    setEmail(e.target.value);
  }
  function passwordOnChange(e) {
    setPassword(e.target.value);
  }

  async function handleClick() {
    const data = { email, password };

    await loginUser(data).then(() => {
      const token = sessionStorage.getItem("token");
      const isLogged = sessionStorage.getItem("isLogged");
      if (token !== "undefined") {
        console.log(token);
        console.log(isLogged);
        setToken(token);
        setLogged(1);
        navigate("/home");
      } else {
        alert("Invalid email or password!");
      }
    });
  }

  return (
    <div className="login-component">
      <div className="login-logo">
        <img src={logoSrc} alt="logo" />
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
      <Footer />
    </div>
  );
}

export default Login;
