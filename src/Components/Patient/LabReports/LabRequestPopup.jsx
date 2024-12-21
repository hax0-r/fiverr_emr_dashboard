
import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
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
                                    <div className=" flex flex-col gap-3">
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Respiratory Virus Test</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Full Blood Count</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Urine Test</h3>
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
                            <div className="border p-3 max-h-[65vh] text-[#1D1D1D]  overflow-auto rounded-lg border-[#cfd1d4]">

                                <div className="rounded-lg border-[#cfd1d4] border p-3">

                                    <h3 className='font-semibold text-xl pb-1 '>Respiratory Virus Test</h3>
                                    <p className='text-sm'>Laboratory Reference ID: RTK10736/COV/23/26</p>
                                </div>


                                <div className="bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-3 grid grid-cols-4 gap-y-1 ">
                                    <p>Patient Name</p>
                                    <p className='font-semibold'> : CHIA SUWE KIEA</p>
                                    <p>Gender</p>
                                    <p className='font-semibold'> : Male</p>
                                    <p>Patient ID</p>
                                    <p className='font-semibold'> : 560915105691</p>
                                    <p>Nationality</p>
                                    <p className='font-semibold'> : Malaysian</p>
                                    <p>Category ID</p>
                                    <p className='font-semibold'> : NRIC Pesakit</p>
                                    <p>Age (DOB Format D-M-Y)</p>
                                    <p className='font-semibold'> : 66 Year & 4 Month (DOB 15/09/1596)</p>
                                </div>
                                <div className="bg-[#f7f8fa] border text-sm mt-4 rounded-lg p-3 grid grid-cols-4 gap-y-1 ">
                                    <p>Facility Requestor</p>
                                    <p className='font-semibold'> : Klinik Dr Ng (Sungai Besar) (Reference No : )</p>
                                    <p>State</p>
                                    <p className='font-semibold'> : Selangor</p>
                                    <p>Location Information</p>
                                    <p className='font-semibold'> : -</p>
                                    <p>Name of the Requestor</p>
                                    <p className='font-semibold'> : -</p>
                                    <p>Facility Transit</p>
                                    <p className='font-semibold'> : -</p>
                                    <p>Date Received Specimen in Lab</p>
                                    <p className='font-semibold'> : 09/02/2023</p>
                                </div>


                                <div className="border p-3 rounded-lg mt-4 text-sm text-[#1D1D1D] border-[#cfd1d4]">
                                    <h2 className='text-center font-medium'>Specimen Particulars</h2>
                                    <div className="grid grid-cols-2 gap-x-4 font-medium mt-4">
                                        <p className='border border-[#cfd1d4] p-1 text-center'>Type of Specimen</p>
                                        <p className='border border-[#cfd1d4] p-1 text-center'>Date & Time Specimen Taken</p>
                                        <p className='border border-[#cfd1d4] p-1 text-xs text-center'>Combined NPS and OPS</p>
                                        <p className='border border-[#cfd1d4] p-1 text-xs text-center'>09-02-2023 (Masa : 19:00:00)</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="w-full bg-white rounded-lg border mt-4">
                                        <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                            {/* Table Header */}
                                            <thead className=" border-b">
                                                <tr>
                                                    <th className="px-4 py-2.5 text-left font-medium">Specimen</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Test </th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Result</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Validated by</th>
                                                    <th className="px-4 py-2.5 text-left font-medium">Validation Date</th>
                                                </tr>
                                            </thead>

                                            {/* Table Body */}
                                            <tbody>
                                                <tr className="border-b bg-[#f5f7fa]">
                                                    <td className="px-4 py-2.5">Combined NPS and OPS</td>
                                                    <td className="px-4 py-2.5">Rapid Antigen Test</td>
                                                    <td className="px-4 py-2.5">
                                                    Test Name: <u>Coronavirus</u>
                                                   <br /> Test Result: <u>Negative</u>
                                                   <br /> <u>Remarks: -</u>
                                                    </td>
                                                    <td className="px-4 py-2.5">Ng Eng Han Owner</td>
                                                    <td className="px-4 py-2.5">09-02-2023 <br /> Time Verified: <br /> 19:53:47 (24 Hour Format)</td>
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
                                        <option>5</option>
                                    </select>
                                    <span className="text-sm text-gray-600">
                                        Show 1 of 5 data
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