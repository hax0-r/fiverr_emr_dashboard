import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import Senarai from "../../../assets/Senarai.svg"
import receipt from "../../../assets/receipt7.png"
import receipt47 from "../../../assets/receipt47.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'


const PostPopup = ({ setPopup4 }) => {


    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup4(false)
        }, 500)
    }
    const [currentPage, setCurrentPage] = useState(1);


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
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>SUNGKE922</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>SUNGKE922</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>SUNGKE922</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[65vh] overflow-auto">
                                <div className="">
                                    <div className={`grid grid-cols-1 items-start ${previewDocument ? "grid-cols-1" : "grid-cols-2"} gap-3 mb-8`}>
                                        <div className="border text-sm gap-y-1 grid grid-cols-4 rounded-lg bg-[#f7f8fa] p-4">
                                            <h2 className="font-semibold text-lg mb-4 col-span-4">Post Operative Nursing Record</h2>
                                            <p>Patient transferred to recovery / others</p>
                                            <p className='font-semibold'> : -</p>
                                            <p>Received by</p>
                                            <p className='font-semibold'> : SNDO</p>
                                            <p>Accompanied by</p>
                                            <p className='font-semibold'> : SN TMA</p>
                                            <p>Time</p>
                                            <p className='font-semibold'> : 4 PM</p>
                                            <p>Date</p>
                                            <p className='font-semibold'> : 18/8/23</p>
                                            <p>Discharged by</p>
                                            <p className='font-semibold'> : Snwal</p>
                                            <p>Checked by</p>
                                            <p className='font-semibold'> : Al-Khwarizmi</p>
                                            <p className='font-semibold col-span-2'></p>
                                            <p className='font-semibold col-span-2'> Time called</p>
                                            <p className='font-semibold col-span-2'> Last vital sign checked</p>
                                            <p>1 st</p>
                                            <p className='font-semibold'> : 4.45 PM</p>
                                            <p>Time</p>
                                            <p className='font-semibold'> : 5 PM</p>
                                            <p>Name</p>
                                            <p className='font-semibold'> : -</p>
                                            <p> B/p</p>
                                            <p className='font-semibold'> : 145/77</p>
                                            <p> 2 nd</p>
                                            <p className='font-semibold'> : 5.15 PM</p>
                                            <p> Pulse</p>
                                            <p className='font-semibold'> : 56 bpm</p>
                                            <p> Name</p>
                                            <p className='font-semibold'> : -</p>
                                            <p> Spo2</p>
                                            <p className='font-semibold'> : 97%</p>
                                        </div>
                                        <div className="h-full border  rounded-lg bg-[#f7f8fa]">

                                            <div className="text-sm gap-y-1 items-start grid grid-cols-4 p-4">
                                                <h2 className="font-semibold text-lg mb-4 col-span-4">Patient Transfer Out Record</h2>
                                                <p>Date</p>
                                                <p className='font-semibold'> : 18/8/23</p>
                                                <p></p>
                                                <p></p>
                                                <p>Time</p>
                                                <p className='font-semibold'> : 5.30 PM</p>
                                                <p></p>
                                                <p></p>
                                                <p>Passed over by</p>
                                                <p className='font-semibold'> : 5.30 PM</p>
                                                <p></p>
                                                <p></p>
                                                <p>Take over by</p>
                                                <p className='font-semibold'> : N Iman</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Assessment Table */}
                                    <div className="bg-white border rounded-lg overflow-hidden p-3">
                                        <h2 className="font-semibold text-center text-lg mb-4">ASSESSMENT</h2>
                                        <table className="table-auto w-full border-collapse">
                                            <thead>
                                                <tr className=" text-left border ">
                                                    <th className="p-4  font-medium">RECOVERY</th>
                                                    <th className="p-4  font-medium">COMMENT</th>
                                                    <th className="p-4  font-medium">RECEPTION</th>
                                                    <th className="p-4  font-medium">COMMENT</th>
                                                </tr>
                                            </thead>
                                            {
                                                currentPage == 1 ? (
                                                    <tbody>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 font-medium" colSpan={2}>GENERAL CONDITION</td>
                                                            <td className="p-4 font-medium" colSpan={2}>GENERAL CONDITION</td>
                                                        </tr>
                                                        <tr className="border ">
                                                            <td className="p-4 flex items-center justify-between">Conscious <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Conscious <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 flex items-center justify-between">Unconscious <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Unconscious <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border ">
                                                            <td className="p-4 flex items-center justify-between">Others <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Others <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 font-medium" colSpan={2}>BREATHING</td>
                                                            <td className="p-4 font-medium" colSpan={2}>BREATHING</td>
                                                        </tr>
                                                        <tr className="border ">
                                                            <td className="p-4 flex items-center justify-between">Spontaneously <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Spontaneously <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 flex items-center justify-between">Intubated <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Intubated <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                    </tbody>
                                                ) : (
                                                    <tbody>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 font-medium" colSpan={2}>LINES</td>
                                                            <td className="p-4 font-medium" colSpan={2}>LINES</td>
                                                        </tr>
                                                        <tr className="border ">
                                                            <td className="p-4 flex items-center justify-between">Arterial <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Arterial <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 flex items-center justify-between">Peripheral <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Peripheral <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border ">
                                                            <td className="p-4 flex items-center justify-between">Others <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Others <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 font-medium" colSpan={2}>DOCUMENT / ITEM</td>
                                                            <td className="p-4 font-medium" colSpan={2}>DOCUMENT / ITEM</td>
                                                        </tr>
                                                        <tr className="border ">
                                                            <td className="p-4 flex items-center justify-between">BHT <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">BHT <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 flex items-center justify-between">Post OP notes <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Post OP notes <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border">
                                                            <td className="p-4 flex items-center justify-between">GA form <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">GA form <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 flex items-center justify-between">Swab count form <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Swab count form <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border">
                                                            <td className="p-4 flex items-center justify-between">Specimen <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Specimen <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 flex items-center justify-between">X-Ray / Pieces <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">X-Ray / Pieces <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border">
                                                            <td className="p-4 flex items-center justify-between">Blood <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Blood <input type="checkbox" disabled checked className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border bg-[#f5f7fa]">
                                                            <td className="p-4 flex items-center justify-between">Others <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4"></td>
                                                            <td className="p-4 flex items-center justify-between">Others <input type="checkbox" disabled className='w-8 h-5 rounded-lg' /></td>
                                                            <td className="p-4 "></td>
                                                        </tr>
                                                        <tr className="border">
                                                            <td className="p-4 font-medium" colSpan={2}>DRAINAGE</td>
                                                            <td className="p-4 font-medium" colSpan={2}>DRAINAGE</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            }
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div className={`flex items-center text-[#1d1d1d] ${previewDocument ? "justify-end" :"justify-between"} mt-4`}>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setCurrentPage(1)}
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &lt;
                                    </button>
                                    <button onClick={() => setCurrentPage(1)}
                                        className={`px-3.5 py-1 ${currentPage == 1 ? " bg-primary text-white" : "border-2"}  rounded-lg`}
                                    >
                                        1
                                    </button>
                                    <button onClick={() => setCurrentPage(2)}
                                        className={`px-3 py-1 ${currentPage == 2 ? " bg-primary text-white" : "border-2"}  rounded-lg`}
                                    >
                                        2
                                    </button>
                                    <button onClick={() => setCurrentPage(2)}
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &gt;
                                    </button>
                                </div>
                                {
                                    !previewDocument && (
                                        <div className="flex gap-2 items-center justify-end">
                                            <button onClick={() => setPreviewDocument(true)} className='pl-4 border-[#cfd1d4] border-2 pr-5 py-2.5 flex items-center gap-2 rounded-lg text-[#1D1D1D] font-medium'><AiOutlineSearch className='text-xl' />
                                                Preview Document</button>
                                            <button className='bg-primary pr-5 pl-4 py-3 rounded-lg text-white font-medium flex items-center gap-2' ><PiPrinterBold className='text-lg' />
                                                Print Result</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {
                            previewDocument && (
                                <Print receipt={currentPage == 1 ? receipt : receipt47} />
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostPopup