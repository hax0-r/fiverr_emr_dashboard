import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import ConsentforAnaesthesia from "../../../assets/ConsentforAnaesthesia.svg"
import receipt from "../../../assets/receipt12.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const Perkhidmatan = ({ setPopup2 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("Sign In");

    const popUp = useRef()

    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup2(false)
        }, 500)
    }
    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={ConsentforAnaesthesia} alt="" />
                        <h2 className='text-lg font-semibold'>Perkhidmatan Bedah</h2>
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
                                    <div className="flex flex-col gap-3 rounded-lg border border-[#CFD1D4] p-3">
                                        <div className="border p-3 rounded-lg bg-[#f7f8fa] border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Perkhidmatan Dewan Bedah</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Perkhidmatan Dewan Bedah</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Perkhidmatan Dewan Bedah</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Perkhidmatan Dewan Bedah</h3>

                                <div className="border text-[#1D1D1D] text-sm grid-cols-2 grid  p-3 mt-2 rounded-lg border-[#cfd1d4]">
                                    <ul className='space-y-1'>
                                        <p className='font-medium text-[#6E6E6E] pb-2'>Patient Information</p>
                                        <li>Booking Id : <span className='font-semibold'>1111222233334</span></li>
                                        <li>Operation Date : <span className='font-semibold'>07/10/2024</span></li>
                                        <li>Type of Operation : <span className='font-semibold'>Minor</span></li>
                                        <li>Booked by : <span className='font-semibold'>Lorem Ipsum</span></li>
                                    </ul>
                                    <ul className='space-y-1'>
                                        <li>Operation List : <span className='font-semibold'>UKMSC Emergency</span></li>
                                        <li>Method of Admission : <span className='font-semibold'>In-patient</span></li>
                                    </ul>
                                </div>
                                <p className='text-[#6E6E6E] pt-3'>To be completed by Operation Theatre Staff (circulating nurse) and involved the entire operation / procedure team using active communication. The Checklist below to be confirmed.</p>

                                <div className="border mt-3  rounded-lg border-[#cfd1d4]">
                                    <div className="flex text-lg p-3 font-medium items-center border-[#cfd1d4] border-b pb-2 gap-2 text-[#6E6E6E]">
                                        <p className={`p-1 cursor-pointer  ${activeTab == "Sign In" && "text-secondary"} `} onClick={() => setActiveTab("Sign In")}>Sign In</p>
                                        <div className="h-5  border-[#cfd1d4]  border-r"></div>
                                        <p className={`p-1 cursor-pointer  ${activeTab == "Time Out" && "text-secondary"} `} onClick={() => setActiveTab("Time Out")}>Time Out</p>
                                        <div className="h-5  border-[#cfd1d4]  border-r"></div>
                                        <p className={`p-1 cursor-pointer  ${activeTab == "Sign Out" && "text-secondary"} `} onClick={() => setActiveTab("Sign Out")}>Sign Out</p>
                                    </div>

                                    {
                                        activeTab == "Sign In" && (
                                            <div className=" fastFadeIn p-3 text-[#1D1D1D] grid grid-cols-2">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Correct patient identity checked</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Correct procedure (as consented)</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Correct site and side checked</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Correct equipment</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Anaesthesia safety check confirmed</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Allergy check performed</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Difficult airway/ aspiration risk assessed</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Excessive blood loss risk assessed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        activeTab == "Time Out" && (
                                            <div className=" fastFadeIn p-3 text-[#1D1D1D] grid grid-cols-2">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Anticipated critical events reviewed by all team members</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Essential imaging displayed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        activeTab == "Sign Out" && (
                                            <div className=" fastFadeIn p-3 text-[#1D1D1D] grid grid-cols-2">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Correct procedure, implant, site and side as conserted</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <p>Correct swab and instrument count</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="border text-sm  p-3 mt-2 rounded-lg border-[#cfd1d4]">
                                    <p className='text-[#6E6E6E] '>Problem (if incorrect) :</p>
                                    <p className=''>-</p>
                                </div>

                                <div className="border text-sm  p-3 mt-2 rounded-lg border-[#cfd1d4]">
                                    <p className='text-[#6E6E6E] '>Verified by :</p>
                                    <div className="max-w-[30rem] w-full grid-cols-3 grid">
                                        <div className="text-sm text-[#1D1D1D]">
                                            <p className='py-1 mt-1'>Surgeon</p>
                                            <p className='py-1 mt-1'>Anaesthesist</p>
                                            <p className='py-1 mt-1'>Circulating Nurse</p>
                                        </div>
                                        <div className="text-sm text-[#1D1D1D] font-semibold">
                                            <p className='py-1 mt-1'>: Lorem Ipsum</p>
                                            <p className='py-1 mt-1'>: Lorem Ipsum</p>
                                            <p className='py-1 mt-1'>: Lorem Ipsum</p>
                                        </div>
                                        <div className="text-sm text-[#115934] font-medium inline-flex flex-col">
                                            <p className='bg-[#DDF7EA] px-3 py-1 w-20 text-center rounded-full mt-1'>Signed</p>
                                            <p className='bg-[#DDF7EA] px-3 py-1 w-20 text-center rounded-full mt-1'>Signed</p>
                                            <p className='bg-[#DDF7EA] px-3 py-1 w-20 text-center rounded-full mt-1'>Signed</p>
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


export default Perkhidmatan