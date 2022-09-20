import React from "react";
import "./Item.css";

function Item(props) {
  const itemName = props.itemName;
  const details = props.details;
  const quantity = props.quantity;
  const size = props.size;
  const maker = props.maker;
  const model = props.model;
  const link = props.link;
  const buyers = props.buyers;

  return (
    <div className="item-container">
      <h3 className="item-name">{itemName}</h3>
      <ul className="description">
        <li className="description-item">
          <h2>{details}</h2>
        </li>
        <li className="description-item">
          <p>quantity: {quantity}</p>
        </li>
        <li className="description-item">
          <p>size: {size}</p>
        </li>
        <li className="description-item">
          <p>maker: {maker}</p>
        </li>
        <li className="description-item">
          <p>model: {model}</p>
        </li>
        <li className="description-item">
          <p>link: {link}</p>
        </li>
      </ul>
      <div className="item-buyers">
        <p className="buyers-title">Buyers:</p>
        <p className="buyers">{buyers}</p>
      </div>
    </div>
  );
}

export default Item;
