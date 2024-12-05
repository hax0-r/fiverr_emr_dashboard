import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt23.png"
import pptx from "../../../assets/pptx.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const BorangPopup = ({setPopup2}) => {
    const [previewDocument, setPreviewDocument] = useState(false)

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
                        <img src={pptx} alt="" />
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

                <div className="px-4 pb-4">
                    <div className="border rounded-lg border-[#CFD1D4] p-3 flex gap-4 ">
                        {
                            !previewDocument && (
                                <div className="max-w-[30%]   w-full">
                                    <div className=" flex flex-col gap-3">
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Borang Tuntutan</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Borang Tuntutan</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Borang Tuntutan</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border max-h-[65vh] overflow-auto px-3 pb-4 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl mt-2'>Borang Tuntutan Rawatan Hospital</h3>
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

                                        <div className="text-[#1D1D1D] overflow-hidden text-sm mt-3 border border-[#cfd1d4] rounded-xl">
                                            <div className=" grid grid-cols-2 items-center">
                                                <p className='bg-[#F5F7FA] h-full p-3 border '>1. If Treatment was a result from an accident, please provide details of accident.</p>
                                                <div className="border p-3">
                                                    <p>Date of Accident : &nbsp; &nbsp;&nbsp; <span className='font-medium'>11/11/2024</span></p>
                                                    <p>Nature of Accident : &nbsp;&nbsp;<span className='font-medium'>Lorem Isum</span></p>
                                                    <p>Time : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <span className='font-medium'>10:00 AM</span></p>
                                                </div>
                                                <p className='bg-[#F5F7FA] h-full p-3 border '>2. Hospitalisation Detail</p>
                                                <div className="border p-3">
                                                    <p>Date of Accident : &nbsp; &nbsp;&nbsp; <span className='font-medium'>11/11/2024</span></p>
                                                    <p>Nature of Accident : &nbsp;&nbsp;<span className='font-medium'>Lorem Isum</span></p>
                                                    <p>Time : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <span className='font-medium'>10:00 AM</span></p>
                                                </div>
                                                <p className='bg-[#F5F7FA] h-full p-3 border '>3. What were the symptons the patient complained when he/she first saw you?</p>
                                                <div className="border p-3 h-full">
                                                    <p className='font-medium'>Hemature</p>
                                                </div>
                                                <p className='bg-[#F5F7FA] h-full p-3 border '>4. The date on which you first saw the patient for his condition</p>
                                                <div className="border p-3 h-full">
                                                    <p className='font-medium'>12/11/2024</p>
                                                </div>
                                                <p className='bg-[#F5F7FA] h-full p-3 border '>5. According to patient, how long had the patient been having these symptons prior to the initial consultation with you?</p>
                                                <div className="border p-3 h-full">
                                                    <p className='font-medium'>2 months</p>
                                                </div>
                                            </div>
                                        </div>

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
                                            className={`px-3.5 py-1 bg-primary text-white rounded`}
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

export default BorangPopup