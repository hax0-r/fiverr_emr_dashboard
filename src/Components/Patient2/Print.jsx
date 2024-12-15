import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { PiCornersOutBold } from 'react-icons/pi'


const Print = ({receipt}) => {
    return (
        <div className=" fastFadeIn flex flex-col justify-between w-full bg-[#646464] rounded-xl min-h-[70vh] p-4">
            <img src={receipt} alt="" className="h-[55vh] mx-auto object-cover" />
            <div className="flex items-center justify-center gap-3">
                <div className="flex items-center bg-white cursor-pointer justify-center w-11 h-11 rounded-full">
                    <PiCornersOutBold className='text-lg' />
                </div>
                <div className="flex items-center bg-white cursor-pointer justify-center w-11 h-11 rounded-full">
                    <FiPlus className='text-xl' />
                </div>
                <div className="flex items-center bg-white cursor-pointer justify-center w-11 h-11 rounded-full">
                    <FiMinus className='text-xl' />
                </div>
                <div className="flex items-center bg-white cursor-pointer justify-center w-11 h-11 rounded-full">
                    <IoIosArrowForward className='text-xl rotate-180' />
                </div>
                <div className="flex items-center bg-white cursor-pointer justify-center w-11 h-11 rounded-full">
                    <IoIosArrowForward className='text-xl' />
                </div>
            </div>
        </div>
    )
}

export default Print