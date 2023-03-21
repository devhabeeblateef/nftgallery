import React from 'react'

function Header() {
  return (
    <div className='p-[0.5em] font-poppins h-full'>
    <div className="p-[0.5em] font-poppins h-full w-screen">
    <h1 className='p-[0.5em] text-white pt-20 text-4xl font-bold text-center'>
      Deen Trybe Islamic Magazine
    </h1>
    <p className='p-[0.5em] text-white text-xs text-center pt-2'>
    Sharing the word of Allah in the simplest and most interactive way, without belittling the essence of the message
    </p>
    <button className='bg-gradient-to-r from-purple-500 to-blue-500 rounded-md mt-4 text-white py-2 px-4 md:w-1/2 lg:w-1/3 block mx-auto'>
    Start Reading</button>
    </div>
    </div>
  )
}

export default Header
