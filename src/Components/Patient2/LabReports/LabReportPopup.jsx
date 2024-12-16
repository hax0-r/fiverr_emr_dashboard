import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt24.png"
import LabReport from "../../../assets/LabReport.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const LabReportPopup = ({ setPopup1 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("Special Chemistry")
    const [activeTab2, setActiveTab2] = useState("Haematology")
    const [activeTab3, setActiveTab3] = useState("Urine Appearance")
    const [activeTab4, setActiveTab4] = useState("Lipids")
    const [activeTabLeft, setActiveTabLeft] = useState("Thyroid Function Tests")

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
                                        <div className={` cursor-pointer ${activeTabLeft == "Thyroid Function Tests" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Thyroid Function Tests")}>
                                            <h3 className='font-medium text-[#1D1D1D]'> Thyroid Function Tests</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "General Screening DPS3C Profile" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("General Screening DPS3C Profile")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>General Screening DPS3C Profile</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "Serum/Plasma Glucose" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Serum/Plasma Glucose")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Serum/Plasma Glucose</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "Urine Feme" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Urine Feme")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Urine Feme</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "General Biochemistry" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("General Biochemistry")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>General Biochemistry</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>Histopathology</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className={` cursor-pointer ${activeTabLeft == "Special Chemistry" && "bg-[#f5f7fa]"} border p-3 rounded-lg border-[#cfd1d4] w-full`} onClick={() => setActiveTabLeft("Special Chemistry")}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Special Chemistry</h3>
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
                            <div className="border max-h-[60vh] overflow-auto px-3 pb-4 rounded-lg border-[#cfd1d4]">
                                <div className="flex py-3 border-b items-center justify-between">
                                    <h3 className='font-semibold text-[#1D1D1D] text-xl mt-2'>{activeTabLeft === "Serum/Plasma Glucose"
                                        ? "Serum/Plasma Glucose"
                                        : activeTabLeft === "General Screening DPS3C Profile"
                                            ? "General Screening DPS3C Profile"
                                            : activeTabLeft == "Urine Feme" ? "Urine Feme" : activeTabLeft == "Thyroid Function Tests" ? "Thyroid Function Tests" : activeTabLeft == "General Biochemistry" ? "General Biochemistry" : "Special Chemistry"}
                                    </h3>
                                </div>

                                {
                                    activeTabLeft == "Serum/Plasma Glucose" && (

                                        <div className="">
                                            <div className={` bg-[#f7f8fa] ${previewDocument ? " grid-cols-2" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap-4`}>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Patient Details</p>
                                                    <p className=''> Name</p>
                                                    <p className=''>UR</p>
                                                    <p className=''>Address</p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>&nbsp;</p>
                                                    <p className='font-semibold'>Norartin Binti Sulong (Mokhtar)</p>
                                                    <p className='font-semibold'>: 03/07/1985 </p>
                                                    <p className='font-semibold'>: 850703115180 </p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Doctor Details</p>
                                                    <p className=''>DR KAMINI VETHAGURU
                                                        <br /> POLIKLINIK JOHAN
                                                        <br /> 48-G.BLOK 3 JLN PAHAT G 15/G
                                                        <br /> DATARAN OTOMOBIL
                                                        <br /> SHAH ALAM SEL 40200
                                                    </p>
                                                </div>

                                                <div className={` ${previewDocument ? " grid-cols-2 col-span-2" : "grid-cols-3 col-span-3 "}  gap-5 grid mt-3`}>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>DOB</p>
                                                        <p className='font-semibold'>: 03/07/85</p>
                                                        <p className=''>IC No.</p>
                                                        <p className='font-semibold'>: 850703115180 </p>
                                                        <p className=''>Collected</p>
                                                        <p className='font-semibold'>: 31/01/24 09:10 </p>
                                                        <p className=''>Referred</p>
                                                        <p className='font-semibold'>: 31/01/24 </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Sex</p>
                                                        <p className='font-semibold'>: Female</p>
                                                        <p className=''>Age</p>
                                                        <p className='font-semibold'>: 38 Years </p>
                                                        <p className=''>Ward</p>
                                                        <p className='font-semibold'>: - </p>
                                                        <p className=''>Yr Ref.</p>
                                                        <p className='font-semibold'>: - </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Lab No.</p>
                                                        <p className='font-semibold'>: 24-7403676</p>
                                                        <p className=''>Courier Run</p>
                                                        <p className='font-semibold'>: SA1 </p>
                                                        <p className=''>Report Printed</p>
                                                        <p className='font-semibold'>: 01/02/24 06:15</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={` flex gap-3 items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>Analytes:</p>
                                                <p className='font-semibold'> Serum/Plasma Glucose</p>
                                            </div>

                                            <div className="py-1 rounded-lg border mt-3 border-[#cfd1d4]">
                                                <div className="flex justify-center items-center">
                                                    <div className="w-full bg-white rounded-lg">
                                                        <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                            {/* Table Header */}
                                                            <thead className=" border-b">
                                                                <tr>
                                                                    <th className="p-4 text-left font-medium">No</th>
                                                                    <th className="p-4 text-left font-medium">Result</th>
                                                                    <th className="p-4 text-left font-medium">Unit</th>
                                                                    <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                </tr>
                                                            </thead>

                                                            {/* Table Body */}
                                                            <tbody>
                                                                <tr className="border-b bg-[#f5f7fa]">
                                                                    <td className="p-4">1</td>
                                                                    <td className="p-4">5.0</td>
                                                                    <td className="p-4">mmol/L</td>
                                                                    <td className="p-4">(3.9 - 7.7)</td>
                                                                </tr>
                                                                <tr className="border-b">
                                                                    <td className="p-4">2</td>
                                                                    <td className="p-4">Speciman collected</td>
                                                                    <td className="p-4">09:10 h</td>
                                                                    <td className="p-4"></td>
                                                                </tr>
                                                                <tr className="border-b bg-[#f5f7fa]">
                                                                    <td className="p-4">3</td>
                                                                    <td className="p-4">Speciman type</td>
                                                                    <td className="p-4">Random</td>
                                                                    <td className="p-4"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                                {
                                    activeTabLeft == "General Screening DPS3C Profile" && (
                                        <div className="">

                                            <div className={` bg-[#f7f8fa] ${previewDocument ? " grid-cols-2" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap-4`}>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Patient Details</p>
                                                    <p className=''> Name</p>
                                                    <p className=''>UR</p>
                                                    <p className=''>Address</p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>&nbsp;</p>
                                                    <p className='font-semibold'>Norartin Binti Sulong (Mokhtar)</p>
                                                    <p className='font-semibold'>: 03/07/1985 </p>
                                                    <p className='font-semibold'>: 850703115180 </p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Doctor Details</p>
                                                    <p className=''>DR KAMINI VETHAGURU
                                                        <br /> POLIKLINIK JOHAN
                                                        <br /> 48-G.BLOK 3 JLN PAHAT G 15/G
                                                        <br /> DATARAN OTOMOBIL
                                                        <br /> SHAH ALAM SEL 40200
                                                    </p>
                                                </div>

                                                <div className={` ${previewDocument ? " grid-cols-2 col-span-2" : "grid-cols-3 col-span-3 "}  gap-5 grid mt-3`}>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>DOB</p>
                                                        <p className='font-semibold'>: 03/07/85</p>
                                                        <p className=''>IC No.</p>
                                                        <p className='font-semibold'>: 850703115180 </p>
                                                        <p className=''>Collected</p>
                                                        <p className='font-semibold'>: 31/01/24 09:10 </p>
                                                        <p className=''>Referred</p>
                                                        <p className='font-semibold'>: 31/01/24 </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Sex</p>
                                                        <p className='font-semibold'>: Female</p>
                                                        <p className=''>Age</p>
                                                        <p className='font-semibold'>: 38 Years </p>
                                                        <p className=''>Ward</p>
                                                        <p className='font-semibold'>: - </p>
                                                        <p className=''>Yr Ref.</p>
                                                        <p className='font-semibold'>: - </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Lab No.</p>
                                                        <p className='font-semibold'>: 24-7403676</p>
                                                        <p className=''>Courier Run</p>
                                                        <p className='font-semibold'>: SA1 </p>
                                                        <p className=''>Report Printed</p>
                                                        <p className='font-semibold'>: 01/02/24 06:15</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={` flex gap-3 items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>Analytes:</p>
                                                <p className='font-semibold'> General Screening DPS3C Profile</p>
                                            </div>

                                            <div className="py-3 mt-3 rounded-lg border border-[#cfd1d4]">
                                                <div className="flex text-lg border-b pb-2 border-[#cfd1d4] text-[#6E6E6E] items-center gap-3 px-3">
                                                    <p onClick={() => setActiveTab2("Haematology")} className={`cursor-pointer ${activeTab2 == "Haematology" && "text-secondary"}`}>Haematology</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab2("White Cell Count")} className={`cursor-pointer ${activeTab2 == "White Cell Count" && "text-secondary"}`}>White Cell Count</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab2("Platelets")} className={`cursor-pointer ${activeTab2 == "Platelets" && "text-secondary"}`}>Platelets</p>
                                                </div>
                                                {
                                                    activeTab2 == "Haematology" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Haemoglobin</td>
                                                                            <td className="p-4">132</td>
                                                                            <td className="p-4">g/L</td>
                                                                            <td className="p-4">(64 - 85)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">RBC</td>
                                                                            <td className="p-4">5.08</td>
                                                                            <td className="p-4">x 10¹²/L</td>
                                                                            <td className="p-4">(34 - 50)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">3</td>
                                                                            <td className="p-4">PCV</td>
                                                                            <td className="p-4">0.44</td>
                                                                            <td className="p-4">L/L</td>
                                                                            <td className="p-4">(20 - 39)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">4</td>
                                                                            <td className="p-4">MCV</td>
                                                                            <td className="p-4">86</td>
                                                                            <td className="p-4">f/L</td>
                                                                            <td className="p-4"></td>
                                                                        </tr>
                                                                        <tr className='bg-[#f5f7fa]'>
                                                                            <td className="p-4">5</td>
                                                                            <td className="p-4">MCH</td>
                                                                            <td className="p-4">26</td>
                                                                            <td className="p-4">pg</td>
                                                                            <td className="p-4">(38 - 124)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    activeTab2 == "White Cell Count" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">White Cell Count</td>
                                                                            <td className="p-4">6.5</td>
                                                                            <td className="p-4">x 10¹²/L</td>
                                                                            <td className="p-4">(4.0 - 10.0)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">Neutrophils</td>
                                                                            <td className="p-4">3.8</td>
                                                                            <td className="p-4">x 10¹²/L</td>
                                                                            <td className="p-4">(2.0 - 7.0)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">3</td>
                                                                            <td className="p-4">Lymphocytes</td>
                                                                            <td className="p-4">1.8</td>
                                                                            <td className="p-4">x 10¹²/L</td>
                                                                            <td className="p-4">(1.0 - 4.0)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    activeTab2 == "Platelets" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Platetlets</td>
                                                                            <td className="p-4">371</td>
                                                                            <td className="p-4">x 10¹²/L</td>
                                                                            <td className="p-4">(150 - 410)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className={` flex gap-3 items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>Validated by Sri Wahyuni Bt Wahab (Diploma In MLT. KLMUC)</p>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    activeTabLeft == "Urine Feme" && (
                                        <div className="">

                                            <div className={` bg-[#f7f8fa] ${previewDocument ? " grid-cols-2" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap-4`}>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Patient Details</p>
                                                    <p className=''> Name</p>
                                                    <p className=''>UR</p>
                                                    <p className=''>Address</p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>&nbsp;</p>
                                                    <p className='font-semibold'>Norartin Binti Sulong (Mokhtar)</p>
                                                    <p className='font-semibold'>: 03/07/1985 </p>
                                                    <p className='font-semibold'>: 850703115180 </p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Doctor Details</p>
                                                    <p className=''>DR KAMINI VETHAGURU
                                                        <br /> POLIKLINIK JOHAN
                                                        <br /> 48-G.BLOK 3 JLN PAHAT G 15/G
                                                        <br /> DATARAN OTOMOBIL
                                                        <br /> SHAH ALAM SEL 40200
                                                    </p>
                                                </div>

                                                <div className={` ${previewDocument ? " grid-cols-2 col-span-2" : "grid-cols-3 col-span-3 "}  gap-5 grid mt-3`}>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>DOB</p>
                                                        <p className='font-semibold'>: 03/07/85</p>
                                                        <p className=''>IC No.</p>
                                                        <p className='font-semibold'>: 850703115180 </p>
                                                        <p className=''>Collected</p>
                                                        <p className='font-semibold'>: 31/01/24 09:10 </p>
                                                        <p className=''>Referred</p>
                                                        <p className='font-semibold'>: 31/01/24 </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Sex</p>
                                                        <p className='font-semibold'>: Female</p>
                                                        <p className=''>Age</p>
                                                        <p className='font-semibold'>: 38 Years </p>
                                                        <p className=''>Ward</p>
                                                        <p className='font-semibold'>: - </p>
                                                        <p className=''>Yr Ref.</p>
                                                        <p className='font-semibold'>: - </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Lab No.</p>
                                                        <p className='font-semibold'>: 24-7403676</p>
                                                        <p className=''>Courier Run</p>
                                                        <p className='font-semibold'>: SA1 </p>
                                                        <p className=''>Report Printed</p>
                                                        <p className='font-semibold'>: 01/02/24 06:15</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={` flex gap-3 items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>Analytes:</p>
                                                <p className='font-semibold'> Urine Appearance</p>
                                            </div>

                                            <div className="py-3 mt-3 rounded-lg border border-[#cfd1d4]">
                                                <div className="flex text-lg border-b pb-2 border-[#cfd1d4] text-[#6E6E6E] items-center gap-3 px-3">
                                                    <p onClick={() => setActiveTab3("Urine Appearance")} className={`cursor-pointer ${activeTab3 == "Urine Appearance" && "text-secondary"}`}>Urine Appearance</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab3("Chemistry")} className={`cursor-pointer ${activeTab3 == "Chemistry" && "text-secondary"}`}>Chemistry</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab3("Microscopy")} className={`cursor-pointer ${activeTab3 == "Microscopy" && "text-secondary"}`}>Microscopy</p>
                                                </div>
                                                {
                                                    activeTab3 == "Urine Appearance" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Transparency</td>
                                                                            <td className="p-4">Turbid</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4"></td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">Colour</td>
                                                                            <td className="p-4">Amber</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4"></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    activeTab3 == "Chemistry" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">SG:</td>
                                                                            <td className="p-4">1.025</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(1.004-1.030)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">pH:</td>
                                                                            <td className="p-4">6.0</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(4.8-7.4)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">3</td>
                                                                            <td className="p-4">Leucocytes:</td>
                                                                            <td className="p-4">±±</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(Nil)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">4</td>
                                                                            <td className="p-4">Blood:</td>
                                                                            <td className="p-4">Nil</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(Nil)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">5</td>
                                                                            <td className="p-4">Nitrite:</td>
                                                                            <td className="p-4">Negative:</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(Negative)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    activeTab3 == "Microscopy" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Leucocytes</td>
                                                                            <td className="p-4">81 x 10⁹/L</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(10 x 10⁹/L)</td>
                                                                        </tr>
                                                                        <tr className="border-b ">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">Erythrocytes</td>
                                                                            <td className="p-4">0 x 10⁹/L</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(3 x 10⁹/L)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Epithelial Cells</td>
                                                                            <td className="p-4">Nil</td>
                                                                            <td className="p-4"></td>
                                                                            <td className="p-4">(Nil)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <p className='px-4 pt-4 text-sm text-[#1d1d1d]'>Nunerous amorphous urates.
                                                                    <br /> Casts not detected.</p>
                                                            </div>


                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className={` border p-3 rounded-lg border-[#cfd1d4] bg-[#f7f8fa] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>
                                                    <span className='text-[#1d1d1d] block p-2 font-semibold text-center'>REPORT COMPLETED</span>
                                                    Tests Requested: <br />
                                                    HAEMATOLOGY GENERAL, QDX TAG ON ORDERING, GENERAL SCREEN-BIOCHEM, HAEMOGLOBIN A1C (HBA1C), GLUCOSE, SERUM/PLASMA, TFT MASTER PANEL, GLUCOSE, SERUM/PLASMA, GENERAL SCREEN-MICROBIOL
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    activeTabLeft == "Thyroid Function Tests" && (


                                        <div className="">
                                            <div className={` bg-[#f7f8fa] ${previewDocument ? " grid-cols-2" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap-4`}>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-4'>Patient Details</p>
                                                    <p className=''> Name</p>
                                                    <p className=''>DOB</p>
                                                    <p className=''>IC No.</p>
                                                    <p className=''>Date of Test</p>
                                                    <p className=''>Generated</p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'></p>
                                                    <p className='font-semibold'>Norartin Binti Sulong (Mokhtar) (39y Female)</p>
                                                    <p className='font-semibold'>: 03/07/1985 </p>
                                                    <p className='font-semibold'>: 850703115180 </p>
                                                    <p className='font-semibold'>: 11/05/2024 </p>
                                                    <p className='font-semibold'>: 14/05/2024 </p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-4'>Clinic Details</p>
                                                    <p className=''>POLIKLINIK JOHAN
                                                        <br /> POLIKLINIK JOHAN (JOMEZBM)
                                                        <br /> Lab No.: 24-8766231</p>
                                                </div>
                                            </div>
                                            <div className={` flex justify-between items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='font-semibold'> THYROID FUNCTION TESTS</p>
                                                <p className='text-[#6E6E6E] font-medium'></p>
                                            </div>
                                            <div className={` flex justify-between items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>ENDOCRINOLOGY</p>
                                                <p className='font-semibold'> SPECIMEN: SERUM</p>
                                            </div>

                                            <div className="flex justify-center items-center">
                                                <div className="w-full bg-white rounded-lg border mt-4">
                                                    <p className='text-sm font-medium p-4 border-b  text-[#6E6E6E]'>THROID FUNCTION ASSAYS</p>
                                                    <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                        <thead className=" border-b">
                                                            <tr>
                                                                <th className="p-4 text-left font-medium">No</th>
                                                                <th className="p-4 text-left font-medium">Analytes</th>
                                                                <th className="p-4 text-left font-medium">Result</th>
                                                                <th className="p-4 text-left font-medium">Unit</th>
                                                                <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                            </tr>
                                                        </thead>

                                                        {/* Table Body */}
                                                        <tbody>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="p-4">1</td>
                                                                <td className="p-4">Free Thyroxine (FT4)</td>
                                                                <td className="p-4">16.7</td>
                                                                <td className="p-4">µmol/L</td>
                                                                <td className="p-4">(9.0 - 25.0)</td>
                                                            </tr>
                                                            <tr className="border-b ">
                                                                <td className="p-4">2</td>
                                                                <td className="p-4">Thyroid Stimulating Hormone</td>
                                                                <td className="p-4">0.375</td>
                                                                <td className="p-4">mIU/L</td>
                                                                <td className="p-4">(0.400 - 4.700)</td>
                                                            </tr>
                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                <td className="p-4">3</td>
                                                                <td className="p-4">Free Tri-iodothyronine (FT3)</td>
                                                                <td className="p-4">5.8</td>
                                                                <td className="p-4">µmol/L</td>
                                                                <td className="p-4">(3.5 - 6.5)</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>



                                    )
                                }
                                {
                                    activeTabLeft == "General Biochemistry" && (
                                        <div className="">

                                            <div className={` bg-[#f7f8fa] ${previewDocument ? " grid-cols-2" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap-4`}>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Patient Details</p>
                                                    <p className=''> Name</p>
                                                    <p className=''>UR</p>
                                                    <p className=''>Address</p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>&nbsp;</p>
                                                    <p className='font-semibold'>Norartin Binti Sulong (Mokhtar)</p>
                                                    <p className='font-semibold'>: 03/07/1985 </p>
                                                    <p className='font-semibold'>: 850703115180 </p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Doctor Details</p>
                                                    <p className=''>DR KAMINI VETHAGURU
                                                        <br /> POLIKLINIK JOHAN
                                                        <br /> 48-G.BLOK 3 JLN PAHAT G 15/G
                                                        <br /> DATARAN OTOMOBIL
                                                        <br /> SHAH ALAM SEL 40200
                                                    </p>
                                                </div>

                                                <div className={` ${previewDocument ? " grid-cols-2 col-span-2" : "grid-cols-3 col-span-3 "}  gap-5 grid mt-3`}>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>DOB</p>
                                                        <p className='font-semibold'>: 03/07/85</p>
                                                        <p className=''>IC No.</p>
                                                        <p className='font-semibold'>: 850703115180 </p>
                                                        <p className=''>Collected</p>
                                                        <p className='font-semibold'>: 31/01/24 09:10 </p>
                                                        <p className=''>Referred</p>
                                                        <p className='font-semibold'>: 31/01/24 </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Sex</p>
                                                        <p className='font-semibold'>: Female</p>
                                                        <p className=''>Age</p>
                                                        <p className='font-semibold'>: 38 Years </p>
                                                        <p className=''>Ward</p>
                                                        <p className='font-semibold'>: - </p>
                                                        <p className=''>Yr Ref.</p>
                                                        <p className='font-semibold'>: - </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Lab No.</p>
                                                        <p className='font-semibold'>: 24-7403676</p>
                                                        <p className=''>Courier Run</p>
                                                        <p className='font-semibold'>: SA1 </p>
                                                        <p className=''>Report Printed</p>
                                                        <p className='font-semibold'>: 01/02/24 06:15</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={` flex gap-3 items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>Analytes:</p>
                                                <p className='font-semibold'> General Biochemistry</p>
                                            </div>

                                            <div className="py-3 mt-3 rounded-lg border border-[#cfd1d4]">
                                                <div className="flex text-lg border-b pb-2 border-[#cfd1d4] text-[#6E6E6E] items-center gap-3 px-3">
                                                    <p onClick={() => setActiveTab("Lipids")} className={`cursor-pointer ${activeTab == "Lipids" && "text-secondary"}`}>Lipids</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab("Electrolytes")} className={`cursor-pointer ${activeTab == "Electrolytes" && "text-secondary"}`}>Electrolytes</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab("Renal Function")} className={`cursor-pointer ${activeTab == "Renal Function" && "text-secondary"}`}>Renal Function</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab("Liver Function")} className={`cursor-pointer ${activeTab == "Liver Function" && "text-secondary"}`}>Liver Function</p>
                                                </div>
                                                {
                                                    activeTab == "Lipids" && (
                                                        <div className="">
                                                            <div className="flex justify-center items-center">
                                                                <div className="w-full bg-white rounded-lg">
                                                                    <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                        {/* Table Header */}
                                                                        <thead className=" border-b">
                                                                            <tr>
                                                                                <th className="p-4 text-left font-medium">No</th>
                                                                                <th className="p-4 text-left font-medium">Analytes</th>
                                                                                <th className="p-4 text-left font-medium">Result</th>
                                                                                <th className="p-4 text-left font-medium">Unit</th>
                                                                                <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                            </tr>
                                                                        </thead>

                                                                        {/* Table Body */}
                                                                        <tbody>
                                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                                <td className="p-4">1</td>
                                                                                <td className="p-4">Total Cholesterol</td>
                                                                                <td className="p-4">1.22</td>
                                                                                <td className="p-4">mmol/L</td>
                                                                                <td className="p-4">(&#60;5.2)</td>
                                                                            </tr>
                                                                            <tr className="border-b">
                                                                                <td className="p-4">2</td>
                                                                                <td className="p-4">Triglyceride</td>
                                                                                <td className="p-4">1.22</td>
                                                                                <td className="p-4">mmol/L</td>
                                                                                <td className="p-4">(&#60;1.70)</td>
                                                                            </tr>
                                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                                <td className="p-4">3</td>
                                                                                <td className="p-4">HDL Cholesterol</td>
                                                                                <td className="p-4">1.25</td>
                                                                                <td className="p-4">mmol/L</td>
                                                                                <td className="p-4">(1.20)</td>
                                                                            </tr>
                                                                            <tr className="border-b ">
                                                                                <td className="p-4">4</td>
                                                                                <td className="p-4">LDL Cholesterol</td>
                                                                                <td className="p-4">4.39</td>
                                                                                <td className="p-4">mmol/L</td>
                                                                                <td className="p-4">(&#60;2.60)</td>
                                                                            </tr>
                                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                                <td className="p-4">5</td>
                                                                                <td className="p-4">Non-HDL Cholesterol</td>
                                                                                <td className="p-4">4.95</td>
                                                                                <td className="p-4">mmol/L</td>
                                                                                <td className="p-4">(&#60;3.40)</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                {
                                                    activeTab == "Electrolytes" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Sodium</td>
                                                                            <td className="p-4">139</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4">(135-145)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">Potassium </td>
                                                                            <td className="p-4">4.3</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4">(3.5-5.1)
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">3</td>
                                                                            <td className="p-4">Chloride</td>
                                                                            <td className="p-4">96</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4">(95-110)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                {
                                                    activeTab == "Renal Function" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Urea</td>
                                                                            <td className="p-4">4.1</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4"> (2.5-8.0)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">Creatinine</td>
                                                                            <td className="p-4">49</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4">(40-60)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">3</td>
                                                                            <td className="p-4">eGFR</td>
                                                                            <td className="p-4">120</td>
                                                                            <td className="p-4">mL/min/1.73m²</td>
                                                                            <td className="p-4">(40-80)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">4</td>
                                                                            <td className="p-4">Uric Acid </td>
                                                                            <td className="p-4">0.23</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4">(0.15-0.45)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">5</td>
                                                                            <td className="p-4">Calcium</td>
                                                                            <td className="p-4">2.20</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4">(2.10-2.55)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    activeTab == "Liver Function" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Total Protein</td>
                                                                            <td className="p-4">73</td>
                                                                            <td className="p-4">g/L</td>
                                                                            <td className="p-4">(60-82)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">Albumin </td>
                                                                            <td className="p-4">42</td>
                                                                            <td className="p-4">g/L</td>
                                                                            <td className="p-4">(35-50)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">3</td>
                                                                            <td className="p-4">Globulin </td>
                                                                            <td className="p-4">31</td>
                                                                            <td className="p-4">g/L</td>
                                                                            <td className="p-4">(20-39)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">4</td>
                                                                            <td className="p-4">Albumin/Globulin ratio  </td>
                                                                            <td className="p-4">1.4</td>
                                                                            <td className="p-4">mmol/L</td>
                                                                            <td className="p-4">(1.0-2.5)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">5</td>
                                                                            <td className="p-4">Alkaline Phosphatase </td>
                                                                            <td className="p-4">84</td>
                                                                            <td className="p-4">g/L</td>
                                                                            <td className="p-4">(30-120)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                            {
                                                activeTab == "Special Chemistry" && (
                                                    <p className='border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm bg-[#f7f8fa]'>Diagnostic Values of HbA1c in Malaysian Adults
                                                    </p>
                                                )
                                            }
                                        </div>
                                    )
                                }
                                {
                                    activeTabLeft == "Special Chemistry" && (

                                        <div className="">

                                            <div className={` bg-[#f7f8fa] ${previewDocument ? " grid-cols-2" : "grid-cols-3"} border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm grid gap-4`}>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Patient Details</p>
                                                    <p className=''> Name</p>
                                                    <p className=''>UR</p>
                                                    <p className=''>Address</p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>&nbsp;</p>
                                                    <p className='font-semibold'>Norartin Binti Sulong (Mokhtar)</p>
                                                    <p className='font-semibold'>: 03/07/1985 </p>
                                                    <p className='font-semibold'>: 850703115180 </p>
                                                </div>
                                                <div className=" space-y-1">
                                                    <p className='font-semibold pb-3'>Doctor Details</p>
                                                    <p className=''>DR KAMINI VETHAGURU
                                                        <br /> POLIKLINIK JOHAN
                                                        <br /> 48-G.BLOK 3 JLN PAHAT G 15/G
                                                        <br /> DATARAN OTOMOBIL
                                                        <br /> SHAH ALAM SEL 40200
                                                    </p>
                                                </div>

                                                <div className={` ${previewDocument ? " grid-cols-2 col-span-2" : "grid-cols-3 col-span-3 "}  gap-5 grid mt-3`}>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>DOB</p>
                                                        <p className='font-semibold'>: 03/07/85</p>
                                                        <p className=''>IC No.</p>
                                                        <p className='font-semibold'>: 850703115180 </p>
                                                        <p className=''>Collected</p>
                                                        <p className='font-semibold'>: 31/01/24 09:10 </p>
                                                        <p className=''>Referred</p>
                                                        <p className='font-semibold'>: 31/01/24 </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Sex</p>
                                                        <p className='font-semibold'>: Female</p>
                                                        <p className=''>Age</p>
                                                        <p className='font-semibold'>: 38 Years </p>
                                                        <p className=''>Ward</p>
                                                        <p className='font-semibold'>: - </p>
                                                        <p className=''>Yr Ref.</p>
                                                        <p className='font-semibold'>: - </p>
                                                    </div>
                                                    <div className=" space-y-1 grid grid-cols-2">
                                                        <p className=''>Lab No.</p>
                                                        <p className='font-semibold'>: 24-7403676</p>
                                                        <p className=''>Courier Run</p>
                                                        <p className='font-semibold'>: SA1 </p>
                                                        <p className=''>Report Printed</p>
                                                        <p className='font-semibold'>: 01/02/24 06:15</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={` flex gap-3 items-center border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm`}>
                                                <p className='text-[#6E6E6E] font-medium'>Analytes:</p>
                                                <p className='font-semibold'> Special Chemistry</p>
                                            </div>

                                            <div className="py-3 mt-3 rounded-lg border border-[#cfd1d4]">
                                                <div className="flex text-lg border-b pb-2 border-[#cfd1d4] text-[#6E6E6E] items-center gap-3 px-3">
                                                    <p onClick={() => setActiveTab("Special Chemistry")} className={`cursor-pointer ${activeTab == "Special Chemistry" && "text-secondary"}`}>Special Chemistry</p>
                                                    <div className="h-5 border border-[#cfd1d4]"></div>
                                                    <p onClick={() => setActiveTab("Endocrinology")} className={`cursor-pointer ${activeTab == "Endocrinology" && "text-secondary"}`}>Endocrinology</p>
                                                </div>
                                                {
                                                    activeTab == "Special Chemistry" && (
                                                        <div className="">
                                                            <div className="flex justify-center items-center">
                                                                <div className="w-full bg-white rounded-lg">
                                                                    <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                        {/* Table Header */}
                                                                        <thead className=" border-b">
                                                                            <tr>
                                                                                <th className="p-4 text-left font-medium">No</th>
                                                                                <th className="p-4 text-left font-medium">Analytes</th>
                                                                                <th className="p-4 text-left font-medium">Result</th>
                                                                                <th className="p-4 text-left font-medium">Unit</th>
                                                                                <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                            </tr>
                                                                        </thead>

                                                                        {/* Table Body */}
                                                                        <tbody>
                                                                            <tr className="border-b bg-[#f5f7fa]">
                                                                                <td className="p-4">1</td>
                                                                                <td className="p-4">Haemoglobin</td>
                                                                                <td className="p-4">38</td>
                                                                                <td className="p-4">mmol/mo</td>
                                                                                <td className="p-4">5.7%</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                {
                                                    activeTab == "Endocrinology" && (
                                                        <div className="flex justify-center items-center">
                                                            <div className="w-full bg-white rounded-lg">
                                                                <table className="w-full table-auto border-collapse text-sm text-[#1D1D1D]">
                                                                    {/* Table Header */}
                                                                    <thead className=" border-b">
                                                                        <tr>
                                                                            <th className="p-4 text-left font-medium">No</th>
                                                                            <th className="p-4 text-left font-medium">Analytes</th>
                                                                            <th className="p-4 text-left font-medium">Result</th>
                                                                            <th className="p-4 text-left font-medium">Unit</th>
                                                                            <th className="p-4 text-left font-medium">Ref. Ranges</th>
                                                                        </tr>
                                                                    </thead>

                                                                    {/* Table Body */}
                                                                    <tbody>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">1</td>
                                                                            <td className="p-4">Free Thyroxine (FT4)</td>
                                                                            <td className="p-4">16.0</td>
                                                                            <td className="p-4">pmol/L</td>
                                                                            <td className="p-4">(64 - 85)</td>
                                                                        </tr>
                                                                        <tr className="border-b">
                                                                            <td className="p-4">2</td>
                                                                            <td className="p-4">Thyroid Stimulating Hormone</td>
                                                                            <td className="p-4">0.383</td>
                                                                            <td className="p-4">pmol/L</td>
                                                                            <td className="p-4">(0.400 - 4.700)</td>
                                                                        </tr>
                                                                        <tr className="border-b bg-[#f5f7fa]">
                                                                            <td className="p-4">3</td>
                                                                            <td className="p-4">Free Tri-lodothyronine (FT3):</td>
                                                                            <td className="p-4">6.0</td>
                                                                            <td className="p-4">pmol/L</td>
                                                                            <td className="p-4">(3.5 - 6.5)</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                            {
                                                activeTab == "Special Chemistry" && (
                                                    <p className='border p-3 rounded-lg border-[#cfd1d4] mt-3 text-sm bg-[#f7f8fa]'>Diagnostic Values of HbA1c in Malaysian Adults
                                                    </p>
                                                )
                                            }
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
                                <Print receipt={receipt} />
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LabReportPopup