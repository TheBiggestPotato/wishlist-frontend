import React, { useState, useEffect } from "react";
import "./EditList.css";
import Footer from "../components/Footer/Footer";
import InputField from "../components/InputField/InputField";
import NavBar from "../components/NavBar/NavBar";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { createList, getItems, editList } from "../api/index.js";
import { useNavigate } from "react-router-dom";

function EditList() {
  const [listName, setListName] = useState();
  const [listDescription, setListDescription] = useState();
  const [items, setItems] = useState();
  const token = sessionStorage.getItem("token");
  const link = window.location.href.split("/");
  const listId = link[link.length - 2];
  const navigate = useNavigate();

  useEffect(() => {
    const tmp = [];
    getItems(token).then((data) => {
      data.items.forEach((item) => {
        tmp.push(item);
      });
      setItems(tmp);
    });
  });

  async function handleClick() {
    const modifiedData = {
      wishlist: { name: listName, details: listDescription },
      itemIds: [],
    };

    await editList(token, modifiedData, listId).then((data) =>
      console.log(data)
    );
  }

  return (
    <div className="container">
      <NavBar />
      <div className="create-list-container">
        <h1 className="header">Create a New List</h1>
        <InputField
          type="text"
          placeholder="Name of your list"
          onChange={(e) => setListName(e.target.value)}
        ></InputField>
        <div className="text-area">
          <textarea
            className="list-description"
            placeholder="List description"
            rows={10}
            cols={50}
            onChange={(e) => setListDescription(e.target.value)}
          ></textarea>
        </div>
        <h2 className="select-items">Select items for this list:</h2>
        <ul className="list-items">
          {items?.map((item, key) => {
            return (
              <li key={key}>
                <label>{item.name}</label>
                <input type="checkbox" id={item.id}></input>
              </li>
            );
          })}
        </ul>
        <SubmitButton onClick={handleClick} text="Save List" />
      </div>
      <Footer />
    </div>
  );
}

export default EditList;
