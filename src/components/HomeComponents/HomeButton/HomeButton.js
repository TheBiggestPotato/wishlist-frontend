import { PropaneSharp } from '@mui/icons-material';
import './HomeButton.css'

function HomeButton(props) {

    const buttonText = props.buttonText;

    return(
        <div className='home-button-container'>
            <button className='home-button'>{ buttonText }</button>
        </div>
    );
}


export default HomeButton;