import './NavBar.css'
import { MenuItems, logo_src } from './NavBar.constants.js'
import NavButton from './Button/NavBar.button';
import React, { useState } from 'react';


function NavBar() {

   let state = { clicked: false }

   const [clicked , setClicked] = useState(state);

   const handleClick = () => {
    setClicked(state.clicked = !state.clicked)
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
        <NavButton className='nav-button' text='Log in'></NavButton>
       </nav> 
    );
}

export default NavBar;