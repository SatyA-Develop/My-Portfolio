import React from 'react'
import './Portfolio.css'
import TRAVEL from '../../assests/port1.png'
import TECHNEWS from '../../assests/port2.webp'
import SOCIALMEDIA from '../../assests/port3.png'
import PORTFOLIO from '../../assests/port4.webp'
import LIBRARY from '../../assests/port5.jpg'
import PORT from '../../assests/port6.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TRAVEL} alt="traveladvisor" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SatyA-Develop/news_mithi_technews" className='btn' target='_blank'>Github</a>
          <a href="https://mithitravelguide.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio