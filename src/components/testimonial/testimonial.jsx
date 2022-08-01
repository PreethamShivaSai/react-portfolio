import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data =[
  {
    avatar: AVTR1,
    name: 'Preetham',
    review: 'Tempor cillum aliqua in aliqua officia velit officia cillum aute ea nostrud veniam. Aute sit duis sunt nulla consectetur esse anim fugiat fugiat minim est ut. Ea ad ea nulla nulla incididunt occaecat ullamco.'
  },
  {
    avatar: AVTR2,
    name: 'Shiva',
    review: 'Tempor cillum aliqua in aliqua officia velit officia cillum aute ea nostrud veniam. Aute sit duis sunt nulla consectetur esse anim fugiat fugiat minim est ut. Ea ad ea nulla nulla incididunt occaecat ullamco.'
  },
  {
    avatar: AVTR3,
    name: 'Sai',
    review: 'Tempor cillum aliqua in aliqua officia velit officia cillum aute ea nostrud veniam. Aute sit duis sunt nulla consectetur esse anim fugiat fugiat minim est ut. Ea ad ea nulla nulla incididunt occaecat ullamco.'
  },
  {
    avatar: AVTR4,
    name: 'Aitha',
    review: 'Tempor cillum aliqua in aliqua officia velit officia cillum aute ea nostrud veniam. Aute sit duis sunt nulla consectetur esse anim fugiat fugiat minim est ut. Ea ad ea nulla nulla incididunt occaecat ullamco.'
  }
]


const tesyimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reiew from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className='container testimonial__container'// install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        {
          data.map(({avatar, name, review}, index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt = "AVTr"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default tesyimonial




{/* <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt = "AVTr"/>
          </div>
          <h5 className='client__name'>Person 1</h5>
            <small className='client__review'>Incididunt consectetur anim veniam voluptate elit excepteur culpa excepteur incididunt ullamco.</small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt = "AVTr"/>
          </div>
          <h5 className='client__name'>Person 1</h5>
            <small className='client__review'>Incididunt consectetur anim veniam voluptate elit excepteur culpa excepteur incididunt ullamco.</small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt = "AVTr"/>
          </div>
          <h5 className='client__name'>Person 1</h5>
            <small className='client__review'>Incididunt consectetur anim veniam voluptate elit excepteur culpa excepteur incididunt ullamco.</small>
        </article> */}