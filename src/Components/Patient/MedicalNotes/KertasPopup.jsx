import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import KertasAnestesia from "../../../assets/ConsentforAnaesthesia.svg"
import receipt from "../../../assets/receipt3.png"
import sign3 from "../../../assets/sign4.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const KertasPopup = ({ setPopup3 }) => {

    const [previewDocument, setPreviewDocument] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

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
                        <img src={KertasAnestesia} alt="" />
                        <h2 className='text-lg font-semibold'>Consent for Anaesthesia</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Consent for Anaesthesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Consent for Anaesthesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Consent for Anaesthesia</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>

                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[65vh] overflow-auto">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Consent for Anaesthesia</h3>
                                <p className='font-medium text-[#6E6E6E]'>Patient Info </p>
                                <div className="w-full mt-4 p-3 bg-white border border-gray-300 rounded-md text-sm">
                                    {/* Patient Details Section */}
                                    <div className="grid border  p-3 rounded-lg grid-cols-4 gap-y-1 gap-4 border-b border-gray-200 pb-4 mb-4">
                                        <p>Patient’s Name</p>
                                        <p className='font-semibold'> : Chia Suwe Kiea</p>
                                        <p>Address</p>
                                        <p className='font-semibold'> : Lot 123, Tmn Mutiara, Subak Jaya, Selangor</p>
                                        <p>MRN</p>
                                        <p className='font-semibold'> : N867921</p>
                                        <p></p>
                                        <p></p>
                                        <p>NRIC / Passport</p>
                                        <p className='font-semibold'> : 560915105891</p>
                                        <p>Diagnose</p>
                                        <p className='font-semibold'> : Bladder tumor</p>
                                        <p>Age</p>
                                        <p className='font-semibold'> : 68</p>
                                        <p>Surgery / Procedure</p>
                                        <p className='font-semibold'> : TURBT</p>
                                        <p>Sex</p>
                                        <p className='font-semibold'> : Male</p>

                                    </div>

                                    {/* A. Patient Specific Information */}
                                    <div className="mb-3 border rounded-lg">
                                        <h3 className="font-semibold  p-3">A. Patient Specific Information</h3>
                                        <div className="grid grid-cols-12 gap-x-4 border border-gray-200 ">
                                            <div className="col-span-7 bg-zinc-100 border-b border-gray-200 p-4">
                                                <p>1. Specific risk of anesthesia to the *patient/parents/guardian</p>
                                            </div>
                                            <div className="col-span-5 border-b border-gray-200 p-4">
                                                Over tumor
                                            </div>
                                            <div className="col-span-7 p-4 bg-zinc-100">
                                                <p>1. Anesthetic plan disclosed to the  *patient/parents/guardian</p>
                                            </div>
                                            <div className="col-span-5 p-4">
                                                TCA/Sp IVU
                                            </div>
                                        </div>
                                    </div>

                                    {/* B. Practitioner’s Declaration */}
                                    <div className="mb-3 border rounded-lg">

                                        {
                                            currentPage == 1 ? (


                                                <div className="">
                                                    <h3 className="font-semibold p-3 border-b">B. Practitioner’s Declaration</h3>
                                                    <p className="mb-6 p-3">
                                                        1, the undersigned, being a practitioner of anaesthesia in the Department of Anaesthesiology & Intensive Care, UKM Medical Centre hereby declare that I have explained the contents of the leaflet "Information on Anaesthesia for Patients" on page 1 and Part A therein above to the "patient's /parents/ guardian's satisfaction.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="">
                                                    <h3 className="font-semibold p-3 border-b">C. Consent by Patient</h3>
                                                    <p className="mb-6 p-3">
                                                        I, the undersigned, being of full age and of sound mind do hereby confirm that:-
                                                        <br /><br />
                                                        1. The necessity, type and associated risks of anaesthesia has been explained to me to my satisfaction by the practitioner named above;
                                                        <br /><br />
                                                        2. The contents of the leaflet "Information on Anaesthesia for Patients" on page 1 and Part A herein have been explained to me to my satisfaction by the practitioner named above;
                                                        <br /><br />
                                                        3. I am in full knowledge thereof and in accepting the risks associated therewith I hereby consent to the aforesaid anaesthesia.
                                                    </p>
                                                </div>
                                            )
                                        }

                                        <div className="flex p-3 max-w-lg justify-between items-center">
                                            <div>
                                                <p className="font-semibold">Signature</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Name & Official Stamp</p>
                                            </div>
                                        </div>
                                        <div className="flex max-w-lg p-3 justify-between items-center">
                                            <img src={sign3} className='h-28' alt="" />
                                            <img src={sign3} className='h-28' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
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
                                        <div className="flex gap-2 items-center mt-4 justify-end">
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
                                <Print receipt={receipt} />
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default KertasPopup