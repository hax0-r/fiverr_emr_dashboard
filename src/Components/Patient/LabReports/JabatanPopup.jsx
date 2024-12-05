import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import JabatanPerkhidmatan from "../../../assets/Jabatan.svg"
import receipt from "../../../assets/receipt30.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const JabatanPopup = ({ setPopup7 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("Haematologi Rutin")

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup7(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={JabatanPerkhidmatan} alt="" />
                        <h2 className='text-lg font-semibold'>Jabatan Perkhidmatan</h2>
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
                                        <div onClick={() => setActiveTab("Haematologi Rutin")} className={`${activeTab == "Haematologi Rutin" && "bg-zinc-100"} border p-3 rounded-lg border-[#cfd1d4] w-full`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Haematologi Rutin</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Haematologi Rutin</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div onClick={() => setActiveTab("Unit Patologi Kimia")} className={`${activeTab == "Unit Patologi Kimia" && "bg-zinc-100"} border p-3 rounded-lg border-[#cfd1d4] w-full`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Unit Patologi Kimia</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Haematologi Rutin</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div onClick={() => setActiveTab("Hispatologi")} className={`${activeTab == "Hispatologi" && "bg-zinc-100"} border p-3 rounded-lg border-[#cfd1d4] w-full`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Hispatologi</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Haematologi Rutin</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border text-sm p-3 font-medium max-h-[70vh] text-[#1D1D1D] overflow-y-auto rounded-lg border-[#cfd1d4]">

                                {
                                    activeTab == "Haematologi Rutin" && (
                                        <div className="">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="border p-3 rounded-lg border-[#CFD1D4] pb-20"></div>
                                                <div className="border p-3 rounded-lg border-[#CFD1D4] pb-20">
                                                    <p >NO MAKMAL</p>
                                                </div>
                                                <div className="border p-3 rounded-lg border-[#CFD1D4] pb-24 col-span-2">
                                                    <p>Diagnosa</p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center items-center">
                                                <div className="w-full bg-white rounded-lg border mt-4">
                                                    <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                        {/* Table Header */}
                                                        <thead className=" border-b">
                                                            <tr>
                                                                <th className="px-4 py-2.5 text-left font-medium">KOD</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">IMMUNOASSAY</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">KOD</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">UJIAN</th>
                                                            </tr>
                                                        </thead>

                                                        {/* Table Body */}
                                                        <tbody>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">1</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">4.4</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>


                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5">2</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">1.43</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">3</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">2.7</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>


                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5">4</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">0.6</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className='bg-[#f5f7fa]'>
                                                                <td className="px-4 py-2.5">5</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">3.1</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className="border-b ">
                                                                <td className="px-4 py-2.5">6</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">2.7</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>


                                                            </tr>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">7</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">0.6</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className=''>
                                                                <td className="px-4 py-2.5">8</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">3.1</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    activeTab == "Unit Patologi Kimia" && (
                                        <div className="">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="border p-3 rounded-lg border-[#CFD1D4] pb-20"></div>
                                                <div className="border p-3 rounded-lg border-[#CFD1D4] pb-20">
                                                    <p >NO MAKMAL</p>
                                                </div>
                                                <div className="border p-3 rounded-lg border-[#CFD1D4] pb-4">
                                                    <p>Doctors Name Clinic stamp</p>
                                                    <input type="checkbox" className='mt-3 mr-2' />
                                                    <label htmlFor="">Lorem</label> <br />
                                                    <input type="checkbox" className='mt-1 mr-2' />
                                                    <label htmlFor="">Lorem</label> <br />
                                                    <input type="checkbox" className='mt-1 mr-2' />
                                                    <label htmlFor="">Lorem</label> <br />
                                                </div>
                                                <div className="border p-3 rounded-lg border-[#CFD1D4] pb-4">
                                                    <input type="checkbox" className='mt-3 mr-2' />
                                                    <label htmlFor="">Lorem</label> <br />
                                                    <input type="checkbox" className='mt-1 mr-2' />
                                                    <label htmlFor="">Lorem</label> <br />
                                                    <input type="checkbox" className='mt-1 mr-2' />
                                                    <label htmlFor="">Lorem</label> <br />
                                                </div>
                                            </div>
                                            <div className="border mt-3 p-3 font-medium rounded-lg border-[#CFD1D4] pb-4">
                                                <p>Other Relevan Information</p>
                                                <p>Sembarang Suntikan Bionitics</p>
                                                <p>(Fe, Vit B co Tab/Injection)</p>
                                                <p>Lorem Ipsum</p>
                                            </div>
                                            <div className="border flex items-center gap-3 mt-3 p-3 font-medium rounded-lg border-[#CFD1D4] text-[#6E6E6E] pb-4">
                                                <p className='text-secondary'>Haematologi Rutin</p>
                                                <div className="h-5 border-r"></div>
                                                <p>Anemia Hemolitik</p>
                                                <div className="h-5 border-r"></div>
                                                <p>Aliran Sitometri</p>
                                            </div>

                                            <div className="flex justify-center items-center">
                                                <div className="w-full bg-white rounded-lg border mt-4">
                                                    <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                        {/* Table Header */}
                                                        <thead className=" border-b">
                                                            <tr>
                                                                <th className="px-4 py-2.5 text-left font-medium">KOD</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">IMMUNOASSAY</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">KOD</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">UJIAN</th>
                                                            </tr>
                                                        </thead>

                                                        {/* Table Body */}
                                                        <tbody>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">1</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">4.4</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>


                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5">2</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">1.43</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">3</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">2.7</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>


                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5">4</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">0.6</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className='bg-[#f5f7fa]'>
                                                                <td className="px-4 py-2.5">5</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">3.1</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className="border-b ">
                                                                <td className="px-4 py-2.5">6</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">2.7</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>


                                                            </tr>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">7</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">0.6</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                            <tr className=''>
                                                                <td className="px-4 py-2.5">8</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                                <td className="px-4 py-2.5">3.1</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"><input type="checkbox" className='mr-1' /> <label htmlFor="">APTT</label> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-4">

                                                    <select
                                                        className="border rounded p-2 text-sm"
                                                        readOnly
                                                    >
                                                        <option>10</option>
                                                    </select>
                                                    <span className="text-sm text-gray-600">
                                                        Show 1 of 10 data
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                                    >
                                                        &lt;
                                                    </button>
                                                    <button
                                                        className={`px-3.5 py-1 bg-primary text-white rounded`}
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
                                        </div>
                                    )
                                }

                                {
                                    activeTab == "Hispatologi" && (
                                        <div className="text-[#1D1D1D]">
                                            <h2 className='text-center text-xl font-semibold'>JABATAN PERKHIDMATAN KEJURUWATAN HOSPITAL CANSELOR TUANKU MUHRIZ</h2>
                                            <h2 className='text-center pt-1 text-xl font-semibold'>BUTIR IMPLANT PESAKIT DEWAN BEDAH</h2>

                                            <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-5 text-sm grid gap4`}>
                                                <div className="grid-cols-2 grid space-y-1">
                                                    <p className=''>Name</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>Address 1</p>
                                                    <p className='font-semibold'>: .......................................... </p>
                                                    <p className=''>Address 2</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>Name</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                </div>
                                                <div className="grid-cols-2 grid space-y-1">
                                                    <p className=''>Address 2</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>Name</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>Address 1</p>
                                                    <p className='font-semibold'>: .......................................... </p>
                                                </div>
                                            </div>

                                            <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap4`}>
                                                <div className="grid-cols-2 grid space-y-1">
                                                    <p className=''>BILIK BEDAH</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>KES PEMBEDAHAN</p>
                                                    <p className='font-semibold'>: .......................................... </p>
                                                    <p className=''>PROSEDUR PEMBEDAHAN</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>PAKAR BEDAH</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>1st AISSISTANT</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>2nd ASSISTANT</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                </div>
                                                <div className="grid-cols-2 grid space-y-1">
                                                    <p className=''>1st SCRUB NURSE</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>2nd SCRUB NURSE</p>
                                                    <p className='font-semibold'>: ..........................................</p>
                                                    <p className=''>CIRCULATING</p>
                                                    <p className='font-semibold'>: .......................................... </p>
                                                </div>
                                            </div>


                                            <div className="flex justify-center items-center">
                                                <div className="w-full bg-white rounded-lg border mt-4">
                                                    <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                        {/* Table Header */}
                                                        <thead className=" border-b">
                                                            <tr>
                                                                <th className="px-4 py-2.5 text-left font-medium">Bil</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Jenis Implant</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Kuantiti</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Sistem</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Catatan</th>
                                                            </tr>
                                                        </thead>

                                                        {/* Table Body */}
                                                        <tbody>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">1</td>
                                                                <td className="px-4 py-2.5 ">Loop Tump Small</td>
                                                                <td className="px-4 py-2.5">Xl</td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"> </td>
                                                                <td className="px-4 py-2.5">mIU/L</td>


                                                            </tr>
                                                            <tr className="">
                                                                <td className="px-4 py-2.5"></td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"> </td>
                                                                <td className="px-4 py-2.5"></td>
                                                                <td className="px-4 py-2.5"></td>
                                                                <td className="px-4 py-2.5 text-[#BDBEBF]"> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>


                                        </div>
                                    )}

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

export default JabatanPopup