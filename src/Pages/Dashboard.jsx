import React from 'react'
import { GoHomeFill } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import Card from '../Components/DashBoard/Card'

const Dashboard = () => {
    return (
        <>
            <div className="pl-[84px] px-4 bg-[#f6f6f7]">
                <div className="">
                    <div className="bg-white inline-flex pl-3 pr-5 items-center p-1 justify-center gap-2 border-[#CFD1D4] border rounded-full">
                        <GoHomeFill className='text-[#CFD1D4]' />
                        <IoIosArrowForward className='text-[#CFD1D4]' />
                        <p className='text-primary font-medium text-sm'>Dashboard</p>
                    </div>
                </div>

               <Card/>

            </div>
        </>
    )
}

export default Dashboard