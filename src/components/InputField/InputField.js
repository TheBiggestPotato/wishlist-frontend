import React  from "react";
import "./InputField.css"

function InputField(props) {

    const type = props.type;
    const placeholder = props.placeholder;

    return(
        <div className="input-field">
            <input className="input" type={ type } placeholder={ placeholder }></input>
        </div>
    );
}

export default InputField;