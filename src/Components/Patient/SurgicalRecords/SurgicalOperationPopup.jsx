import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import Senarai from "../../../assets/Senarai.svg"
import receipt from "../../../assets/receipt43.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'


const SurgicalOperationPopup = ({ setPopup1 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("Infection Surveillance");

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
                        <img src={Senarai} alt="" />
                        <h2 className='text-lg font-semibold'>Surgical Operation Report</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Abdoment Urogenital</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Abdoment Urogenital</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Abdoment Urogenital</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg max-h-[70vh] overflow-auto border-[#cfd1d4]">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Abdoment Urogenital : Surgery For Bladder Tumours</h3>
                                <p className='font-medium text-[#6E6E6E] pt-2'>Booking Information</p>

                                <div className="border text-[#1D1D1D] text-sm grid-cols-2 grid  p-3 mt-2 rounded-lg border-[#cfd1d4]">
                                    <ul className='space-y-1'>
                                        <li>Booking Id : <span className='font-semibold'>1111222233334</span></li>
                                        <li>Operation Date : <span className='font-semibold'>07/10/2024</span></li>
                                        <li>Type of Operation : <span className='font-semibold'>Minor</span></li>
                                        <li>Booked by : <span className='font-semibold'>Lorem Ipsum</span></li>
                                    </ul>
                                    <ul className='space-y-1'>
                                        <li>Operation List : <span className='font-semibold'>UKMSC Emergency</span></li>
                                        <li>Method of Admission : <span className='font-semibold'>In-patient</span></li>
                                    </ul>
                                </div>
                                <p className='font-medium text-[#6E6E6E] pt-3'>Post-Operative Information</p>

                                <div className="border text-sm grid-cols-2 grid  p-3 mt-2 rounded-lg border-[#cfd1d4]">
                                    <ul className='space-y-1'>
                                        <li>Operation Type : <span className='font-semibold'>Elective</span></li>
                                        <li>Pre-op diagnosis : <span className='font-semibold'>D41.4: Neoplasm of uncertain or unknown behavior of bladder</span></li>
                                    </ul>
                                    <ul className='space-y-1'>
                                        <li>Start Time : <span className='font-semibold'>16:00</span></li>
                                        <li>End Time : <span className='font-semibold'>16:00</span></li>
                                        <li>Duration : <span className='font-semibold'>30 min(s)</span></li>
                                    </ul>
                                </div>

                                <div className="border mt-3  rounded-lg border-[#cfd1d4]">
                                    <div className="flex text-lg p-3 font-medium items-center border-[#cfd1d4] border-b pb-2 gap-2 text-[#6E6E6E]">
                                        <p className={`p-1 cursor-pointer  ${activeTab == "Infection Surveillance" && "text-secondary"} `} onClick={() => setActiveTab("Infection Surveillance")}>Infection Surveillance</p>
                                        <div className="h-5  border-[#cfd1d4]  border-r"></div>
                                        <p className={`p-1 cursor-pointer   `}>Personal Involved</p>
                                        <div className="h-5  border-[#cfd1d4]  border-r"></div>
                                        <p className={`p-1 cursor-pointer   `}>Finding</p>
                                        <div className="h-5  border-[#cfd1d4]  border-r"></div>
                                        <p className={`p-1 cursor-pointer  ${activeTab == "Procedure" && "text-secondary"} `} onClick={() => setActiveTab("Procedure")}>Procedure</p>
                                        <div className="h-5  border-[#cfd1d4]  border-r"></div>
                                        <p className={`p-1 cursor-pointer   `}>Post-Op Order</p>
                                        <div className="h-5  border-[#cfd1d4]  border-r"></div>
                                        <p className={`p-1 cursor-pointer   `}>Biospy Taken</p>
                                    </div>

                                    {/* Infection Surveillance */}
                                    {
                                        activeTab == "Infection Surveillance" && (
                                            <div className="flex fastFadeIn justify-center p-3 items-center">
                                                <div className="w-full bg-white border rounded-lg ">
                                                    <table className="w-full border-collapse text-sm text-gray-800">
                                                        <tbody>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5 bg-zinc-100">Wound Contamination Class</td>
                                                                <td className="px-4 font-medium py-2.5">Clean-Contaminated</td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5 bg-zinc-100">Is patient already on antibiotic treatment</td>
                                                                <td className="px-4 py-2.5 font-medium">No</td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5 bg-zinc-100">Were pre-operative prophylactic antibiotic given</td>
                                                                <td className="px-4 py-2.5 font-medium">No</td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5 bg-zinc-100">Intra-operative prophylactic antibiotic given</td>
                                                                <td className="px-4 py-2.5 font-medium">No</td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5 bg-zinc-100">Post Operative Antibiotic</td>
                                                                <td className="px-4 py-2.5 font-medium">No</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-4 py-2.5 bg-zinc-100">Post-op diagnosis</td>
                                                                <td className="px-4 py-2.5 font-medium">No</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        activeTab == "Procedure" && (
                                            <p className="border fastFadeIn rounded-lg bg-[#f5f7fa] text-[#1D1D1D] p-3 m-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat tincidunt massa, sed convallis odio tincidunt nec. Nulla facilisi. Vestibulum luctus nibh vel libero dictum, a tristique mi iaculis. Integer sit amet semper nulla. Sed pulvinar dui id tincidunt fringilla. Curabitur vehicula elit eget dui facilisis, quis accumsan nulla tempus. Fusce ultricies tincidunt risus, ut dictum erat mollis et. Duis at ultricies turpis. Mauris eget varius neque. Integer convallis urna non justo venenatis, ut tincidunt ex gravida.
                                            </p>
                                        )
                                    }


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

export default SurgicalOperationPopup