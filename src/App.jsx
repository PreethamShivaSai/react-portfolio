import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/footer'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Builder from './components/Builder/Builder'
import { PortfolioBuilder } from './components/PortfolioBuilder';


const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <Routes>
        <Route path="/v1/create" element={<Builder />}></Route>
        <Route path="/v2/create" element={<PortfolioBuilder />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App