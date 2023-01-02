import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.facebook.com/satyabrata1999" target='_blank'  rel="noreferrer"><BsFacebook className='footer__socials-icon'/></a>
        <a href="https://www.instagram.com/satya_dash99/?next=%2F" target='_blank' rel="noreferrer"><BsInstagram className='footer__socials-icon'/></a>
        <a href="https://twitter.com/Satyabr02510373" target='_blank' rel="noreferrer"><BsTwitter className='footer__socials-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Satyabrata Dash Portfolio. All righs reserved.</small>
      </div>
    </footer>
  )
}

export default Footer