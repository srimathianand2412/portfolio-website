import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const[showMenu, setshowMenu]= useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass= 'active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass= 'active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass= 'active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me</button>

                <img src={menu} alt="Menu" className="mobMenu" onClick={()=> setshowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass= 'active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=> setshowMenu(false)}>Home</Link>
                <Link activeClass= 'active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setshowMenu(false)}>Projects</Link>
                <Link activeClass= 'active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setshowMenu(false)}>Education </Link>
                <Link activeClass= 'active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setshowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}
export default Navbar;