import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import ClinicalNotes from "../../../assets/ClinicalNotes.svg"
import receipt from "../../../assets/receipt1.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'


const ClinicalNotesPopup = ({ setPopup1 }) => {

    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup1(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center transition-all duration-500 justify-center inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen transition-all duration-500 bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={ClinicalNotes} alt="" />
                        <h2 className='text-lg font-semibold'>Clinical Notes</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-medium text-[#1D1D1D]'>Catatan Kemajuan</h3>
                                <p className='text-sm pt-1 text-[#6E6E6E]'>Pada 14 November 2024, pesakit melaporkan peningkatan rasa dahaga dan keletihan ringan, dengan kadar glukosa puasa 160 mg/dL; penyesuaian dos insulin dicadangkan dan temu janji susulan dijadualkan dalam 4 minggu.</p>
                            </div>
                            <div className="overflow-x-auto mt-4 border-[#cfd1d4] border rounded-lg overflow-hidden">
                                <table className="w-full border-collapse border border-gray-200 text-sm text-left">
                                    <thead className="bg-gray-100 text-gray-700 uppercase">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-2">No</th>
                                            <th className="border border-gray-200 px-4 py-2">Tarikh & Masa</th>
                                            <th className="border border-gray-200 px-4 py-2">Nota (Tanda tangan)</th>
                                            <th className="border border-gray-200 px-4 py-2">Klinik / Wad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Row 1 */}
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-200 px-4 py-2"></td>
                                            <td className="border border-gray-200 px-4 py-2"></td>
                                            <td className="border border-gray-200 px-4 py-2">
                                                Plan
                                                <ul className="list-disc list-inside">
                                                    <li>T.Xadral Temp xc</li>
                                                    <li>see 21/12</li>
                                                </ul>
                                            </td>
                                            <td className="border border-gray-200 px-4 py-2"></td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2"></td>
                                            <td className="border border-gray-200 px-4 py-2"></td>
                                            <td className="border border-gray-200 px-4 py-2">
                                                09/11/2023
                                                <div>yg: (D) sedai rod pa</div>
                                                <div>& Also back pain</div>
                                                <ul className="list-disc list-inside">
                                                    <li>ready to the ypn</li>
                                                </ul>
                                            </td>
                                            <td className="border border-gray-200 px-4 py-2"></td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default ClinicalNotesPopup