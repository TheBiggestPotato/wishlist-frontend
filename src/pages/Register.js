import InputField from "../components/InputField/InputField"
import SubmitButton from "../components/SubmitButton/SubmitButton"
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {

    const logoSrc = `${process.env.PUBLIC_URL}/logo.png`;

    const inputField = [
        {
            type: "text",
            placeholder: "Full Name"
        },
        {
            type: "text",
            placeholder: "Email"
        },
        {
            type: "tel",
            placeholder: "Phone Number"
        },
        {
            type: "date",
            placeholder: "Date of birth"
        },
        {
            type: "password",
            placeholder: "Password"
        },
        {
            type: "password",
            placeholder: "Confirm Password"
        }
    ]

    return(
        <div className="register-component">
            <div className="login-logo">
                <img src= { logoSrc } />
            </div>
            <form className="register-form">
                { inputField.map((input, key) => <InputField key={ key } type={ input.type } placeholder={ input.placeholder }></InputField>) }
                <div className="register-button-component">
                        <SubmitButton text="Register" className="register-button" />
                </div>
            </form>
            <div className="login-heading">
                    <p>Already have an account?</p>
                    <Link className="login-link" to="/login">Log in!</Link>
            </div>
        </div>
    );
}

export default Register;