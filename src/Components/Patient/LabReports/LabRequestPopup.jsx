
import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import LabRequest from "../../../assets/LabRequest.svg"
import receipt from "../../../assets/receipt25.png"
import pdfFile from "../../../assets/pdfFile.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const LabRequestPopup = ({ setPopup2 }) => {
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
                        <img src={LabRequest} alt="" />
                        <h2 className='text-lg font-semibold'>Lab Request</h2>
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
                                    <div className="flex flex-col gap-3">
                                        <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Endocrine Test</h3>
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
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Endocrine Test</h3>
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
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="">
                                                <h3 className='font-medium text-[#1D1D1D]'>Endocrine Test</h3>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 max-h-[65vh] overflow-auto rounded-lg border-[#cfd1d4]">

                                <h3 className='font-semibold text-[#1D1D1D] text-xl '>Endocrine Test</h3>


                                <div className="mx-auto bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-4 flex gap-10">
                                    <ul className='space-y-1'>
                                        <li> Name : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Malysia New IC : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Date of Birth : <span className='font-semibold'>07/10/1978</span></li>
                                    </ul>
                                    <ul className='space-y-1'>
                                        <li> Age/Gender : <span className='font-semibold'>64 / Lelaki</span></li>
                                        <li> No X-Ray : <span className='font-semibold'>1122</span></li>
                                        <li> Syarikat : <span className='font-semibold'>-</span></li>
                                    </ul>
                                </div>
                                <div className="mx-auto text-[#1D1D1D] bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-4">
                                    <h2 className='text-sm  font-semibold mb-3'>Sejarah / Diagnosis</h2>
                                    <p>
                                        Pen x [circled P] Hp ~ 2 weeks chest ache <br /> A TRO PID / OA of hip
                                    </p>
                                </div>

                                <div className="border p-3 rounded-lg mt-4 text-sm text-[#1D1D1D] border-[#cfd1d4]">
                                    <h2 className='text-center font-medium'>Specimen Particulars</h2>
                                    <div className="grid grid-cols-2 gap-x-4 font-medium mt-4">
                                        <p className='border border-[#cfd1d4] p-1 text-center'>Type of Specimen</p>
                                        <p className='border border-[#cfd1d4] p-1 text-center'>Type of Specimen</p>
                                        <p className='border border-[#cfd1d4] p-1 text-center'>7th Floor, Clinic Blok UKMMC, Cheras, 65000</p>
                                        <p className='border border-[#cfd1d4] p-1 text-center'>7th Floor, Clinic Blok UKMMC, Cheras, 65000</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="w-full bg-white rounded-lg border mt-4">
                                        <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                            {/* Table Header */}
                                            <thead className=" border-b">
                                                <tr>
                                                    <th className="px-4 py-2.5 text-left font-medium">No</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Test Name</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Result</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Flag</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Unit</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Reference Range</th>
                                                </tr>
                                            </thead>

                                            {/* Table Body */}
                                            <tbody>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">1</td>
                                                    <td className="px-4 py-2.5">Total Cholesterol</td>
                                                    <td className="px-4 py-2.5">4.4</td>
                                                    <td className="px-4 py-2.5"></td>
                                                    <td className="px-4 py-2.5">(&lt;20)</td>
                                                    <td className="px-4 py-2.5">(&lt;20)</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-4 py-2.5">2</td>
                                                    <td className="px-4 py-2.5">HDL Cholesterol</td>
                                                    <td className="px-4 py-2.5">1.43</td>
                                                    <td className="px-4 py-2.5"></td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                </tr>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">3</td>
                                                    <td className="px-4 py-2.5">LDL Cholesterol</td>
                                                    <td className="px-4 py-2.5">2.7</td>
                                                    <td className="px-4 py-2.5"></td>
                                                    <td className="px-4 py-2.5">(&lt;20)</td>
                                                    <td className="px-4 py-2.5">(&lt;20)</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="px-4 py-2.5">4</td>
                                                    <td className="px-4 py-2.5">Triglycerides</td>
                                                    <td className="px-4 py-2.5">0.6</td>
                                                    <td className="px-4 py-2.5"></td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                </tr>
                                                <tr className='bg-[#f5f7fa]'>
                                                    <td className="px-4 py-2.5">5</td>
                                                    <td className="px-4 py-2.5">Total/ HDL Ratio</td>
                                                    <td className="px-4 py-2.5">3.1</td>
                                                    <td className="px-4 py-2.5">-</td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="px-4 py-2.5">6</td>
                                                    <td className="px-4 py-2.5">LDL Cholesterol</td>
                                                    <td className="px-4 py-2.5">2.7</td>
                                                    <td className="px-4 py-2.5"></td>
                                                    <td className="px-4 py-2.5">(&lt;20)</td>
                                                    <td className="px-4 py-2.5">(&lt;20)</td>
                                                </tr>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">7</td>
                                                    <td className="px-4 py-2.5">Triglycerides</td>
                                                    <td className="px-4 py-2.5">0.6</td>
                                                    <td className="px-4 py-2.5"></td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                </tr>
                                                <tr className=''>
                                                    <td className="px-4 py-2.5">8</td>
                                                    <td className="px-4 py-2.5">Total/ HDL Ratio</td>
                                                    <td className="px-4 py-2.5">3.1</td>
                                                    <td className="px-4 py-2.5">-</td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                    <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default LabRequestPopup