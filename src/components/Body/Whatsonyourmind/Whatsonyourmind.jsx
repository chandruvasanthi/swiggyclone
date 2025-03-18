import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Whatsonyourmind.css";
import { MIND_URL } from '../../constants/utils';

const Whatsonyourmind = () => {
    const [yourMind, setYourMind] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
       
            const resBody = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await resBody.json();
            console.log(json); 
            const mind = json.data.cards[0].card.card.gridElements.infoWithStyle.info;
            setYourMind(mind);
       
    };

    
    const split = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const splited = split(yourMind, 10);

    return (
        <div>
            <h3 className='h2'><b>What's on your mind?</b></h3>

            <div id="demo" className="carousel slide ms-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className ="active bg-secondary "></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className='bg-secondary'></button>  
               </div>

                <div className="carousel-inner ">
                    {splited.map((item, index) => (
                        <div className={`carousel-item  ${index === 0 ? "active" : ""}`}>
                            {item.map((e) => (
                                    <img  className='woymimg' src={MIND_URL + e.imageId}/>
                            ))}
                        </div>
                    ))}
                </div>

                <button type="button"  className="carousel-control-prev bg-secondary" data-bs-target="#demo"  data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon  "></span>
                    {/* <i className="fa-solid fa-arrow-left"></i> */}
                </button>
                <button  type="button"   className="carousel-control-next bg-secondary"  data-bs-target="#demo"  data-bs-slide="next" >
                    <span className="carousel-control-next-icon "></span>
                </button>
            </div>
        </div>
    );
};

export default Whatsonyourmind;
