import React from "react";
import "./ListItem.css";

function List(props) {
  const title = props.title;
  const description = props.description;
  const href = props.href;

  return (
    <div className="list-item">
      <h2>
        <a className="list-item-title" href={href}>
          {title}
        </a>
      </h2>
      <p className="list-item-description">{description}</p>
    </div>
  );
}

export default List;
