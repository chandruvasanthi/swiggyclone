import React, { useState } from 'react';
import './Navitems.css';
import { Link, useNavigate } from 'react-router-dom';
const NavItems = ()=>{

    const [ loggedin, setloggedin] = useState();
    const login = ()=>{
        setloggedin(!loggedin);
    }

  //const navigate = useNavigate();

    return(
       
          <div className='nav-container'>
            <ul className='nav-items'>
                <li className='sc'>
                     <i class="fa-regular fa-square"></i><Link to='/SwiggyCorporate' className="logos">Swiggy Corporate</Link>
                </li>
                <li className='search'> 
                    <i class="fa-solid fa-magnifying-glass"></i><Link to='/' className="logos">Search</Link>
                </li>
                <li className='offer'>
                    <i class="fa-solid fa-percent"></i><Link to='/Offers' className="logos">Offers</Link>
                 </li>
                <li className='help'>
                    <i class="fa-solid fa-handshake-angle"></i><Link to='/Help' className="logos">Help</Link>
                </li>
                <button className='loginbtn' onClick={login}> {loggedin?'Logout' : 'Log in'}</button>
                <li className='cart'>
                    <i class="fa-solid fa-cart-shopping"></i><Link to='/Cart' className="logos">Cart</Link>
                </li>
            </ul>
        </div>


      
        
/* <div className='nav-container'>
<ul className='nav-items'>
    <li className='sc'>
         <i class="fa-regular fa-square"></i><button onClick={navigate("/SwiggyCorporate")}  className="logos">Swiggy Corporate</button>
    </li>
    <li className='search'> 
        <i class="fa-solid fa-magnifying-glass"></i><button onClick={navigate("/Search")} className="logos">Search</button>
    </li>
    <li className='offer'>
        <i class="fa-solid fa-percent"></i><button   onClick={navigate("/Offers")}  className="logos">Offers</button>
     </li>
    <li className='help'>
        <i class="fa-solid fa-handshake-angle"></i><button  onClick={navigate("/Help")} className="logos">Help</button>
    </li>
    <button className='loginbtn' onClick={login}> {loggedin?'Logout' : 'Log in'}</button>
    <li className='cart'>
        <i class="fa-solid fa-cart-shopping"></i><button  onClick={navigate("/Cart")} className="logos">Cart</button>
    </li>
</ul>
</div> */


)
}
export default NavItems;