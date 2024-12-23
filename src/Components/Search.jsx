import React from 'react'
import Down from '../assets/chevron-down.svg'

const Search = () => {
  return (
    <div className='w-full'>
      <div className='relative w-full'>
            <input 
        className="border border-[#D5D7DA] rounded-lg w-full  px-3 py-2  focus:border-[#1570EF] focus:ring-1 focus:ring-[#1570EF] outline-none placeholder:text-black" 
        type="text" 
        placeholder="UtkarshDhairyaPanwar"
    />
    <div className='absolute top-1/2 -translate-y-1/2 right-3'> <img src={Down} alt="down" /></div>
            </div>
    </div>
  )
}

export default Search
