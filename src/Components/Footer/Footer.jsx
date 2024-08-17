import React from 'react'
import fb_icon from '../../Assests/facebook_icon.png'
import yt_icon from '../../Assests/youtube_icon.png'
import tw_icon from '../../Assests/twitter_icon.png'
import ig_icon from '../../Assests/instagram_icon.png'
import './Footer.css'


export default function Footer() {
  return (
    <div className='footer'>
        <div className="social-meadia">
            <img src={fb_icon} alt="" className="social-icons" />
            <img src={yt_icon} alt="" className="social-icons" />
            <img src={ig_icon} alt="" className="social-icons" />
            <img src={tw_icon} alt="" className="social-icons" />
        </div>
        <div className="footer-list">
            <ul>
                <li><a href="#">Audio Description</a></li>
                <li><a href="#">Investor relation</a></li>
                <li><a href="#">legal notices</a></li>
                <li><a href="#">help centre</a></li>
                <li><a href="#">job</a></li>
                <li><a href="#">cookie preverence</a></li>
                <li><a href="#">gift cards</a></li>
                <li><a href="#">terms of use</a></li>
                <li><a href="#">corporate information</a></li>
                <li><a href="#">media centre</a></li>
                <li><a href="#">privacy</a></li>
                <li><a href="#">contact us</a></li>
            </ul>
        </div>
        <div className="copy_right">
            <p>@ 1997-2024 Netflix, inc.</p>
        </div>
    </div>
  )
}
