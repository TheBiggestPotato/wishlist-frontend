import React  from "react";


function InputField(props) {
    console.log(props)
    return(
        <div className="InputField">
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    );
}

export default InputField;