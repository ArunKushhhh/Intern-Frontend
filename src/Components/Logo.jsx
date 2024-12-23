import React from 'react'
import Logo from '../assets/SubtractBlack.svg'

const LogoComp = () => {
  return (
    <div>
      <div className='flex gap-[14px] justify-center items-center'>
        <img src={Logo} alt="Logo" />
        <p className='font-Satoshi text-[30px]'>CodeAnt AI</p>
      </div>
    </div>
  )
}

export default LogoComp
