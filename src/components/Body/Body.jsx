import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantList/RestaurantCard/RestaurantCard';
import './Body.css';
import Shimmer from '../Shimmer/Shimmer';
import { Link } from 'react-router-dom';
import Whatsonyourmind from './Whatsonyourmind/Whatsonyourmind';
import TopRestaurantCard from './TopRestaurantCard/TopRestaurantCard';
import AppInstall from './AppInstall/AppInstall';


const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [topRestaurant, setTopRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resBody = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await resBody.json();
    console.log(json);
    const cards = json.data?.cards;
  //console.log(cards);


    let resList;

    for (let i = 0; i < cards.length; i++) {
      let card = cards[i].card;
      if (card?.card?.gridElements?.infoWithStyle?.restaurants) {
        resList = card?.card?.gridElements?.infoWithStyle?.restaurants;
        break;
      }
    }

    if (resList) {
      setListRestaurant(resList);
      setFilteredRestaurant(resList);

      const topRes = resList.filter((res) => res.info.avgRating >= 4.5);
      setTopRestaurant(topRes);
    } else {
      console.log("Restaurant Can't run");
    }
  };

  return listRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">



      <div className="search-content">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
           placeholder="Search for restaurants..."
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredRestaurant = listRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>

      <div>
        <div className="filter">
          <button
            onClick={() => {
              const topRes = listRestaurant.filter((res) => res.info.avgRating >= 4.5);
              setFilteredRestaurant(topRes);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="Whatsonyourmind mb-5">
          <Link className="link" to={"/items/:blistId"}>
            <Whatsonyourmind />
          </Link>
        </div>
        <hr />
      
        <div className="topcardcontent">
       
            <Link className="link" to={"/TopRestaurantList/"} >
              <TopRestaurantCard  />
            </Link>
       
        </div> 
        <br />
        <hr />

        <div className="content">
          <h3 className="h2">
            <b>Restaurants with online food delivery in Salem</b>
          </h3>
          <div className="insidecontent">
            {filteredRestaurant.map((res) => (
              <Link className="link" key={res.info.id} to={"/restaurantList/"+res.info.id}>
                <RestaurantCard resData={res} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="Appinstall">
      <AppInstall />
    </div>


    </div>
  );
};

export default Body;
