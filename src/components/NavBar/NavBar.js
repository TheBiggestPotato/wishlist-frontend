import './NavBar.css'
import { MenuItems, logo_src } from './NavBar.constants.js'
import NavButton from './Button/NavBar.button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NavBar() {

   const state = { clicked: false }

   const [clicked , setClicked] = useState(state);

   const navigate = useNavigate();

   const handleClick = () => {
    setClicked(state.clicked = !state.clicked)
   }

   const loginOnClick = () => {
    navigate('/login')
   }

    return(
       <nav className='navbar-items'>
        <a className='navbar-logo-a'>
            <div className='logo-img'>
                <img src={ logo_src } className='img' alt='logo'></img>
            </div>
        </a>
        <div className='menu-icon' onClick={handleClick}>
            <i className={ clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className={ clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={ index }>
                        <a className={ item.className } href={ item.url }>
                            { item.title }
                        </a>
                    </li>
                ); 
            })}
        </ul>
        <NavButton className='nav-button' text='Log in' onClick={ loginOnClick }></NavButton>
       </nav> 
    );
}

export default NavBar;