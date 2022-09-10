
import InputField from "../components/InputField/InputField"
import SubmitButton from "../components/SubmitButton/SubmitButton"
import { Link, useNavigate } from "react-router-dom";
import { logoSrc } from "./constants.js"
import "./Login.css"
import { React, useState } from "react";
import { login } from "../api/index.js"


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    function emailOnChange(e){ setEmail(e.target.value); console.log(e.target.value) }
    function passwordOnChange(e){ setPassword(e.target.value); console.log(e.target.value)}


    async function Login() {

        const data = {email, password};

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => {response.json(); console.log(response);})
    }



    return(
        <div className="login-component">
            <div className="login-logo">
                <img src= { logoSrc } />
            </div>
            <div className="login-form">
                <form>
                    <InputField type="text" placeholder="Email" onChange={ emailOnChange }/>
                    <InputField type="password" placeholder="Password" onChange= { passwordOnChange }/>
                    <div className="login-button-component">
                        <SubmitButton text="Log in" className="login-button" onClick={ Login }/>
                    </div>
                </form>
                <div className="register-heading">
                    <p>Don't have an account?</p>
                    <Link className="register-link" to="/register">Register here!</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;