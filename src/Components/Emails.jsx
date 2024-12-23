import React from 'react'
import Logo from '../assets/SubtractBlack.svg'

const Emails = () => {
  return (
    <div  className='w-[447px] bg-white shadow-[0_0_24px_0_rgba(8,23,53,0.16)] rounded-3xl'>
      <div>
        <div className='flex justify-center items-center gap-2 px-8 py-6 border-b border-b-[#E6E8F0]'>
            <img src={Logo} alt="logo" />
            <p className='text-[#081735] font-bold leading-7 text-lg'>AI to Detect & Autofix Bad Code</p>
        </div>
        <div className='flex justify-around px-8 py-6'>
            <div className='flex flex-col justify-center items-center gap-0'>
              <p className='leading-7 text-lg font-bold text-[#081735]'>30+</p>
              <p className='text-sm leading-5 text-[#171717]'>Language Support</p>
            </div>
            <div  className='flex flex-col justify-center items-center gap-0'>
              <p className='leading-7 text-lg font-bold text-[#081735]'>10+</p>
              <p className='text-sm leading-5 text-[#171717]'>Developers</p>
            </div>
            <div  className='flex flex-col justify-center items-center gap-0'>
              <p className='leading-7 text-lg font-bold text-[#081735]'>100+</p>
              <p className='text-sm leading-5 text-[#171717]'>Hours Saved</p>
            </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Emails
