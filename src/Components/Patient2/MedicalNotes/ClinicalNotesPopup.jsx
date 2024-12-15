import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import ClinicalNotes from "../../../assets/ClinicalNotes.svg"
import receipt from "../../../assets/receipt36.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../../Patient/Print'


const ClinicalNotesPopup = ({ setPopup1 }) => {

    const [previewDocument, setPreviewDocument] = useState(false)
    const [activetab, setActivetab] = useState(1)


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
                                        <div onClick={() => setActivetab(1)} className={`  border p-3 rounded-lg ${activetab == 1 && " bg-[#f7f8fa]"} cursor-pointer border-[#cfd1d4]`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div onClick={() => setActivetab(2)} className={`  border p-3 rounded-lg ${activetab == 2 && " bg-[#f7f8fa]"} cursor-pointer border-[#cfd1d4]`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div onClick={() => setActivetab(3)} className={`  border p-3 rounded-lg ${activetab == 3 && " bg-[#f7f8fa]"} cursor-pointer border-[#cfd1d4]`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} max-h-[75vh] pr-2 overflow-auto w-full`}>
                            <div className="border p-3 rounded-lg  border-[#cfd1d4]">
                                <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-1 text-sm grid gap4`}>
                                    <div className="grid-cols-2 grid space-y-1">
                                        <p className=''> Name</p>
                                        <p className='font-semibold'>: Norartin Binti Sulong (Mokhtar)</p>
                                        <p className=''>Date</p>
                                        <p className='font-semibold'>: 6/9/2024 </p>
                                        <p className=''>Height</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Weight</p>
                                        <p className='font-semibold'>: 87.5 Kg </p>
                                    </div>
                                    <div className="grid-cols-2 grid space-y-1">
                                        <p className=''>BP</p>
                                        <p className='font-semibold'>: 103/52 mmHg</p>
                                        <p className=''>PR (Pulse Rate)</p>
                                        <p className='font-semibold'>: 75 bpm</p>
                                        <p className=''>D/Stick (Glucose)</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>BMI</p>
                                        <p className='font-semibold'>: - </p>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto mt-4 border-[#cfd1d4] border rounded-lg overflow-hidden">
                                {
                                    activetab == 1 && (
                                        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
                                            <thead className=" text-[#1D1D1D] font-medium uppercase">
                                                <tr>
                                                    <th className="border border-gray-200 p-4 font-medium">Tarikh & Masa</th>
                                                    <th className="border border-gray-200 p-4 font-medium">Nota (Tandatangan dan nama DR / SN dengan</th>
                                                    <th className="border border-gray-200 p-4 font-medium">Klinik / Wad</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        Suggest FNA
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-6"></td>
                                                    <td className="border border-gray-200 p-6"></td>
                                                    <td className="border border-gray-200 p-6"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">TSH: 0.38</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">T4/T3     16 / 6.0</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">A1C: 5 -7  FBS: 5.0</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">LDL: 4.390</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        P/
                                                        <ul className='space-y-1 pl-5 list-disc'>
                                                            <li> FNA tiroid untuk TI-RADS 3 & 4</li>
                                                            <li> Did Sex</li>
                                                            <li> TNA 3/7</li>
                                                        </ul>
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4">14/5/24</td>
                                                    <td className="border border-gray-200 p-4">
                                                        Well
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    )
                                }
                                {
                                    activetab == 2 && (
                                        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
                                            <thead className=" text-[#1D1D1D] font-medium uppercase">
                                                <tr>
                                                    <th className="border border-gray-200 p-4 font-medium">Tarikh & Masa</th>
                                                    <th className="border border-gray-200 p-4 font-medium">Nota (Tandatangan dan nama DR / SN dengan</th>
                                                    <th className="border border-gray-200 p-4 font-medium">Klinik / Wad</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className="">
                                                    <td className="border border-gray-200 p-4">4/8/23</td>
                                                    <td className="border border-gray-200 p-4">37/M/Q</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-6"></td>
                                                    <td className="border border-gray-200 p-6"></td>
                                                    <td className="border border-gray-200 p-6"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">Ttx hyper efo (in remission)</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">Doctor sx: Concerned abt the pattern.</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">BP:  103/45 mmHg</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">PR: 87 bpm</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">Weight: 67,4Kg</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        Mainly 4 bands - euthyroid
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        TSH: 0.45
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        T4/T3:    15.6 / 6.4
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        P/
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    )
                                }
                                {
                                    activetab == 3 && (
                                        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
                                            <thead className=" text-[#1D1D1D] font-medium uppercase">
                                                <tr>
                                                    <th className="border border-gray-200 p-4 font-medium">Tarikh & Masa</th>
                                                    <th className="border border-gray-200 p-4 font-medium">Nota (Tandatangan dan nama DR / SN dengan</th>
                                                    <th className="border border-gray-200 p-4 font-medium">Klinik / Wad</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className="">
                                                    <td className="border border-gray-200 p-4">17/11/22</td>
                                                    <td className="border border-gray-200 p-4">37M/G2 @ 36/52.</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-6"></td>
                                                    <td className="border border-gray-200 p-6"></td>
                                                    <td className="border border-gray-200 p-6"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">No hypertensive & fit @ F/U OG.</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">Not on any fx.</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">Atyp: PAL antenatal uneventful.</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">Baby is fine & good.</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">Seen</td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        PMH
                                                        - GDM at 20/52 - on diet control.
                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                                <tr className="bg-zinc-50">
                                                    <td className="border border-gray-200 p-4"></td>
                                                    <td className="border border-gray-200 p-4">
                                                        Zid rupa good

                                                    </td>
                                                    <td className="border border-gray-200 p-4"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )
                                }
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