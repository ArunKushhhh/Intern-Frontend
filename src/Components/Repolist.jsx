import React from 'react'
import Database from '../assets/database.svg' 

const Repolist = ({name, privacy, tech, storage, lastUpdated}) => {
  return (
    <div className='flex flex-col px-4 py-4 gap-3 items-start justify-center border-b border-b-[#E9EAEB] hover:bg-[#F5F5F5]'>
      <div className='flex gap-2'>
        <p className='text-lg text-[#181D27] leading-6 font-medium'>{name}</p>
        <div className='flex justify-center items-center text-[#175CD3] border border-[#B2DDFF] bg-[#EFF8FF] pl-2 pr-[10px] py-[2px] rounded-full leading-5'>
          <p>{privacy}</p>
        </div>
      </div>
      <div className='flex gap-6 justify-center items-center'>
        <div className='flex gap-2 justify-center items-center text-sm leading-5'>
          <p>{tech}</p>
          <div className='w-2 h-2 bg-[#1570EF] rounded-full'></div>
        </div>
        <div className='flex gap-2 justify-center items-center text-sm leading-5'>
          <img src={Database} alt="database" />
          <p>{storage}</p>
        </div>
        <div className='flex justify-center items-center text-sm leading-5'>
          <p>Updated {lastUpdated} ago</p>
        </div>
      </div>
    </div>
  )
}

export default Repolist
