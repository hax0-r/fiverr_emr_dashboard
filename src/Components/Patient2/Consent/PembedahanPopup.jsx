import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import pdf from "../../../assets/pdf.svg"
import receipt from "../../../assets/receipt16.png"
import pdfFile from "../../../assets/pdfFile.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const PembedahanPopup = ({ setPopup2 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup2(false)
        }, 500)
    }

    const acknowledgements = [
        {
            id: 1,
            text: "Saya mengaku bahawa saya telah menerima penjelasan yang mencukupi mengenai prosedur dan memahami risiko prosedur yang di cadangkan.",
            status: "Ya",
        },
        {
            id: 2,
            text: "Saya memahami bahawa prosedur ini akan dilakukan oleh mana-mana pegawai perubatan yang mempunyai pengalaman dan kelayakan yang bersesuaian.",
            status: "Ya",
        },
        {
            id: 3,
            text: "Saya telah dimaklumkan tentang prosedur tambahan yang mungkin menjadi keperluan dan perlu dijalankan semasa prosedur dilakukan.",
            status: "Ya",
        },
        {
            id: 4,
            text: "Saya memahami bahawa apa-apa prosedur tambahan yang tidak dinyatakan di dalam borang ini hanya akan dijalankan jika terdapat keperluan yang mendesak dan prosedur tersebut perlu dilakukan untuk menyelamatkan nyawa saya/anak/pesakit.",
            status: "Ya",
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
                                <div className="flex items-center justify-between">
                                    <h2 className='text-secondary font-semibold'>Borang Keizinan Prosedur dan Pembedahan Pusat Pakar UKM</h2>
                                    <p className='text-[#6E6E6E]'>Test Date</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className='text-[#6E6E6E] text-sm'>X-Ray</p>
                                    <h2 className='font-semibold text-[#1D1D1D]'>27 Feb 2024</h2>
                                </div>

                                {/* <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>CECT ABDOMEN PELVIS</h3> */}


                                <div className="mx-auto border text-sm mt-4 rounded-lg p-3">
                                    <ul className='space-y-1'>
                                        <li className='mb-2 font-semibold'>Maklumat Pesakit</li>
                                        <li> Nama Pesakit / Patient’s Name : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> No Kad Pengenalan / I.C No : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Jantina / Gender : <span className='font-semibold'>07/10/1978</span></li>
                                    </ul>
                                </div>
                                <div className="mx-auto border text-sm mt-3 rounded-lg p-3">
                                    <ul className='space-y-1'>
                                        <li className='mb-2 font-semibold'>Maklumat Prosedur</li>
                                        <li> Nama Prosedur : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Tarikh Prosedur : <span className='font-semibold'>Lorem Ipsum</span></li>
                                    </ul>
                                </div>
                                <div className="mx-auto border text-sm mt-3 rounded-lg p-3">
                                    <p className=' font-semibold'>Pengakuan Prosedur oleh : Pesakit</p>
                                </div>


                                <div className=" mt-3 rounded-lg overflow-hidden border border-gray-300">
                                    <table className="w-full border-collapse  text-left">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-r border-gray-300 p-4 font-medium text-[#1D1D1D]">Pengakuan</th>
                                                <th className="border-b border-gray-300 p-4 font-medium text-[#1D1D1D] text-center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {acknowledgements.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50">
                                                    <td className="border-b border-gray-300 p-3 text-[#1D1D1D] border-r bg-[#F5F7FA]">{item.text}</td>
                                                    <td className="border-b border-gray-300 p-3 text-center text-[#1D1D1D]">{item.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default PembedahanPopup