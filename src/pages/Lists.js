import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { getLists, deleteList } from "../api/index.js";
import ListsComponent from "../components/ListsComponent/ListsComponent";
import "./Lists.css";
import { useEffect, useState } from "react";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { useNavigate } from "react-router-dom";

function Lists() {
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();

  const [lists, setLists] = useState([]);

  useEffect(() => {
    const tmp = [];
    getLists(token).then((data) => {
      data.wishlists.forEach((list) => {
        tmp.push(list);
      });
      setLists(tmp);
    });
  }, [token, lists]);

  async function handleDelete(event) {
    const id = event.currentTarget.id;
    console.log(id);
    await deleteList(token, id).then((data) => console.log(data));
  }

  function handleClick() {
    navigate("/lists/create");
  }

  return (
    <div className="container">
      <NavBar />
      <div className="lists-container">
        <h1 className="header">Your Lists</h1>
        <ListsComponent params={lists} onClick={handleDelete}></ListsComponent>
      </div>
      <div className="create-list-btn">
        <SubmitButton text="New List" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}

export default Lists;
