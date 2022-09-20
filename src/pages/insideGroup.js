import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import GroupUsersComponent from "../components/GroupUsersComponent/GroupUsersComponent";
import InputField from "../components/InputField/InputField";
import "./insideGroup.css";
import { getGroups, sendInvite, getUsers } from "../api/index";

function InsideGroup() {
  const token = sessionStorage.getItem("token");
  const link = window.location.href.split("/");
  const groupId = link[link.length - 1];
  const [users, setUsers] = useState([]);
  const [inviteEmail, setInviteEmail] = useState();
  const [invite, setInvite] = useState([]);

  useEffect(() => {
    const tmp = [];
    getGroups(token).then((data) => {
      data.groups.forEach((group) => {
        if (group.id === groupId) {
          group.users.forEach((user) => {
            tmp.push(user);
          });
        }
      });
      setUsers(tmp);
    });
  }, [token, users]);

  async function onChangeInvite(e) {
    let email = e.target.value;
    setInviteEmail(email);
  }

  async function handleInvite() {
    const arr = [];
    getUsers(token).then((data) =>
      data.users.forEach((user) => {
        if (inviteEmail === user.email) {
          arr.push(user.id);
        }
      })
    );
    setInvite(arr);
    console.log(groupId, invite);
    await sendInvite(token, groupId, invite).then((data) => console.log(data));
  }

  return (
    <div className="inside-group-container">
      <NavBar />
      <h1 className="header">Your Group Details</h1>
      <GroupUsersComponent params={users}></GroupUsersComponent>
      <div className="invite-users">
        <InputField
          onChange={onChangeInvite}
          placeholder="Invite by email"
        ></InputField>
        <button onClick={handleInvite}>Send Invitation</button>
      </div>
      <Footer />
    </div>
  );
}

export default InsideGroup;
