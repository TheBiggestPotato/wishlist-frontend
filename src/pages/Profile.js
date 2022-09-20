import React, { useState } from "react";
import { myDetails } from "../api";
import NavBar from "../components/NavBar/NavBar";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import Footer from "../components/Footer/Footer";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profile/edit");
  }

  const token = sessionStorage.getItem("token");

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [phone, setPhone] = useState();

  async function getProfileData() {
    let data = await myDetails(token);
    console.log(data.id);

    let [dob] = data.dob.split("T");

    setName(data.name);
    setEmail(data.email);
    setBirthday(dob);
    setPhone(data.phone);
  }
  getProfileData();
  return (
    <div className="container">
      <NavBar />
      <div className="profile-container">
        <h1 className="header">Your Profile</h1>
        <h2 className="name">Full Name: {name}</h2>
        <h2 className="email">Email: {email}</h2>
        <h2 className="birthday">Date of Birth: {birthday}</h2>
        <h2 className="phone">Phone Number: {phone}</h2>
        <SubmitButton
          className="edit-profile"
          text="Edit Profile"
          onClick={handleClick}
        ></SubmitButton>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
