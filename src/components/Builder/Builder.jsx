import React,{useState, useEffect} from 'react'
import uuid from 'react-uuid'
import './builder.css'
import {AiTwotoneDelete} from 'react-icons/ai'
import services from '../services/services'
function Builder() {
 
    const [skillSet, updateSkillSet] = useState([{
        skillType : '',
        skillDescr : [
            {
                skillName : '',
                skillExp : ''
            }
        ]
    }])

    const [homeSet, updateHome] = useState(
        {
            fName: '',
            mName: '',
            lName: '',
            designation: '',
            linkedIn: '',
            github: '',
        }
    )


    const [aboutSet, updateAbout] = useState(
        {
            expr: '',
            clients: '',
            projects: '',
            descr: ''
        }
    )




    const [serviceSet, updateServiceSet] = useState([{
        serviceName: '',
        service:['']
    }])

    const [portfolioSet, updatePortfolioSet] = useState([
        {
            projectTitle: '',
            github: '',
            liveDemo: ''
        }
    ])

    const [testimonialSet, updateTestimonialSet] = useState([
        {
            name: '',
            review: ''
        }
    ])

    const [contactInformation, updateContactInfo] = useState([
        {
            email: '',
            messenger: '',
            whatsapp: ''
        }
    ])


    function updateHomeSet(e, inputBox){
        homeSet[inputBox] = e.target.value
        updateHome(homeSet)
    }

    function updateAboutSet(e, inputBox){
        aboutSet[inputBox] = e.target.value
        updateAbout(aboutSet)
    }

    function updateEmail(e){
        contactInformation.email = e.target.value
        updateContactInfo(contactInformation)
    }
    function updateMessenger(e){
        contactInformation.messenger = e.target.value
        updateContactInfo(contactInformation)
    }
    function updateWhatsapp(e){
        contactInformation.whatsapp = e.target.value
        updateContactInfo(contactInformation)
    }

    useEffect(()=>{},[skillSet])
    const [userNameUnique, updateUserName] = useState('')

    function updateReviewerName(e, index){
        testimonialSet[index].name = e.target.value
        updateTestimonialSet(testimonialSet)
    }
    function updateReview(e, index){
        testimonialSet[index].review = e.target.value
        updateTestimonialSet(testimonialSet)
    }
    function addTestimonialoBox(e){
        e.preventDefault()
        testimonialSet.push({
            name: '',
            review: ''
        })
        updateTestimonialSet([...testimonialSet])
    }


    function updateProjectTitle(e, index){
        portfolioSet[index].projectTitle = e.target.value
        updatePortfolioSet(portfolioSet)
    }
    function updatePortfolioGit(e, index){
        portfolioSet[index].github = e.target.value
        updatePortfolioSet(portfolioSet)
    }
    function updatePortfolioLive(e, index){
        portfolioSet[index].liveDemo = e.target.value
        updatePortfolioSet(portfolioSet)
    }
    function addPortfolioBox(e){
        e.preventDefault()
        portfolioSet.push({
            projectTitle: '',
            github: '',
            liveDemo: ''
        })
        updatePortfolioSet([...portfolioSet])
    }




    function updateServiceName(e, index){
        serviceSet[index].serviceName = e.target.value
        updateServiceSet(serviceSet)
    }
    function updateService(e, index, index1){
        serviceSet[index].service[index1] = e.target.value
        updateServiceSet(serviceSet)
    }
    function addServiceBox(e){
        e.preventDefault()
        serviceSet.push({
            serviceName: '',
            service:['']
        })
        updateServiceSet([...serviceSet])
    }
    function addService(e,index){
        e.preventDefault()
        serviceSet[index].service.push('')
        updateServiceSet([...serviceSet])
    }







    function updateSkilltype(e, index){
        skillSet[index].skillType = e.target.value
        updateSkillSet(skillSet)
        // const skillSetType = e.target.value
        // updateSkillSet({...skillSet, ski})
    }
    function updateSkillname(e, index, index1){
        skillSet[index].skillDescr[index1].skillName = e.target.value
        updateSkillSet([...skillSet])
    }
    function updateSkillexp(e, index, index1){
        skillSet[index].skillDescr[index1].skillExp = e.target.value
        updateSkillSet([...skillSet])
    }
    function addSkill(e,index){
        e.preventDefault()
        skillSet[index].skillDescr.push({
            skillName : '',
            skillExp : ''
        })
        updateSkillSet([...skillSet])
    }
    function addSkillSet(e){
        e.preventDefault()
        skillSet.push({
            skillType : '',
            skillDescr : [
                {
                    skillName : '',
                    skillExp : ''
                }
            ]
        })
        updateSkillSet([...skillSet])
    }
    function deleteSkill(e, index, index1){
        e.preventDefault()
        skillSet[index].skillDescr = skillSet[index].skillDescr.filter((_,i)=>i!=index1)
        updateSkillSet([...skillSet])
    }

    function deleteReview(e, index){
        e.preventDefault()
        updateTestimonialSet([...testimonialSet.filter((_,i)=>i!=index)])
    }

    function submitForm(e){
        e.preventDefault()
        var data = {
            userName : userNameUnique,
            home: homeSet,
            about: aboutSet,
            skills: skillSet,
            services: serviceSet,
            portfolio: portfolioSet,
            testimonial: testimonialSet,
            contactInfo: contactInformation
        }
        console.log(data)
    }



    return (
        <section>
            <h5>
                Information
            </h5>
            <h2>Let's get started</h2>
            <form className='container'>
                
                <div className='builder__container'>
                    <article className='personal__info'>
                        <h5>
                            Personal Information
                        </h5>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Username</label>
                            <input name='userName' type='text' placeholder='Type some username' onChange={(e)=>{updateUserName(e.target.value)}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>First Name</label>
                            <input name='userName' type='text' placeholder='Type your first name' onChange={(e)=>{updateHomeSet(e, 'fName')}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Middle Name</label>
                            <input name='userName' type='text' placeholder='Type your middle name' onChange={(e)=>{updateHomeSet(e, 'mName')}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Last Name</label>
                            <input name='userName' type='text' placeholder='Type your last name' onChange={(e)=>{updateHomeSet(e, 'lName')}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Designation</label>
                            <input name='userName' type='text' placeholder='Type your designation' onChange={(e)=>{updateHomeSet(e, 'designation')}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>linkedIn profile</label>
                            <input name='userName' type='text' placeholder='linkedIn profile' onChange={(e)=>{updateHomeSet(e, 'linkedIn')}} required />
                        </div>
                    </article>
                    <article className='professional__info'>
                        <h5>Professional Information</h5>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Experience(yrs)</label>
                            <input name='userName' type='number' placeholder='Type your Experience(yrs)' onChange={(e)=>updateAboutSet(e, 'expr')} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Clients</label>
                            <input name='userName' type='number' placeholder=' Number of clients'  onChange={(e)=>updateAboutSet(e, 'clients')} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Projects</label>
                            <input name='userName' type='number' placeholder='Number of projects' onChange={(e)=>updateAboutSet(e, 'projects')} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Description</label>
                            <input name='userName' type='text' placeholder='Describe yourself' onChange={(e)=>updateAboutSet(e, 'descr')} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>GitHub profile</label>
                            <input name='userName' type='text' placeholder='GitHub profile' onChange={(e)=>{updateHomeSet(e, 'github')}} required />
                        </div>
                    </article>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your skills here</h5>
                    {/* {
                        skillSet.map(({skillType, skillDescr},index)=>{
                            return(
                                <div key={index} className='skills__box'>
                                    <div className='skill__type'>
                                        <input placeholder='Skill set name' onChange={(e)=>{updateSkilltype(e,index)}}></input>
                                        {
                                            skillDescr.map(({skillName, skillExp},index1)=>{
                                                return(
                                                    <div key={index1} className='skill__name'>
                                                        <input placeholder='Skill name' onChange={(e)=>{updateSkillname(e, index, index1)}} required></input>
                                                        <input  placeholder='Experiece Level' onChange={(e)=>{updateSkillexp(e, index, index1)}} type='number' required></input>
                                                        <AiTwotoneDelete  onClick={(e)=>{deleteSkill(e, index, index1)}}/>
                                                    </div>
                                                )
                                            })
                                        }
                                        <button onClick={(e)=>{addSkill(e,index)}} className='btn btn-primary'>Add skill</button>
                                    </div>
                                </div>
                            )
                        })
                    } */}
                    {
                        skillSet.map(({skillType, skillDescr},index)=>{
                            return(
                                <div key={skillType} className='skills__box'>
                                    <div className='skill__type'>
                                        <input placeholder='Skill set name' onChange={(e)=>{updateSkilltype(e,index)}}></input>
                                        {
                                            skillDescr.map(({skillName, skillExp},index1)=>{
                                                return(
                                                    <div key={skillName} className='skill__name'>
                                                        <input placeholder='Skill name' onChange={(e)=>{updateSkillname(e, index, index1)}} required></input>
                                                        <input  placeholder='Experiece Level' onChange={(e)=>{updateSkillexp(e, index, index1)}} type='number' required></input>
                                                        {/* <AiTwotoneDelete  onClick={(e)=>{deleteSkill(e, index, index1)}}/> */}
                                                    </div>
                                                )
                                            })
                                        }
                                        <button onClick={(e)=>{addSkill(e,index)}} className='btn btn-primary'>Add skill</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button onClick={addSkillSet} className='btn btn-primary'>Add skill set</button>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your services here</h5>
                    {/* {
                        serviceSet.map(({serviceName, service}, index)=>{
                            return(
                                <div key={uuid()} className='services__box'>
                                    <div className='service__box'>
                                        <input placeholder='Service name' value={serviceName} onChange={(e)=>{updateServiceName(e, index)}}></input>
                                        {
                                            service.map((s, index1)=>{
                                                return(
                                                    <div key={uuid()} className='about__service'>
                                                        <input placeholder='About service' value={s} onChange={(e)=>{updateService(e, index, index1)}} required></input>
                                                    </div>
                                                )
                                            })
                                        }
                                        <button onClick={(e)=>{addService(e,index)}} className='btn btn-primary'>Add about service</button>
                                    </div>
                                </div>
                            )
                        })
                    } */}


                    
                    {
                        serviceSet.map(({serviceName, service},index)=>{
                            return(
                                <div key={index} className='services__box'>
                                    <div className='service__box'>
                                        <input placeholder='Service Name' onChange={(e)=>{updateServiceName(e,index)}}></input>
                                        {
                                            service.map((s,index1)=>{
                                                return(
                                                    <div key={index1} className='about__service'>
                                                        <input placeholder='Service' onChange={(e)=>{updateService(e, index, index1)}} required></input>
                                                        {/* <AiTwotoneDelete  onClick={(e)=>{deleteSkill(e, index, index1)}}/> */}
                                                    </div>
                                                )
                                            })
                                        }
                                        <button onClick={(e)=>{addService(e,index)}} className='btn btn-primary'>Add about service</button>
                                    </div>
                                </div>
                            )
                        })
                    }





                    <button onClick={addServiceBox} className='btn btn-primary'>Add services</button>
                </div>
                {/* <div className='container build__container block2'>
                    <h5>Add your portfolio details here</h5>
                    {portfoliosBox}
                    <button onClick={addPortfolioBox} className='btn btn-primary'>Add project</button>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your testimonial details here</h5>
                    {testimonialsBox}
                    <button onClick={addTestimonialoBox} className='btn btn-primary'>Add project</button>
                </div> */}
                
                <div className='container build__container block2'>
                    <h5>Add your portfolio details here</h5>
                    {
                        portfolioSet.map(({projectTitle, github, liveDemo}, index)=>{
                            return(


                                <div key={index} className='portfolio__box'>
                                    <input placeholder='Project Name' onChange={(e)=>{updateProjectTitle(e,index)}}></input>
                                    <input placeholder='Github Name' onChange={(e)=>{updatePortfolioGit(e,index)}}></input>
                                    <input placeholder='Live Name' onChange={(e)=>{updatePortfolioLive(e,index)}}></input>
                                </div>



                                /* <div key={uuid()} className='portfolio__box'>
                                    <input placeholder='Project title' onChange={(e)=>{updateProjectTitle(e,index)}} required></input>
                                    <input placeholder='Github URL' onChange={(e)=>{updatePortfolioGit(e,index)}} required></input>
                                    <input placeholder='Live Demo URL' onChange={(e)=>{updatePortfolioLive(e,index)}} required></input>
                                </div> */
                                
                            )
                        })
                    }
                    <button onClick={addPortfolioBox} className='btn btn-primary'>Add project</button>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your testimonial details here</h5>
                    {
                        testimonialSet.map(({name, review}, index)=>{
                            return(
                                <div key={index} className='portfolio__box'>
                                    <input placeholder='Reviewer Name' onChange={(e)=>{updateReviewerName(e,index)}}></input>
                                    <input placeholder='Review' onChange={(e)=>{updateReview(e,index)}}></input>
                                    {/* <AiTwotoneDelete onClick={(e)=>deleteReview(e, index)}/> */}
                                </div>           
                            )
                        })
                    }
                    <button onClick={addTestimonialoBox} className='btn btn-primary'>Add project</button>
                </div>

                <div className='container build__container block2'>
                    <h5>Your Contact Information</h5>
                    <div className='portfolio__box'>
                        <input placeholder='Email' type='email' onChange={(e)=>updateEmail(e)} required></input>
                        <input placeholder='Messenger' type='text' onChange={(e)=>updateMessenger(e)}></input>
                        <input placeholder='Whatsapp' type='number' onChange={(e)=>updateWhatsapp(e)} required></input>
                    </div>
                </div>


                <button className='btn submit__button btn-primary' onClick={(e)=>submitForm(e)}>Submit</button>
            </form>
        </section>
    )
}

export default Builder