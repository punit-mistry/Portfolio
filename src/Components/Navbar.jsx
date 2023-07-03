import { Button } from '@mui/material';
import React from 'react'

const Navbar = () => {
  const scrolltoabout=()=>{
    var about = document.getElementById("about");
    about.scrollIntoView({ behavior: 'smooth' })
    }
  const scrolltoproject=()=>{
    var about = document.getElementById("project");
    about.scrollIntoView({ behavior: 'smooth' })
    }
  const scrolltocontact=()=>{
    var about = document.getElementById("contact");
    about.scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <>
    <div className='flex justify-between p-5 shadow-lg font-bold text-2xl bg-black'>
        <div>
            Punit.
        </div>
        <div className='flex gap-8 hover:cursor-pointer'>
          
            <span className='hover:text-blue-500 hover:underline underline-offset-8 transition duration-700'  onClick={scrolltoabout}>About</span>
            <span className='hover:text-blue-500 hover:underline underline-offset-8 transition duration-700'  onClick={scrolltoproject}>Work</span>
            <span className='hover:text-blue-500 hover:underline underline-offset-8 transition duration-700' onClick={scrolltocontact}>Contact</span>
        </div>
    </div>
    </>
  )
}

export default Navbar