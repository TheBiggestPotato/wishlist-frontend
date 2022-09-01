import React from "react";
import "./SubmitButton.css"

function SubmitButton(props) {

    return(
        <button className={props.className}>{props.text}</button>
    );
}

export default SubmitButton;