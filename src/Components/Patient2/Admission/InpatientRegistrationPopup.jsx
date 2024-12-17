import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt40.png"
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
                        <h2 className='text-lg font-semibold'>Patient Registration Form</h2>
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
                        <div className="flex items-center mb-3 px-4 justify-between border-t border-[#CFD1D4] pt-4">
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
                                        <div className="border bg-zinc-50 p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                                            <h3 className='font-medium '>Patient Registration Form</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>Nurartini Sulong @ Mokhtar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 text-[#1D1D1D] rounded-lg border-[#cfd1d4] text-sm max-h-[70vh] overflow-auto">
                                <h3 className={`font-semibold text-xl`}>Patient Registration Form </h3>
                                <div className={`  border p-3 rounded-lg border-[#cfd1d4] mt-3 grid grid-cols-4 gap-2`}>

                                    <p>Primary Doctor</p>
                                    <p className='col-span-3'> : -</p>
                                    <p>First Visit</p>
                                    <div className="flex items-center col-span-3">

                                        :   <input type="checkbox" className='mx-1' /> <span >Yes</span>
                                        <input type="checkbox" className='mr-1 ml-4' /> <span >No</span>
                                    </div>
                                    <p>HUKM Patient</p>
                                    <div className="flex items-center col-span-3">

                                        :   <input type="checkbox" className='mx-1' /> <span >Yes</span>
                                        <input type="checkbox" className='mr-1 ml-4' /> <span >No</span>
                                    </div>
                                    <p>Payment Mode</p>
                                    <div className="flex items-center col-span-3">

                                        :   <input type="checkbox" className='mx-1' /> <span >Self Paying</span>
                                        <input type="checkbox" className='mr-1 ml-4' /> <span >GL :</span>
                                    </div>
                                </div>
                                <p className='text-[#6E6E6E] py-3'>A For This Visit :</p>
                                <div className="border p-3 rounded-lg border-[#cfd1d4] mt-3 grid grid-cols-4 text-sm gap-2">
                                    <h2 className='col-span-4 font-bold'>ATTENDING CLERK / PATIENT</h2>
                                    <p>Full Name</p>
                                    <p className='col-span-3'>: Norartini Sulong @ Mokhtar</p>
                                    <p> Full Name</p>
                                    <p className='col-span-3'>: 850703115180</p>
                                    <p> NRIC/Passport No</p>
                                    <p className='col-span-3'>: 03/07/1985</p>
                                    <p> Date of Birth</p>
                                    <div className="flex items-center col-span-3">
                                        :
                                        <input type="checkbox" className='mx-1' /> <span >Yes</span>
                                        <input type="checkbox" className='mr-1 ml-4' /> <span >No</span>
                                    </div>
                                    <p> Marital Status</p>
                                    <p className='col-span-3'>: Alamat Majikan Bapa / Employer’s Address</p>
                                    <p> Old IC No</p>
                                    <div className="flex items-center col-span-3">
                                        :   <input type="checkbox" className='mx-1' /> <span >Male</span>
                                        <input type="checkbox" checked className='mr-1 ml-4' /> <span >Female</span>
                                    </div>
                                    <p> Race</p>
                                    <p className='col-span-3'>: -</p>
                                    <p> Nationality</p>
                                    <p className='col-span-3'>: Malaysia</p>
                                    <p> Religion</p>
                                    <p className='col-span-3'>: Islam</p>
                                    <p> Occupation</p>
                                    <p className='col-span-3'>: Operator</p>
                                    <p> Address</p>
                                    <p className='col-span-3'>: No 41, Jalan Kebun Nenas, 4S/KS8 Bandar Putera 2</p>
                                    <p> Tel. Home</p>
                                    <p className='col-span-3'>: -</p>
                                    <p> Hand Phone</p>
                                    <p className='col-span-3'>: 0179369841</p>
                                    <p> Tel. Office</p>
                                    <p className='col-span-3'>: -</p>
                                    <p> Email</p>
                                    <p className='col-span-3'>: fayzahya00_12@gmail.com</p>

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