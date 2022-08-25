import React from "react";
import InputField from "../InputField";

function LoginComponent() {
    return(
        <div className="LoginComponent">
            <div className="LoginLogo">
                <img src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>
            <div className="LoginForm">
                <form>
                    <InputField type="text" placeholder="Email" />
                    <InputField type="password" placeholder="Password" />
                    <InputField type="submit" placeholder="Login" />
                </form>
                <div className="RegisterHeading">
                    <p>Don't have an account?</p>
                    <p>Register</p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;