import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import img from "../../../assets/ConsentforAnaesthesia.svg"
import receipt from "../../../assets/receipt2.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'
import { RiImage2Line } from 'react-icons/ri'

const ConsentPopup = ({ setPopup4 }) => {


    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup4(false)
        }, 500)
    }
    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={img} alt="" />
                        <h2 className='text-lg font-semibold'>Kertas Anestesia</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Kertas Anestesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Kertas Anestesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Kertas Anestesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>

                            <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Kertas Anestesia</h3>
                                <p className='text-primary text-sm font-medium inline-flex mt-1 items-center gap-2 border border-primary rounded-lg py-1.5 px-2'><RiImage2Line className='text-lg' /> Attachment - Investigation Image <PiArrowsOutSimpleBold className='text-lg' /> </p>
                                <div className="max-w-5xl mt-4 mx-auto p-4 bg-gray-50 border border-gray-200 rounded-md text-sm">
                                    {/* DIAGNOSIS Section */}
                                    <div className="mb-4">
                                        <h2 className="font-bold uppercase mb-2">Diagnosis</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p>Pra-pembedahan : <span>Bladder Ca</span></p>
                                                <p>Pos-Pembedahan : <span>-</span></p>
                                                <p>Pembedahan</p>
                                                <p>Rancangan : <span>-</span></p>
                                                <p>Terbuat : <span>-</span></p>
                                                <p>Ahli Anestesia : <span>Dr Isk</span></p>
                                                <p>Surgeon : <span>Prof Faw</span></p>
                                            </div>
                                            <div>
                                                <p>Tarikh : <span>18/8/23</span></p>
                                                <p>
                                                    Pembedahan :
                                                    <label className="ml-2"><input type="checkbox" /> Pilihan</label>
                                                    <label className="ml-2"><input type="checkbox" checked /> Kecemasan</label>
                                                </p>
                                                <p>
                                                    Pemberian anestesia di :
                                                    <label className="ml-2"><input type="checkbox" checked /> Dewan bedah</label>
                                                    <label className="ml-2"><input type="checkbox" /> Dewan obat</label>
                                                </p>
                                                <p>
                                                    <label className="ml-2"><input type="checkbox" /> K&K (a&e)/Poliklinik/Wad</label>
                                                </p>
                                                <p>
                                                    Persetujuan :
                                                    <label className="ml-2"><input type="checkbox" checked /> Ya</label>
                                                    <label className="ml-2"><input type="checkbox" /> Tidak</label>
                                                    <label className="ml-2"><input type="checkbox" /> Menunggu</label>
                                                </p>
                                                <p>Berat Badan : <span>71 KG</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PENILAIAN PRA-ANESTESIA Section */}
                                    <div className="mb-4">
                                        <h2 className="font-bold uppercase mb-2">Penilaian Pra-Anestesia</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p>Maklumat umum : <span>67 / ♂</span></p>
                                                <p>Sejarah Pengubatan : <span>MKM1 MKDA</span></p>
                                                <p>Sejarah Pembedahan : <span>H/O Potrol nopbmet July 2022</span></p>
                                            </div>
                                            <div>
                                                <p>Sejarah Anestesia : <span>d&A ereuafal</span></p>
                                                <p>Sejarah Pengambilan Ubat : <span>CFS 4</span></p>
                                                <p>Sensitiviti Ubat : <span>M 7S 4</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PENEMUAN KLINIKAL Section */}
                                    <div className="mb-4">
                                        <h2 className="font-bold uppercase mb-2">Penemuan Klinikal</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p>Kepucatan :
                                                    <label className="ml-2"><input type="checkbox" /> Ya</label>
                                                    <label className="ml-2"><input type="checkbox" checked /> Tidak</label>
                                                </p>
                                                <p>Edema :
                                                    <label className="ml-2"><input type="checkbox" /> Ya</label>
                                                    <label className="ml-2"><input type="checkbox" checked /> Tidak</label>
                                                </p>
                                            </div>
                                            <div>
                                                <p>Sianosis :
                                                    <label className="ml-2"><input type="checkbox" /> Ya</label>
                                                    <label className="ml-2"><input type="checkbox" checked /> Tidak</label>
                                                </p>
                                                <p>Jandis :
                                                    <label className="ml-2"><input type="checkbox" /> Ya</label>
                                                    <label className="ml-2"><input type="checkbox" checked /> Tidak</label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SISTEM PERNAFASAN Section */}
                                    <div className="mb-4">
                                        <h2 className="font-bold uppercase mb-2">Sistem Pernafasan</h2>
                                        {/* Content not specified */}
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

export default ConsentPopup