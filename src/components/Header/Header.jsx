import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/p1.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Satyabrata Dash</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>
      
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header