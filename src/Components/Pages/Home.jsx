import React,{useRef} from 'react'
import Spline from '@splinetool/react-spline';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';



const Home = () => {

  return (
    <>
    {/* bg-[url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1213&q=80)] bg-blend-soft-light bg-cover bg-center   bg-no-repeat */}
        <div className='flex p-10  min-h-[100vh] w-full bg-gradient-to-r from-blue-700 via-purple-500 to-purple-700  '>
            <div>
            <div className='w-5 h-5 rounded-full bg-blue-500 ' />
             <div className='w-1 bg-gradient-to-b from-blue-500 to-transparent h-80 ml-2'/>   
            </div>
            <div className='text-8xl font-bold w-1/2 ml-4'>
                Hi! I'm Punit 
                <br />
                <span className='text-4xl font-normal'>
                    I developed user Interfaces and Web Application 
                </span>
            </div>
            <div className='w-1/2 max-h-[90vh]'>
            <Spline scene="https://prod.spline.design/gte-68gPLwN5GjFz/scene.splinecode" />
            </div>
        </div>

        <div id='about'>

        <About   />
        </div>
        <div id='project'>
        <Projects />
        </div>
        <div id='contact'>

        <Contact />
        </div>
    </>
  )
}

export default Home