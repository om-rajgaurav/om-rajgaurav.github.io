import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import React from 'react';
const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/nnrohu/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/nnrohu' target='_blank'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
