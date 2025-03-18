
import React, { useState, useEffect } from 'react';
import './AppInstall.css';

const AppInstall = () => {
  const [installData, setInstallData] = useState([]); 
  
  useEffect(() => {
    const fetchData = async () => {
   
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const result = await response.json();
        const applink = result?.data?.cards?.[9]?.card?.card;
        setInstallData(applink); 
    };

    fetchData();
  }, []);

  const { title, androidAppLink, androidAppImage, iosAppLink, iosAppImage } = installData;

  return (
    <div className='content'>
      <div id='installapp' className='mt-3 text-white'>
        <h4 className='title '><b>{title}</b></h4>
        <div className="links mb-2">
            <button className='gpbtn'>
            <a to={androidAppLink} className='gplink'>
            <img src={androidAppImage} alt="GET IT ON Google Play " />
            </a>
            </button>
            
            <button className='iosbtn'>
            <a href={iosAppLink} className='ioslink'>
            <img src={iosAppImage} alt="Download on the App Store" />
            </a>
            </button>
            
    
        </div>
      </div>
    </div>
  );
};

export default AppInstall;
