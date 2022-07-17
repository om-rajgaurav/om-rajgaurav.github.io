import './footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import React from 'react';

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        PORTFOLIO
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
        <a href='https://www.facebook.com/nnroh'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/nnrohu'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com/nnrohu'>
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
