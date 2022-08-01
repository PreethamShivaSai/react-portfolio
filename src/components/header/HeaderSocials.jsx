import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'


const headerSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https:/linkedin.com' target='_blank'><BsLinkedin/></a>
    <a href='https://github.com' target='_blank'><BsGithub/></a>
    <a href='https://dripbble.com' target='_blank'><FiDribbble/></a>
</div>
  )
}

export default headerSocials