import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiCornersOutBold, PiPrinterBold } from 'react-icons/pi'
import pdf from "../../../assets/pdf.svg"
import receipt from "../../../assets/receipt18.png"
import pdfFile from "../../../assets/pdfFile.svg"
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { FiMinus, FiPlus } from 'react-icons/fi'

const PraPopup = ({setPopup4}) => {
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
                        <img src={pdf} alt="" />
                        <h2 className='text-lg font-semibold'>Pra-kebenaran</h2>
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
                                        <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full `}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[70vh] overflow-y-auto">
                                <div className="flex items-center justify-between">
                                    <h2 className='text-secondary font-semibold'>Borang Pra-kebenaran</h2>
                                    <p className='text-[#6E6E6E]'>Test Date</p>
                                </div>
                                {/* <div className="flex items-center justify-between">
                                    <p className='text-[#6E6E6E] text-sm'>X-Ray</p>
                                    <h2 className='font-semibold text-[#1D1D1D]'>27 Feb 2024</h2>
                                </div> */}

                                <div className=" fastFadeIn flex flex-col justify-between w-full rounded-xl p-4">
                                    <img src={receipt} alt="" className="h-[55vh] mx-auto object-cover" />
                                </div>

                            </div>
                                    <div className="flex items-center justify-center mt-4 gap-3">
                                        <div className="flex items-center bg-white border cursor-pointer justify-center w-11 h-11 rounded-full">
                                            <PiCornersOutBold className='text-lg' />
                                        </div>
                                        <div className="flex items-center bg-white border cursor-pointer justify-center w-11 h-11 rounded-full">
                                            <FiPlus className='text-xl' />
                                        </div>
                                        <div className="flex items-center bg-white border cursor-pointer justify-center w-11 h-11 rounded-full">
                                            <FiMinus className='text-xl' />
                                        </div>
                                        <div className="flex items-center bg-white border cursor-pointer justify-center w-11 h-11 rounded-full">
                                            <IoIosArrowForward className='text-xl rotate-180' />
                                        </div>
                                        <div className="flex items-center bg-white border cursor-pointer justify-center w-11 h-11 rounded-full">
                                            <IoIosArrowForward className='text-xl' />
                                        </div>
                                    </div>
                            {
                                !previewDocument && (
                                    <div className="flex gap-2 items-center mt-4 justify-end">
                                        <button className='bg-primary pr-5 pl-4 py-3 rounded-lg text-white font-medium flex items-center gap-2' ><PiPrinterBold className='text-lg' />
                                            Print Result</button>
                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default PraPopup