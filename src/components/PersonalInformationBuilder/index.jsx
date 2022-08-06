import React from 'react'


export const PersonalInformationBuilder = (props) => {
  const { personalInfo, personalInfoCTP } = props;

  const handleClick = (e) => {
    e.preventDefault()
    console.log(personalInfo)
  }

  return (
    <>
      <div className='container'>
        <div className='builder__container'>
          <article className='personal__info'>
            <h5>
              Personal Information
            </h5>
            <div className='inputBox'>
              <label htmlFor='firstName'>First Name</label>
              <input name='firstName' type='text' placeholder='Type your first name' onChange={(e) => personalInfoCTP({ ...personalInfo, fName: e.target.value })} required />
            </div>
            <div className='inputBox'>
              <label htmlFor='middleName'>Middle Name</label>
              <input name='middleName' type='text' placeholder='Type your middle name' onChange={(e) => personalInfoCTP({ ...personalInfo, mName: e.target.value })} required />
            </div>
            <div className='inputBox'>
              <label htmlFor='lastName'>Last Name</label>
              <input name='lastName' type='text' placeholder='Type your last name' onChange={(e) => personalInfoCTP({ ...personalInfo, lName: e.target.value })} required />
            </div>
            <div className='inputBox'>
              <label htmlFor='designation'>Designation</label>
              <input name='designation' type='text' placeholder='Type your designation' onChange={(e) => personalInfoCTP({ ...personalInfo, designation: e.target.value })} required />
            </div>
            <div className='inputBox'>
              <label htmlFor='linkedIn'>linkedIn profile</label>
              <input name='linkedIn' type='text' placeholder='LinkedIn profile' onChange={(e) => personalInfoCTP({ ...personalInfo, linkedIn: e.target.value })} required />
            </div>
            <div className='inputBox'>
              <label htmlFor='github'>Github profile</label>
              <input name='github' type='text' placeholder='Github profile' onChange={(e) => personalInfoCTP({ ...personalInfo, github: e.target.value })} required />
            </div>
          </article>
        </div>
        {/* toggle comment below line for testing on/off */}
        <button className='btn submit__button btn-primary' onClick={handleClick}>Save</button>
      </div>
    </>
  )
}
