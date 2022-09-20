import React from "react";
import Item from "../Item/Item";
import "./ItemComponent.css";

function ItemComponent(props) {
  const params = props.params;
  return (
    <ul className="item-data">
      {params?.map((param, key) => {
        return (
          <li key={key}>
            <Item
              itemName={param.itemName}
              details={param.details}
              quantity={param.quantity}
              size={param.size}
              maker={param.maker}
              model={param.model}
              link={param.link}
              buyers={param.buyers}
            ></Item>
            <button
              className={props.className}
              id={param.id}
              onClick={props.onClick}
              type="button"
            >
              Delete Item
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ItemComponent;
