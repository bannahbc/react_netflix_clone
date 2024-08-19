import {React,useEffect,useRef} from 'react'
import logo from '../../Assests/logo.png'
import search_icon from '../../Assests/search_icon.svg'
import caret_icon from '../../Assests/caret_icon.svg'
import bell_icon from '../../Assests/bell_icon.svg'
import profile_icon from '../../Assests/profile_img.png'
import './Navbar.css'
import { logout } from '../../fire_base'
export default function Navbar(){
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('dark-nav');
            } else {
                navRef.current.classList.remove('dark-nav');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div className="navbar" ref={navRef}>
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
            <div className="navbar-right">
            <img src={search_icon} alt="" className='icons' />
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons' />
            <div className="navbar-profile">
                <img src={profile_icon} alt="" className="profile" />
                <img src={caret_icon} alt=""  />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>Sign Out</p>
            </div>
            </div>
        </div>
        </div>
    )
}