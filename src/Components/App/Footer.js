import React from 'react';
import sayKarenLogo from '../../assets/sayKaren_Logo_transparent_7.2019.png';

const Footer = () => (
  <footer id="footer" className="footerDetails">
    Website created by:
    <a href="http://saykaren.com" target="_blank" rel="noopener noreferrer">
      <img
        src={sayKarenLogo}
        className="footerDetails"
        id="sayKarenLogo"
        alt="sayKaren.com"
      />
    </a>
  </footer>
);

export default Footer;
