import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import ClinicalNotes from "../../../assets/ClinicalNotes.svg"
import receipt from "../../../assets/receipt5.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const RekodPopup = ({ setPopup2 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup2(false)
        }, 500)
    }
    // Example data for the table
    const [data] = useState([
        { date: "25/7/2022", time: "7 PM - 9 PM", nt: "40 cc (Haematuria)", cbd: "200 cc concentrated" },
        { date: "25/7/2022", time: "9 PM - 7 AM", nt: "80 cc (Haematuria)", cbd: "800 cc tea colour" },
        { date: "25/7/2022", time: "7 PM - 7 AM", nt: "120 cc", cbd: "1000 cc" },
        { date: "26/7/2022", time: "9 PM - 2 AM", nt: "42 cc (Haematuria)", cbd: "800 cc tea colour" },
        { date: "26/7/2022", time: "3 PM - 9 PM", nt: "18 cc", cbd: "1000 cc" },
        { date: "26/7/2022", time: "9 PM - 7 AM", nt: "30 cc (Haematuria)", cbd: "800 cc tea colour" },
        { date: "27/7/2022", time: "7 AM - 2 PM", nt: "30 cc (Haematuria)", cbd: "800 cc tea colour" },
    ]);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

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
                        <h2 className='text-lg font-semibold'>Rekod Imbangan Cecair</h2>
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
                                        <div className="border p-3 rounded-lg bg-[#f7f8fa] border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>FROSTY728</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>FROSTY728</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>FROSTY728</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Rekod Imbangan Cecair</h3>
                                <div className="mt-4">
                                    {/* Patient Information Card */}
                                    <div className="border rounded-md p-4 bg-white shadow mb-4">
                                        <h2 className="font-bold text-lg mb-4">Patient Information</h2>
                                        <div>
                                            <p>
                                                <span className="font-semibold">Name:</span> Lorem Ipsum
                                            </p>
                                            <p>
                                                <span className="font-semibold">NRP:</span>
                                            </p>
                                            <p>
                                                <span className="font-semibold">Katil:</span> SUNGKE922
                                            </p>
                                        </div>
                                    </div>

                                    {/* Data Table */}
                                    <div className="border rounded-md bg-white shadow">
                                        <table className="table-auto w-full text-left">
                                            <thead>
                                                <tr className="bg-gray-100 text-sm font-semibold text-gray-700">
                                                    <th className="p-3">Tarikh</th>
                                                    <th className="p-3">Masa</th>
                                                    <th className="p-3">NT</th>
                                                    <th className="p-3">CBD</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentRows.map((row, index) => (
                                                    <tr key={index} className="border-t">
                                                        <td className="p-3">{row.date}</td>
                                                        <td className="p-3">{row.time}</td>
                                                        <td className="p-3">{row.nt}</td>
                                                        <td className="p-3">{row.cbd}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        {/* Pagination */}
                                        <div className="flex justify-between items-center p-4">
                                            <span className="text-sm text-gray-600">
                                                Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, data.length)} of {data.length} entries
                                            </span>
                                            <div className="flex space-x-2">
                                                {/* Previous Button */}
                                                <button
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                    className={`w-8 h-8 flex items-center justify-center border border-[#CFD1D4] text-[#1D1D1D] text-sm rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                                                        }`}
                                                >
                                                    <IoIosArrowForward className="text-[#1D1D1D] rotate-180" />
                                                </button>

                                                {/* Page Numbers */}
                                                {Array.from({ length: totalPages }, (_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handlePageChange(index + 1)}
                                                        className={`w-8 h-8 flex items-center justify-center text-sm rounded-lg ${currentPage === index + 1
                                                                ? "bg-primary text-white"
                                                                : "border border-[#CFD1D4] text-[#1D1D1D] hover:bg-gray-100"
                                                            }`}
                                                    >
                                                        {index + 1}
                                                    </button>
                                                ))}

                                                {/* Next Button */}
                                                <button
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                    className={`w-8 h-8 flex items-center justify-center border border-[#CFD1D4] text-[#1D1D1D] text-sm rounded-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                                                        }`}
                                                >
                                                    <IoIosArrowForward className="text-[#1D1D1D]" />
                                                </button>
                                            </div>
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

export default RekodPopup