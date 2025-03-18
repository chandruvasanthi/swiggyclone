import React, { useEffect, useState } from 'react';
import  "../ShimmerList/ShimmerList";
import { useParams, Link } from 'react-router-dom';
import "./RestaurantList.css";
import { RECOMMENDED_URL } from '../../constants/utils';
import ShimmerList from '../ShimmerList/ShimmerList';

const RestaurantList = ({ addToCart }) => {
  const [resInfo, setResInfo] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [expandedItemId, setExpandedItemId] = useState(null); 

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, [resId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const fetchData = async () => {
  
      const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.66020&lng=78.15320&restaurantId='+resId);
      const json = await res.json();
      setResInfo(json);
    
  };

  

  if (resInfo === null) return <ShimmerList />;

  const { name, cuisines, avgRating } = resInfo?.data?.cards[2]?.card?.card?.info ;
  const { deliveryTime, minDeliveryTime, maxDeliveryTime } = resInfo?.data?.cards[2]?.card?.card?.info?.sla;
  console.log(resInfo);
  const menuCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(menuCards);


  const toggleSection = (index) => {
    setOpenSections(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleText = (id) => {
    setExpandedItemId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="restaurant-list">
      <h4>{name}</h4>
      <div id='list' className='card bg-light p-2 border'>
        <div className='card-body'>
          <h5>{cuisines?.join(", ")}</h5>
          <h6><i className="fa-regular fa-star avgstar"></i> {avgRating}</h6>
          <h6><i className="fa-regular fa-clock"></i> {minDeliveryTime}-{maxDeliveryTime} mins</h6>
          <hr />
          <p><i className="fa-solid fa-person-biking"></i> Order above 149 for discounted delivery fee</p>
        </div>
      </div>
      <br />


      {menuCards?.filter(menuCategory => menuCategory?.card?.card?.itemCards?.length > 0).map((menus, index) => {
        const sectionTitle = menus?.card?.card?.title;
        const itemCards = menus?.card?.card?.itemCards;

        return (
          <div key={index} className="menu-section">
            <div className="accordion-toggle" onClick={() => toggleSection(index)}>
              <span className="accordion-title">{sectionTitle}</span>
              <span className="accordion-icon">{openSections[index] ? '▲' : '▼'}</span>
            </div>

            {openSections[index] &&(
              <div className="accordion-content open">
               <ul>
                  {itemCards.map(item => {
                    const { id, name, price, defaultPrice, description, imageId } = item.card.info;
                    const isExpanded = expandedItemId === id;

                    return (
                      
                      <div className='con'>
                      <div>
                       <li key={item.card.info.id}>
                        <h6 className='rec-content mt-2'>
                          <b>{item.card.info.name} - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</b>
                        </h6> 
                        {/* <p className='mt-2'>{item.card.info.description}</p> */}
                        <p>
                          {isExpanded ? description : `${description.substring(0, 100)} `}
                          <button className='morebtn' onClick={() => toggleText(item.card.info.id)}>
                            {isExpanded ? 'less' : 'more'}
                          </button>
                        </p>
                       </li>
                      </div>
                      <div className='img'>
                      <img className='recommended-logo' alt='recommended-logo' src={RECOMMENDED_URL + item.card.info.imageId} />
                      <br></br>
                      {/* <Link to={"/Cart"}> */}
                      <button className='addbtn mt-1'  onClick={() => addToCart(item.card.info)}><b>ADD</b></button>
                      {/* </Link> */}
                  
                      </div>
                     
                      </div>
        
                    );
                  })}
                </ul>
               
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantList;
