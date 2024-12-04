import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import Senarai from "../../../assets/Senarai.svg"
import receipt from "../../../assets/receipt11.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const ButirPopup = ({ setPopup3 }) => {

    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup3(false)
        }, 500)
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);

    // Example data for table
    const data = [
        { id: 1, recovery: "Implant Name", comment: "",Catitan:"" },
        { id: 2, recovery: "Implant Name", comment: "",Catitan:"" },
        { id: 3, recovery: "Implant Name", comment: "",Catitan:"" },
        // Add more rows as needed
    ];

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(data.length / rowsPerPage);


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={Senarai} alt="" />
                        <h2 className='text-lg font-semibold'>Post Operative Nursing Record</h2>
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
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>BREEZY314</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>BREEZY314</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>BREEZY314</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                {/* <h3 className='font-semibold text-[#1D1D1D] text-xl'>Sebelum Prosedur - Sila Tandakan Ya (✓) dan Tidak (X)</h3> */}


                                <div className="">
                                    <div className="flex justify-center items-center mb-4">
                                        <div className="bg-white border rounded-lg  p-4 w-full ">
                                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                                                {/* Left Column */}
                                                <div>
                                                    <p>
                                                        <span className="font-semibold">Name</span>: Lorem Ipsum
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">RN</span>: 111122233334
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Kad Pengenal</span>: 111122233334
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Alamat</span>:{" "}
                                                        <span className="font-bold">Jalan Jalan Besar</span>
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Bilik Bedah</span>: 47
                                                    </p>
                                                    <p className="flex items-center gap-2">
                                                        <span className="font-semibold">Kas Pembedahan</span>:
                                                        <label className="flex items-center gap-1">
                                                            <input
                                                                type="checkbox"
                                                                className="form-checkbox text-blue-500"
                                                                disabled
                                                            />
                                                            Efektif
                                                        </label>
                                                        <label className="flex items-center gap-1">
                                                            <input
                                                                type="checkbox"
                                                                className="form-checkbox text-blue-500"
                                                                defaultChecked
                                                                disabled
                                                            />
                                                            Kecemasan
                                                        </label>
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Prosedur Pembedahan</span>:{" "}
                                                        <span className="font-bold">
                                                            Lap @ partial nephrectomy & ureteric stenting
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Pakar Bedah</span>: Prof Abdul
                                                    </p>
                                                </div>

                                                {/* Right Column */}
                                                <div>
                                                    <p>
                                                        <span className="font-semibold">Tarik</span>:{" "}
                                                        <span className="font-bold">12/11/2024</span>
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Ward</span>: Songket
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">No Telefon</span>:{" "}
                                                        <span className="font-bold">0213456789</span>
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">1st Scrub Nurse</span>: -
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">2nd Scrub Nurse</span>: -
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">1st Assistant</span>: -
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">2nd Assistant</span>: -
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Circulating</span>: -
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Assessment Table */}
                                    <div className="bg-white border rounded-lg shadow p-4">
                                        {/* <h2 className="font-semibold text-center text-lg mb-4">ASSESSMENT</h2> */}
                                        <table className="table-auto w-full border-collapse">
                                            <thead>
                                                <tr className="bg-gray-100 text-left text-gray-600">
                                                    <th className="p-2.5 border font-medium">Bill</th>
                                                    <th className="p-2.5 border font-medium">Jenis Implant</th>
                                                    <th className="p-2.5 border font-medium">Kuantiti</th>
                                                    <th className="p-2.5 border font-medium">Sistem</th>
                                                    <th className="p-2.5 border font-medium">Catitan</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentRows.map((row, index) => (
                                                    <tr key={index} className="text-gray-700">
                                                        <td className="p-2.5 border">{row.id}</td>
                                                        <td className="p-2.5 border">{row.recovery}</td>
                                                        <td className="p-2.5 border">{row.comment}</td>
                                                        <td className="p-2.5 border">{row.comment}</td>
                                                        <td className="p-2.5 border">{row.comment}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {/* Pagination */}
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-4">

                                                <select
                                                    className="border rounded p-2 text-sm"
                                                    value={rowsPerPage}
                                                    readOnly
                                                >
                                                    <option>10</option>
                                                </select>
                                                <span className="text-sm text-gray-600">
                                                    Show {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, data.length)} of {data.length} data
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    className="px-3 py-1 bg-white border-2 rounded-lg"
                                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                    disabled={currentPage === 1}
                                                >
                                                    &lt;
                                                </button>
                                                {Array.from({ length: totalPages }, (_, i) => (
                                                    <button
                                                        key={i}
                                                        className={`px-3 py-1 ${currentPage === i + 1
                                                            ? "bg-primary text-white"
                                                            : "bg-gray-300 text-gray-800"
                                                            } rounded`}
                                                        onClick={() => setCurrentPage(i + 1)}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                ))}
                                                <button
                                                    className="px-3 py-1 bg-white border-2 rounded-lg"
                                                    onClick={() =>
                                                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                                    }
                                                    disabled={currentPage === totalPages}
                                                >
                                                    &gt;
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

export default ButirPopup