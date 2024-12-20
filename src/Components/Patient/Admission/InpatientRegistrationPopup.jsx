import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt34.png"
import AdmissionLetter from "../../../assets/AdmissionLetter.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const InpatientRegistrationPopup = ({ setPopup3 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup3(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={AdmissionLetter} alt="" />
                        <h2 className='text-lg font-semibold'>Inpatient Registration</h2>
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

                <div className="px-4 pb-4">
                    <div className="border rounded-lg border-[#CFD1D4] p-3 flex gap-4 ">
                        {
                            !previewDocument && (
                                <div className="max-w-[30%]   w-full">
                                    <div className=" flex flex-col gap-3 font-medium">
                                        <div className="border p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                                            <h3 className='font-medium '>Inpatient Registration</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>Chia Suwe Kiea</p>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>08 Aug 2023</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                                            <h3 className='font-medium '>Inpatient Registration</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>Chia Suwe Kiea</p>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>08 Aug 2023</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                                            <h3 className='font-medium '>Inpatient Registration</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>Chia Suwe Kiea</p>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>08 Aug 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 text-[#1D1D1D] rounded-lg border-[#cfd1d4] text-sm max-h-[70vh] overflow-auto">
                                <div className="flex items-center gap-4 ">
                                    <h3 className={`font-semibold text-[#1D1D1D] text-xl`}>BORANG PENDAFTARAN PESAKIT DALAM </h3>
                                    <p className='text-[#1d1d1d] bg-[#F5F7FA] px-2 py-1 rounded-md font-medium'>Chia Suwe Kiea <span className='text-[#6E6E6E]'>08 Aug 2023</span></p>
                                </div>
                                <p className='pt-3 text-[#6E6E6E] font-medium'>BUTIR - BUTIR PESAKIT / PARTICULAR OF PATIENT</p>

                                <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-1 text-sm grid gap4`}>
                                    <div className="grid-cols-2 grid gap-x-4 space-y-1">
                                        <p> No. Pesakit / NRIC</p>
                                        <p className='font-semibold'>: 11887921 </p>
                                        <p> No. Pesakit / NRIC</p>
                                        <p className='font-semibold'>: Chia Suwe Kiea</p>
                                        <p> Umur / Age</p>
                                        <p className='font-semibold'>: 66</p>
                                        <p> Tarikh Lahir / Date of Birth</p>
                                        <p className='font-semibold'>: 15/9/1956 </p>
                                        <p> Jantina / Sex</p>
                                        <p className='font-semibold'>: Perempuan / Female</p>
                                        <p> Taraf Perkahwinan / Status</p>
                                        <p className='font-semibold'>: Berkahwin / Married</p>
                                        <p> No. K/p / NRIC</p>
                                        <p className='font-semibold'>: - </p>
                                        <p> No. Passport / Passport No.</p>
                                        <p className='font-semibold'>: -</p>
                                        <p> Kewarganegaraan / Citizenship</p>
                                        <p className='font-semibold'>:  MALAYSIA</p>
                                        <p> Alamat Terkini / Current Address</p>
                                        <p className='font-semibold'>: T/S XXX,  SANAJ SELANGOR</p>
                                        <p> Daerah / District</p>
                                        <p className='font-semibold'>: AMPANG</p>
                                        <p> Poskod / Post Code:</p>
                                        <p className='font-semibold'>:  43500</p>
                                        <p> Negeri / State:</p>
                                        <p className='font-semibold'>:  Selangor</p>
                                    </div>
                                    <div className="grid-cols-2 grid space-y-1 gap-x-4">
                                        <p className=''>Bangsa / Race</p>
                                        <p className='font-semibold'>: Cina / Chinese</p>
                                        <p className=''>Agama / Religion</p>
                                        <p className='font-semibold'>: Buddha</p>
                                        <p className=''>Hubungan dengan Pesakit / Relationship with Patient</p>
                                        <p className='font-semibold'>: Isteri / Wife </p>
                                        <p className=''>Nama Waris / Next of Kin</p>
                                        <p className='font-semibold'>: Isteri / Wife</p>
                                        <p className=''>Name</p>
                                        <p className='font-semibold'>: CHIA WUI KAI</p>
                                        <p className=''>Alamat Waris / Next of Kin's Address</p>
                                        <p className='font-semibold'>: SAMA / SAME AS ABOVE </p>
                                        <p className=''>Nama Majikan / Employer's Name</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>No. Telefon / No.</p>
                                        <p className='font-semibold'>: 012-1112223 </p>
                                        <p className=''>No. Faks / Fax No.</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>Jenis Perusahaan / Type of Business</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>Posisi / Position</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>Punca Rujukan / Referral Source</p>
                                        <p className='font-semibold'>: Klinik Swasta / Private Clinic</p>
                                    </div>
                                </div>
                                <p className='pt-3 text-[#6E6E6E] font-medium'>LENGKAPKAN BAHAGIAN INI SEKIRANYA PESAKIT BAWAH UMUR</p>

                                <div className={` ${previewDocument ? " grid-cols-1" : "grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-1 text-sm grid gap4`}>
                                    <div className="grid-cols-2 grid space-y-1">
                                        <p className=''>Nama Ibu / Name of Mother</p>
                                        <p className='font-semibold'>: -</p>
                                        <p className=''>Nama Majikan Ibu / Employer’s Name</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>No. K/P Ibu / NRIC / Passport No</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Alamat Majikan Ibu / Employer’s Address:</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Nama Bapa / Name of Father</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Nama Majikan Bapa / Employer’s Name</p>
                                        <p className='font-semibold'>: - </p>
                                    </div>
                                    <div className="grid-cols-2 grid space-y-1">

                                        <p className=''>Alamat Majikan Bapa / Employer’s Address</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>No. Telefon Majikan / Employer’s Tel. No.</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Alamat Ibu dan Pesakit / Address of Mother and Patient</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>Nama Majikan Bapa / Employer’s Address</p>
                                        <p className='font-semibold'>: - </p>
                                        <p className=''>No. Telefon Majikan / Employer’s Tel. No</p>
                                        <p className='font-semibold'>: - </p>
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

export default InpatientRegistrationPopup