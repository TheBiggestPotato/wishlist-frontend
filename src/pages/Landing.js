import NavBar from "../components/NavBar/NavBar";
import "./Landing.css"


function Landing() {

    return(
        <div className="container">
            <div className="navbar"><NavBar /></div>
            <div className="content">
                <h1 className="landing-welcome">Welcome to WishLST!</h1>
            </div>
        </div>
    );
}


export default Landing;