import React from 'react'
import Header from '././components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Service from './components/Service/Service'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Port from './components/Portfolio/Port'

const App = () => {
  return (
    <>
     <Header/>
     <Nav />
     <About/>
     <Experience/>
     <Service/>
     <Port/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App