import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import React from 'react'
const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/omrajgaurav/"
        target="_blank"
        // rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/om-rajgaurav"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocial
