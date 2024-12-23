import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiBuildings, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt24.png"
import receipt44 from "../../../assets/receipt44.png"
import receipt45 from "../../../assets/receipt45.png"
import receipt46 from "../../../assets/receipt46.png"
import LabReport from "../../../assets/LabReport.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'
import { IoLocationOutline } from 'react-icons/io5'
import { SlLocationPin } from 'react-icons/sl'

const LabReportPopup = ({ setPopup1 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("Lifid Profile")
    const [activeTab2, setActiveTab2] = useState("Renal Test")
    const [activeTab3, setActiveTab3] = useState("Haematology")
    const [activeTabLeft, setActiveTabLeft] = useState("Full Blood Count")

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
                        <img src={LabReport} alt="" />
                        <h2 className='text-lg font-semibold'>Lab Report</h2>
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
                                <div className="max-w-[30%]  w-full">
                                    <div className="flex flex-col gap-3">
                                        <div className={` cursor-pointer ${activeTabLeft == "Full Blood Count" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Full Blood Count")}>
                                            <h3 className='font-medium text-[#1D1D1D]'> Full Blood Count</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "Endocrine Test" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Endocrine Test")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Endocrine Test</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "Liver" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Liver")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Liver</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "Urine Test" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Urine Test")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Urine Test</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border max-h-[65vh] overflow-auto px-3 pb-4 rounded-lg border-[#cfd1d4]">
                                <div className="flex py-3 border-b items-center justify-between">
                                    <h3 className='font-semibold text-[#1D1D1D] text-xl mt-2'>{activeTabLeft === "Endocrine Test"
                                        ? "Endocrine Test"
                                        : activeTabLeft === "Liver"
                                            ? "Liver"
                                            : activeTabLeft == "Urine Test" ? "Urine Test" : "Full Blood Count"}
                                    </h3>
                                    <div className="flex gap-3 items-center">
                                        <label className='font-medium' htmlFor="">Test Date : </label>
                                        <input type="date" className='border p-2 rounded-lg' />
                                    </div>
                                </div>

                                {
                                    activeTabLeft == "Full Blood Count" && (
                                        <div className="py-3 rounded-lg border border-[#cfd1d4]">
                                            <div className="flex text-lg border-b pb-2 border-[#cfd1d4] text-[#6E6E6E] items-center gap-3 px-3">
                                                <p onClick={() => setActiveTab("Lifid Profile")} className={`cursor-pointer ${activeTab == "Lifid Profile" && "text-secondary"}`}>Lifid Profile</p>
                                                <div className="h-5 border border-[#cfd1d4]"></div>
                                                <p onClick={() => setActiveTab("Biochemistry")} className={`cursor-pointer ${activeTab == "Biochemistry" && "text-secondary"}`}>Biochemistry</p>
                                                <div className="h-5 border border-[#cfd1d4]"></div>
                                                <p className={`cursor-pointer ${activeTab == "Full Blood Count" && "text-secondary"}`} onClick={() => setActiveTab("Full Blood Count")}>Full Blood Count</p>
                                            </div>
                                            {
                                                activeTab == "Lifid Profile" && (
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-full bg-white rounded-lg">
                                                            <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                {/* Table Header */}
                                                                <thead className=" border-b">
                                                                    <tr>
                                                                        <th className="px-4 py-2.5 text-left font-medium">No</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Name</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Result</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Unit</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Ref Range</th>
                                                                    </tr>
                                                                </thead>

                                                                {/* Table Body */}
                                                                <tbody>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="px-4 py-2.5">1</td>
                                                                        <td className="px-4 py-2.5">Total Cholesterol</td>
                                                                        <td className="px-4 py-2.5">4.4</td>
                                                                        <td className="px-4 py-2.5">mmol/L</td>
                                                                        <td className="px-4 py-2.5">(&lt;20)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="px-4 py-2.5">2</td>
                                                                        <td className="px-4 py-2.5">HDL Cholesterol</td>
                                                                        <td className="px-4 py-2.5">1.43</td>
                                                                        <td className="px-4 py-2.5">mmol/L</td>
                                                                        <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="px-4 py-2.5">3</td>
                                                                        <td className="px-4 py-2.5">LDL Cholesterol</td>
                                                                        <td className="px-4 py-2.5">2.7</td>
                                                                        <td className="px-4 py-2.5">mmol/L</td>
                                                                        <td className="px-4 py-2.5">(&lt;20)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="px-4 py-2.5">4</td>
                                                                        <td className="px-4 py-2.5">Triglycerides</td>
                                                                        <td className="px-4 py-2.5">0.6</td>
                                                                        <td className="px-4 py-2.5">mmol/L</td>
                                                                        <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="px-4 py-2.5">5</td>
                                                                        <td className="px-4 py-2.5">Total/ HDL Ratio</td>
                                                                        <td className="px-4 py-2.5">3.1</td>
                                                                        <td className="px-4 py-2.5">-</td>
                                                                        <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {
                                                activeTab == "Biochemistry" && (
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-full bg-white rounded-lg">
                                                            <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                {/* Table Header */}
                                                                <thead className=" border-b">
                                                                    <tr>
                                                                        <th className="px-4 py-2.5 text-left font-medium">No</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Name</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Result</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Unit</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Ref Range</th>
                                                                    </tr>
                                                                </thead>

                                                                {/* Table Body */}
                                                                <tbody>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="px-4 py-2.5">1</td>
                                                                        <td className="px-4 py-2.5">Fasting Glucose</td>
                                                                        <td className="px-4 py-2.5">6.7</td>
                                                                        <td className="px-4 py-2.5">mmol/L</td>
                                                                        <td className="px-4 py-2.5">(4.0 - 6.0)</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {
                                                activeTab == "Full Blood Count" && (
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-full bg-white rounded-lg">
                                                            <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                {/* Table Header */}
                                                                <thead className=" border-b">
                                                                    <tr>
                                                                        <th className="p-4 text-left font-medium">No</th>
                                                                        <th className="p-4 text-left font-medium">Name</th>
                                                                        <th className="p-4 text-left font-medium">Result</th>
                                                                        <th className="p-4 text-left font-medium">Unit</th>
                                                                        <th className="p-4 text-left font-medium">Ref Range</th>
                                                                    </tr>
                                                                </thead>

                                                                {/* Table Body */}
                                                                <tbody>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">1</td>
                                                                        <td className="p-4">WBC</td>
                                                                        <td className="p-4">10.0</td>
                                                                        <td className="p-4">10’3µL</td>
                                                                        <td className="p-4">(3.0 - 12.0)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">2</td>
                                                                        <td className="p-4">RBC</td>
                                                                        <td className="p-4">5.15</td>
                                                                        <td className="p-4">10’6µL</td>
                                                                        <td className="p-4">(3.8 - 6.0)</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">3</td>
                                                                        <td className="p-4">HB</td>
                                                                        <td className="p-4">14.6</td>
                                                                        <td className="p-4">g/dL</td>
                                                                        <td className="p-4">(10.0 - 18.0)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">4</td>
                                                                        <td className="p-4">HCT</td>
                                                                        <td className="p-4">46.3</td>
                                                                        <td className="p-4">%</td>
                                                                        <td className="p-4">(33.0 - 54.0)</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="p-4">5</td>
                                                                        <td className="p-4">MCV</td>
                                                                        <td className="p-4">89.9</td>
                                                                        <td className="p-4">fl</td>
                                                                        <td className="p-4">(80.0 - 100.0)</td>
                                                                    </tr>
                                                                    <tr className="border-b ">
                                                                        <td className="p-4">6</td>
                                                                        <td className="p-4">MCH</td>
                                                                        <td className="p-4">28.3</td>
                                                                        <td className="p-4">g/dL</td>
                                                                        <td className="p-4">(25.0 - 33.0)</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">7</td>
                                                                        <td className="p-4">MCHC</td>
                                                                        <td className="p-4">31.5</td>
                                                                        <td className="p-4">10^3/µL</td>
                                                                        <td className="p-4">(32.0 - 36.0)</td>
                                                                    </tr>
                                                                    <tr className=' border-b'>
                                                                        <td className="p-4">8</td>
                                                                        <td className="p-4">Platelet</td>
                                                                        <td className="p-4">234</td>
                                                                        <td className="p-4">%</td>
                                                                        <td className="p-4">(150 - 450)</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="p-4">9</td>
                                                                        <td className="p-4">Lymphocyte</td>
                                                                        <td className="p-4">17.6</td>
                                                                        <td className="p-4">%</td>
                                                                        <td className="p-4">(3.0 - 10.0)</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    )
                                }
                                {
                                    activeTabLeft == "Liver" && (
                                        <div className="py-3 rounded-lg border border-[#cfd1d4]">
                                            <div className="flex text-lg border-b pb-2 border-[#cfd1d4] text-[#6E6E6E] items-center gap-3 px-3">
                                                <p onClick={() => setActiveTab2("Renal Test")} className={`cursor-pointer ${activeTab2 == "Renal Test" && "text-secondary"}`}>Renal Test</p>
                                                <div className="h-5 border border-[#cfd1d4]"></div>
                                                <p onClick={() => setActiveTab2("Liver Test")} className={`cursor-pointer ${activeTab2 == "Liver Test" && "text-secondary"}`}>Liver Test</p>
                                            </div>
                                            {
                                                activeTab2 == "Renal Test" && (
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-full bg-white rounded-lg">
                                                            <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                {/* Table Header */}
                                                                <thead className=" border-b">
                                                                    <tr>
                                                                        <th className="p-4 text-left font-medium">No</th>
                                                                        <th className="p-4 text-left font-medium">Test Name</th>
                                                                        <th className="p-4 text-left font-medium">Result</th>
                                                                        <th className="p-4 text-left font-medium">Unit</th>
                                                                        <th className="p-4 text-left font-medium">Reference Range</th>
                                                                    </tr>
                                                                </thead>

                                                                {/* Table Body */}
                                                                <tbody>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">1</td>
                                                                        <td className="p-4">Sodium</td>
                                                                        <td className="p-4">136.0</td>
                                                                        <td className="p-4">mmol/L</td>
                                                                        <td className="p-4">(136-145)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">2</td>
                                                                        <td className="p-4">Potassium</td>
                                                                        <td className="p-4">136.0</td>
                                                                        <td className="p-4">mmol/L</td>
                                                                        <td className="p-4">(136-145)</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">3</td>
                                                                        <td className="p-4">Chloride</td>
                                                                        <td className="p-4">4.4</td>
                                                                        <td className="p-4">mmol/L</td>
                                                                        <td className="p-4">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">4</td>
                                                                        <td className="p-4">Creatinine</td>
                                                                        <td className="p-4">2.7</td>
                                                                        <td className="p-4">umol/L</td>
                                                                        <td className="p-4">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="p-4">5</td>
                                                                        <td className="p-4">Estimated-GFR</td>
                                                                        <td className="p-4">2.7</td>
                                                                        <td className="p-4">mL/min/1.73m</td>
                                                                        <td className="p-4">(&lt;.90)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">6</td>
                                                                        <td className="p-4">Urea</td>
                                                                        <td className="p-4">2.7</td>
                                                                        <td className="p-4">mmol/L</td>
                                                                        <td className="p-4">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="p-4">7</td>
                                                                        <td className="p-4">Uric Acid</td>
                                                                        <td className="p-4">2.7</td>
                                                                        <td className="p-4">umol/L</td>
                                                                        <td className="p-4">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">8</td>
                                                                        <td className="p-4">Phosporus</td>
                                                                        <td className="p-4">2.7</td>
                                                                        <td className="p-4">mmol/L</td>
                                                                        <td className="p-4">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="p-4">9</td>
                                                                        <td className="p-4">Calcium</td>
                                                                        <td className="p-4">2.7</td>
                                                                        <td className="p-4">umol/L</td>
                                                                        <td className="p-4">(3.5-5.1)</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {
                                                activeTab2 == "Liver Test" && (
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-full bg-white rounded-lg">
                                                            <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                {/* Table Header */}
                                                                <thead className=" border-b">
                                                                    <tr>
                                                                        <th className="px-4 py-2.5 text-left font-medium">No</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Test Name</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Result</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Unit</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Reference Range</th>
                                                                    </tr>
                                                                </thead>

                                                                {/* Table Body */}
                                                                <tbody>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="px-4 py-2.5">1</td>
                                                                        <td className="px-4 py-2.5">Total Protein</td>
                                                                        <td className="px-4 py-2.5">136.0</td>
                                                                        <td className="px-4 py-2.5">g/L</td>
                                                                        <td className="px-4 py-2.5">(136-145)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="px-4 py-2.5">2</td>
                                                                        <td className="px-4 py-2.5">Albumin</td>
                                                                        <td className="px-4 py-2.5">136.0</td>
                                                                        <td className="px-4 py-2.5">g/L</td>
                                                                        <td className="px-4 py-2.5">(136-145)</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="px-4 py-2.5">3</td>
                                                                        <td className="px-4 py-2.5">Globulin</td>
                                                                        <td className="px-4 py-2.5">4.4</td>
                                                                        <td className="px-4 py-2.5">g/L</td>
                                                                        <td className="px-4 py-2.5">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="px-4 py-2.5">4</td>
                                                                        <td className="px-4 py-2.5">Albumin-Globulin Ration</td>
                                                                        <td className="px-4 py-2.5">2.7</td>
                                                                        <td className="px-4 py-2.5"></td>
                                                                        <td className="px-4 py-2.5"></td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="px-4 py-2.5">5</td>
                                                                        <td className="px-4 py-2.5">Total Bilirubin</td>
                                                                        <td className="px-4 py-2.5">2.7</td>
                                                                        <td className="px-4 py-2.5">umol/L</td>
                                                                        <td className="px-4 py-2.5">(&lt;.90)</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="px-4 py-2.5">6</td>
                                                                        <td className="px-4 py-2.5">Alkaline Phpsphatase (ALP)</td>
                                                                        <td className="px-4 py-2.5">2.7</td>
                                                                        <td className="px-4 py-2.5">U/L</td>
                                                                        <td className="px-4 py-2.5">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="px-4 py-2.5">7</td>
                                                                        <td className="px-4 py-2.5">Aspartate Transaminase</td>
                                                                        <td className="px-4 py-2.5">0.6</td>
                                                                        <td className="px-4 py-2.5">U/L</td>
                                                                        <td className="px-4 py-2.5">(3.5-5.1)</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="px-4 py-2.5">8</td>
                                                                        <td className="px-4 py-2.5">Alanine Transaminase</td>
                                                                        <td className="px-4 py-2.5">3.1</td>
                                                                        <td className="px-4 py-2.5">U/L</td>
                                                                        <td className="px-4 py-2.5">(3.5-5.1)</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    )
                                }
                                {
                                    activeTabLeft == "Urine Test" && (
                                        <div className="py-3 rounded-lg border border-[#cfd1d4]">
                                            <div className="flex text-lg border-b pb-2 border-[#cfd1d4] text-[#6E6E6E] items-center gap-3 px-3">
                                                <p onClick={() => setActiveTab3("Haematology")} className={`cursor-pointer ${activeTab3 == "Haematology" && "text-secondary"}`}>Haematology</p>
                                                <div className="h-5 border border-[#cfd1d4]"></div>
                                                <p onClick={() => setActiveTab3("Urine Feme")} className={`cursor-pointer ${activeTab3 == "Urine Feme" && "text-secondary"}`}>Urine Feme</p>
                                            </div>
                                            {
                                                activeTab3 == "Haematology" && (
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-full bg-white rounded-lg">
                                                            <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                {/* Table Header */}
                                                                <thead className=" border-b">
                                                                    <tr>
                                                                        <th className="px-4 py-2.5 text-left font-medium">No</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Test</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Result</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Unit</th>
                                                                        <th className="px-4 py-2.5 text-left font-medium">Ref Range</th>
                                                                    </tr>
                                                                </thead>

                                                                {/* Table Body */}
                                                                <tbody>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="px-4 py-2.5">1</td>
                                                                        <td className="px-4 py-2.5">Erythrocyte Sedimentation Rate (ESR)</td>
                                                                        <td className="px-4 py-2.5">100.0</td>
                                                                        <td className="px-4 py-2.5">mm/hour</td>
                                                                        <td className="px-4 py-2.5">Normal Value
                                                                            <br /> MALE
                                                                            <br /> (Under 50 yrs old): 0 - 15 mm/hour
                                                                            <br /> (Over 50 yrs old): 0 - 20 mm/hour
                                                                            <br /> FEMALE
                                                                            <br /> (Under 50 yrs old): 0 - 20 mm/hour
                                                                            <br /> (Over 50 yrs old): 0 - 15 mm/hour
                                                                        </td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td className="px-4 py-2.5">2</td>
                                                                        <td className="px-4 py-2.5">ABO Blood Group & Rhesus</td>
                                                                        <td className="px-4 py-2.5">AB Positive</td>
                                                                        <td className="px-4 py-2.5">-</td>
                                                                        <td className="px-4 py-2.5">-</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {
                                                activeTab3 == "Urine Feme" && (
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-full bg-white rounded-lg">
                                                            <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                {/* Table Header */}
                                                                <thead className=" border-b">
                                                                    <tr>
                                                                        <th className="p-4 text-left font-medium">No</th>
                                                                        <th className="p-4 text-left font-medium">Name</th>
                                                                        <th className="p-4 text-left font-medium">Result</th>
                                                                        <th className="p-4 text-left font-medium">Unit</th>
                                                                        <th className="p-4 text-left font-medium">Ref Range</th>
                                                                    </tr>
                                                                </thead>

                                                                {/* Table Body */}
                                                                <tbody>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">1</td>
                                                                        <td className="p-4">Glucose</td>
                                                                        <td className="p-4">Negative</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">2</td>
                                                                        <td className="p-4">Bilirubin</td>
                                                                        <td className="p-4">Negative</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">3</td>
                                                                        <td className="p-4">Ketone</td>
                                                                        <td className="p-4">Negative</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">4</td>
                                                                        <td className="p-4">Specific Gravity</td>
                                                                        <td className="p-4">1.020</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="p-4">5</td>
                                                                        <td className="p-4">Blood</td>
                                                                        <td className="p-4">Negative</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className="border-b bg-[#f5f7fa]">
                                                                        <td className="p-4">6</td>
                                                                        <td className="p-4">pH</td>
                                                                        <td className="p-4">6.0</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">7</td>
                                                                        <td className="p-4">Protein</td>
                                                                        <td className="p-4">+/-</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className='bg-[#f5f7fa]'>
                                                                        <td className="p-4">8</td>
                                                                        <td className="p-4">Urobilinogen</td>
                                                                        <td className="p-4">Negative</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                    <tr className="border-b">
                                                                        <td className="p-4">9</td>
                                                                        <td className="p-4">Nitrate</td>
                                                                        <td className="p-4">Negative</td>
                                                                        <td className="p-4">-</td>
                                                                        <td className="p-4">-</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )
                                            }


                                        </div>
                                    )
                                }
                                {
                                    activeTabLeft == "Endocrine Test" && (


                                        <div className="">
                                            <div className={` bg-[#f7f8fa] ${previewDocument ? " grid-cols-2 gap-y-4" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap4`}>
                                                <div className="grid-cols-2 grid gap-y-1">
                                                    <p className=''> Name</p>
                                                    <p className='font-semibold'>: Chia Suwe Kiea</p>
                                                    <p className=''>Malysia New IC</p>
                                                    <p className='font-semibold'>: 561007085677 </p>
                                                    <p className=''>DOB</p>
                                                    <p className='font-semibold'>: 07/10/1956 </p>
                                                    <p className=''>Age/Gender</p>
                                                    <p className='font-semibold'>: F241004001 </p>
                                                </div>
                                                <div className="grid-cols-2 grid gap-y-1">
                                                    <p className=''>Lab No</p>
                                                    <p className='font-semibold'>: UKL24003061</p>
                                                    <p className=''>MRN</p>
                                                    <p className='font-semibold'>: N804297</p>
                                                    <p className=''>Location</p>
                                                    <p className='font-semibold'>: Pantai Preimer Pathology </p>
                                                    <p className=''>Reference</p>
                                                    <p className='font-semibold'>: - </p>
                                                </div>

                                                <div className="grid-cols-2 grid space-y-1">
                                                    <p className=''>Branch</p>
                                                    <p className='font-semibold'>: HUKM Lab</p>
                                                    <p className=''>Collected</p>
                                                    <p className='font-semibold'>: 24/07/2024 09:18:15</p>
                                                    <p className=''>Received</p>
                                                    <p className='font-semibold'>: 24/07/2024 09:18:15 </p>
                                                    <p className=''>Reported</p>
                                                    <p className='font-semibold'>: 24/07/2024 09:18:15</p>
                                                </div>

                                            </div>
                                            <div className={` ${previewDocument ? " grid-cols-2 gap-y-3" : " gap-y-2 grid-cols-2"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap4`}>
                                                <p className='text-[#6E6E6E]'> Requester :</p>
                                                <div className="flex items-center gap-1">
                                                    <PiBuildings className='text-[#6E6E6E] text-lg' />
                                                    <p className='font-medium'> UKM SPECIALIST CLINIC (UKMSC)</p>
                                                </div>
                                                <p className='text-lg font-semibold'>PROF. DR Norlela Sukor</p>
                                                <div className="flex items-center gap-1">
                                                    <SlLocationPin className='text-[#6E6E6E] text-lg' />
                                                    <p className='font-medium'>7th Floor, Clinic Blok UKMMC, Cheras, 65000 </p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center items-center">
                                                <div className="w-full bg-white rounded-lg border mt-4">
                                                    <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                        {/* Table Header */}
                                                        <thead className=" border-b">
                                                            <tr>
                                                                <th className="p-4 text-left font-medium">No</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Test Name</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Result</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Flag</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Unit</th>
                                                                <th className="px-4 py-2.5 text-left font-medium">Reference Range</th>
                                                            </tr>
                                                        </thead>

                                                        {/* Table Body */}
                                                        <tbody>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">1</td>
                                                                <td className="px-4 py-2.5">Total Cholesterol</td>
                                                                <td className="px-4 py-2.5">4.4</td>
                                                                <td className="px-4 py-2.5"></td>
                                                                <td className="px-4 py-2.5">(&lt;20)</td>
                                                                <td className="px-4 py-2.5">(&lt;20)</td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <td className="px-4 py-2.5">2</td>
                                                                <td className="px-4 py-2.5">HDL Cholesterol</td>
                                                                <td className="px-4 py-2.5">1.43</td>
                                                                <td className="px-4 py-2.5"></td>
                                                                <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                                <td className="px-4 py-2.5">(1.04-1.55)</td>
                                                            </tr>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="px-4 py-2.5">3</td>
                                                                <td className="px-4 py-2.5">LDL Cholesterol</td>
                                                                <td className="px-4 py-2.5">2.7</td>
                                                                <td className="px-4 py-2.5"></td>
                                                                <td className="px-4 py-2.5">(&lt;20)</td>
                                                                <td className="px-4 py-2.5">(&lt;20)</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>



                                    )
                                }



                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-4">

                                    <select
                                        className="border rounded p-2 text-sm"
                                        readOnly
                                    >
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </select>
                                    <span className="text-sm text-gray-600">
                                        Show <span className='font-semibold'>5</span> of 5 data
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        className={`px-3.5 py-1 bg-primary text-white rounded`}
                                    >
                                        1
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &gt;
                                    </button>
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
                                <Print receipt={activeTabLeft == "Endocrine Test" ? receipt44 : activeTabLeft == "Liver" ? receipt45 : activeTabLeft == "Urine Test" ? receipt46 : receipt} />
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LabReportPopup