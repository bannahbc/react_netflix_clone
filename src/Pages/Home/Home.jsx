import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './Home.css'
import banner_img from '../../Assests/hero_banner.jpg'
import hero_title from '../../Assests/hero_title.png'
import info_icon from '../../Assests/info_icon.png'
import play_icon from '../../Assests/play_icon.png'
import TitleCard from "../../Components/TitleCards/TitleCard";
import Footer from "../../Components/Footer/Footer";



const Home  = ()=>{
    return <div className="home">
        <Navbar/>
        <div className="hero">
            <div className="banner-img">
                <img src={banner_img} alt="" />
            </div>
            <div className="hero-banner-content">
                <img src={hero_title} alt="" className="banner-title-img" />
                <div className="buttons">
                    <button><img src={play_icon} alt="" /> Play</button>
                    <button  className="dark-btn"><img src={info_icon} alt="" /> Info</button>
                </div>
                <TitleCard title={"Pop"}/>

            </div>
        </div>
                <div className="home-contents">
                    <TitleCard title={"Top Rated on Netflix"} category={"top_rated"}/>
                    <TitleCard title={"Popular"} category={"popular"}/>
                    <TitleCard title={"Now Playing"} category={"now_playing"}/>
                    <TitleCard title={"Upcoming"} category={"upcoming"}/>
                </div>
                <Footer/>
    </div>
}

export default Home