import React from 'react'


export const PortfolioDetailsBuilder = (props) => {
  const { portfolioSet, portfolioSetCTP } = props;

  const handleClick = (e) => {
    e.preventDefault()
    console.log(portfolioSet)
  }

  const addPortfolioBox = (e) => {
    e.preventDefault()
    portfolioSetCTP([...portfolioSet, {
      id: Math.random(),
      projectTitle: '',
      github: '',
      liveDemo: ''
    }])
  }

  return (
    <>
      <div className='container build__container block2'>
        <h5>Add your portfolio details here</h5>
        {portfolioSet.map((project) => {
          return (
          <div key={project.id} className='portfolio__box'>
            <input name={project.projectTitle} placeholder='Project Name' onChange={(e) => 
            {let temp = portfolioSet.map((proj) => {
                if (proj.id === project.id) return {...proj, projectTitle: e.target.value }
                  return proj})
              portfolioSetCTP(temp)}
             } />
            <input name={project.github} placeholder='Github Name' onChange={(e) => 
            {let temp = portfolioSet.map((proj) => {
                if (proj.id === project.id) return {...proj, github: e.target.value }
                  return proj})
              portfolioSetCTP(temp)}
             } />
            <input name={project.liveDemo} placeholder='Live Name' onChange={(e) => 
            {let temp = portfolioSet.map((proj) => {
                if (proj.id === project.id) return {...proj, liveDemo: e.target.value }
                  return proj})
              portfolioSetCTP(temp)}
             } />
          </div>
          /* <div key={uuid()} className='portfolio__box'>
              <input placeholder='Project title' onChange={(e)=>{updateProjectTitle(e,index)}} required></input>
              <input placeholder='Github URL' onChange={(e)=>{updatePortfolioGit(e,index)}} required></input>
              <input placeholder='Live Demo URL' onChange={(e)=>{updatePortfolioLive(e,index)}} required></input>
          </div> */    
          )
        })}
        <button onClick={addPortfolioBox} className='btn btn-primary'>Add project</button>
        <button className='btn submit__button btn-primary' onClick={handleClick}>Save</button>
      </div>
    </>
  )
}
