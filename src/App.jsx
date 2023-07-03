
import { Button } from '@mui/material'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

import Home from './Components/Pages/Home'
function App() {
const scrolltoTop =()=>{
  window.scrollTo({ behavior: 'smooth',top})
}
  return (
    <>
    <div className='absolute h-full'>

     <Navbar  />
     <Home />
     <Footer />
    </div>
     <div className='z-30 w-full text-right p-10 fixed top-[89vh]' >
      <button className='bg-blue-500 rounded-full w-8 text-center h-8' onClick={scrolltoTop}> ^</button>
     </div>
    </>
  )
}

export default App
