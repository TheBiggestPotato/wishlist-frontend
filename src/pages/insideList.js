import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./insideList.css";
import { getListItems } from "../api/index";
import ItemComponent from "../components/ItemComponent/ItemComponent";
import SubmitButton from "../components/SubmitButton/SubmitButton";

function InsideList() {
  const token = sessionStorage.getItem("token");
  const link = window.location.href.split("/");
  const itemId = link[link.length - 1];
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tmp = [];
    getListItems(token, itemId).then((data) => {
      data.forEach((item) => {
        tmp.push(item.item);
      });
      setItems(tmp);
    });
  }, [itemId, token]);

  function handleClick() {
    navigate(`/lists/${itemId}/edit`);
  }

  return (
    <div className="inside-list-container">
      <NavBar />
      <h1 className="header">Your List Items</h1>
      <ItemComponent
        params={items}
        className="delete-btn-inside-list"
      ></ItemComponent>
      <SubmitButton text="Edit List" onClick={handleClick}></SubmitButton>
      <Footer />
    </div>
  );
}

export default InsideList;
