import React from 'react'
import Logo from '../img/react.png'

function Footer() {
  return (
      // External CSS styling 'bg-blur' 
      <div className='bg-blur'>
    <div className='w-screen h-full flex p-6 text-white'>

       <div className='w-[70%]'>
       <img src={Logo} alt="React Logo" className='w-8 inline mr-2'/>
        <p className='inline'>DeenTrybe</p>
        <p className='mt-4'>Simplifying Islam 
        </p>
        </div>

        <div className='w-[30%]'>
            <p>Follow us :</p>
            <p>@deen_trybe</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
