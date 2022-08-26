import LoginComponent from "../components/login/LoginComponent";
import Footer from "../components/Footer";

function Login() {
    return(
        <><div className="Login">
            <LoginComponent />
        </div><div className="Footer">
                <Footer />
            </div></>
    );
}

export default Login;