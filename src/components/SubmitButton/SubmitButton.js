import React from "react";
import "./SubmitButton.css"

function SubmitButton(props) {

    return(
        <button className="submit">{props.text}</button>
    );
}

export default SubmitButton;