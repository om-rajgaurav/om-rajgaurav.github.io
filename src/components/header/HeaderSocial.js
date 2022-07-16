import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import React from 'react';
const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://linked.in' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://linked.in' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://linked.in' target='_blank'>
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
