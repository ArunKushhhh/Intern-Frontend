import React from 'react'
import LogoComp from './Logo'

const Welcome = ({hidden}) => {
  return (
    <div  className='flex flex-col gap-6 justify-center items-center text-[#181D27]'>
      <LogoComp />
      <div className='flex justify-center items-center'>
        <p className='text-[1.5rem] font-semibold'>
            Welcome to CodeAnt AI
        </p>
      </div>
    </div>
  )
}

export default Welcome
