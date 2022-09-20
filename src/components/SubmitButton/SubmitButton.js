import React from "react";
import "./SubmitButton.css"

function SubmitButton(props) {

    const onClick = props.onClick;

    return(
        <button className="submit" onClick={ onClick } type='button'>{props.text}</button>
    );
}

export default SubmitButton;