
import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import RadiologyReport from "../../../assets/RadiologyReport2.svg"
import receipt from "../../../assets/receipt42.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const RadiologyReportPopup = ({ setPopup6 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("USG GUIDED FNAC OF LEFT THYROID NODULE")

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
                        <img src={RadiologyReport} alt="" />
                        <h2 className='text-lg font-semibold'>Radiology Report</h2>
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
                                        <div onClick={() => setActiveTab("USG GUIDED FNAC OF LEFT THYROID NODULE")} className={`cursor-pointer ${activeTab == "USG GUIDED FNAC OF LEFT THYROID NODULE" && "bg-zinc-50"} border p-3 rounded-lg border-[#cfd1d4] w-full`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>USG GUIDED FNAC OF LEFT THYROID NODULE</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Ultrasound</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>05 Mar 2024</p>
                                            </div>
                                        </div>
                                        <div onClick={() => setActiveTab("US THYROID")} className={` cursor-pointer ${activeTab == "US THYROID" && "bg-zinc-50"} border p-3 rounded-lg border-[#cfd1d4] w-full`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>US THYROID</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Ultrasound</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>06 Feb 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 max-h-[65vh] text-[#1D1D1D] overflow-y-auto rounded-t-lg border-[#cfd1d4]">

                                <h3 className='font-semibold  text-xl'>RADIOLOGIST REPORT</h3>

                                <div className="">
                                    <div className="p-3 mt-5 grid grid-cols-4 gap-1 rounded-t-lg text-sm border-[#CFD1D4] border pb-3">
                                        <p className=' font-medium text-[#6E6E6E] col-span-4'>Patient Information</p>
                                        <p className='py-2'>Name</p>
                                        <p className='font-semibold col-span-3 py-2'>: NORARTINI, SULONG @ MOKHTAR</p>
                                        <p>MRN</p>
                                        <p className='font-semibold'>: N880842</p>
                                        <p>IC/No.</p>
                                        <p className='font-semibold'>: 850703115180</p>
                                        <p>Age</p>
                                        <p className='font-semibold'>: 39</p>
                                        <p>DOB</p>
                                        <p className='font-semibold'>: 03 /07/1985</p>
                                        <p>Gender</p>
                                        <p className='font-semibold'>: Female</p>
                                        <p>Race</p>
                                        <p className='font-semibold'>: MELAYU</p>
                                    </div>
                                    <div className="p-3 grid grid-cols-4 gap-1 rounded-b-lg border-t-0 text-sm border-[#CFD1D4] border pb-3">
                                        <p className=' font-medium text-[#6E6E6E] col-span-4 pb-2'>Examination Information</p>
                                        <p className=''>Request id</p>
                                        <p className='font-semibold '>: 2024US9B357</p>
                                        <p>Examination Date</p>
                                        <p className='font-semibold'>: 05/03/2024 14:47:59</p>
                                        <p>In Charge Radiologist</p>
                                        <p className='font-semibold'>: SURAYA BINTI AZIZ</p>
                                        <p>Radiographer</p>
                                        <p className='font-semibold'>: NURUL IZZAH BINTI ZENIAN</p>
                                        <p>Examination</p>
                                        <p className='font-semibold'>: ULTRASOUND</p>
                                        <p>Consultant Incharge</p>
                                        <p className='font-semibold'>: DR. NORLELA BINTI SUKOR</p>
                                        <p></p>
                                        <p className='font-medium col-span-3 pt-5 pb-3'>1) USX054 - PROCEDURE : FNAC SPECIFY thyroid right lower pole nodule 4,9 cm, TIRADS 3 and left midpole 1.7am, TIRADS 4</p>
                                        <p>Status</p>
                                        <p className='font-semibold'>: FINAL REPORT</p>
                                    </div>

                                    <p className='text-sm py-3 text-[#6E6E6E] font-medium'>FINAL REPORT</p>
                                    {
                                        activeTab === "USG GUIDED FNAC OF LEFT THYROID NODULE" && (
                                            <div className="text-sm border-[#CFD1D4] border p-3 gap-4 rounded-lg flex justify-between w-full bg-[#f7f8fa]">

                                                <div className="">
                                                    <p className='font-semibold pb-2 text-[#F26522] text-[16px]'>USG GUIDED FNAC OF LEFT THYROID NODULE</p>
                                                    <p className='pb-1'>Performed by: <span className='font-medium'> Prof Suraya (Radiologist)</span></p>
                                                    <p className='pb-1'>Assistant: <span className='font-medium'> Dr Izzah (MO)</span></p>
                                                    <p> Runner: <span className='font-medium'>SN Wan</span></p>
                                                    <p className='pt-4 font-semibold'> Technique: </p>
                                                    <p className='pt-1'>Left neck region was cleaned and draped under sterille technique.</p>
                                                </div>

                                                <div className="">
                                                    <p className='text-[#6E6E6E] text-[16px]'>Test Date</p>
                                                    <p className='font-medium pt-1'>05.03.2024</p>
                                                </div>

                                            </div>
                                        )
                                    }
                                    {
                                        activeTab === "US THYROID" && (
                                            <div className="text-sm border-[#CFD1D4] border p-3 gap-4 rounded-lg flex justify-between w-full bg-[#f7f8fa]">

                                                <div className="">
                                                    <p className='font-semibold pb-2 text-[#F26522] text-[16px]'>USG GUIDED FNAC OF LEFT THYROID NODULE</p>
                                                    <p className='pb-1'>Performed by: <span className='font-medium'> Prof Suraya (Radiologist)</span></p>
                                                    <p className='pb-1'>Assistant: <span className='font-medium'> Dr Izzah (MO)</span></p>
                                                    <p> Runner: <span className='font-medium'>SN Wan</span></p>
                                                    <p className='pt-4 font-semibold'> Findings:: </p>
                                                    <p className='pt-1'>Both thyroid appear heterogenous.</p>
                                                </div>

                                                <div className="">
                                                    <p className='text-[#6E6E6E] text-[16px]'>Test Date</p>
                                                    <p className='font-medium pt-1'>05.03.2024</p>
                                                </div>

                                            </div>
                                        )
                                    }
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

export default RadiologyReportPopup