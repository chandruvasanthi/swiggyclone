import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./src/components/Header/Header";
import '@fortawesome/fontawesome-free/css/all.css';
import Body from "./src/components/Body/Body";
import Logo from "./src/components/Header/Logo/Logo";
import SwiggyCorporate from "./src/components/SwiggyCorporate/SwiggyCorporate";
import Offers from "./src/components/Header/Offers/Offers";
import Help from "./src/components/Help/Help";
import Cart from "./src/components/Header/Cart/Cart";
import RestaurantList from "./src/components/Body/RestaurantList/RestaurantList";
import Biriyani from "./src/components/Body/Whatsonyourmind/Biriyani/Biriyani";
import TopRestaurantCard from "./src/components/Body/TopRestaurantCard/TopRestaurantCard";
import Footer from "./src/components/Footer/Footer";
import TopRestaurantList from "./src/components/Body/TopRestaurantCard/TopRestaurantList/TopRestaurantList";
import User from "./src/components/UserComps/User";
import UserClass from "./src/components/UserComps/UserClass";

const App = () => {
    // State for cart items stored in local storage
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from local storage on first render
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const addToCart = (item) => {
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/logo" element={<Logo />} />
                    <Route path="/swiggyCorporate" element={<SwiggyCorporate />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/help" element={<Help />} />
                    <Route 
                        path="/cart" 
                        element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
                    />
                    <Route 
                        path="/restaurantList/:resId" 
                        element={<RestaurantList addToCart={addToCart} />}  
                    />
                    <Route path="/items/:blistId" element={<Biriyani />} />
                    <Route path="/restaurants" element={<TopRestaurantCard />} />
                    <Route path="/restaurant/:rId" element={<TopRestaurantList />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/userClass" element={<UserClass />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
