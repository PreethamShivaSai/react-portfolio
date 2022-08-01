import React from 'react'
import './portfolio.css'
import Pf1 from '../../assets/portfolio1.jpg'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfoio__item-image'>
            <img src={Pf1}></img>
          </div>
          <h3>
            This is a portfolio item title
          </h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfoio__item-image'>
            <img src={Pf1}></img>
          </div>
          <h3>
            This is a portfolio item title
          </h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfoio__item-image'>
            <img src={Pf1}></img>
          </div>
          <h3>
            This is a portfolio item title
          </h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfoio__item-image'>
            <img src={Pf1}></img>
          </div>
          <h3>
            This is a portfolio item title
          </h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfoio__item-image'>
            <img src={Pf1}></img>
          </div>
          <h3>
            This is a portfolio item title
          </h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfoio__item-image'>
            <img src={Pf1}></img>
          </div>
          <h3>
            This is a portfolio item title
          </h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default portfolio