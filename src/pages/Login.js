
import InputField from "../components/InputField/InputField"
import SubmitButton from "../components/SubmitButton/SubmitButton"
import { Link } from "react-router-dom";
import { logoSrc } from "./constants.js"
import "./Login.css"

function Login() {

    return(
        <><div className="login-component">
            <div className="login-logo">
                <img src= { logoSrc } />
            </div>
            <div className="login-form">
                <form>
                    <InputField type="text" placeholder="Email" />
                    <InputField type="password" placeholder="Password" />
                    <div className="login-button-component">
                        <SubmitButton text="Log in" className="login-button" />
                    </div>
                </form>
                <div className="register-heading">
                    <p>Don't have an account?</p>
                    <Link className="register-link" to="/register">Register here!</Link>
                </div>
            </div>
        </div></>
    );
}

export default Login;