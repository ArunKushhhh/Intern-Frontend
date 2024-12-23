import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginButton = ({imgSrc, text, path}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "Github") {
      navigate('/hero');
    }
  };
  return (
    <button onClick={handleClick} className='flex w-[376px] lg:w-[466px] gap-4 border border-[#D8DAE5] rounded-lg py-4 justify-center items-center text-[#171717]'>
      <img src={imgSrc} alt="icon" />
      <p className='text-base font-semibold'>Sign in with {text}</p>
    </button>
  )
}

export default LoginButton
