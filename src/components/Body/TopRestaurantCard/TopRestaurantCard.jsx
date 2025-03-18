import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CDN_URL } from '../../constants/utils';
import './TopRestaurantCard.css';

const TopRestaurantCard = ({ fetchDataUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'}) => {
    const [topRes, setTopRes] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          
                const res = await fetch(fetchDataUrl);
                const json = await res.json();
                const topResData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
                setTopRes(topResData);
            
        };

        fetchData();
    }, [fetchDataUrl]);

    const split = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const splitted = split(topRes, 4);

    return (
        <div>
            <h3 className='h2'><b>Top restaurant chains in Salem</b></h3>
            <div id="restaurantCarousel" className="carousel slide" data-bs-ride="carousel">
           
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className ="active bg-secondary "></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className='bg-secondary'></button>  
               </div>

                <div className="carousel-inner">
                    {splitted.map((splitcard, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="row">
                      {splitcard.map((restaurant) => {
                       const { info } = restaurant;
                       const { name, cuisines, avgRating, cloudinaryImageId, id } = info; 
                       const { deliveryTime } = info.sla;

                    return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                      <Link to={'/restaurant/'+id} className="c-link">
                       <div className='card'>
                        <div className='card-container'>
                           <img className="topres-logo d-block " src={CDN_URL + cloudinaryImageId} alt={name} />
                       <div className='ctext'>
                       <h5>{name}</h5>
                           <h6><i className="fa-regular fa-star avgstar"></i> {avgRating} - {deliveryTime} mins</h6>
                           <p className="cuisines">{cuisines.join(', ')}</p>
                       </div>
                          
                        
                          
                       </div>
                      </div>
                     </Link>
                  </div>
                  );
              })}
              </div>
           </div>
           ))}
         </div>
                <button id='prev' className="carousel-control-prev h-25" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
                </button>
                <button id='next' className="carousel-control-next h-25" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
};

export default TopRestaurantCard;

