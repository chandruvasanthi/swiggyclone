import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  
    const [count, setCount] = useState(0);
   // const [count1, setCount1]=useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount =()=>{
      setCount(count - 1);
    }
    

    return (
        <div className='container-fluid mt-4'>
         <h4 className='itemh3'><b>Items in Cart :</b></h4>
          

           <div className='items'>
           {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <ul className='itemsul'>
                    {cartItems.map((item, index) => (
                        <li className='itemsli' key={index}>
                            <b>{item.name}</b> <span className='priceitem'> - ₹{(item.price || item.defaultPrice) / 100}</span>
                            
                            <button className="itemremovebtn" onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
           </div><br></br>

           <div className='item'>
           
           <button className='minus ' onClick={decreaseCount}><i className="fa-solid fa-minus"></i></button>
            <p className='itemp'><b>Item: {count}</b></p>
            <button className='plus ' onClick={increaseCount}><i className="fa-solid fa-plus"></i></button>
           </div><br></br>
           
           <div className='data'>
           <h4><b>SECURE CHECKOUT</b></h4>
           <input type="text" className="name" placeholder=" Name"></input><br></br><br></br>
             <input type="text" className="mob" placeholder=" Mobile number"></input><br></br><br></br>
             <label>Delivery Address :</label><br></br>
              <input className='address' type='text' placeholder=' D-NO, St-Name' ></input><br></br><br></br>
              <input className='address' type='text' placeholder=' Area Name' ></input><br></br><br></br>
              <input className='address' type='text' placeholder=' City' ></input><br></br><br></br>
              <button className='po'><b>Proceed to Pay</b></button>
            </div>
        </div>
    );
}

export default Cart;
