import React from 'react';
import "./OurFarm.css";
const OurFarm = () => {
  return (
    <div className='ofcon'>
      <img id="ourimg" src="https://i.ibb.co/Tttw6Rg/fa7ae94ca27c9d8ac54bc6541cad3671.jpg"className="w-100" height="400" alt="Farm Image" />
      <div
        id="textwtof"  > 
        <h1 className='hwtof'>Welcome to our Farm!</h1>
        <p className='pwtof'>
          Here you will find a wide range of healthy and fresh dairy products that were proudly
          produced at our farm by our farmers and cows. Welcome to Jacksons!
        </p>
      </div>
    </div>
  );
};

export default OurFarm;
