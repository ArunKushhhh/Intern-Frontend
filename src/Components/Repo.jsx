import React from 'react'
import Refresh from '../assets/refresh.svg'
import AddRepo from '../assets/addrepo.svg'
import Search from '../assets/search.svg'

const Repo = () => {
  return (
    <div className='flex flex-col gap-4 px-4 py-5 border-b border-b-[#E9EAEB] overflow-hidden'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3 justify-center items-start'>

      <div>
        <p className='text-2xl text-[#181D27] leading-8'>Repositories</p>
        <p className='text-sm text-[#414651] leading-5'>33 total repositories</p>
      </div>
      <div className='flex gap-3'>
        <button className='flex justify-center items-center gap-1 px-[14px] py-[10px] border border-[#D5D7DA] rounded-lg leading-5 text-sm text-[#414651]'>
            <img src={Refresh} alt="refresh" />
            <p>Refresh All</p>
        </button>
        <button className='flex justify-center items-center gap-1 px-[14px] py-[10px] border border-[#1570EF] bg-[#1570EF] rounded-lg leading-5 text-sm text-white'>
            <img src={AddRepo} alt="addrepo" />
            <p>Add Repository</p>
        </button>
      </div>
      </div>

      <div className="relative w-full">
    <input 
        className="border border-[#D5D7DA] rounded-lg w-full md:w-[366px] px-[14px] py-[10px] pl-10 focus:border-[#1570EF] focus:ring-1 focus:ring-[#1570EF] outline-none" 
        type="text" 
        placeholder="Search Repositories"
    />
    <div className="absolute left-[14px] top-1/2 transform -translate-y-1/2 text-gray-400">
        <img src={Search} alt="search" />
    </div>
</div>
    </div>
  )
}

export default Repo
