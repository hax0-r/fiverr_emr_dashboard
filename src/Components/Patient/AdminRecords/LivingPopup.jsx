import React, {  useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt22.png"
import umb from "../../../assets/umb.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const LivingPopup = ({ setPopup1 }) => {
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
                        <img src={umb} alt="" />
                        <h2 className='text-lg font-semibold'>Living Assurance</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Great Eastern</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Great Eastern</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Great Eastern</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border max-h-[65vh] overflow-auto px-3 pb-4 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl mt-2'>Great Eastern</h3>
                                <p className='pt-2 text-[#6E6E6E]'>Patient Info</p>
                                <div className="">
                                    <div className="mx-auto text-sm bg-white rounded-lg">
                                        <div className="p-3 grid grid-cols-2 gap-6 rounded-lg mt-1  border pb-3">
                                            <div>
                                                <p className='pt-0.5'>
                                                    Policy No : &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-medium'> 1111222233334</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Policy No : &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-medium'> 1111222233334</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Policy No : &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-medium'> 1111222233334</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p className='pt-0.5'>
                                                    New NRIC No : &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-medium'> 1111222233334</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Old NRIC : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-medium'> 1111222233334</span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Patient Name : &nbsp; &nbsp;&nbsp; &nbsp; <span className='font-medium'> Lorem Ipsum</span>
                                                </p>
                                            </div>
                                        </div>

                                        <p className=" p-3 mt-3 bg-[#F5F7FA] border border-[#cfd1d4] rounded-xl">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>

                                        <div className="text-[#1D1D1D] overflow-hidden text-sm mt-3 border border-[#cfd1d4] rounded-xl">
                                            <div className="p-3">
                                                <p>Please atach certified true copies of all the relevant laboratory evidences or tests available.</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <input type="checkbox" name="" id="" />
                                                    <label htmlFor="" className='font-medium'>Histopathology examitaion (HPE) / Biospy report</label>
                                                </div>
                                            </div>
                                            <div className=" grid grid-cols-3">
                                                <p className='bg-[#F5F7FA] p-3 border col-span-2'>Are you the life assured’s usual medical attendant? <br /><br />if “Yes”, since what date?</p>
                                                <div className="border p-3">
                                                    <input type="checkbox" /> <label htmlFor=""> Yes</label>
                                                    <p>11/11/2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="bg-[#F5F7FA] p-3 rounded-lg mt-3">
                                            Has the Life Assured previously suffered from or detected to have hypertension, diabetes, angina, hyperlipdaemia, cardiovascular disease, transient ischaemic attack, neurological disorders, renal disease, hepatitis B or C, autoimmune disorder or any other significant illness?
                                        </p>

                                    </div>
                                </div>


                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-4">

                                    <select
                                        className="border rounded p-2 text-sm"
                                        readOnly
                                    >
                                        <option>10</option>
                                    </select>
                                    <span className="text-sm text-gray-600">
                                        Show 1 of 10 data
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        className={`px-3 py-1 bg-primary text-white rounded`}
                                    >
                                        1
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &gt;
                                    </button>
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

export default LivingPopup