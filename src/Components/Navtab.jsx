import React from 'react'

const Navtab = ({ icon, tab, isActive, onClick }) => {
  return (
    <div
      className={`cursor-pointer gap-[2px] rounded-lg ${
        isActive ? 'bg-[#1570EF] text-white' : 'text-[#414651]'
      }`}
      onClick={onClick}
    >
      <div className='flex gap-3 justify-start items-center py-2 px-3'>
        <div className='w-6 h-6'>
          <img src={icon} alt={`${tab} icon`} />
        </div>
        <p
          className={`leading-6 text-base font-semibold mt-[2px] ${
            isActive ? 'text-white' : 'text-[#414651]'
          }`}
        >
          {tab}
        </p>
      </div>
    </div>
  )
}

export default Navtab
