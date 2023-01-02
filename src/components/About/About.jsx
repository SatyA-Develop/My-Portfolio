import React from 'react'
import './About.css'
import ME from '../../assests/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__contents">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Experience</small>
            </article>
            <article className="about__card">
              <FiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>2 clients</small>
            </article>
            <article className="about__card">
              <VscFolderActive  className='about__icon'/>
              <h5>Projects</h5>
              <small>5 projects</small>
            </article>
          </div>

          <p>
          Innovative Front End Developer building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, React Js, JavaScript and Bootstarp ; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop & Sketch.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About