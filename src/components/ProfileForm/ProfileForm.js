import './ProfileForm.css';
import InputField from "../InputField/InputField.js";
import SubmitButton from '../SubmitButton/SubmitButton.js';


function ProfileForm(props) {

    const params = props.params;
    const btnTxt = props.btnTxt;
    const btnClass = props.btnClass;
    
    return(
        <form className="public-data">
            { params.map((param, key) => <InputField key={ key } type={ param.type } placeholder={ param.placeholder }></InputField>)}
            <div className="button-container">
                <SubmitButton text={ btnTxt } className={ btnClass } />
            </div>
        </form>
    );
}

export default ProfileForm;