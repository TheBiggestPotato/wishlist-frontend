import React  from "react";
import "./InputField.css"

function InputField(props) {

    const type = props.type;
    const placeholder = props.placeholder;
    const onChange = props.onChange;
    const id = props.id;

    return(
        <div className="input-field">
            <input className="input" type={ type } placeholder={ placeholder } onChange={ onChange } id={ id }></input>
        </div>
    );
}

export default InputField;