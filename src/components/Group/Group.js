import React from "react";
import "./Group.css";

function Group(props) {
  const title = props.title;
  const description = props.description;
  const href = props.href;

  return (
    <div className="group-item">
      <h2>
        <a className="group-item-title" href={href}>
          {title}
        </a>
      </h2>
      <p className="group-item-description">{description}</p>
    </div>
  );
}

export default Group;
