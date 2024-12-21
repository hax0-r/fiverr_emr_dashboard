import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import Histo from "../../../assets/Histo.svg"
import receipt from "../../../assets/receipt29.png"
import sign from "../../../assets/sign10.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const HistoPopup = ({ setPopup5 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup5(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={Histo} alt="" />
                        <h2 className='text-lg font-semibold'>Histo & Cyto Pathology Request Form</h2>
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
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Histopathology & Cytopathology</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Request Form</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Haematology</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Request Form</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Haematology</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Request Form</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 max-h-[65vh] text-[#1D1D1D] overflow-y-auto rounded-t-lg border-[#cfd1d4]">

                                <div className="flex items-center justify-between text-center w-full">
                                    <div className="font-medium  text-sm px-6 py-1 border border-[#cfd1d4]">LOGO</div>
                                    <h3 className='font-semibold text-[#1D1D1D] text-xl text-center'>HISTOPATHOLOGY & CYTOPATHOLOGY</h3>
                                    <div className="font-medium  text-sm px-6 py-1 border border-[#cfd1d4]">LAB BARCODE</div>
                                </div>

                                <div className=" mt-5">
                                    {/* Header Section */}
                                    <div className="flex justify-between p-3 rounded-lg items-center border-[#cfd1d4] border pb-4 mb-6">
                                        <div className="grid grid-cols-4 w-full">
                                            <div className="col-span-2">
                                                <label>
                                                    <input type="checkbox" className="mr-2" />
                                                    Cash
                                                </label>
                                                <label>
                                                    <input type="checkbox" className="mr-2 ml-5" />
                                                    Hospital
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" className="mr-2" />
                                                    Clinic
                                                </label>
                                                <label>
                                                    <input type="checkbox" className="mr-2 ml-5" />
                                                    Employer / GL
                                                </label>
                                            </div>
                                            <div className="col-span-2 grid grid-cols-2">

                                                <p > <input type="checkbox" /> URGENT Phone </p>
                                                <p >: .................................</p>
                                                <p > <span className='opacity-0 select-none'>gggggggi</span> Fax </p>
                                                <p >: .................................</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Patient Information */}
                                    <div className="my-3">
                                        <h3 className='font-semibold text-[#1D1D1D] text-xl text-center'>Patient Information</h3>
                                        <div className="flex mt-3 text-sm justify-between p-3 rounded-lg items-center border-[#cfd1d4] border pb-3 mb-6">
                                            <div className="grid grid-cols-4 w-full">
                                                <div className="col-span-2 grid grid-cols-2">
                                                    <div className="col-span-2 grid grid-cols-2">
                                                        <p > NRIC / PASSPORT NO </p>
                                                        <p >: .........................................</p>
                                                        <p > MRN / REG NO </p>
                                                        <p >: .........................................</p>
                                                        <p > WARD / CLINIC</p>
                                                        <p className='font-semibold'>: Sutera 3A</p>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 grid grid-cols-2">
                                                    <div className="col-span-2 gap-y-1 grid grid-cols-4">
                                                        <p > NRIC / PASSPORT NO </p>
                                                        <p >: .........................................</p>
                                                        <p></p>
                                                        <p></p>
                                                        <p > DATE OF BIRTH </p>
                                                        <p >: ................................</p>
                                                            <p className='col-span-2'>Age  : ................................</p>
                                                        <p > CONTACT NO</p>
                                                        <p >: ................................</p>
                                                        <p className='col-span-2'>SEX : <input type="checkbox" /> MALE <input type="checkbox" /> FEMALE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Request Information */}
                                    <div className="mb-3 grid grid-cols-2 gap-4 rounded-lg items-center border-[#cfd1d4] border p-3">
                                        <div className='text-sm relative h-full border rounded-lg font-medium'>
                                            <h2 className="border-b py-1 text-center">Request Information</h2>
                                            <p className='p-3'>Doctors Name Clinic stamp</p>
                                            
                                            <img src={sign} className='pl-5 mt-14 h-24' alt="" />
                                            <div className="flex p-3 justify-between items-center ">
                                                <h2 className='text-center'>Doctor’s Signature</h2>
                                                <h2 className='text-center'>Date</h2>
                                            </div>
                                        </div>
                                        <div className='text-sm border rounded-lg  font-medium'>
                                            <h2 className="border-b py-1 text-center">HISTOPATHOLOGY EXAMINATION</h2>
                                            <div className="p-3">

                                                <p className="mb-2 underline">Compulsory for HPE request :</p>
                                                <label>
                                                    <input type="checkbox" className="mr-2" />
                                                    Formalin-fixed
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" className="mr-2" />
                                                    Fresh tissue
                                                </label>
                                                <p className="mt-2">Date and time of specimen removed from the surgical field (cold ischemic time)</p>

                                                <p className="mt-2">Date..../....../.....  Time :</p>
                                                <p className="mt-2">Date and time of specimen fixed in 10% Neutral buffered formalin (NBF)</p>
                                                <p className="mt-2">Date..../....../.....  Time :</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clinical History */}
                                    <div className='border rounded-lg p-3 bg-[#f7f8fa]'>
                                        <h2 className="font-medium text-sm mb-14">
                                        NATURE OF SPECIMEN / COLLECTOIN SITE :
                                        </h2>
                                        <h2 className="font-medium text-sm mb-2">
                                        Urine, bladder cancer
                                        </h2>

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


export default HistoPopup