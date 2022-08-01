import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
const footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>APSS</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#servics'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://github.com'><BsGithub/></a>
        <a href='https://linkedin.com'><FaLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; APSS all rights reserved</small>
      </div>
    </footer>
  )
}

export default footer