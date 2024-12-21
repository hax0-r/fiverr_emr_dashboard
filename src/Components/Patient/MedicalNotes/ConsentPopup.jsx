import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import img from "../../../assets/KertasAnestesia.svg"
import receipt from "../../../assets/receipt2.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'
import { RiImage2Line } from 'react-icons/ri'
import { IoMaleSharp } from 'react-icons/io5'

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

                            <div className="max-h-[65vh] text-[#1D1D1D] overflow-auto">
                                <h3 className='font-semibold  text-xl'>Kertas Anestesia</h3>
                                <p className='text-primary text-sm font-medium inline-flex mt-1 items-center gap-2 border border-primary rounded-lg py-1.5 px-2'><RiImage2Line className='text-lg' /> Attachment - Investigation Image <PiArrowsOutSimpleBold className='text-lg' /> </p>
                                <div className=" mt-4 mx-auto p-3 border border-gray-200 rounded-md text-sm">
                                    {/* DIAGNOSIS Section */}
                                    <div className="mb-5 items-start border grid grid-cols-4 gap-y-3 p-3 rounded-lg border-[#cfd1d4]">
                                        <h2 className="uppercase text-[#6E6E6E] col-span-4 font-medium mb-2">Diagnosis</h2>
                                        <p>Pra-pembedahan</p>
                                        <p className='font-semibold'> : Bladder Ca</p>
                                        <p>Tarikh</p>
                                        <p className='font-semibold'> : 18/8/23</p>
                                        <p>Pos-Pembedahan</p>
                                        <p className='font-semibold'> : -</p>
                                        <p>Pembedahan</p>
                                        <div className="flex flex-wrap font-semibold items-center gap-1">
                                            :
                                            <input type="checkbox" disabled className='w-5 h-5' />
                                            Pilihan
                                            <input type="checkbox" checked disabled className='w-5 ml-3 h-5' />
                                            Kecemasan
                                        </div>
                                        <p className='text-[#6E6E6E] col-span-2 font-semibold'>Pembedahan</p>
                                        <p>Pemberian anestesia di</p>
                                        <div className="flex flex-wrap font-semibold items-center gap-1">
                                            :
                                            <input type="checkbox" disabled checked className='w-5 h-5' />
                                            Dewan bedah
                                            <input type="checkbox" disabled className='w-5 ml-3 h-5' />
                                            Dewan obat
                                            <input type="checkbox" disabled className='w-5 ml-3 h-5' />
                                            k&k (a&e)/Poliklinik/Wad
                                        </div>
                                        <p>Rancangan</p>
                                        <p className='font-semibold'> : -</p>
                                        <p>Persetujuan</p>
                                        <div className="flex flex-wrap font-semibold items-center gap-1">
                                            :
                                            <input type="checkbox" disabled checked className='w-5 h-5' />
                                            Ya
                                            <input type="checkbox" disabled className='w-5 ml-3 h-5' />
                                            Tidak
                                            <input type="checkbox" disabled className='w-5 ml-3 h-5' />
                                            k&Menunggu
                                        </div>
                                        <p>Terbuat</p>
                                        <p className='font-semibold'> : -</p>
                                        <p>Berat Badan</p>
                                        <p className='font-semibold'> : 71 KG</p>
                                        <p>Ahli Anestesia</p>
                                        <p className='font-semibold'> : Dr Isk</p>
                                        <p></p>
                                        <p></p>
                                        <p>Surgeon</p>
                                        <p className='font-semibold'> : Prof Faw</p>

                                    </div>

                                    {/* PENILAIAN PRA-ANESTESIA Section */}
                                    <div className="mb-5">
                                        <h2 className="uppercase text-sm text-[#6E6E6E] font-medium mb-3">Penilaian Pra-Anestesia</h2>
                                        <div className="grid grid-cols-6 gap-4">
                                            <p>Maklumat umum</p>
                                            <p className='font-semibold flex items-center gap-1'> : 67 / <IoMaleSharp />                                            </p>
                                            <p>Sejarah Pengubatan</p>
                                            <p className='font-semibold'> : d&A ereuafal</p>
                                            <p>Sensitiviti Ubat</p>
                                            <p className='font-semibold'> : M 7S  4</p>
                                            <p>Sejarah Pengubatan</p>
                                            <p className='font-semibold'> : MKM1 MKDA</p>
                                            <p>Sejarah Pengambilan Ubat</p>
                                            <p className='font-semibold'> : CFS 4</p>
                                            <p></p>
                                            <p className='font-semibold'> </p>
                                            <p>Sejarah Pembedahan</p>
                                            <p className='font-semibold'> H/O Potrol nopbmet July 2022</p>
                                        </div>
                                    </div>

                                    {/* PENEMUAN KLINIKAL Section */}
                                    <div className="mb-5 text-[#1d1d1d]">
                                        <div className="flex items-center justify-between pb-3">
                                            <h2 className="uppercase text-[#6E6E6E] font-medium">Penemuan Klinikal</h2>
                                            <p className='font-semibold'>Alert, R71 S4</p>
                                        </div>
                                        <div className="grid grid-cols-4 gap-y-1">
                                            <p>Kepucatan</p>
                                            <div className="flex flex-wrap font-semibold items-center gap-1">
                                                :
                                                <input type="checkbox" disabled className='w-5 h-5' />
                                                Ya
                                                <input type="checkbox" disabled checked className='w-5 ml-3 h-5' />
                                                Tidak
                                            </div>
                                            <p>Sianosis</p>
                                            <div className="flex flex-wrap font-semibold items-center gap-1">
                                                :
                                                <input type="checkbox" disabled className='w-5 h-5' />
                                                Ya
                                                <input type="checkbox" disabled checked className='w-5 ml-3 h-5' />
                                                Tidak
                                            </div>
                                            <p>Edema</p>
                                            <div className="flex flex-wrap font-semibold items-center gap-1">
                                                :
                                                <input type="checkbox" disabled className='w-5 h-5' />
                                                Ya
                                                <input type="checkbox" disabled checked className='w-5 ml-3 h-5' />
                                                Tidak
                                            </div>
                                            <p>Jandis</p>
                                            <div className="flex flex-wrap font-semibold items-center gap-1">
                                                :
                                                <input type="checkbox" disabled className='w-5 h-5' />
                                                Ya
                                                <input type="checkbox" disabled checked className='w-5 ml-3 h-5' />
                                                Tidak
                                            </div>
                                        </div>
                                    </div>

                                    {/* SISTEM PERNAFASAN Section */}
                                    <div className="mb-2">
                                        <h2 className=" uppercase text-[#6E6E6E] font-medium">PENYELIDIKAN</h2>

                                    </div>

                                    <div className={` text-[#1D1D1D] gap-y-1 gap-x-4 ${previewDocument ? " grid-cols-4" : "grid-cols-6"} text-sm grid `}>
                                        <p className=''>Hb</p>
                                        <p className='font-semibold'>: 13.8</p>
                                        <p className=''>IV </p>
                                        <p className='font-semibold'>: A4 (7w, 4.9) </p>
                                        <p className=''>CV</p>
                                        <p className='font-semibold'>: 68 mEg/L</p>
                                        <p className=''>Urea darah</p>
                                        <p className='font-semibold'>: 5.7 mg% (  ) </p>
                                        <p className=''>Gula darah</p>
                                        <p className='font-semibold'>: mg% (  )</p>
                                        <p className=''>Lain-lain</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Serum (Na+)</p>
                                        <p className='font-semibold'>: 188 </p>
                                        <p className=''>(K+)</p>
                                        <p className='font-semibold'>: 4.1 </p>
                                        <p></p>
                                        <p></p>
                                        <p className=''>UPH (LPH)</p>
                                        <p className='font-semibold'>: A/B 41 AL7 21 AS7 21 </p>
                                        <p className='col-span-4'>Sputum AFB+(BTA+) AFB+(BTA+) Isipadu SXD (CXR)............................................</p>
                                        <p className='col-span-2'>pa02      mv paCO2      tar PH      BE      mEq/L</p>
                                        <p className=''>EKG (ECG)</p>
                                        <p className='font-semibold'>: W&R, LAD </p>
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