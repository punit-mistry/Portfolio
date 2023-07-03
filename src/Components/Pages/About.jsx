import React from 'react'
import Card from '../Card'
import web from "../../assets/web.png"
import backend from "../../assets/backend.png"
import Mobile from "../../assets/mobile.png"
import creator from "../../assets/creator.png"


const About = () => {
  return (
    <>
    <div className='w-full flex items-center flex-col p-20 h-[100vh]' >
    <span className='font-extrabold text-5xl'> Overview.</span>
    <br />
    <br />
    <p className='text-xl'>
    I am a front-end developer with 1.5 years of experience in the field.
    I am extremely passionate about creating captivating user interfaces and have 
    successfully completed multiple projects that showcase my expertise.
    I'm a quick learner and work with the clients to create efficient and user-friendly
    solutions that solve there problems.
    </p>
    <br />
    <br />
    <div className='flex gap-5'>
     
    <Card title="Front-end" logo={web} />
    <Card title="Back-end " logo={backend} />
    <Card title="FreeLancer" logo={creator} />
    <Card title="Web Design" logo={Mobile} />
  
    </div>
    </div>
    </>
  )
}

export default About