import React from "react";
import './RestaurantCard.css';
import { CDN_URL } from "../../../constants/utils";


const RestaurantCard = (props)=>{

    const {resData} = props;
    const { name , cuisines , avgRating  } = props.resData.info;
    const { deliveryTime, minDeliveryTime, maxDeliveryTime } =props.resData.info.sla;
  // console.log(maxDeliveryTime);

    return(
       <div className="card">
           <div className="card-container" >
            <img  className="res-logo" alt="res-logo" src={ CDN_URL + resData.info.cloudinaryImageId} />
            <div className="text">
            <h5>{ name }</h5>
            <h6><i className="fa-regular fa-star avgstar"></i> { avgRating } - {deliveryTime} mins</h6>
            {/* <h5>Delivery time : { deliveryTime }</h5> */}
            <p className="cuisines">{ cuisines.join(', ') }</p>
            </div>
            
          </div>
       </div>
          
           
    )
}
export default RestaurantCard;