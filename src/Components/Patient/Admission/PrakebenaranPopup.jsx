import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt51.png"
import pdf from "../../../assets/pdf.svg"
import pdfFile from "../../../assets/pdfFile.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const PrakebenaranPopup = ({ setPopup7 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup7(false)
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

                <div className="px-4 pb-4">
                    <div className="border rounded-lg border-[#CFD1D4] p-3 flex gap-4 ">
                        {
                            !previewDocument && (
                                <div className="max-w-[30%]   w-full">
                                    <div className="flex flex-col gap-3">
                                        <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Pra-kebenaran</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Pra-kebenaran</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Pra-kebenaran</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Pra-kebenaran</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Pra-kebenaran</h3>
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
                                    <h3 className={`font-semibold text-[#1D1D1D] text-xl`}>Pra-kebenaran</h3>
                                </div>

                                <div className="border text-[#1D1D1D] p-3 rounded-lg text-sm border-[#cfd1d4] mt-4">

                                    <p className="border font-semibold p-3 rounded-lg border-[#cfd1d4]">
                                        Nama Pakar : Prer Ram Yeng Inn
                                    </p>

                                    <div className={` ${previewDocument ? " grid-cols-2" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap-y-1`}>
                                        <p className='font-semibold pb-2 col-span-2'>Maklumat Pesakit</p>
                                        <p>Nama Penuh (seperti di dalam KP/Passport)</p>
                                        <p className='font-semibold'> : Chia Suwe Kiea</p>
                                        <p> NRIC (Lama & Baru)</p>
                                        <p className='font-semibold'> : 560915-10-5691</p>
                                        <p> Tarikh Lahir</p>
                                        <p className='font-semibold'> : 15/9/1956</p>
                                        <p> No. Polisi/No. Ahli/No. Sijil/Pelan/Nama Syarikat</p>
                                        <p className='font-semibold'> : 560915-10-5691</p>
                                        <p> Tarikh Kemasukan Hospital/ Tarikh Kemasukan Hospital yang Dirancang</p>
                                        <p className='font-semibold'> : 19/1/24</p>
                                        <p> Nama Hospital</p>
                                        <p className='font-semibold'> : UKMSC</p>
                                        <p> Nama Doktor yang Merawat/Kepakaran</p>
                                        <p className='font-semibold'> : PROF FAM</p>
                                    </div>

                                    <p className="border font-semibold p-3 mt-3 flex items-center gap-1.5 rounded-lg border-[#cfd1d4]">
                                        Admission Reason
                                        <input type="checkbox" checked disabled className='w-5 h-5' />
                                        and anser accordingly, Sila Tanda
                                        <input type="checkbox" checked disabled className='w-5 h-5' />
                                        dan jawab soalan yang berkenan
                                    </p>

                                    <div className="border font-medium grid grid-cols-2 rounded-lg border-[#cfd1d4] mt-3">
                                        <div className="flex items-center gap-2 border-r border-b py-5 px-3">
                                            <input type="checkbox" checked disabled className='w-5 h-5' />
                                            8. Accident Kemalangan</div>
                                        <div className="p-4">
                                            a. Occurred on : Date ...../....../......Time Masa
                                            am (pagi) pm (petang)
                                            <span className='block pt-3'>a. Details of Accident : -</span>
                                        </div>
                                        <div className="flex items-center gap-2 border-r  py-5 px-3">
                                            <input type="checkbox" disabled className='w-5 h-5' />
                                            9. Illness</div>
                                        <div className="p-4 border-t">
                                            a. Symptoms first appeared on: Date ......./......./.......
                                            <span className='block pt-3'>b. Doctor(s) consulted for this condition: Assoc. Prof. Dr. Fam Xeng Inn</span>
                                            <span className='block pt-3'>c. Doctor’s or Clinic Contact (Address & Telephone): 7th Floow, Clinical Block, UKM Medical Centre 56000 Cheras Kuala Lumpur</span>
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
export default PrakebenaranPopup