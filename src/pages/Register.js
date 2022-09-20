import InputField from "../components/InputField/InputField";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { registerInputFields, logoSrc } from "./constants";
import { useState } from "react";
import "./Register.css";
import { register } from "../api";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function ValidatePass() {
    // var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!(password === confirmPassword)) {
      alert("Passwords do not mach");
      return false;
    }

    return true;
  }

  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  async function RegisterOnClick() {
    const passCheck = ValidatePass();
    const mailCheck = ValidateEmail();

    const data = { email, password, dob, name, phone };

    if (passCheck && mailCheck) {
      await register(data).then(navigate("/login"));
    }
    console.log(data);
  }

  return (
    <div className="register-component">
      <div className="login-logo">
        <img src={logoSrc} alt="logo" />
      </div>
      <form className="register-form">
        {registerInputFields.map((input, key) => (
          <InputField
            key={key}
            type={input.type}
            placeholder={input.placeholder}
            id={input.id}
            onChange={(e) => {
              console.log(e, e.target.value);
              console.log(input.placeholder);
              if (input.placeholder === "Full Name") {
                setName(e.target.value);
              } else if (input.placeholder === "Email") {
                setEmail(e.target.value);
              } else if (input.placeholder === "Password") {
                setPassword(e.target.value);
              } else if (input.placeholder === "Phone Number") {
                setPhone(e.target.value);
              } else if (input.placeholder === "Date of birth") {
                const regDate = new Date(e.target.value);
                setDate(regDate.toISOString());
              } else if (input.placeholder === "Confirm Password") {
                setConfirmPassword(e.target.value);
              }
            }}
          ></InputField>
        ))}
        <div className="register-button-component">
          <SubmitButton
            text="Register"
            className="register-button"
            onClick={RegisterOnClick}
          />
        </div>
      </form>
      <div className="login-heading">
        <p>Already have an account?</p>
        <Link className="login-link" to="/login">
          Log in!
        </Link>
      </div>
    </div>
  );
}

export default Register;
