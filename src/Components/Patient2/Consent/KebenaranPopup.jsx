import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import pdf from "../../../assets/pdf.svg"
import receipt from "../../../assets/receipt17.png"
import pdfFile from "../../../assets/pdfFile.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const KebenaranPopup = ({ setPopup3 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup3(false)
        }, 500)
    }

    const acknowledgements = [
        {
            id: 1,
            text: "Laporan Perubatan Biasa/Penguan/KWSP/SOSCO.",
            status: "",
        },
        {
            id: 2,
            text: "Laporan Pakar.",
            status: "",
        },
        {
            id: 3,
            text: "Laporan Insuran (sila sertakan bersama borang insuran).",
            status: "",
        },
        {
            id: 4,
            text: "Laporan Permohonan Dari Majikan/Polis/Tentara.",
            status: "",
        },
        {
            id: 5,
            text: "Lain-lain (sila ntakan).",
            status: "",
        },
    ];

    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={pdf} alt="" />
                        <h2 className='text-lg font-semibold'>Pemindahan Darah</h2>
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
                                        <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                                            <img src={pdfFile} alt="" />
                                            <div className="w-full">
                                                <h3 className='font-medium text-[#1D1D1D]'>Borang Keizinan</h3>
                                                <div className="flex items-center justify-between w-full">
                                                    <p className='text-sm pt-1 text-[#1d1d1d]'>Lorem Ipsum</p>
                                                    <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full `}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[70vh] overflow-y-scroll">

                                {/* <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>CECT ABDOMEN PELVIS</h3> */}


                                <div className="mx-auto border text-sm rounded-lg p-3">
                                    <p className=' font-semibold'>Pengakuan Prosedur oleh : Pesakit</p>
                                </div>
                                <div className="mx-auto border text-sm mt-3 rounded-lg p-3">
                                    <ul className='space-y-1 text-[#1D1D1D]'>
                                        <li className='mb-2 font-semibold'>Maklumat Pesakit</li>
                                        <li> Nama Penuh (seperti di dalam KP/Passport) : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Nombor MRN/Nombor Rekod Pesakit &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-semibold'> :-</span></li>
                                        <li className='flex items-center gap-8'> Wad/Bahagian : <div><input type="checkbox" /> <label htmlFor="">Sutera</label> &nbsp; &nbsp;<input type="checkbox" /> <label htmlFor="">Baldu</label>  &nbsp; &nbsp; <input type="checkbox" /> <label htmlFor="">Songket</label>  &nbsp; &nbsp; <input type="checkbox" /> <label htmlFor="">Klinik Pakar</label> </div></li>
                                        <li> Alamar surat menyurat  : <span className='font-semibold'>Lot 1B, Taman Madura, 4500 Sabat Bemom, Selangor</span></li>
                                    </ul>
                                </div>


                                <div className="rounded-lg overflow-hidden text-[#1D1D1D] text-sm border border-gray-300 p-3 mt-3">
                                    <h2 className='font-semibold mt-3 mb-1 text-sm'>Pengiystiharan</h2>
                                    <p className='text-sm'>Saya <u>Lorem Ipsum</u> , No KTP <u>N867921</u> dengan ini memberi kebenaran kepada Pusat Pakar UKM untuk menyediakan laporan berikut : </p>
                                    <div className="rounded-lg overflow-hidden border mt-3 border-gray-300">
                                        <table className="w-full border-collapse  text-left">
                                            <tbody>
                                                {acknowledgements.map((item) => (
                                                    <tr key={item.id} className="hover:bg-gray-50 text-sm">
                                                        <td className="border-b border-gray-300 p-3 text-[#1D1D1D] border-r bg-[#F5F7FA]"> {item.id}. {item.text}</td>
                                                        <td className="border-b border-gray-300 p-3 text-center text-[#1D1D1D]">
                                                            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <h2 className='font-semibold mt-3 mb-1 text-sm'>Atas</h2>
                                    <div className="flex items-center text-sm gap-2">
                                        <input type="checkbox" name="" id="" /> <label htmlFor="">Diri saya sendiri</label>
                                        <input type="checkbox" name="" id="" /> <label htmlFor="">Tanggungan/klien saya (sila nyatakan hubungan)</label>
                                    </div>
                                    <h2 className='font-semibold mt-3 mb-1 text-sm'>UNTUK KEGUNAAN</h2>
                                    <p className='text-sm'>Nama Syarikat atau individu : <span className='border-[#1D1D1D] border-b-2 '>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span></p>
                                    <p className='text-sm my-2'>Alamat Syarikat atau individu : <span className='border-[#1D1D1D] border-b-2 '>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span></p>
                                    <p>Dengan ini saya sertakan bersama bayaran tunai/cek (cek syarikat sahaja) atas nama UKM KESIHATAN SDN BHD yang berjumlah RM</p>
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

export default KebenaranPopup