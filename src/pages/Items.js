import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import ItemComponent from "../components/ItemComponent/ItemComponent";
import { getItems, deleteItem } from "../api";
import "./Items.css";
import Footer from "../components/Footer/Footer";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { useNavigate } from "react-router-dom";

function Items() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const tmp = [];
    getItems(token).then((data) => {
      data.items.forEach((item) => {
        tmp.push(item);
      });
      setItems(tmp);
    });
  }, [token, items]);

  async function handleDelete(event) {
    const id = event.currentTarget.id;
    console.log(id);
    await deleteItem(token, id).then((data) => console.log(data));
  }

  function handleClick() {
    navigate("/items/create");
  }

  return (
    <div className="items-page-container">
      <NavBar />
      <div className="items-container">
        <h1 className="header">Your Items</h1>
        <ItemComponent
          params={items}
          onClick={handleDelete}
          className="delete-btn-items"
        ></ItemComponent>
      </div>
      <div className="create-item-btn">
        <SubmitButton text="New Item" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}

export default Items;
