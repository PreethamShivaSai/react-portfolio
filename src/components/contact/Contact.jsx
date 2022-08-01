import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wd4yr6r', 'template_yttkwmd', form.current, 'kA8jRWaTiff_BBpFp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>emailtothis@gmail.com</h5>
            <a href='mailto:emailtothis@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option' >
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>emailtothis</h5>
            <a href='https://m.me/preethamshivsaiapss' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='.contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>6303525404</h5>
            <a href='https://api.whatsapp.com/send?=+916303525404' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input name='name' type='text' placeholder='Your Full Name' required />
          <input name='email' type='email' placeholder='Your email' required />
          <textarea name='message' rows='7' placeholder='Your Messsage' required>
          </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact