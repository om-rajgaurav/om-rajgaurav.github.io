import './footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import React from 'react';

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        EGATOR
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='http://facebook.com'>
          <FaFacebookF />
        </a>
        <a href='http://facebook.com'>
          <FiInstagram />
        </a>
        <a href='http://facebook.com'>
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 Rohit's Portfolio</small>
      </div>
    </footer>
  );
}

export default Footer;
