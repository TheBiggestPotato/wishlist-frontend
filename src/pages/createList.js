import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import InputField from "../components/InputField/InputField";
import NavBar from "../components/NavBar/NavBar";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import "./createList.css";
import { createList, getItems } from "../api/index.js";
import { useNavigate } from "react-router-dom";

function CreateList() {
  const [listName, setListName] = useState();
  const [listDescription, setListDescription] = useState();
  const [items, setItems] = useState();
  const token = sessionStorage.getItem("token");

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
    const listData = {
      wishlist: { name: listName, details: listDescription },
      itemIds: [0],
    };

    for (let item of items) {
      if (document.getElementById(item.id).checked) {
        listData.itemIds.push(item.id);
      }
    }
    if (listData.itemIds.length !== undefined) {
      await createList(token, listData)
        .then(console.log("List was created!"))
        .then(navigate("/lists"));
    } else {
      alert("At least one item must be selected!");
    }
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
        <SubmitButton onClick={handleClick} text="Create List" />
      </div>
      <Footer />
    </div>
  );
}

export default CreateList;
