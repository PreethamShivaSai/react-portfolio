import React from 'react'
import './builder.css'
import Skillbox from './Skillbox'

function Skillset() {
  return (
    <div className='skills__box'>
        <div className='skill__type'>
            <input placeholder='Skill set name'></input>
            <Skillbox/>
            <button className='btn btn-primary'>Add skill</button>
        </div>
    </div>
  )
}

export default Skillset