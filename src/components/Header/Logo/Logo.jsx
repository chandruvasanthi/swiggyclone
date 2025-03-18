import React from 'react';
import './Logo.css';
import {LOGO_URL} from'../../constants/utils';
import { Link } from 'react-router-dom';
const Logo =()=>{
    return (
        <div>

            <Link to='http://localhost:5173/'>
               <img  className='logo' src ={ LOGO_URL} alt="download" border="0" />
              </Link>
        </div>
    )
}
export default Logo;