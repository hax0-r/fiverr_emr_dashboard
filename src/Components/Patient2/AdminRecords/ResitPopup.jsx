import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt39.png"
import sign from "../../../assets/sign7.png"
import AdmissionLetter from "../../../assets/AdmissionLetter.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const ResitPopup = ({ setPopup3 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState(1)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup3(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={AdmissionLetter} alt="" />
                        <h2 className='text-lg font-semibold'>Medical Certificate</h2>
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
                                        <div onClick={() => setActiveTab(1)} className={`border p-3 cursor-pointer rounded-lg ${activeTab == 1 && "bg-zinc-50"} border-[#cfd1d4]`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Medical Certificate</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>14 May 2024</p>
                                        </div>
                                        <div onClick={() => setActiveTab(2)} className={`border p-3 cursor-pointer rounded-lg ${activeTab == 2 && "bg-zinc-50"} border-[#cfd1d4]`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Medical Certificate</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>6 Feb 2024</p>
                                        </div>
                                        <div onClick={() => setActiveTab(3)} className={`border p-3 cursor-pointer rounded-lg ${activeTab == 3 && "bg-zinc-50"} border-[#cfd1d4]`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Medical Certificate</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>4 Jul 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border max-h-[70vh] text-[#1D1D1D]  overflow-auto p-3 text-sm rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold pb-2 text-xl'>Medical Certificate</h3>
                                <p>No : 98914</p>
                                <p className='pt-2'>Dengan ini saya mengesahkan bahawa saya telah memeriksa</p>
                                <p className=' italic text-[#616060]'>I hereby certify that i have examined</p>
                                <div className="pl-5 py-3">
                                    <p className='pt-2 text-black'>Encik / Cik / Puan : <span className='font-medium underline'> Norartini Sulong @ Mukhtar</span></p>
                                    <p className=' italic text-[#616060]'>Mr / Mrs / Miss</p>
                                    <p className='pt-2 text-black'>NRIC No : <span className='font-medium underline'> 850703-11-5180</span></p>
                                    <p className='pt-2 text-black'>Dari : <span className='font-medium underline'> Yang Berkenaan</span></p>
                                    <p className=' italic text-[#616060]'>From</p>
                                </div>
                                <p className='pt-2'>dan mendapati yang beliau :</p>
                                <p className=' italic text-[#616060]'>and find that he / she</p>

                                <div className='pl-5 pt-4 space-y-1'>
                                    <p>1) tidak sihat untuk menjalankan tugasnya dengan sempurna selama <span className='font-medium underline'> 1 hari</span> </p>
                                    <p className=' italic text-[#616060]'>will be unfit for duty for</p>
                                    <p className='flex items-center gap-4'>hari daripada : <span className='font-medium underline'> 14/05/2024</span> Hingga :-</p>
                                    <p className=' italic text-[#616060] flex items-center gap-40'>Day from <span>To</span> </p>
                                </div>
                                <div className='pl-5 pt-4 space-y-1'>
                                    <p>2) boleh bertugas semula pada <span className='font-medium underline'> -</span> </p>
                                    <p className=' italic text-[#616060]'>can resume his / her work on</p>
                                </div>
                                <div className='pl-5 pt-4 space-y-1'>
                                    <p>3) dikehendaki datang semula untuk pemeriksaan pada <span className='font-medium underline'> -</span> </p>
                                    <p className=' italic text-[#616060]'>is required to come for re-examination on</p>
                                </div>


                                <div className="grid grid-cols-2 w-full items-center gap-4 pt-8">
                                    <div className="">
                                        <p className=' font-medium border-b-2 border-black'>
                                            {
                                                activeTab == 1 ? "14/05/2024" : activeTab == 2 ? "06/02/2024" : "04/07/2024"
                                            }
                                        </p>
                                        <p className=' pt-2'>Tarikh</p>
                                        <p className=' italic'>Date</p>
                                    </div>
                                    <div className="">
                                        <div className=" border-b-2 border-black">
                                            <img src={sign} className='h-24 mt-3' alt="" />
                                        </div>
                                        <p className=' pt-2'>Tanda tangan dokter</p>
                                        <p className=' italic'>Signature of doctor</p>
                                        <p className='font-semibold pt-2'>Assoc, Prof. Dr Noordina Hashim</p>
                                        <p> MMC No.43572 NSR No. 334481
                                            <br /> MD (UKM) MS ORL-HMS (UKM)
                                            <br /> Consultant Otorhinolaryngology (Otology)
                                        </p>
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
        </div >
    )
}

export default ResitPopup