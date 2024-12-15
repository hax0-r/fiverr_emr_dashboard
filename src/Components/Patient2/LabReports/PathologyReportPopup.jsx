
import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import MicrobiologyReport from "../../../assets/MicrobiologyReport.svg"
import receipt from "../../../assets/receipt27.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const PathologyReportPopup = ({ setPopup3 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

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
                        <img src={MicrobiologyReport} alt="" />
                        <h2 className='text-lg font-semibold'>Microbiology Report</h2>
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
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Urine Culture & Sensitivity</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Urine Culture & Sensitivity</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Urine Culture & Sensitivity</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 max-h-[65vh] overflow-y-auto rounded-t-lg border-[#cfd1d4]">

                                <h3 className='font-semibold text-[#1D1D1D] text-xl '>Microbiology Report</h3>

                                <div className="rounded-lg border p-3 mt-3 text-[#1D1D1D] border-[#cfd1d4]">
                                    <p className='text-[#6E6E6E] pb-3'>Urine Culture & Sensitivity</p>
                                    <h2 className='font-medium'>100,000 CFU/ml. Significant growth of :</h2>
                                    <h2 className='font-medium'>Escherichia coli (Isolate 1)</h2>
                                </div>
                               
                                <div className="flex justify-center items-center">
                                    <div className="w-full bg-white rounded-lg border mt-4">
                                        <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                            {/* Table Header */}
                                            <thead className=" border-b">
                                                <tr>
                                                    <th className="px-4 py-2.5 text-left font-medium">No</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Antibiotic</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">MIC</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Interpretation</th>
                                                </tr>
                                            </thead>

                                            {/* Table Body */}
                                            <tbody>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">1</td>
                                                    <td className="px-4 py-2.5">22</td>
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="px-4 py-2.5">1</td>
                                                    <td className="px-4 py-2.5">234</td>
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                </tr>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">1</td>
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                    <td className="px-4 py-2.5">%</td>
                                                    
                                                    
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="px-4 py-2.5">1</td>
                                                    
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                    <td className="px-4 py-2.5">%</td>
                                                    
                                                    
                                                </tr>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">1</td>
                                                    
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                    <td className="px-4 py-2.5">%</td>
                                                    
                                                    
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="px-4 py-2.5">1</td>
                                                    
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                    <td className="px-4 py-2.5">%</td>
                                                    
                                                    
                                                </tr>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">1</td>
                                                    
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                    <td className="px-4 py-2.5">%</td>
                                                    
                                                    
                                                </tr>
                                                <tr className="">
                                                    <td className="px-4 py-2.5">1</td>
                                                    
                                                    <td className="px-4 py-2.5">10.3</td>
                                                    <td className="px-4 py-2.5">(8.9-11.9)</td>
                                                    <td className="px-4 py-2.5">%</td>
                                                    
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-between p-3 border-t-0 rounded-b-lg  border-[#cfd1d4] border">
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

export default PathologyReportPopup