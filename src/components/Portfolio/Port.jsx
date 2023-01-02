import React from 'react'
import './Portfolio.css'
import TRAVEL from '../../assests/port1.png'
import TECHNEWS from '../../assests/port2.webp'
import SOCIALMEDIA from '../../assests/port3.png'
import PORTFOLIO from '../../assests/port4.webp'
import LIBRARY from '../../assests/port5.jpg'
import GYM from '../../assests/gym.jpg'


const data = [
  {
    id: 1,
    img: TRAVEL,
    title: "TravelAdvisor Website to guide the travellers",
    git: 'https://github.com/SatyA-Develop/travel_advisor',
    demo: 'https://mithitravelguide.netlify.app/',
  },
  {
    id: 2,
    img: TECHNEWS,
    title: "TechNews Website",
    git: 'https://github.com/SatyA-Develop/news_mithi_technews',
    demo: 'https://technewsmithi.netlify.app/',
  },
  {
    id: 3,
    img: SOCIALMEDIA,
    title: "SocialMedia App",
    git: 'https://github.com/SatyA-Develop/social_media_app',
    // demo: 'https://mithitravelguide.netlify.app/',
  },
  {
    id: 4,
    img: PORTFOLIO,
    title: "Portfolio Website",
    // git: 'https://github.com/SatyA-Develop/travel_advisor',
    demo: 'https://portfolio-p76.pages.dev/',
  },
  {
    id: 5,
    img: LIBRARY,
    title: "OnlineLibrary",
    git: 'https://github.com/SatyA-Develop/Project-Online-Library-ForU',
    // demo: '',
  },
  {
    id: 6,
    img: GYM,
    title: "Gym Website",
    // git: '',
    demo: 'https://swastikafitnessclub.pages.dev/',
  },
]

const Port = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
       {
        data.map(({id , img, title, git, demo})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={git} className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Port
