import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt33.png"
import sign from "../../../assets/sign8.png"
import pdf from "../../../assets/pdf.svg"
import pdfFile from "../../../assets/pdfFile.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const WardProceduresPopup = ({ setPopup6 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup6(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={pdf} alt="" />
                        <h2 className='text-lg font-semibold'>Admission Ward Procedures</h2>
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
                                    <div className="flex flex-col gap-3">
                                        <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Admission Ward Procedures</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Admission Ward Procedures</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Admission Ward Procedures</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 text-[#1D1D1D] rounded-lg border-[#cfd1d4] text-sm max-h-[70vh] overflow-auto">
                            <div className="flex items-center gap-4 ">
                                    <h3 className={`font-semibold text-[#1D1D1D] text-xl`}>Admission Ward Procedures</h3>
                                    <p className='text-[#1d1d1d] bg-[#F5F7FA] px-2 py-1 rounded-md font-medium'>Chia Suwe Kiea <span className='text-[#6E6E6E]'>08 Aug 2023</span></p>
                                </div>
                                <p className='pt-3 text-[#6E6E6E] font-medium'>Vitals</p>

                                <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-1 text-sm grid gap4`}>
                                    <div className="grid-cols-2 grid space-y-1">
                                        <p className=''>Temp</p>
                                        <p className='font-semibold'>: 36 <sup>c</sup></p>
                                        <p className=''>Blood Pressure</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Pulse Rate</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>SpO₂</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>NBM</p>
                                        <p className='font-semibold'>: 7:30 pagi</p>
                                        <p className=''>SSA</p>
                                        <p className='font-semibold'>: 9:15 pagi</p>
                                    </div>
                                    <div className="grid-cols-2 grid space-y-1">
                                        <p className=''>Alergi</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>Medical History</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>Surgical History</p>
                                        <p className='font-semibold'>: Pembuangan batu pada tahun 2022 di Hospital Gleneagles </p>
                                        <p className=''>Medications</p>
                                        <p className='font-semibold'>: - </p>
                                    </div>
                                </div>
                                <p className='pt-3 text-[#6E6E6E] font-medium'>PROSEDUR KEMASUKAN WAD UKM SPECALIST CENTRE (UKMSC)</p>

                                <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-1 text-sm grid gap4`}>
                                    <div className="grid-cols-2 grid space-y-1">
                                        <p className=''>Nama / Name</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>MRN No.</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Tarikh / Date</p>
                                        <p className='font-semibold'>: - </p>
                                    </div>
                                    <div className="grid-cols-2 grid space-y-1">
                                        <p className=''>Tandatangan / Signature</p>
                                        <img src={sign} alt="" />
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

export default WardProceduresPopup