import React, { useState } from 'react'
import pdfFile from "../../../assets/pdfFile.svg"
import pdf from "../../../assets/pdf.svg"
import RadiologyReport from "../../../assets/RadiologyReport.svg"
import { PiArrowsOutSimpleBold, PiPackageBold } from 'react-icons/pi'
import Report from './Report'
import XRayPopup from './XRayPopup'

const Radiology = () => {
    const [popup1, setPopup1] = useState(false)
    const [popup2, setPopup2] = useState(false)

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-3 mt-4">

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={RadiologyReport} alt="" />
                            <h2 className='text-lg font-semibold'>Radiology Report</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup1(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                            <h3 className='font-medium text-[#1D1D1D]'>CT Abdomen</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiPackageBold />
                                    <p className='text-sm font-medium'>CT Scan</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                            <h3 className='font-medium text-[#1D1D1D]'>CT Abdomen</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiPackageBold />
                                    <p className='text-sm font-medium'>CT Scan</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                            <h3 className='font-medium text-[#1D1D1D]'>CT Abdomen</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiPackageBold />
                                    <p className='text-sm font-medium'>CT Scan</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={pdf} alt="" />
                            <h2 className='text-lg font-semibold'>X-Ray Reports</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={() => setPopup2(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                            <img src={pdfFile} alt="" />
                            <div className="">
                                <h3 className='font-medium text-[#1D1D1D]'>Borang X-Ray</h3>
                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                            <img src={pdfFile} alt="" />
                            <div className="">
                                <h3 className='font-medium text-[#1D1D1D]'>Borang X-Ray</h3>
                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                            <img src={pdfFile} alt="" />
                            <div className="">
                                <h3 className='font-medium text-[#1D1D1D]'>Endocrine Test</h3>
                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {
                popup1 && (
                    <div className="fastFadeIn">
                        <Report setPopup1={setPopup1} />
                    </div>
                )
            }
            {
                popup2 && (
                    <div className="fastFadeIn">
                        <XRayPopup setPopup2={setPopup2} />
                    </div>
                )
            }

        </div >
    )
}

export default Radiology