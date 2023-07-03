import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className='w-full h-56 bg-[#041E42] flex justify-between p-10 gap-5 '>
       <div className='flex flex-col-reverse'>
        <div>

       Contact
       <br />
       <a href=''><InstagramIcon /></a>&nbsp;
       <a href=''><FacebookIcon /></a>&nbsp;
       <a href=''><LinkedInIcon /></a>&nbsp;
        </div>
       </div>
       <div>
        LInk and social 
       </div>
    </div>
  )
}

export default Footer