import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt14.png"
import FinalReport from "../../../assets/FinalReport.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const FinalReportPopup = ({ setPopup2 }) => {
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
                        <img src={FinalReport} alt="" />
                        <h2 className='text-lg font-semibold'>Final Report</h2>
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
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Final Report</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Final Report</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Final Report</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>Final Report</h3>
                                <div className="">

                                    <div className="p-3 mt-3 bg-white rounded-lg border border-gray-200">
                                        {/* Header Section */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h2 className="font-medium text-gray-700 mb-2">Patient</h2>
                                                <p className="text-gray-600">MRN: <span className="font-medium">N12345</span></p>
                                                <p className="text-gray-600">Nama: <span className="font-medium">Lorem Ipsum</span></p>
                                                <p className="text-gray-600">Jantina: <span className="font-medium">Male</span></p>
                                                <p className="text-gray-600">DOB: <span className="font-medium">15/9/1956</span></p>
                                                <p className="text-gray-600">Age: <span className="font-medium">66 Years</span></p>
                                                <p className="text-gray-600">NIC: <span className="font-medium">-</span></p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Request by: <span className="font-medium">Pegawai Perubatan PPUKM</span></p>
                                                <p className="text-gray-600">Department: <span className="font-medium">Chemical Pathology</span></p>
                                                <p className="text-gray-600">Location: <span className="font-medium">UKMSC</span></p>
                                                <p className="text-gray-600">Request No: <span className="font-medium">1230814961</span></p>
                                                <p className="text-gray-600">Date: <span className="font-medium">18/08/2023</span></p>
                                                <p className="text-gray-600">Arrived: <span className="font-medium">18/08/2023 09:22</span></p>
                                                <p className="text-gray-600">Completed: <span className="font-medium">18/08/2023 10:02</span></p>
                                            </div>
                                        </div>

                                        {/* Table Section */}
                                        <div className="mt-6 rounded-lg overflow-hidden border border-gray-300">
                                            <table className="w-full table-auto  ">
                                                <thead>
                                                    <tr className="bg-gray-100 text-left">
                                                        <th className="border border-gray-300 px-4 py-2">Result</th>
                                                        <th className="border border-gray-300 px-4 py-2">Units</th>
                                                        <th className="border border-gray-300 px-4 py-2">Range</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Renal Profile Section */}
                                                    <tr>
                                                        <td colSpan={3} className="bg-gray-50 px-4 py-2 font-semibold text-gray-700">Renal Profile</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2">Sodium (ISE ID)</td>
                                                        <td className="border border-gray-300 px-4 py-2">138 mmol/L</td>
                                                        <td className="border border-gray-300 px-4 py-2">(136-145)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2">Potassium (ISE ID)</td>
                                                        <td className="border border-gray-300 px-4 py-2">4.1 mmol/L</td>
                                                        <td className="border border-gray-300 px-4 py-2">(3.5-5.1)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2">Urea (Urease)</td>
                                                        <td className="border border-gray-300 px-4 py-2">5.7 mmol/L</td>
                                                        <td className="border border-gray-300 px-4 py-2">(3.2-7.2)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2">Creatinine (Enzymatic)</td>
                                                        <td className="border border-gray-300 px-4 py-2">68.5 μmol/L</td>
                                                        <td className="border border-gray-300 px-4 py-2">(64-104)</td>
                                                    </tr>

                                                    {/* Liver Function Test Section */}
                                                    <tr>
                                                        <td colSpan={3} className="bg-gray-50 px-4 py-2 font-semibold text-gray-700">Liver Function Test</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2">Albumin (BCP dye)</td>
                                                        <td className="border border-gray-300 px-4 py-2">41 g/L</td>
                                                        <td className="border border-gray-300 px-4 py-2">(34-48)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2">Total Protein (Biuret)</td>
                                                        <td className="border border-gray-300 px-4 py-2">67 g/L</td>
                                                        <td className="border border-gray-300 px-4 py-2">(64-83)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default FinalReportPopup