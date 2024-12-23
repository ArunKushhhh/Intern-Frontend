import React from 'react'
import Login from '../Components/Login'
import Bg from '../assets/Subtract.svg'
import Card from './Card'
import Emails from './Emails'

const LoginPanel = () => {
  return (
    <div className='flex w-full h-full'>
      <div className='hidden lg:flex justify-start items-end w-1/2 h-full'>
        <div className='absolute top-1/3 left-[14%]'>
          <Emails />
        </div>
        <div className='absolute top-1/2 left-1/4'>
          <Card />
        </div>
        <div className='w-full flex justify-start items-start'>
          <img src={Bg} alt="subtract-logo" />
        </div>
      </div>
      <div className='w-full flex justify-center items-center lg:w-1/2 h-full'>
        <Login />
      </div>
    </div>
  )
}

export default LoginPanel
