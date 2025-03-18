import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TopRestaurantList.css';
import { RECOMMENDED_URL } from '../../../constants/utils';
import ShimmerList from '../../ShimmerList/ShimmerList';

const TopRestaurantList = () => {
  const [rdata, setRdata] = useState({});
  const [openSections, setOpenSections] = useState({});
  const [expandedItemId, setExpandedItemId] = useState(null);
  const { rId } = useParams();

  useEffect(() => {
    fetchData();
  }, [rId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const fetchData = async () => {
   
      const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.66020&lng=78.15320&restaurantId='+rId);
      const json = await res.json();
      setRdata(json);
    
  };

  const{ name , cuisines , avgRating } = rdata?.data?.cards[2]?.card?.card?.info || {};
  const{ minDeliveryTime,maxDeliveryTime } = rdata?.data?.cards[2]?.card?.card?.info?.sla || {};
  const menuCards = rdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  console.log(menuCards);

  if (!name) return <ShimmerList />;

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
      <div id='toplist' className='card bg-light p-2 border'>
        <div className='card-body'>
          <h5>{cuisines.join(", ") }</h5>
          <h6><i className="fa-regular fa-star avgstar"></i> {avgRating}</h6>
          <h6><i className="fa-regular fa-clock"></i> {minDeliveryTime} - {maxDeliveryTime} mins</h6>
          <hr />
          <p><i className="fa-solid fa-person-biking"></i> Order above ₹149 for discounted delivery fee</p>
        </div>
      </div>
      <br />

      {menuCards
        .filter(menuCategory => menuCategory?.card?.card?.itemCards?.length > 0)
        .map((menus, index) => {
          const sectionTitle = menus?.card?.card?.title;
          const itemCards = menus?.card?.card?.itemCards;

          return (
            <div key={index} className="menu-section">
              <div className="accordion-toggle" onClick={() => toggleSection(index)}>
                <span className="accordion-title">{sectionTitle}</span>
                <span className="accordion-icon">{openSections[index] ? '▲' : '▼'}</span>
              </div>

              {openSections[index] && (
                <div className="accordion-content open">
                  <ul>
                    {itemCards.map(item => {
                      const { id, name, price, defaultPrice, description = '', imageId } = item.card.info;
                      const isExpanded = expandedItemId === id;

                      return (
                        <li key={id} className='con'>
                          <div>
                            <h6 className='rec-content mt-2'>
                              <b>{name} - ₹{price ? price / 100 : defaultPrice / 100}</b>
                            </h6>
                            <p>
                              {isExpanded ? description : `${description.substring(0, 100)} `}
                              <button className='morebtn' onClick={() => toggleText(id)}>
                                {isExpanded ? 'less' : 'more'}
                              </button>
                            </p>
                          </div>
                          <div className='img'>
                            <img className='recommended-logo' alt='recommended-logo' src={RECOMMENDED_URL + imageId} />
                            <br />
                            <Link to="/Cart">
                              <button className='addbtn mt-1'><b>ADD</b></button>
                            </Link>
                          </div>
                        </li>
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

export default TopRestaurantList;
