import React from "react";

function NavButton(props) {

    return(
        <button className={props.className} onClick={props.onClick}>{props.text}</button>
    );
}

export default NavButton;