import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt20.png"
import sign from "../../../assets/sign3.png"
import Referral from "../../../assets/Referral.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const ReferralPopup = ({ setPopup4 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup4(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={Referral} alt="" />
                        <h2 className='text-lg font-semibold'>Referral Letter</h2>
                    </div>
                    {
                        previewDocument ? (
                            <MdClose className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={handleClose} />
                        ) : (
                            <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={handleClose} />
                        )
                    }
                </div>

                {
                    previewDocument && (
                        <div className="flex items-center px-4 justify-between border-t border-[#CFD1D4] pt-4">
                            <button onClick={() => setPreviewDocument(false)} className='pl-2 border-[#cfd1d4] border-2 text-sm pr-4 py-2 flex items-center gap-1 rounded-full text-[#1D1D1D] font-medium'><IoIosArrowForward className='text-xl rotate-180' />
                                Back</button>
                            <button className='bg-primary pr-5 pl-4 py-2.5 rounded-lg text-white font-medium flex items-center gap-2' ><PiPrinterBold className='text-lg' />
                                Print Result</button>
                        </div>
                    )
                }

                <div className="p-4">
                    <div className="border rounded-lg border-[#CFD1D4] p-3 flex gap-4 ">
                        {
                            !previewDocument && (
                                <div className="max-w-[30%]   w-full">
                                    <div className=" flex flex-col gap-3">
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Referral Letter</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Referral Letter</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Referral Letter</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border max-h-[70vh] overflow-auto p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Referral Letter</h3>
                                <div className="">
                                    <div className="mx-auto bg-white rounded-lg">
                                        <div className="p-3 rounded-lg mt-3  border pb-3">
                                            <div>
                                                <p className='pt-0.5'>
                                                    Nama Pesakit : &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-semibold'> Lorem Ipsum</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    NRP : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;  <span className='font-semibold'> 123456789</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Kepada : &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<span className='font-semibold'> Prof. Dr. Nolan</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Jabatan :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'> Lorem Ipsum</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Tarik : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'> 11/11/2024</span>
                                                </p>
                                            </div>
                                        </div>

                                        <p className='text-sm text-[#6E6E6E] py-3 font-medium'>Masalah dan Tujuan Rujukan :</p>

                                        <p className=" p-3 bg-[#F5F7FA] border border-[#cfd1d4] rounded-xl">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p className='text-sm text-[#6E6E6E] py-3 font-medium'>Daripada Pensyarah / Prof. Madya / Prof.</p>

                                        <div className=" p-3 border border-[#cfd1d4] rounded-xl">
                                            <p className='pt-1'>
                                                Nama Pesakit : &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-semibold'> Lorem Ipsum</span>
                                            </p>
                                            <p className='pt-1'>
                                                NRP : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;  <span className='font-semibold'> Lorem Ipsum</span>
                                            </p>
                                            <p className='pt-1 flex'>
                                            Tandatangan :  &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;  <span className='font-semibold'> <img src={sign} className='h-28' alt="" /></span>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {
                                !previewDocument && (
                                    <div className="flex gap-2 items-center mt-4 justify-end">
                                        <button onClick={() => setPreviewDocument(true)} className='pl-4 border-[#cfd1d4] border-2 pr-5 py-2.5 flex items-center gap-2 rounded-lg text-[#1D1D1D] font-medium'><AiOutlineSearch className='text-xl' />
                                            Preview Document</button>
                                        <button className='bg-primary pr-5 pl-4 py-3 rounded-lg text-white font-medium flex items-center gap-2' ><PiPrinterBold className='text-lg' />
                                            Print Result</button>
                                    </div>
                                )
                            }
                        </div>
                        {
                            previewDocument && (
                                <Print receipt={receipt} />
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReferralPopup