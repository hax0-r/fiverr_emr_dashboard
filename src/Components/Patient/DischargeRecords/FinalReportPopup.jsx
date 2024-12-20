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
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[65vh] overflow-auto">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>Final Report</h3>
                                <div className="">

                                    <div className="p-3 mt-3 bg-white rounded-lg border border-gray-200">
                                        <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-1 text-sm grid gap-x-4`}>
                                            <p className={`text-[#6E6E6E] ${previewDocument ? " col-span-1" : "col-span-3"} pb-3`}>Patient</p>
                                            <div className="grid-cols-2 grid space-y-1">
                                                <p className=''>MRN</p>
                                                <p className='font-semibold'>: N867921</p>
                                                <p className=''>Nama</p>
                                                <p className='font-semibold'>:  Chia Suwe Kiea </p>
                                                <p className=''>Jantina</p>
                                                <p className='font-semibold'>: MAle</p>
                                                <p className=''>DOB</p>
                                                <p className='font-semibold'>: 15/9/1956</p>
                                                <p className=''>Age</p>
                                                <p className='font-semibold'>: 66 Years </p>
                                                <p className=''>NIC</p>
                                                <p className='font-semibold'>: 560915105691</p>
                                            </div>
                                            <div className="grid-cols-2 grid space-y-1">
                                                <p className=''>Request by</p>
                                                <p className='font-semibold'>: Pegawai Perubatan PPUKM</p>
                                                <p className=''>Locatino</p>
                                                <p className='font-semibold'>: UKMSC</p>
                                                <p className=''>Tel</p>
                                                <p className='font-semibold'>: - </p>
                                                <p className=''>Email</p>
                                                <p className='font-semibold'>: -</p>
                                                <p className=''>Request No</p>
                                                <p className='font-semibold'>: 1230814961</p>
                                            </div>
                                            <div className="grid-cols-2 grid space-y-1">
                                                <p className=''>Department Details  </p>
                                                <p className='font-semibold'>: Chemical Pathology</p>
                                                <p className=''>Tel</p>
                                                <p className='font-semibold'>: -</p>
                                                <p className='text-[#6E6E6E] col-span-2'>Date</p>
                                                <p className=''>Arrived</p>
                                                <p className='font-semibold'>: 18/08/2023 09:22</p>
                                                <p className=''>Completed</p>
                                                <p className='font-semibold'>: 18/08/2023 10:02</p>
                                            </div>
                                        </div>

                                        {/* Table Section */}
                                        <div className="mt-6 rounded-lg overflow-hidden border border-gray-300">
                                            <table className="w-full table-auto  ">
                                                <thead>
                                                    <tr className=" text-left">
                                                        <th className="border border-gray-300 font-medium border-r-0 p-4"></th>
                                                        <th className="border border-gray-300 font-medium border-x-0 p-4">Result</th>
                                                        <th className="border border-gray-300 font-medium border-x-0 p-4">Units</th>
                                                        <th className="border border-gray-300 font-medium border-l-0 p-4">Range</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Renal Profile Section */}
                                                    <tr>
                                                        <td colSpan={4} className="p-4 font-semibold border-x">Renal Profile</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">Sodium (ISE ID)</td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">138 </td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">mmol/L </td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">(136-145)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-4">Potassium (ISE ID)</td>
                                                        <td className="border border-gray-300 p-4">4.1 </td>
                                                        <td className="border border-gray-300 p-4">mmol/L</td>
                                                        <td className="border border-gray-300 p-4">(3.5-5.1)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">Urea (Urease)</td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">5.7 </td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">mmol/L</td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">(3.2-7.2)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-4">Creatinine (Enzymatic)</td>
                                                        <td className="border border-gray-300 p-4">68.5 </td>
                                                        <td className="border border-gray-300 p-4">μmol/L</td>
                                                        <td className="border border-gray-300 p-4">(64-104)</td>
                                                    </tr>

                                                    {/* Liver Function Test Section */}
                                                    <tr>
                                                        <td colSpan={4} className="bg-[#f5f7fa] border p-4 font-semibold text-gray-700">Liver Function Test</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-4">Albumin (BCP dye)</td>
                                                        <td className="border border-gray-300 p-4">41 </td>
                                                        <td className="border border-gray-300 p-4">g/L</td>
                                                        <td className="border border-gray-300 p-4">(34-48)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">Total Protein (Biuret)</td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">67 </td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">g/L</td>
                                                        <td className="border bg-[#f5f7fa] border-gray-300 p-4">(64-83)</td>
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