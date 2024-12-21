import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import pdf from "../../../assets/pdf.svg"
import receipt50 from "../../../assets/receipt50.png"
import receipt48 from "../../../assets/receipt48.png"
import receipt49 from "../../../assets/receipt49.png"
import pdfFile from "../../../assets/pdfFile.svg"
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const ConsentPopup = ({ setPopup1 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState(1)


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
                        <img src={pdf} alt="" />
                        <h2 className='text-lg font-semibold'>Consent Forms</h2>
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
                                        <div onClick={()=> setActiveTab(1)} className={`border cursor-pointer ${activeTab == 1 && "bg-zinc-100"}  p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4`}>
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Pembedahan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Chia Suwe Kiea</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>5 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div  onClick={()=> setActiveTab(2)} className={`border cursor-pointer ${activeTab == 2 && "bg-zinc-100"}  p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4`}>
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Maklumat Perubatan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Chia Suwe Kiea</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div  onClick={()=> setActiveTab(3)} className={`border cursor-pointer ${activeTab == 3 && "bg-zinc-100"}  p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4`}>
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Pemindahan Darah</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Chia Suwe Kiea</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full `}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[70vh] overflow-y-scroll">
                                <h2 className='text-secondary font-semibold'>Kebenaran Pengeluaran Maklumat Perubatan</h2>

                                <div className="mx-auto  border text-sm mt-4 rounded-lg p-4 flex gap-10">
                                    <img className='max-w-[500px] w-full mx-auto' src={activeTab == 1 ? receipt49 : activeTab == 2 ? receipt50 : receipt48} alt="" />
                                </div>

                            </div>
                            {
                                !previewDocument && (
                                    <div className="flex gap-2 items-center mt-4 justify-end">
                                        {/* <button onClick={() => setPreviewDocument(true)} className='pl-4 border-[#cfd1d4] border-2 pr-5 py-2.5 flex items-center gap-2 rounded-lg text-[#1D1D1D] font-medium'><AiOutlineSearch className='text-xl' />
                                            Preview Document</button> */}
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

export default ConsentPopup