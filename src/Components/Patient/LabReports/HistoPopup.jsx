import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import RadiologyReport from "../../../assets/RadiologyReport2.svg"
import receipt from "../../../assets/receipt29.png"
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
                        <img src={RadiologyReport} alt="" />
                        <h2 className='text-lg font-semibold'>Radiology Report</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>CT ABDOMEN</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>CT ABDOMEN</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>CT ABDOMEN</p>
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
                                        <div className="flex items-center justify-between w-full">
                                            <div className="">
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
                                            <div className="">
                                                <label htmlFor="">Phone : .....................................................</label>
                                                <label htmlFor="" className='block mt-2'>Fax : .....................................................</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Patient Information */}
                                    <div className="my-3">
                                        <h3 className='font-semibold text-[#1D1D1D] text-xl text-center'>Patient Information</h3>
                                        <div className="flex mt-3 justify-between p-3 rounded-lg items-center border-[#cfd1d4] border pb-3 mb-6">
                                            <div className="flex items-center justify-between w-full">
                                                <div className="">
                                                    <label htmlFor="">NRIC / PASSPORT NO : .....................................................</label>
                                                    <label htmlFor="" className='block mt-2'>MRN / REG NO : .....................................................</label>
                                                    <label htmlFor="" className='block mt-2'>WARD / CLINIC : .....................................................</label>
                                                </div>
                                                <div className="">
                                                    <label htmlFor="">NRIC/PASSPORT NO : .....................................................</label>
                                                    <label htmlFor="" className='block mt-2'>DATE OF BIRTH : .....................................................</label>
                                                    <label htmlFor="" className='block mt-2'>CONTACT NO : .....................................................</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Request Information */}
                                    <div className="mb-3 grid grid-cols-2 gap-4 rounded-lg items-center border-[#cfd1d4] border p-3">
                                        <div className='text-sm h-full border rounded-lg font-medium'>
                                            <h2 className="border-b py-1 text-center">Request Information</h2>
                                            <p className='p-3'>Doctors Name Clinic stamp</p>
                                            <textarea
                                                className="w-full p-2 resize-none"
                                                rows="4"
                                            ></textarea>
                                            <div className="flex p-3 justify-between items-center mt-2">
                                                <h2 className='text-center'>Docto Signature</h2>
                                                <h2 className='text-center'>Date</h2>
                                            </div>
                                        </div>
                                        <div className='text-sm border rounded-lg  font-medium'>
                                            <h2 className="border-b py-1 text-center">Histopathology Information</h2>
                                            <div className="p-3">

                                                <p className="mb-2 underline">Compulsory for HPE request :</p>
                                                <label>
                                                    <input type="checkbox" className="mr-2" />
                                                    Lorem
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" className="mr-2" />
                                                    Lorem
                                                </label>
                                                <p className="mt-2">Lorem ipsum dolor sit amet</p>

                                                <p className="mt-2">Date..../....../.....  Time :</p>
                                                <p className="mt-2">Compulsory for HPE request :</p>
                                                <p className="mt-2">Date..../....../.....  Time :</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clinical History */}
                                    <div className='border rounded-lg p-3 bg-[#f7f8fa]'>
                                        <h2 className="font-medium text-sm mb-14">
                                        Doctors Name Clinic stamp
                                        </h2>
                                        <h2 className="font-medium text-sm mb-2">
                                            CLINICAL HISTORY/CLINICAL FINDINGS/DIAGNOSIS:
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