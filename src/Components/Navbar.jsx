import React, { useState } from 'react'
import chup from "../assets/chup.svg"
import siti from "../assets/siti.png"
import { AiFillAppstore } from 'react-icons/ai'
import { MdPeopleAlt } from 'react-icons/md'
import { RiSearch2Line } from 'react-icons/ri'
import { CgBell } from 'react-icons/cg'
import { Link, useLocation } from 'react-router'


const Navbar = () => {
    const { pathname } = useLocation()



    return (
        <>
            <div className="fixed top-0 left-0 bg-white w-[72px] gap-6 flex items-center pt-3 flex-col border-r-[1.3px] h-screen border-[#CFD1D4]">
                <img src={chup} alt="chup Logo" className='h-[40px] w-[40px]' />
                <div className="" >
                    <Link to={"/dashboard"}>
                        <div className="cursor-pointer">
                            <div className={`w-[40px] h-[40px] ${pathname == "/dashboard" ? "bg-primary" : "bg-white "}  mx-auto rounded-lg flex items-center justify-center`}>
                                <AiFillAppstore className={` ${pathname == "/dashboard" ? "text-white" : "text-[#6A6F79] "}  text-2xl`} />
                            </div>
                            <p className={`text-center text-xs font-semibold mt-0.5  ${pathname == "/dashboard" ? "text-primary" : "text-[#6A6F79] "}`}>Dashbo...</p>
                        </div>
                    </Link>
                    <div className="w-full border-b mt-2 border-[#EAEAEA]"></div>
                </div>
                <Link to={"/patient"}>
                    <div className={` cursor-pointer ${pathname !== "/dashboard" ? "text-white" : "text-[#6A6F79]"}`}>
                        <div className={`w-[40px] ${pathname !== "/dashboard" ? "bg-primary" : "bg-white "} h-[40px]  mx-auto rounded-lg flex items-center justify-center`}>
                            <MdPeopleAlt className=' text-2xl' />
                        </div>
                        <p className={`${pathname !== "/dashboard" ? "text-primary mt-0.5" : "text-[#6A6F79] "} text-center  text-xs font-semibold `}>Patient</p>
                    </div>
                </Link>
            </div>

            <div className="p-3 w-full pl-[84px] bg-[#f6f6f7]">
                <div className="px-5 py-3 flex items-center justify-between w-full rounded-xl bg-primary">
                    <h2 className='text-white text-lg flex items-center gap-3'><span className='font-medium '>ABC Hospital</span> <span className='h-6 border-l border-[#FFFFFF52]'></span> <span className='font-bold'>CHUP AI Digitize Management</span></h2>
                    <div className="text-white flex items-center justify-center gap-3">
                        <RiSearch2Line className='text-2xl cursor-pointer' />
                        <div className="h-6 border-l border-[#FFFFFF52] "></div>
                        <div className="relative">
                            <CgBell className='text-2xl cursor-pointer' />
                            <span className='absolute bg-secondary w-6 h-6 rounded-full text-sm border-2 border-primary -top-3 left-2 text-center'>2</span>
                        </div>
                        <div className="h-6 border-l border-[#FFFFFF52] mr-3 "></div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="">
                                <h4 className='font-medium'>Siti Khodijah</h4>
                                <p className='text-sm font-medium'>registration.annur@chup.com</p>
                            </div>
                            <img src={siti} alt="person" className='h-[44px] w-[44px] overflow-hidden rounded-full' />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar