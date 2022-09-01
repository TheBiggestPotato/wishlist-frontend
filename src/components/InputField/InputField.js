import React  from "react";
import "./InputField.css"

function InputField(props) {
    return(
        <div className="input-field">
            <input className="input" type={props.type} placeholder={props.placeholder}></input>
        </div>
    );
}

export default InputField;