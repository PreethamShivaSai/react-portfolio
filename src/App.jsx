import React from 'react'
import './index.css'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/footer'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'

const App = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Portfolio></Portfolio>
        <Testimonial/>
        <Contact></Contact>
        <Footer></Footer>
    </>
  )
}

export default App