import React from 'react';
import Logo from './Logo/Logo';
import NavItems from './Navitems/Navitems';
import "./Header.css";
const Header = ()=>{
    return(
        <div className='header'>
            <Logo />
            
            <span className='other'>Other<i class="fa-solid fa-chevron-down"></i></span>
            <NavItems />
         
        </div>
    )
}
export default Header;