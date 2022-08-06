import React, { useState } from 'react'
import { PersonalInformationBuilder } from '../PersonalInformationBuilder'
import { ProfessionalInformationBuilder } from '../ProfessionalInformationBuilder'
import { SkillsBuilder } from '../SkillsBuilder'
import { ServicesBuilder } from '../ServicesBuilder'
import { PortfolioDetailsBuilder } from '../PortfolioDetailsBuilder'
import { TestimonialsBuilder } from '../TestimonialsBuilder'
import { ContactBuilder } from '../ContactBuilder'

export const PortfolioBuilder = () => {
  
  const [personalInfo, setPersonalInfo] = useState(
    {
      fName: '',
      mName: '',
      lName: '',
      designation: '',
      linkedIn: '',
      github: '',
    }
  )
  const personalInfoCTP = (args) => {
    setPersonalInfo(args)
  }
  
  const [professionalInfo, setProfessionalInfo] = useState(
    {
      expr: '',
      clients: '',
      projects: '',
      descr: ''
    }
  )
  const professionalInfoCTP = (args) => {
    setProfessionalInfo(args)
  }
  
  const [skillInfo, setSkillInfo] = useState([{
    skillType : '',
    skillDescr : [
      {
        skillName : '',
        skillExp : ''
      }
    ]
  }])
  const skillInfoCTP = (args) => {
    setSkillInfo(args)
  }

  const [serviceInfo, setServiceInfo] = useState([{
    id: '',
    serviceName: '',
    service:['']
  }])
  const serviceInfoCTP = (args) => {
    setServiceInfo(args)
  }

  const [portfolioSet, setPortfolioSet] = useState([
    {
      id: '',
      projectTitle: '',
      github: '',
      liveDemo: ''
    }
  ])
  const portfolioSetCTP = (args) => {
    setPortfolioSet(args)
  }

  const [testimonialInfo, setTestimonialInfo] = useState([
    {
      name: '',
      review: ''
    }
  ])
  const testimonialInfoCTP = (args) => {
    setTestimonialInfo(args)
  }

  const [contactInfo, setContactInfo] = useState([
    {
      email: '',
      messenger: '',
      whatsapp: ''
    }
  ])
  const contactInfoCTP = (args) => {
    setContactInfo(args)
  }

  return (
    <>
    <h5>Information</h5>
    <h2>Let's get started</h2>
    <PersonalInformationBuilder personalInfo={personalInfo} personalInfoCTP={personalInfoCTP} />
    <ProfessionalInformationBuilder professionalInfo={professionalInfo} professionalInfoCTP={professionalInfoCTP} />
    <SkillsBuilder skillInfo={skillInfo} skillInfoCTP={skillInfoCTP} />
    <ServicesBuilder serviceInfo={serviceInfo} serviceInfoCTP={serviceInfoCTP} />
    <PortfolioDetailsBuilder portfolioSet={portfolioSet} portfolioSetCTP={portfolioSetCTP} />
    <TestimonialsBuilder testimonialInfo={testimonialInfo} testimonialInfoCTP={testimonialInfoCTP} />
    <ContactBuilder contactInfo={contactInfo} contactInfoCTP={contactInfoCTP} />
    </>
  )
}
