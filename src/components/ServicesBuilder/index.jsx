import React from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'


export const ServicesBuilder = (props) => {
  const { serviceInfo, serviceInfoCTP } = props
  
  const handleClick = (e) => {
    e.preventDefault()
    console.log(serviceInfo)
  }
  
  const addServiceBox = (e) => {
    e.preventDefault()
    serviceInfoCTP([...serviceInfo, {
      id: Math.random(),
      serviceName: '',
      service: ['']
    }])
  }
  const addService = (e, index) => {
    e.preventDefault()
    let temp = serviceInfo.map((serv) => {
      if (serv.id === index) return { ...serv, service: [...serv.service, ''] }
      return serviceInfo
    })
    serviceInfoCTP(temp)
  }

  return (
    <div className='container build__container block2'>
      <h5>Add your services here</h5>      
      {serviceInfo.map((serv, index)=>{
        return(
          <div key={index} className='services__box'>
            <div className='service__box'>
              <input name='serviceName' placeholder='Service Name' onChange={(e)=>{
                let temp = serviceInfo.map((ser) => {
                  if (ser.id === serv.id) return { ...ser, serviceName: e.target.value }
                return serviceInfo})
              serviceInfoCTP(temp) }} required />

              {serv.service.map((ser, index1)=>{
                return(
                  <div key={index1} className='about__service'>
                    <input placeholder='Service' onChange={(e)=>{
                      let temp1 = serviceInfo.map((ser1) => {
                        if (ser1.id === serv.id) {
                          let t1 = ser1.service.map((s, i) => {
                            if (i === index1) return e.target.value
                            return ser1.service })
                          return { ...ser1, service: [t1] }
                        }
                        return serviceInfo})
                        serviceInfoCTP(temp1)
                      }} required />
                  </div>
                )
              })}
              <button onClick={(e)=>{addService(e,index)}} className='btn btn-primary'>Add about service</button>
            </div>
          </div>
        )
      })}
      <button onClick={addServiceBox} className='btn btn-primary'>Add services</button>
      <button className='btn submit__button btn-primary' onClick={handleClick}>Save</button>
  </div>
  )
}
