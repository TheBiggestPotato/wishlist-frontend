import { PropaneSharp } from '@mui/icons-material';
import './HomeButton.css'

function HomeButton(props) {

    const buttonText = props.buttonText;
    const onClick = props.onClick

    return(
        <div className='home-button-container'>
            <button className='home-button' onClick={ onClick }>{ buttonText }</button>
        </div>
    );
}


export default HomeButton;