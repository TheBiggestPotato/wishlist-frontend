import "./EditProfile.css";
import NavBar from "../components/NavBar/NavBar";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import Footer from "../components/Footer/Footer";
import React, { useState } from "react";
import { myDetails, editMyDetails } from "../api";
import InputField from "../components/InputField/InputField";

function EditProfilePage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [newName, setNewName] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newConfPass, setNewConfPass] = useState();
  const token = sessionStorage.getItem("token");

  async function getProfileData() {
    let data = await myDetails(token);

    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
  }

  getProfileData();

  function validatePass() {
    if (newPassword.length < 5) {
      alert("Password is too short!");
      if (newPassword !== newConfPass) {
        alert("Passwords do not match!");
        return false;
      } else return true;
    }
  }

  function modifyProfileData() {
    return {
      name: newName,
      phone: newPhone,
    };
  }

  async function handleClick() {
    if (validatePass) {
      await editMyDetails(token, modifyProfileData()).then(
        console.log("req made")
      );
    }
  }

  return (
    <div className="container">
      <NavBar />
      <div className="edit-profile-page-container">
        <div className="profile-header">
          <h1 className="your-profile">Edit Your Profile</h1>
          <h2 className="your-name">{name}</h2>
        </div>
        <div className="change-data">
          {/*  public-data */}
          <InputField
            type="text"
            placeholder="Full Name"
            defaultValue={name}
            onChange={(e) => setNewName(e.target.value)}
          ></InputField>
          <InputField
            type="text"
            placeholder="Phone"
            defaultValue={phone}
            onChange={(e) => setNewPhone(e.target.value)}
          ></InputField>
          <div className="form-button">
            <SubmitButton text="Save Changes" onClick={handleClick} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EditProfilePage;
