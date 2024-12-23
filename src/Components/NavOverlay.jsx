import React from 'react'
import Close from '../assets/close.svg'
import LogoComp from './Logo'
import Tabs from './Tabs'
import Search from './Search'

const NavOverlay = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black bg-opacity-50 z-50 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300`}
    >
      <div className=" bg-white w-full">
        <div className='flex justify-between items-center px-4 py-4'>
        <LogoComp />
        <button
          onClick={onClose}
        >
          <img src={Close} alt="close" />
          <div></div>
        </button>
        </div> 
        <div className='w-full flex flex-col gap-3 justify-center items-start px-4 py-4'>
        <div className='w-full flex flex-col gap-3 justify-center items-start'>
            <Search />
            <Tabs />
        </div>
      </div>
      </div>
      <div className='w-full h-[700px] bg-[rgba(108,108,108,0.3)]'></div>
    </div>
  )
}

export default NavOverlay
