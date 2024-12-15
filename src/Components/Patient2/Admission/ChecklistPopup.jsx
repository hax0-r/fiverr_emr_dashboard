import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt31.png"
import sign5 from "../../../assets/sign5.png"
import AdmissionChecklist from "../../../assets/AdmissionChecklist.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const ChecklistPopup = ({ setPopup1 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("Admission Check List")

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
                        <img src={AdmissionChecklist} alt="" />
                        <h2 className='text-lg font-semibold'>Admission Checklist</h2>
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
                                            <h3 className='font-medium '>Admission Checklist</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>Lorem Ipsum</p>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>08 Aug 2023</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                                            <h3 className='font-medium '>Admission Checklist</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>Lorem Ipsum</p>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>08 Aug 2023</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                                            <h3 className='font-medium '>Admission Checklist</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>Lorem Ipsum</p>
                                                <p className='text-sm pt-1 text-[#6E6E6E]'>08 Aug 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] text-sm max-h-[70vh] overflow-auto">
                                <div className="flex items-center gap-4 ">
                                    <h3 className={`font-semibold text-[#1D1D1D] text-xl`}>Admission Checklist</h3>
                                    <p className='text-[#1d1d1d] bg-[#F5F7FA] px-2 py-1 rounded-md font-medium'>Lorem Ipsum <span className='text-[#6E6E6E]'>08 Aug 2023</span></p>
                                </div>


                                <div className=" border rounded-lg mt-3">
                                    <div className="flex text-[#6E6E6E] items-center gap-3 p-3 border-b ">
                                        <p onClick={() => setActiveTab("Admission Check List")} className={` ${activeTab == "Admission Check List" && "text-secondary"} font-medium cursor-pointer`}>Admission Check List</p>
                                        <div className="h-5 border-r "></div>
                                        <p onClick={() => setActiveTab("Discharge Checklist")} className={` ${activeTab == "Discharge Checklist" && "text-secondary"} font-medium cursor-pointer`}>Discharge Checklist</p>
                                    </div>

                                    {
                                        activeTab == "Admission Check List" && (
                                            <div className="grid grid-cols-2 text-[#1D1D1D] font-medium">
                                                <p className=' text-center p-3'>Ward</p>
                                                <p className=' text-center p-3'>RECOVERY</p>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                            </div>
                                        )
                                    }


                                    {
                                        activeTab == "Discharge Checklist" && (
                                            <div className="grid grid-cols-2 text-[#1D1D1D] font-medium">
                                                <p className=' text-center p-3'>Ward</p>
                                                <p className=' text-center p-3'></p>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">

                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">

                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">

                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">

                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">
                                                    <p>Nurses Counter</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex items-center border-y p-3 justify-between ">

                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">
                                                    <p>Pantry</p>
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="flex bg-[#f5f7fa] items-center border-y p-3 justify-between ">

                                                </div>
                                            </div>
                                        )
                                    }

                                </div>


                                {
                                    activeTab == "Admission Check List" && (
                                        <div className="mx-auto bg-white rounded-lg">
                                            {/* Patient Info Section */}
                                            <div className="p-3 rounded-lg mt-3   border pb-3 mb-3">
                                                <h2 className='text-[#6E6E6E] pb-3'>Food Serving Time (daily)</h2>
                                                <div className='flex items-center justify-between'>
                                                    <div className="">

                                                        <p className='pt-0.5'>
                                                            Breakfast : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'> 7.00am — 8.00am</span>
                                                        </p>
                                                        <p className='pt-0.5'>
                                                            Lunch : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <span className='font-semibold'> 12.00pm — 1.00pm</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className='pt-0.5'>
                                                            Breakfast : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'> 7.00am — 8.00am</span>
                                                        </p>
                                                        <p className='pt-0.5'>
                                                            Lunch : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <span className='font-semibold'> 12.00pm — 1.00pm</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className='italic pt-3'>*Hot Water Serving at 7.00 am & 8.30 pm</p>
                                            </div>

                                        </div>
                                    )}


                                <div className="mx-auto bg-white rounded-lg">
                                    {/* Patient Info Section */}
                                    <div className="p-3 rounded-lg mt-3   border pb-3 mb-3">
                                        <h2 className='text-[#6E6E6E] pb-3'>Verified by :</h2>
                                        <div className='flex max-w-2xl items-center justify-between'>
                                            <div className="">
                                                <p className='pt-0.5'>
                                                    Date : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className='font-semibold'> 18/8/23 </span>
                                                </p>
                                                <p className='pt-0.5'>
                                                    Anaesthesist : &nbsp; &nbsp; &nbsp; &nbsp;   <span className='font-semibold'> Lorem Ipsum</span>
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className='pt-0.5 flex items-center gap-2'>
                                                Patient name & Signature : 
                                                <img src={sign5} className='h-10' alt="" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {
                                    activeTab == "Discharge Checklist" && (

                                        <div className="mx-auto bg-white rounded-lg">
                                            {/* Patient Info Section */}
                                            <div className="p-3 rounded-lg mt-3   border pb-3 mb-3">
                                                <h2 className='text-[#6E6E6E] pb-3'>Visit Hours (daily)</h2>
                                                <div className='flex items-center justify-between'>
                                                    <div className="font-medium">

                                                        <p className='pt-0.5'>
                                                            8.00am — 10.00pm
                                                        </p>
                                                        <p className='pt-0.5'>
                                                            *Kindly note that children below 12 yrs old are NOT allowed to the ward after 10pm
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}


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


export default ChecklistPopup