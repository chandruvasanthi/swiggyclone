import React, { useEffect, useState } from 'react';
import { Biriyani_url } from '../../../constants/utils';
import './Biriyani.css';
import { useParams } from 'react-router-dom';

const Biriyani = () => {
    const [biriyaniList, setBiriyaniList] = useState([]);
   
   // const blistId = "80396";    //80477
    const {blistId} = useParams();



    useEffect(() => {
        fetchData();
    }, [blistId]);

    const fetchData = async () => {
        const blist = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&collection="+125233+"&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await blist.json();
        console.log(json);
        const restaurantCards = json.data.cards.filter(card => card.card.card.info);
        const biriyaniData = restaurantCards.map(card => card.card.card.info);
        console.log(biriyaniData);
        setBiriyaniList(biriyaniData);
    };


   
    
    return (
        <div className='body'>
            {/* <h1>Biriyani</h1> */}
            {/* <p>Taste these delectable classics, delectable biryanis to make your day.</p> */}
          <div className='card-details'>
             {biriyaniList.map((item, index) => {
                  const { name, cuisines, cloudinaryImageId, avgRating } = item;
                  const { deliveryTime} = item.sla;
                  return (
                 <div key={index}  className='card-content'> 
                     <img className="Biriyani-logo" src={Biriyani_url +cloudinaryImageId }  />
                     <h5>{name}</h5>
                     <h6><i className="fa-regular fa-star avgstar"></i>  {avgRating} -{deliveryTime} mins</h6>
                     <p className='cuisines'>{cuisines.join(', ')}</p>
                 
                  
                   
                 </div>
                  );
         })}
         </div>
        </div>
       
    );
};

export default Biriyani;