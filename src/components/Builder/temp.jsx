import React,{useState} from 'react'
import uuid from 'react-uuid'
import './builder.css'

function Builder() {
    const SkillBox = ()=>{
        return (
            <div key={uuid()} className='skill__name'>
                <input placeholder='Skill name' required></input>
                <input placeholder='Experiece Level' type='number' required></input>
            </div>
        )
    }
    
    const AboutService = ()=>{
        return(
            <div key={uuid()} className='about__service'>
                <input placeholder='About service' required></input>
            </div>
        )
    }

    const SkillSet = ()=>{
        const [skillsBox, updateSkillsBox] = useState([<SkillBox key={uuid()}/>])   
        function addSkillBox(e){
            e.preventDefault();
            updateSkillsBox(skillsBox.concat(<SkillBox key={uuid()}/>))
            console.log((skillsBox))
        }
        return(
            <div key={uuid()} className='skills__box'>
                <div className='skill__type'>
                    <input placeholder='Skill set name'></input>
                    {skillsBox}
                    <button onClick={addSkillBox} className='btn btn-primary'>Add skill</button>
                </div>
            </div>
        )
    }

    const PortfolioBox = ()=>{
        return(
            <div className='portfolio__box'>
                <input placeholder='Project title'></input>
                <input placeholder='Github URL'></input>
                <input placeholder='Live Demo URL'></input>
            </div>
        )
    }

    const TestimonialBox = ()=>{
        return(
            <div className='testimonial__box'>
                <input placeholder='Reviewer Name'></input>
                <input placeholder='Review'></input>
            </div>
        )
    }

    // TODO: Complete onclick event function
    const ServiceBox = ()=>{
        const [aboutService, updateAboutService] = useState([<AboutService key={uuid()}/>])   
        function addAboutService(e){
            e.preventDefault();
            updateAboutService(aboutService.concat(<AboutService key={uuid()}/>))
            // console.log((skillsBox))
        }
        return(
            <div key={uuid()} className='services__box'>
                <div className='service__box'>
                    <input placeholder='Service name'></input>
                    {aboutService}
                    <button onClick={addAboutService} className='btn btn-primary'>Add about service</button>
                </div>
            </div>
        )
    }
        
    const [skillsSet, updateSkillsSet] = useState([<SkillSet key={uuid()}/>])
    const [servicesBox, updateServiceBox] = useState([<ServiceBox key={uuid()}/>])
    const [portfoliosBox, updateportfoliosBox] = useState([<PortfolioBox key={uuid()}/>])
    const [testimonialsBox, updatetestimonialsBox] = useState([<TestimonialBox key={uuid()}/>])


    const [userName, updateUserName] = useState('')
    function addPortfolioBox(e){
        e.preventDefault()
        updateportfoliosBox(portfoliosBox.concat(<PortfolioBox key={uuid()}/>))
    }
    function addTestimonialoBox(e){
        e.preventDefault()
        updatetestimonialsBox(testimonialsBox.concat(<TestimonialBox key={uuid()}/>))
    }
    function addSkillSet(e){
        e.preventDefault();
        // console.log(skillsSet)
        updateSkillsSet(skillsSet.concat(<SkillSet key={uuid()}/>))
    }
    function addServiceBox(e){
        e.preventDefault();
        // console.log(skillsSet)
        updateServiceBox(servicesBox.concat(<ServiceBox key={uuid()}/>))
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
                            <input name='userName' type='text' placeholder='Type some username' value={userName} onChange={(e)=>{updateUserName(e.target.value)}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>First Name</label>
                            <input name='userName' type='text' placeholder='Type your first name' value={userName} onChange={(e)=>{updateUserName(e.target.value)}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Middle Name</label>
                            <input name='userName' type='text' placeholder='Type your middle name' value={userName} onChange={(e)=>{updateUserName(e.target.value)}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Last Name</label>
                            <input name='userName' type='text' placeholder='Type your last name' value={userName} onChange={(e)=>{updateUserName(e.target.value)}} required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Designation</label>
                            <input name='userName' type='text' placeholder='Type your designation' value={userName} onChange={(e)=>{updateUserName(e.target.value)}} required />
                        </div>
                    </article>
                    <article className='professional__info'>
                        <h5>Professional Information</h5>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Experience(yrs)</label>
                            <input name='userName' type='number' placeholder='Type your Experience(yrs)' required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Clients</label>
                            <input name='userName' type='number' placeholder=' Number of clients' required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Projects</label>
                            <input name='userName' type='number' placeholder='Number of projects' required />
                        </div>
                        <div className='inputBox'>
                            <label htmlFor='userName'>Description</label>
                            <input name='userName' type='text' placeholder='Describe yourself' required />
                        </div>
                    </article>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your skills here</h5>
                    {skillsSet}
                    <button onClick={addSkillSet} className='btn btn-primary'>Add skill set</button>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your services here</h5>
                    {servicesBox}
                    <button onClick={addServiceBox} className='btn btn-primary'>Add services</button>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your portfolio details here</h5>
                    {portfoliosBox}
                    <button onClick={addPortfolioBox} className='btn btn-primary'>Add project</button>
                </div>
                <div className='container build__container block2'>
                    <h5>Add your testimonial details here</h5>
                    {testimonialsBox}
                    <button onClick={addTestimonialoBox} className='btn btn-primary'>Add project</button>
                </div>
                <div className='container build__container block2'>
                    <h2>Your Contact Information</h2>
                    <div className='portfolio__box'>
                        <input placeholder='Email' type='email'></input>
                        <input placeholder='Messenger' type='text'></input>
                        <input placeholder='Whatsapp' type='number'></input>
                    </div>
                </div>


                <button className='btn submit__button btn-primary'>Submit</button>
            </form>
        </section>
    )
}

export default Builder