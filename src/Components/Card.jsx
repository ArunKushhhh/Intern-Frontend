import React from 'react'
import Pie from '../assets/pie.svg'
import Arrow from '../assets/small-right.svg'

const Card = () => {
  return (
    <div className='w-[265px] bg-white shadow-[0_0_24px_0_rgba(8,23,53,0.16)] flex flex-col justify-center items-start gap-4 px-8 py-4 rounded-3xl'>
      <div className='w-full flex  justify-between items-center'>
        <div className='w-14 h-14 flex justify-center items-center bg-[rgba(157,144,250,0.25)] rounded-full'>
            <img src={Pie} alt="pie" />
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
            <div className='flex items-center justify-center'>
              <div className='w-4 h-4 justify-center items-center'>
                <img src={Arrow} alt="up" />
              </div>
              <p className='text-sm font-bold text-[#0049C6] leading-5'>14%</p>
            </div>
            <div className='flex flex-col gap-[1px]'>
              <p className='text-xs text-[#171717]'>This week</p>
            </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <p className='font-bold text-sm capitalize leading-5'>issues fixed</p>
        </div>
        <div className='font-bold text-[32px] leading-8'>500K+</div>
      </div>
    </div>
  )
}

export default Card
