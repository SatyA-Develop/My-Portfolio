import React, { useRef } from 'react'
import './Contact.css'
import { SiMinutemailer } from 'react-icons/si'
import { SiMessenger } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0mip7fw', 'template_upwzk1w', form.current, 'wbnmFu01bvf1Jkr5Z')
     e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiMinutemailer className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dashsatyabrata <br /> 1999@gmail.com</h5>
            <a href="mailto:dashsatyabrata1999@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Satyabrata Dash</h5>
            <a href="http://m.me/satyabrata1999/" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-6370419323</h5>
            <a href="https://wa.me/+916370419323?text=Come lets discuss on Whatsapp" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact