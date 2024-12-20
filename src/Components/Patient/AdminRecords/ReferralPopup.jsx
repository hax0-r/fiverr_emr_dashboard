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
                            <div className="border max-h-[70vh] text-[#1D1D1D] overflow-auto p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold  text-xl'>Referral Letter</h3>
                                <div className="">
                                    <div className="mx-auto bg-white rounded-lg">
                                        <div className="p-3 text-sm rounded-lg mt-3  border pb-3">
                                            <div className='grid grid-cols-4 gap-x-4 gap-y-1'>
                                                <p>       Nama Pesakit   </p>
                                                <p className='font-semibold'> : -</p>
                                                <p>&nbsp;</p>
                                                <p>&nbsp;</p>
                                                <p>     NRP </p>
                                                <p className='font-semibold'> : -</p>
                                                <p>No KJP</p>
                                                <p className='font-semibold'> : -</p>
                                                <p>     Kepada </p>
                                                <p className='font-semibold'> : -</p>
                                                <p>&nbsp;</p>
                                                <p>&nbsp;</p>
                                                <p>     Jabatan </p>
                                                <p className='font-semibold'> : -</p>
                                                <p>&nbsp;</p>
                                                <p>&nbsp;</p>
                                                <p>     Tarik </p>
                                                <p className='font-semibold'> : -</p>
                                                <p>     Masa</p>
                                                <p className='font-semibold'> : Mengikuti Penetapan</p>
                                            </div>
                                        </div>

                                        <p className='text-sm text-[#6E6E6E] py-3 font-medium'>Masalah dan Tujuan Rujukan :</p>

                                        <p className=" p-3 min-h-[10rem] bg-[#F5F7FA] border border-[#cfd1d4] rounded-xl">
                                            Urgently review her abdominal pain.
                                            <br /> She has received five units of blood over the past five years.
                                            <br /> Please proceed with the necessary steps.


                                        </p>
                                        <p className='text-sm text-[#6E6E6E] py-3 font-medium'>Daripada Pensyarah / Prof. Madya / Prof.</p>

                                        <div className=" p-3 border  w-full border-[#cfd1d4] rounded-xl">
                                            <div className="grid gap-y-1 grid-cols-2 max-w-md">
                                                <p >
                                                    Nama :
                                                </p>
                                                <p className='font-semibold'> Chia Suwe Kiea</p>
                                                <p >
                                                    Jabatan :
                                                </p>
                                                <p className='font-semibold'> Consultant Breast & Endocrine Surgery</p>
                                                <p>
                                                    Tandatangan :
                                                </p>
                                                <img src={sign} className='h-28' alt="" />
                                            </div>
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