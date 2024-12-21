import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiBedBold, PiPrinterBold } from 'react-icons/pi'
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
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiBedBold />
                                                    <p className='text-sm'>SUNGKE922</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>N867921</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiBedBold />
                                                    <p className='text-sm'>FROSTY728</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>N867921</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex i  tems-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiBedBold />
                                                    <p className='text-sm'>BREEZY314</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>N867921</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[65vh] overflow-auto">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Rekod Imbangan Cecair</h3>
                                <div className="mt-4">
                                    {/* Patient Information Card */}
                                    <div className="border rounded-md text-sm p-4 bg-[#f7f8fa] mb-4">
                                        <h2 className="font-medium mb-2 text-[#6E6E6E]">Patient Information</h2>
                                        <div className='grid grid-cols-2 max-w-sm gap-y-1'>
                                            <p>Name</p>
                                            <p className='font-semibold'> : Chia Suwe Kiea</p>
                                            <p>NRP</p>
                                            <p className='font-semibold'> : N867921</p>
                                            <p>Katil</p>
                                            <p className='font-semibold'> : SUNGKE922</p>
                                        </div>
                                    </div>

                                    <div className={`mb-4 grid ${previewDocument ? "grid-cols-1" : "grid-cols-3"} items-start gap-3`}>
                                        <div className="col-span-2 border rounded-md grid grid-cols-8">
                                            <p className='col-span-2 border-r py-4 px-1.5 font-medium row-span-2 text-center flex items-center justify-center'>Tarikh Masa</p>
                                            <p className='col-span-6 border-b py-4 px-1.5 text-center font-medium'>MASUK (ml)</p>
                                            <p className='col-span-2 py-4 px-1.5 text-center font-medium'>Oral</p>
                                            <p className='col-span-2 py-4 px-1.5 text-center font-medium'>Intra-Vena</p>
                                            <p className='col-span-2 py-4 px-1.5 text-center font-medium'>Lain-Lain</p>
                                            <p className='col-span-2 py-4 px-1.5 border-y border-r text-center font-medium'>25/7/2022</p>
                                            <p className='py-4 px-1.5 border-y border-r text-center font-medium'>Jenis</p>
                                            <p className='py-4 px-1.5 border-y border-r text-center font-medium'>Suka...</p>
                                            <p className='py-4 px-1.5 border-y border-r text-center font-medium'>Jenis</p>
                                            <p className='py-4 px-1.5 border-y border-r text-center font-medium'>Suka...</p>
                                            <p className='py-4 px-1.5 border-y border-r text-center font-medium'>Jenis</p>
                                            <p className='py-4 px-1.5 border-y text-center font-medium'>Suka...</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center col-span-2'>7 PM</p>
                                            <p className='bg-[#f5f7fa]'></p>
                                            <p className='bg-[#f5f7fa]'></p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '>IV DN</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '>83.3</p>
                                            <p className='bg-[#f5f7fa]'></p>
                                            <p className='bg-[#f5f7fa]'></p>
                                            <p className='py-4  px-1.5 text-center col-span-2'>8 PM</p>
                                            <p className='py-4  px-1.5'>SIP H2</p>
                                            <p className='py-4  px-1.5'>20 cc</p>
                                            <p className='py-4  px-1.5 text-center '></p>
                                            <p className='py-4  px-1.5 text-center '>83.3</p>
                                            <p className=''></p>
                                            <p className=''></p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center col-span-2'>9 PM</p>
                                            <p className='bg-[#f5f7fa] py-4  px-1.5'>H2O...</p>
                                            <p className='bg-[#f5f7fa] py-4  px-1.5'>150 cc</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '></p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '>83.3</p>
                                            <p className='bg-[#f5f7fa]'></p>
                                            <p className='bg-[#f5f7fa]'></p>
                                            <p className='py-4  px-1.5 text-center col-span-2'>7 PM-9 PM</p>
                                            <p className='py-4  px-1.5'>Intake</p>
                                            <p className='py-4  px-1.5'>170 cc</p>
                                            <p className='py-4  px-1.5 text-center '>IV D</p>
                                            <p className='py-4  px-1.5 text-center '>83.3</p>
                                            <p className=''></p>
                                            <p className=''></p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center col-span-2'>10 PM</p>
                                            <p className='bg-[#f5f7fa] py-4  px-1.5'>Intake</p>
                                            <p className='bg-[#f5f7fa] py-4  px-1.5'>11 cc</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '>IV DN...</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '></p>
                                            <p className='py-4  px-1.5  bg-[#f5f7fa]'>IV FU</p>
                                            <p className='py-4  px-1.5  bg-[#f5f7fa]'>200</p>
                                            <p className='py-4  px-1.5 text-center col-span-2'>11 PM</p>
                                            <p className='py-4  px-1.5'>9 PM...</p>
                                            <p className='py-4  px-1.5'>9 PM...</p>
                                            <p className='py-4  px-1.5 text-center '></p>
                                            <p className='py-4  px-1.5 text-center '>83.3</p>
                                            <p className='py-4  px-1.5'></p>
                                            <p className='py-4  px-1.5'></p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center col-span-2'>12 PM</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5'>7 AM...</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5'>7 AM...</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '></p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5 text-center '>83.3</p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5'></p>
                                            <p className='py-4 bg-[#f5f7fa] px-1.5'></p>
                                        </div>
                                        <div className=" border rounded-md grid grid-cols-5">
                                            <p className='border-r py-4 px-1.5 font-medium text-center flex items-center justify-center'></p>
                                            <p className='border-r col-span-4 py-4 px-1.5 font-medium text-center flex items-center justify-center border-b' >KELUAR (ml)</p>
                                            <p className=' py-4 px-1.5 font-medium text-center flex items-center justify-center'>&nbsp;</p>
                                            <p className='border-x row-span-2 py-4 px-1.5 font-medium text-center flex items-center justify-center'>CBD</p>
                                            <p className='border-r row-span-2 py-4 px-1.5 font-medium text-center flex items-center justify-center'>Munt..</p>
                                            <p className='border-r row-span-2 py-4 px-1.5 font-medium text-center flex items-center justify-center'>N/T</p>
                                            <p className='border-r row-span-2 py-4 px-1.5 font-medium text-center flex items-center justify-center'>Lain-Lain</p>
                                            <p className='border-t  py-4 px-1.5 font-medium text-center flex items-center justify-center'>Masa</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5  text-center flex items-center justify-center '>200 cc</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5  text-center flex items-center justify-center '>Heam..</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>O/PU</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>200 cc</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>40 cc</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t py-4 px-1.5  text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                            <p className='border-t bg-[#f5f7fa] py-4 px-1.5 font-medium text-center flex items-center justify-center '>&nbsp;</p>
                                        </div>
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

export default RekodPopup