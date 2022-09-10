import InputField from "../components/InputField/InputField"
import SubmitButton from "../components/SubmitButton/SubmitButton"
import { Link } from "react-router-dom";
import { registerInputFields, logoSrc } from "./constants";
import { useState } from "react";
import "./Register.css";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function verifyPass() {
        const passField = document.getElementById('passField').value;
        const confPassField = document.getElementById('confPassField').value;

        let x = document.getElementById('dateField').value;
        // x = x.toISOString();

        console.log(x);

        if (passField === confPassField){ return true; } else { alert('Passwords do not mach'); return false; }
    }

    
    

    function RegisterOnClick() {

        const passCheck = verifyPass();

        const data = { email, password, date, name, phone};

        if(passCheck){

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/register', requestOptions)
            .then(response =>{ response.json(); console.log(response); });

        }

        console.log(data);
    }


    return(
        <div className="register-component">
            <div className="login-logo">
                <img src= { logoSrc } />
            </div>
            <form className="register-form">
                { registerInputFields.map((input, key) => <InputField key={ key } type={ input.type } placeholder={ input.placeholder } id={ input.id } onChange={ (e) => {
                    if (input.placeholder === 'Full Name'){
                        setName(e.target.value);
                    } else if (input.placeholder === 'Email'){
                        setEmail(e.target.value);
                    } else if (input.placeholder === 'Password'){
                        setPassword(e.target.value);
                    } else if (input.placeholder === 'Phone Number'){
                        setPhone(e.target.value);
                    } else if (input.placeholder === 'Date of Birth'){
                         const adate=document.getElementById('dateField').value;
                        setDate(adate);
                    } else if (input.placeholder === 'Confirm Password'){
                        setConfirmPassword(e.target.value);
                    }
                } }></InputField>) }
                <div className="register-button-component">
                        <SubmitButton text="Register" className="register-button" onClick={ RegisterOnClick }/>
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