import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import Senarai from "../../../assets/Senarai.svg"
import receipt from "../../../assets/receipt10.png"
import sign from "../../../assets/sign.png"
import Discharges from "../../../assets/Discharges.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const DischargesPopup = ({ setPopup1 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup1(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={Discharges} alt="" />
                        <h2 className='text-lg font-semibold'>Discharges</h2>
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
                                    <div className="p-4 flex flex-col gap-3">
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Discharge</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Discharge</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Discharge</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>Pusat Pakar UKM</h3>


                                <div className="mx-auto bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-4 flex gap-10">
                                    <ul className='space-y-1'>
                                        <li> Name : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Malysia New IC : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Date of Birth : <span className='font-semibold'>07/10/1978</span></li>
                                    </ul>
                                    <ul className='space-y-1'>
                                        <li> Age/Gender : <span className='font-semibold'>64 / Lelaki</span></li>
                                        <li> No X-Ray : <span className='font-semibold'>1122</span></li>
                                        <li> Syarikat : <span className='font-semibold'>-</span></li>
                                    </ul>
                                </div>
                                <div className="mx-auto text-[#1D1D1D] bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-4">
                                    <h2 className='text-sm  font-semibold mb-3'>Sejarah / Diagnosis</h2>
                                    <p>
                                        Pen x [circled P] Hp ~ 2 weeks chest ache <br /> A TRO PID / OA of hip
                                    </p>
                                </div>
                                <div className="mx-auto text-[#1D1D1D] bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-4">
                                    <h2 className='text-sm  font-semibold mb-3'>Bahagian X-Ray</h2>
                                    <p>
                                        1. Lumbosacral - AP / Lateral <br />
                                        2. Hip - AP / Lateral frog view
                                    </p>
                                </div>
                                <div className="mx-auto text-[#1D1D1D] bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-4">
                                    <h2 className='text-sm  font-semibold'>Laporan X-Ray</h2>
                                </div>
                                <div className="mx-auto text-[#1D1D1D] bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-4">
                                    <h2 className='text-sm  font-semibold'>Tandatangan & Cap Doktor</h2>
                                    <img src={sign} alt="" className='h-28' />
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

export default DischargesPopup