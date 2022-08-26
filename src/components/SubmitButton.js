import React from "react";

function SubmitButton(props) {

    return(
        <button className={props.className}>{props.text}</button>
    );
}

export default SubmitButton;