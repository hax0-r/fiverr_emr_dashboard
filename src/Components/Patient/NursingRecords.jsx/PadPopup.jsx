import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiBedBold, PiPrinterBold } from 'react-icons/pi'
import ClinicalNotes from "../../../assets/ClinicalNotes.svg"
import receipt from "../../../assets/receipt4.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const PadPopup = ({ setPopup1 }) => {

    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup1(false)
        }, 500)
    }
    // Example data for the table
    const [data] = useState([
        { date: "25/7/2022", time: "7 PM - 9 PM", nt: "40 cc (Haematuria)", cbd: "200 cc concentrated" },
        { date: "", time: "9 PM - 7 PM", nt: "80 cc (Haematuria)", cbd: "800 cc concentrated" },
        { date: "", time: "7 PM - 7 PM", nt: "120 cc", cbd: "1000 cc" },
        { date: "26/7/2022", time: "9 PM - 2 AM", nt: "42 cc (Haematuria)", cbd: "" },
        { date: "", time: "3 PM - 9 AM", nt: "18 cc (Haematuria)", cbd: "" },
        { date: "26/7/2022", time: "9 PM - 7 AM", nt: "30 cc", cbd: "" },
        { date: "", time: "7 PM - 7 AM", nt: "30 cc", cbd: "" },
        { date: "27/7/2022", time: "7 AM - 2 PM", nt: "", cbd: "" },
    ]);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Handle page changes
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={ClinicalNotes} alt="" />
                        <h2 className='text-lg font-semibold'>Pad/Stool/Vomid Chart</h2>
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
                                    <div className="flex flex-col gap-3 rounded-lg border border-[#CFD1D4] p-3">
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiBedBold />
                                                    <p className='text-sm'>SUNGKE922</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiBedBold />
                                                    <p className='text-sm'>FROSTY728</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiBedBold />
                                                    <p className='text-sm'>BREEZY314</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg max-h-[65vh] overflow-auto border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Pad/Stool/Vomid Chart</h3>
                                <div className="mt-4">
                                    {/* Patient Information Card */}
                                    <div className="border rounded-lg p-4 mb-3 text-sm bg-[#f7f8fa]">
                                        <h2 className="font-medium text-sm mb-2 text-[#6E6E6E]">Patient Information</h2>
                                        <div className='grid gap-y-1 grid-cols-2 max-w-sm'>
                                            <p>Name</p>
                                            <p className='font-semibold'> : Chia Suwe Kiea</p>
                                            <p>NRP</p>
                                            <p className='font-semibold'> : N867921</p>
                                            <p>Katil</p>
                                            <p className='font-semibold'> : SONGKET 22</p>
                                        </div>
                                    </div>

                                    {/* Data Table */}
                                    <div className="border rounded-md bg-white">
                                        <table className="table-auto w-full text-left">
                                            <thead>
                                                <tr className=" ">
                                                    <th className="p-4 font-medium">Tarikh</th>
                                                    <th className="p-4 font-medium">Masa</th>
                                                    <th className="p-4 font-medium">NT</th>
                                                    <th className="p-4 font-medium">CBD</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentRows.map((row, index) => (
                                                    <tr key={index} className={`border-t ${index % 2 == 0 && "bg-[#f7f8fa]"}`}>
                                                        <td className="p-4">{row.date}</td>
                                                        <td className="p-4">{row.time}</td>
                                                        <td className="p-4">{row.nt}</td>
                                                        <td className="p-4">{row.cbd}</td>
                                                    </tr>
                                                ))}
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
                                        className={`px-3 py-1 bg-primary text-white rounded`}
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

export default PadPopup