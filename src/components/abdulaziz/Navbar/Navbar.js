import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import logoText from "../../../assets/images/logo1.png";
import darkmode from "../../../assets/images/darkmode.svg";

export default function Navbar() {
  const [showSidebar, setSidebar] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="container">
        <a href='/' id='logo'>
          <img src={logo} alt='logo' />
          <img src={logoText} alt='logo' />
        </a>
        <ul className='navbar__items'>
          <li><a href='/' className='navbar__link'>Product</a></li>
          <li><a href='/' className='navbar__link'>Customers</a></li>
          <li><a href='/' className='navbar__link'>Pricing</a></li>
          <li><a href='/' className='navbar__link'>Resources</a></li>

          <li><a href='/' className='navbar__btn'>Sign In</a></li>
          <li><a href='/' className='navbar__btn navbar__btn--dark'>Sign Up</a></li>
          <li><a href='/' className='darkmode'><img src={darkmode} alt={darkmode}/></a></li>
        </ul>

        <div className="navbar__icon" onClick={() => setSidebar(!showSidebar)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div 
              className={`sidebar ${!showSidebar && "hidden"}`} 
              onClick={(e) => !e.target.classList.contains("sidebar__items") ? setSidebar(!showSidebar) : ""}
        >
          <ul className='sidebar__items'>
            <li className='sidebar__close' onClick={() => setSidebar(!showSidebar)}>&#10005;</li>
            <li><a href='/' className='sidebar__link'>Product</a></li>
            <li><a href='/' className='sidebar__link'>Customers</a></li>
            <li><a href='/' className='sidebar__link'>Pricing</a></li>
            <li><a href='/' className='sidebar__link'>Resources</a></li>

            <li><a href='/' className='sidebar__btn'>Sign In</a></li>
            <li><a href='/' className='sidebar__btn sidebar__btn--dark'>Sign Up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
