import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import pdf from "../../../assets/pdf.svg"
import receipt from "../../../assets/receipt15.png"
import pdfFile from "../../../assets/pdfFile.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const DarahPopup = ({ setPopup1 }) => {
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
                                    <h2 className='text-secondary font-semibold'>Borang Keizinan Pemindahan Darah</h2>
                                    <p className='text-[#6E6E6E]'>Test Date</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className='text-[#6E6E6E] text-sm'>X-Ray</p>
                                    <h2 className='font-semibold text-[#1D1D1D]'>27 Feb 2024</h2>
                                </div>

                                {/* <h3 className='font-semibold text-[#1D1D1D] text-xl mt-3'>CECT ABDOMEN PELVIS</h3> */}


                                <div className="mx-auto border text-sm mt-4 rounded-lg p-4 flex gap-10">
                                    <ul className='space-y-1'>
                                        <li> Nama Pesakit / Patient’s Name : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> No Kad Pengenalan / I.C No : <span className='font-semibold'>Lorem Ipsum</span></li>
                                        <li> Jantina / Gender : <span className='font-semibold'>07/10/1978</span></li>
                                    </ul>
                                    <ul className='space-y-1'>
                                        <li> No Pendaftaraan : <span className='font-semibold'>64 / Lelaki</span></li>
                                        <li> No X-Ray : <span className='font-semibold'>1122</span></li>
                                        <li> Syarikat : <span className='font-semibold'>-</span></li>
                                    </ul>
                                </div>
                                <div className="mx-auto text-[#1D1D1D] border text-sm mt-4 rounded-lg p-4">
                                    <p>
                                        Saya, seperti nama tersebut  di atas  / ibu bapa / penjaga / suami / isteri / saudara /* <span className='border-[#1D1D1D] border-b-2 '>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span> kepada pesakit seperti nama di atas, telah dimaklumkan bahawa saya / pesakit memerlukan pemindahan darah atau komponen darah. Pengamal perubatan yang merawat telah memberi penjelasan kepada saya mengenai risiko dan kebaikan pemindahan darah. Saya faham dan sedar bahawa risiko jangkitan penyakit dan komplikasi pemindahan darah yang lain yang mungkin berlaku.* <br /><br />
                                        I, abovenamed / parent / guardian / spouse / next of kin / <span className='border-[#1D1D1D] border-b-2 '>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span> of the abovenamed, have been informed of the need for a blood transfusion to myself / the patient. The attending medical practitioner has explained to me the risk and benefits involved in the transfusion. I understand that there are risks of developing transfusion transmitted infections as well as other complications of transfusion.
                                    </p>
                                    <div className="grid grid-cols-2 gap-10 mt-6">
                                        <div className="">
                                            <span className='border-[#1D1D1D] mb-1 border-b-2'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                            <p className='mt-3 mb-4'>Tandatangan pesakit / ibu bapa / penjaga / suami / isteri / saudara terdekat* <br />
                                                Signature of patient / guardian / spouse / next of kin*
                                                <br /><br />
                                                Nama ibu bapa / penjaga / suami / isteri / saudara terdekat** <br />
                                                Name of parent / guardian /spouse / next of kin**
                                            </p>
                                            <span className='border-[#1D1D1D] mb-1 border-b-2'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                        </div>
                                        <div className="">
                                            <span className='border-[#1D1D1D] mb-1 border-b-2'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                            <br />
                                            <br />
                                            <p>Tanda tangan dokter
                                               <br /> Signature of doctor <br />
                                               <br /> <span className='font-medium'>Assoc, Prof. Dr Fam Xeng Inn</span>
                                               <br /> MMC No.44536 NSR No, 54303
                                               <br /> M.D Dr. Gen surg (UKM), FRCS (Urol) (Glasg) MBU (Mall)
                                               <br /> Consultant Urologist
                                               <br /> UKM Specialist Center (UKMSC)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto text-[#1D1D1D] font-medium  border text-sm mt-4 rounded-lg p-4">
                                    <h2 className=' mb-3'>Untuk Saksi / For Witness</h2>
                                    <p>
                                        Saya memperakui makluman di atas telah diterangkan kepada pesakit / ibu siapa /penjaga / suami / isteri /saudara terdekat yang tandatangannnya tertera di atas.
                                    </p>
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

export default DarahPopup