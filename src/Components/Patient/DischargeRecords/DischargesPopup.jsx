import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt13.png"
import Discharges from "../../../assets/Discharges.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const DischargesPopup = ({ setPopup1 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup1(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={Discharges} alt="" />
                        <h2 className='text-lg font-semibold'>Discharges</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Discharge</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Discharge</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Discharge</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>Pusat Pakar UKM</h3>
                                <div className="">
                                    <div className="mx-auto bg-white rounded-lg">
                                        {/* Patient Info Section */}
                                        <div className="grid p-3 rounded-lg mt-4 grid-cols-2 gap-4 bg-[#f7f8fa] border pb-4 mb-4">
                                            <div>
                                                <p className='pt-0.5'>
                                                    <span className="font-bold ">Patient Name:</span> Lorem Ipsum
                                                </p>
                                                <p className='pt-0.5'>
                                                    <span className="font-bold ">No. KP:</span> 12345678910
                                                </p>
                                                <p className='pt-0.5'>
                                                    <span className="font-bold ">Jantina:</span> 11122233334
                                                </p>
                                            </div>
                                            <div>
                                                <p className='pt-0.5'>
                                                    <span className="font-bold ">T/Lahir:</span> 18/11/1990
                                                </p>
                                                <p className='pt-0.5'>
                                                    <span className="font-bold ">Alamat:</span> No. 0, Jalan Jalan Besar
                                                </p>
                                                <p className='pt-0.5'>
                                                    <span className="font-bold ">No. Tel:</span> 0213456789
                                                </p>
                                            </div>
                                        </div>

                                        {/* Table Section */}
                                        <div className="overflow-x-auto rounded-l overflow-hidden">
                                            <table className="table-auto w-full text-sm text-left border border-gray-300">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="px-4 py-2 border">Masuk Wad</th>
                                                        <th className="px-4 py-2 border"></th>
                                                        <th className="px-4 py-2 border">Discaj Wad</th>
                                                        <th className="px-4 py-2 border"></th>
                                                        <th className="px-4 py-2 border">Tarikh T/J</th>
                                                        <th className="px-4 py-2 border"></th>
                                                        <th className="px-4 py-2 border">NRP</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="px-4 py-2 border">Jenis</td>
                                                        <td className="px-4 py-2 border"></td>
                                                        <td className="px-4 py-2 border">Jenis</td>
                                                        <td className="px-4 py-2 border"></td>
                                                        <td className="px-4 py-2 border">Klinik</td>
                                                        <td className="px-4 py-2 border"></td>
                                                        <td className="px-4 py-2 border">Terima</td>
                                                        <td className="px-4 py-2 border"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 border">Jenis</td>
                                                        <td className="px-4 py-2 border"></td>
                                                        <td className="px-4 py-2 border">Jenis</td>
                                                        <td className="px-4 py-2 border"></td>
                                                        <td className="px-4 py-2 border">Klinik</td>
                                                        <td className="px-4 py-2 border"></td>
                                                        <td className="px-4 py-2 border">Terima</td>
                                                        <td className="px-4 py-2 border"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Summary Section */}
                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold mb-2">Ringkasan Discaj</h3>
                                            <table className="table-auto w-full text-sm text-left border border-gray-300">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="px-4 py-2 border">Provisional Diagnosis</th>
                                                        <th className="px-4 py-2 border">Kegunaan Jabatan Maklumat Kesihatan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="px-4 py-2 border">Lorem Ipsum</td>
                                                        <td className="px-4 py-2 border">None</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 border">Principal Diagnosis</td>
                                                        <td className="px-4 py-2 border">None</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 border">Additional Diagnosis</td>
                                                        <td className="px-4 py-2 border">None</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 border">Operative Procedure</td>
                                                        <td className="px-4 py-2 border">None</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 border">Brief history and physical findings</td>
                                                        <td className="px-4 py-2 border">None</td>
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

export default DischargesPopup