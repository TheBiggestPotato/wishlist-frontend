import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import InputField from "../components/InputField/InputField";
import NavBar from "../components/NavBar/NavBar";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { createGroup } from "../api/index.js";
import { useNavigate } from "react-router-dom";
import "./createGroup.css";

function CreateGroup() {
  const [groupName, setGroupName] = useState();
  const [groupDescription, setGroupDescription] = useState();
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  async function handleClick() {
    const groupData = {
      name: groupName,
      details: groupDescription,
    };

    await createGroup(token, groupData).then(navigate("/groups"));
  }

  return (
    <div className="container">
      <NavBar />
      <div className="create-group-container">
        <h1 className="header">Create a New Group</h1>
        <InputField
          type="text"
          placeholder="Name of your group"
          onChange={(e) => setGroupName(e.target.value)}
        ></InputField>
        <div className="text-area">
          <textarea
            className="group-description"
            placeholder="Group description"
            rows={10}
            cols={50}
            onChange={(e) => setGroupDescription(e.target.value)}
          ></textarea>
        </div>
        <SubmitButton onClick={handleClick} text="Create Group" />
      </div>
      <Footer />
    </div>
  );
}

export default CreateGroup;
