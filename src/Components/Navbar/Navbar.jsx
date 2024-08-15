import {React} from 'react'
import logo from '../../Assests/logo.png'
import search_icon from '../../Assests/search_icon.svg'
import caret_icon from '../../Assests/caret_icon.svg'
import bell_icon from '../../Assests/bell_icon.svg'
import profile_icon from '../../Assests/profile_img.png'
import './Navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="left-nav">
                <img src={logo} className='nav-logo' alt="netflix logo" />
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New&Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="right-nav">
                <ul className='nav-list'>
                    <li><img src={search_icon} className='icons' alt="" /></li>
                    <li>Children</li>
                    <li><img src={bell_icon} alt="" className='icons' /></li>
                    <li><img src={profile_icon} alt="" /></li>
                    <li><img src={caret_icon} alt="" className='icon' /></li>
                </ul>
            </div>
        </div>
    )
}