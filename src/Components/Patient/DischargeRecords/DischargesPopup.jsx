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
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[65vh] overflow-auto">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>Pusat Pakar UKM</h3>
                                <div className="mx-auto bg-white rounded-lg">
                                    <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] bg-[#f7f8fa] mt-3 text-sm grid gap-x-4`}>
                                        <div className="grid-cols-2 grid space-y-1">
                                            <p className=''>Patient Name</p>
                                            <p className='font-semibold'>: Chia Suwe Kiea</p>
                                            <p className=''>Jantina</p>
                                            <p className='font-semibold'>:  Male </p>
                                            <p className=''>Alamat</p>
                                            <p className='font-semibold'>: Jalan Besar</p>
                                            <p className=''>Poskod</p>
                                            <p className='font-semibold'>: 50400</p>
                                        </div>
                                        <div className="grid-cols-2 grid space-y-1">
                                            <p className=''>Bangsa</p>
                                            <p className='font-semibold'>: Melayu</p>
                                            <p className=''>Bandar</p>
                                            <p className='font-semibold'>: Kuala Lumpur</p>
                                        </div>
                                        <div className="grid-cols-2 grid space-y-1">
                                            <p className=''>NO K/P  </p>
                                            <p className='font-semibold'>: 12345678910</p>
                                            <p className=''>T/LAHIR</p>
                                            <p className='font-semibold'>: 18/11/1990</p>
                                            <p className=''>NO. TEL</p>
                                            <p className='font-semibold'>: 0213456789</p>
                                            <p className=''>Negeri</p>
                                            <p className='font-semibold'>: Kuala Lumpur</p>
                                        </div>
                                    </div>

                                    {/* Table Section */}
                                    <div className="overflow-x-auto rounded-l mt-4 overflow-hidden">
                                        <table className="table-auto w-full text-sm text-left border border-gray-300">
                                            <tbody>
                                                <tr>
                                                    <td className="p-4 border">MASUK WAD</td>
                                                    <td className="p-4 text-xs text-blue-500 border">Kristal</td>
                                                    <td className="p-4 border">DISCAJ WAD</td>
                                                    <td className="p-4 border text-xs text-blue-500">Kristal</td>
                                                    <td className="p-4 border">TARIK T/J</td>
                                                    <td className="p-4 border"></td>
                                                    <td className="p-4 border">NRP</td>
                                                    <td className="p-4 border"></td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">JENIS</td>
                                                    <td className="p-4 border text-xs text-blue-500">Urology</td>
                                                    <td className="p-4 border">JENIS</td>
                                                    <td className="p-4 border text-xs text-blue-500">Urology</td>
                                                    <td className="p-4 border">KLINIK</td>
                                                    <td className="p-4 border"></td>
                                                    <td className="p-4 border">TERIMA</td>
                                                    <td className="p-4 border"></td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">TARIKH</td>
                                                    <td className="p-4 border text-xs text-blue-500">04/11/22</td>
                                                    <td className="p-4 border">TARIKH</td>
                                                    <td className="p-4 border text-xs text-blue-500">04/11/22</td>
                                                    <td className="p-4 border">KHID/DOCTOR</td>
                                                    <td className="p-4 border"></td>
                                                    <td className="p-4 border">T.T</td>
                                                    <td className="p-4 border"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Summary Section */}
                                    <div className="mt-4 rounded-lg overflow-hidden">
                                        <table className="table-auto w-full text-left border border-gray-300">
                                            <thead className="">
                                                <tr>
                                                    <th className="p-4 border bg-[#f5f7fa]"></th>
                                                    <th className="p-4 border font-semibold">Ringkasan Discaj</th>
                                                    <th className="p-4 border font-semibold">Kegunaan Jabatan Maklumat Kesihatan</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-4 border bg-[#f5f7fa]">Provisional Diagnosis</td>
                                                    <td className="p-4 border font-medium">RT kidney tumor</td>
                                                    <td className="p-4 border font-medium">None</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border bg-[#f5f7fa]">Provisional Diagnosis</td>
                                                    <td className="p-4 border font-medium">Bladder cancer</td>
                                                    <td className="p-4 border font-medium">None</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border bg-[#f5f7fa]">Additional Diagnosis</td>
                                                    <td className="p-4 border font-medium ">LT kidney stone</td>
                                                    <td className="p-4 border font-medium">None</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border bg-[#f5f7fa]">Operative Procedure</td>
                                                    <td className="p-4 border font-medium">-</td>
                                                    <td className="p-4 border font-medium">None</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border bg-[#f5f7fa]">&nbsp;</td>
                                                    <td className="p-4 border font-medium"></td>
                                                    <td className="p-4 border font-medium"></td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border bg-[#f5f7fa]">Brief History and Essential Physical Findings</td>
                                                    <td className="p-4 border font-medium">-</td>
                                                    <td className="p-4 border font-medium">None</td>
                                                </tr>
                                            </tbody>
                                        </table>
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