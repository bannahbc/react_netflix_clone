import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './Home.css'
import banner_img from '../../Assests/hero_banner.jpg'
const Home  = ()=>{
    return <div className="home">
        <Navbar/>
        <div className="hero">
            <div className="banner-img">
                <img src={banner_img} alt="" />
            </div>
        </div>
    </div>
}

export default Home