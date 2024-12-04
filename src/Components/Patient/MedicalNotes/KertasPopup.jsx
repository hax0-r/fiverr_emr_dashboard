import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import img from "../../../assets/ConsentforAnaesthesia.svg"
import receipt from "../../../assets/receipt3.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const KertasPopup = ({ setPopup4 }) => {

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
                        <img src={img} alt="" />
                        <h2 className='text-lg font-semibold'>Consent for Anaesthesia</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Consent for Anaesthesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Consent for Anaesthesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Consent for Anaesthesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>

                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Consent for Anaesthesia</h3>
                                <p className='font-medium text-[#6E6E6E]'>Patient Info </p>
                                <div className="w-full mt-4 p-6 bg-white border border-gray-300 rounded-md text-sm">
                                    {/* Patient Details Section */}
                                    <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 mb-4">
                                        <div>
                                            <p>
                                                <span className="font-semibold">Patient’s Name :</span> Lorem Ipsum
                                            </p>
                                            <p>
                                                <span className="font-semibold">MRN :</span> 111222333334
                                            </p>
                                            <p>
                                                <span className="font-semibold">NRIC / Passport :</span> -
                                            </p>
                                            <p>
                                                <span className="font-semibold">Age :</span> 65
                                            </p>
                                            <p>
                                                <span className="font-semibold">Sex :</span> Male
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <span className="font-semibold">Address :</span> -
                                            </p>
                                            <p>
                                                <span className="font-semibold">Diagnose :</span> Lorem Ipsum
                                            </p>
                                            <p>
                                                <span className="font-semibold">Surgery :</span> Lorem Ipsum
                                            </p>
                                        </div>
                                    </div>

                                    {/* A. Patient Specific Information */}
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-lg mb-3">A. Patient Specific Information</h3>
                                        <div className="grid grid-cols-12 gap-4 border border-gray-200 rounded-md">
                                            <div className="col-span-7 border-b border-gray-200 p-4">
                                                <p>1. Specific risk of anesthesia to the *patient/parents/guardian</p>
                                            </div>
                                            <div className="col-span-5 border-b border-gray-200 p-4">
                                                Lorem ipsum dolor sit amet consectetur. Amet vivamus vitae.
                                            </div>
                                            <div className="col-span-7 p-4">
                                                <p>2. Anesthetic plan disclosed to the *patient/parents/guardian</p>
                                            </div>
                                            <div className="col-span-5 p-4">
                                                Lorem ipsum dolor sit amet consectetur. Ut iaculis ut sed quis. Id.
                                            </div>
                                        </div>
                                    </div>

                                    {/* B. Practitioner’s Declaration */}
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-lg mb-3">B. Practitioner’s Declaration</h3>
                                        <p className="mb-6">
                                            Lorem ipsum dolor sit amet consectetur. Tempor viverra eget ultrices ac amet viverra et. Eu arcu quis ante orci donec nibh mus. Morbi egestas feugiat sagittis commodo ornare tempus consequat risus. Augue nulla vel ornare pulvinar.
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-semibold">Signature</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Name & Official Stamp</p>
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

export default KertasPopup