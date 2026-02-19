import React from 'react';
import "./Footer.css";
import Footertext from "../components/Footertext";
import Icon from './Icon';


const Footer = () => {
    return (  
        <footer className="site-footer">
          <div className="footer-inner">
  
            <div className="footer-left">
              <h3 className="footer-title">Header</h3>
              <p className="footer-desc">
                Lorem ipsum dolor sit amet, consectetur<br />
                adipisicing elit. Sed ornare cursus sed nunc eget<br />
                dictum Sed ornare cursus sed nunc eget<br />
                dictum Sed ornare cursus sed nunc eget dictum<br />
                sed nunc eget dictum
              </p>
  
              <div className="footer-icons">
              <Icon link="#" label="search" icon="⌕" />
<Icon link="#" label="facebook" icon="F" />
<Icon link="#" label="twitter" icon="T" />
<Icon link="#" label="instagram" icon="I" />

              </div>
            </div>
  
            <div className="footer-right">
              <h3 className="footer-title">Header Text</h3>
  
              <ul className="footer-links">
              <Footertext link="home" text="Home" />
<Footertext link="about" text="About Us" />
<Footertext link="contact" text="Contact" />
<Footertext link="services" text="Services" />

              </ul>
            </div>
  
          </div>
        </footer> );
}
 
export default Footer;