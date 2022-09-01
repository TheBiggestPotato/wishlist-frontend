
import Footer from "../components/Footer/Footer";
import InputField from "../components/InputField/InputField"
import SubmitButton from "../components/SubmitButton/SubmitButton"
import "./Login.css"

function Login() {

    const logo_src = `${process.env.PUBLIC_URL}/logo.png`

    return(
        <div className="login-component">
            <div className="login-logo">
                <img src= { logo_src } />
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
                    <a className="register-link" href="">Register here!</a>
                </div>
            </div>
        </div>
    );
}

export default Login;