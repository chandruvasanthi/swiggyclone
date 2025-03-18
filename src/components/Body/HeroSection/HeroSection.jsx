import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: 'https://i.ibb.co/JrcfMt1/1000-F-579119707-Zwc98-C7-Wr-Zc34b0-Szw-GNYlbafdj-G9-HHS.jpg',
      title: 'MILK AND MORE!',
      description: 'FRESH, LOCAL, DELIVERED',
    },
    {
      img: 'https://i.ibb.co/sRysQ8p/crazy-smiling-cow-tongue-looking-260nw-82226761.webp',
      title: 'CREAMY CHEESE',
      description: 'FRESH, LOCAL, DELIVERED',
    },
    {
      img: 'https://i.ibb.co/hfp0FSZ/istockphoto-1319467946-612x612.jpg',
      title: 'SWEET ICE CREAMS!',
      description: 'FRESH, LOCAL, DELIVERED',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="hero-section">
      <div className="maincarousel">
        <div className="milkimg">
          <img className="img-responsive" src="https://i.ibb.co/N7jdw3z/header-splash-mob.png" width="100%" height="70" alt="Header" />
        </div>

        <div className="imagecontainer ">
          {slides.map((slide, index) => (
            <div id="slideimgs"
              key={index}
              className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
            >
              <img  src={slide.img} className="d-block h-75 w-100" alt={`Slide ${index + 1}`} />
              <div className={`carousel-caption ${currentIndex === index ? 'fade-in' : 'fade-out'}`}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btnvop">View our Product</button>
      </div>
    </div>
  );
};

export default HeroSection;
