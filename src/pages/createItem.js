import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import InputField from "../components/InputField/InputField";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { createItem } from "../api/index";
import { useNavigate } from "react-router-dom";
import "./createItem.css";

function CreateItem() {
  const [name, setName] = useState();
  const [details, setDetails] = useState("N/A");
  const [size, setSize] = useState("N/A");
  const [quantity, setQuantity] = useState(1);
  const [maker, setMaker] = useState("");
  const [model, setModel] = useState("");
  const [link, setLink] = useState("");

  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  async function handleClick() {
    const data = { name, details, size, quantity, maker, model, link };

    await createItem(token, data)
      .then((data) => console.log(data))
      .then(navigate("/items"));
  }

  return (
    <div className="container">
      <NavBar />
      <div className="create-item-container">
        <h1 className="header">Create a New Item</h1>
        <InputField
          type="text"
          placeholder="Name of your item"
          onChange={(e) => setName(e.target.value)}
        ></InputField>
        <InputField
          type="number"
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        ></InputField>
        <InputField
          type="text"
          placeholder="Size"
          onChange={(e) => setSize(e.target.value)}
        ></InputField>
        <InputField
          type="text"
          placeholder="Brand"
          onChange={(e) => setMaker(e.target.value)}
        ></InputField>
        <InputField
          type="text"
          placeholder="Model"
          onChange={(e) => setModel(e.target.value)}
        ></InputField>
        <InputField
          type="text"
          placeholder="Link for item"
          onChange={(e) => setLink(e.target.value)}
        ></InputField>
        <div className="text-area">
          <textarea
            className="item-description"
            placeholder="Item description"
            rows={5}
            cols={50}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <SubmitButton onClick={handleClick} text="Create Item" />
      </div>
      <Footer />
    </div>
  );
}

export default CreateItem;
