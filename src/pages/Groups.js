import React, { useState, useEffect } from "react";
import "./Groups.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { getGroups, deleteGroup, getSharedGroups } from "../api/index";
import GroupComponent from "../components/GroupComponent/GroupComponent";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import Group from "../components/Group/Group";

function Groups() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [sharedGroups, setSharedGroups] = useState([]);

  useEffect(() => {
    const tmp = [];
    const arr = [];
    getGroups(token).then((data) => {
      data.groups.forEach((group) => {
        tmp.push(group);
      });
      setGroups(tmp);
    });
    getSharedGroups(token).then((data) => {
      data.groups.forEach((sharedGroup) => {
        arr.push(sharedGroup);
      });
      setSharedGroups(arr);
    });
  }, [token, groups]);

  async function handleDelete(event) {
    const id = event.currentTarget.id;
    await deleteGroup(token, id);
  }

  function handleClick() {
    navigate("/groups/create");
  }

  console.log(sharedGroups);

  return (
    <div className="groups-page-container">
      <NavBar />
      <h1 className="groups-header">Your Groups</h1>
      <div className="groups-container">
        <GroupComponent
          params={groups}
          onClick={handleDelete}
          className="delete-btn-groups"
        ></GroupComponent>
      </div>
      <h1 className="shared-groups-header">Your Shared Groups</h1>
      <div className="shared-groups">
        <ul className="shared-groups-ul">
          {sharedGroups.map((sGroup, key) => {
            console.log(sGroup);
            return (
              <li key={key}>
                <Group
                  description={sGroup.Group.details}
                  title={sGroup.Group.name}
                  id={sGroup.Group.id}
                  href={`/groups/${sGroup.Group.id}`}
                ></Group>
              </li>
            );
          })}
        </ul>
      </div>
      <h1 className="groups-invitations">Your Join Requests</h1>
      <div className="create-group-btn">
        <SubmitButton text="New Group" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}

export default Groups;
