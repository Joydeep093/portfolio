import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/joydeep-roy-42514875" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Joydeep093" target="_blank" rel='noreferrer'><BsGithub/></a>
        
    </div>
  )
}

export default HeaderSocials