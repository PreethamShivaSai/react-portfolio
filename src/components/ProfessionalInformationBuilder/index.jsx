import React from 'react'


export const ProfessionalInformationBuilder = (props) => {
  const { professionalInfo, professionalInfoCTP } = props;

  const handleClick = (e) => {
    e.preventDefault()
    console.log(professionalInfo)
  }

  return (
    <>
      <div className='container'>
        <div className='builder__container'>
          <article className='professional__info'>
            <h5>Professional Information</h5>
            <div className='inputBox'>
                <label htmlFor='expr'>Experience(yrs)</label>
                <input name='expr' type='number' placeholder='Type your Experience(yrs)' onChange={(e) => professionalInfoCTP({ ...professionalInfo, expr: e.target.value })} required />
            </div>
            <div className='inputBox'>
                <label htmlFor='clients'>Clients</label>
                <input name='clients' type='number' placeholder=' Number of clients'  onChange={(e) => professionalInfoCTP({ ...professionalInfo, clients: e.target.value })} required />
            </div>
            <div className='inputBox'>
                <label htmlFor='projects'>Projects</label>
                <input name='projects' type='number' placeholder='Number of projects' onChange={(e) => professionalInfoCTP({ ...professionalInfo, projects: e.target.value })} required />
            </div>
            <div className='inputBox'>
                <label htmlFor='descr'>Description</label>
                <input name='descr' type='text' placeholder='Describe yourself' onChange={(e) => professionalInfoCTP({ ...professionalInfo, descr: e.target.value })} required />
            </div>
          </article>
        </div>
        {/* toggle comment below line for testing on/off */}
        <button className='btn submit__button btn-primary' onClick={handleClick}>Save</button>
      </div>
    </>
  )
}
