import React from 'react';
import "./Nav.css";
import img1 from "../assets/Logo.png"
import img2 from "../assets/Account Profile.png"
import Navtext from './Navtext';

const Nav = () => {
    return ( 
     <>
        <header className="navbar">
        <div className="nav-left">
        <img src={img1} />
        </div>
    
        <nav className="nav-center">
          <ul>
            <li className="active"><Navtext text="Home" /></li>
           
            <Navtext text="Services" />
           
            <li>  <Navtext text="Forum" /></li>
            <li>  <Navtext text="Contact us" /></li>
          </ul>
        </nav>
    
        <div className="nav-right">

          <img src={img2} />
        </div>
      </header>
      </>

     );
}
 
export default Nav;