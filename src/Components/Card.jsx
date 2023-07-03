import React from 'react'

const Card = ({title,logo}) => {
  return (
    <>
<div className="w-56 h-[260px] flex flex-col-reverse gap-3 justify-center items-center border-blue-500 border-2 p-5 rounded-2xl backdrop-sepia-0 bg-white/30">
  <img src={logo} className='w-20 object-contain '  />
  <span className='text-3xl font-bold'> {title}</span>
</div>

    </>
  )
}

export default Card