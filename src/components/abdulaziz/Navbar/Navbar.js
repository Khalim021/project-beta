import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import logoText from "../../../assets/images/logo1.png";
import darkmode from "../../../assets/images/darkmode.svg";
import useTheme from  "../../Hook/useTheme"

const NavLink = ({link, className}) => {
  return (
    <li>
      <a href={`#`+link} className={className}>
        {link}
      </a>
    </li>
  );
};

export default function Navbar() {
  const [showSidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useTheme();
  
  return (
    <nav className={`navbar navbar--${theme}`}>
      <div className="container">
        <a href='/' id='logo'>
          <img src={logo} alt='logo' />
          <img src={logoText} alt='logo' />
        </a>
        <ul className='navbar__items'>
          <NavLink link="product" className="navbar__link" />
          <NavLink link="customers" className="navbar__link" />
          <NavLink link="pricing" className="navbar__link" />
          <NavLink link="resources" className="navbar__link" />

          <NavLink link="sign in" className="navbar__btn" />
          <NavLink link="sign in" className="navbar__btn navbar__btn--dark" />
          <li><a href="/" className='darkmode'><img src={darkmode} alt={darkmode}/></a></li>
          <li>
          <select className="select__theme" value={theme} onChange={(evt)=>setTheme(evt.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        </select>
          </li>
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
            
            <NavLink link="product" className="sidebar__link" />
            <NavLink link="customers" className="sidebar__link" />
            <NavLink link="pricing" className="sidebar__link" />
            <NavLink link="resources" className="sidebar__link" />

            <NavLink link="sign in" className="sidebar__btn" />
            <NavLink link="sign in" className="sidebar__btn sidebar__btn--dark"/>
          </ul>
        </div>
      </div>
    </nav>
  );
}