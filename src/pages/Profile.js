import "./Profile.css";
import { publicParams, passParams } from "./constants";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import NavBar from "../components/NavBar/NavBar";
import SubmitButton from "../components/SubmitButton/SubmitButton";


function ProfilePage(props) {

    const name = props.name;

    return(
    <div className="container">
        <NavBar />
        <div className="profile-header">
            <h1 className="your-profile">Your Profile</h1>
            <h2 className="your-name">`${ name }`</h2>
        </div>
        <ProfileForm params={ publicParams } btnTxt="Save Changes" btnClass ="save-changes-button form-button" />
        <ProfileForm params={ passParams } btnTxt="Save Password" btnClass ="save-password-button form-button" />
        <div className="logout-button-container">
            <SubmitButton text="Log out" className='logout-button'/>
        </div>
    </div>
    );
}

export default ProfilePage;