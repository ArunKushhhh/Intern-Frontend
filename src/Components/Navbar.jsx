import React, { useState } from 'react'
import LogoComp from './Logo'
import NavOverlay from './NavOverlay'
import Tabs from './Tabs'
import Search from './Search'

const Navbar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible)
  }

  return (
    <div className='w-full md:h-full md:border-r md:border-r-[#E9EAEB]'>
      <div className='flex justify-between items-center px-4 py-4'>
        <LogoComp />
        <div
          className='flex md:hidden flex-col justify-center items-center gap-1 h-6 w-6 cursor-pointer'
          onClick={toggleOverlay}
        >
          <div className='w-[21px] h-1 rounded-full bg-black'></div>
          <div className='w-[21px] h-1 rounded-full bg-black'></div>
          <div className='w-[21px] h-1 rounded-full bg-black'></div>
        </div>
      </div>
      <div className='hidden md:flex md:flex-col gap-3 px-4 pb-4' style={{ height: 'calc(100% - 80px)' }}>
      <Search />
        <Tabs />
      </div>
      <NavOverlay isVisible={isOverlayVisible} onClose={() => setIsOverlayVisible(false)} />
    </div>
  )
}

export default Navbar
