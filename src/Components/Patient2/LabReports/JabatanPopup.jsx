import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import JabatanPerkhidmatan from "../../../assets/Jabatan.svg"
import receipt from "../../../assets/receipt37.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const JabatanPopup = ({ setPopup7 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)
    const [activeTab, setActiveTab] = useState("1")

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup7(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={JabatanPerkhidmatan} alt="" />
                        <h2 className='text-lg font-semibold'>Jabatan Perkhidmatan</h2>
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
                                        <div className={` border p-3 rounded-lg border-[#cfd1d4] w-full`}>
                                            <h3 className='font-medium text-[#1D1D1D]'>Cytopathology</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border text-sm p-3 max-h-[70vh] text-[#1D1D1D] overflow-y-auto rounded-lg border-[#cfd1d4]">

                                <div className="">

                                    <div className={`border gap-5 p-3 bg-[#F7F8FA] grid ${previewDocument ? "grid-cols-2" : "grid-cols-3"} text-sm rounded-lg border-[#CFD1D4] `}>

                                        <div className="grid grid-cols-2 space-y-1">
                                            <p className='font-semibold pb-1 col-span-2'>Patient</p>
                                            <p className=''>MRN</p>
                                            <p className='font-semibold'>: M880842</p>
                                            <p className=''>Name</p>
                                            <p className='font-semibold'>: Puan Norartini Sulong @Mokhtar</p>
                                            <p className=''>Gender</p>
                                            <p className='font-semibold'>: Female</p>
                                            <p className=''>DOB</p>
                                            <p className='font-semibold'>: 07/03/1985 </p>
                                            <p className=''>NIC</p>
                                            <p className='font-semibold'>: 850703115180 </p>
                                        </div>
                                        <div className="grid grid-cols-2 space-y-1">
                                            <p className='font-semibold pb-1 col-span-2'>Requested by</p>
                                            <p className='col-span-2'>Prof. Prof. Madya. Dr. Norlela Sukor</p>
                                            <p className='col-span-2'>HCTM</p>
                                            <p className=''>Location</p>
                                            <p className='font-semibold'>: UKMSC</p>
                                            <p className=''>Tel</p>
                                            <p className='font-semibold'>: -</p>
                                            <p className=''>Email</p>
                                            <p className='font-semibold'>: -</p>
                                            <p className=''>Request No</p>
                                            <p className='font-semibold'>: SF2400084 </p>
                                        </div>
                                        <div className="grid grid-cols-2 space-y-1">
                                            <p className='font-semibold pb-1 col-span-2'>Department Details</p>
                                            <p className='col-span-2'>Cytopathology</p>
                                            <p className=''>Tel</p>
                                            <p className='font-semibold'>: 603-91455466</p>
                                            <p className='font-semibold pb-1 col-span-2 pt-3'>Dates</p>
                                            <p className=''>Arrived</p>
                                            <p className='font-semibold'>: 05/03/2024 12:45</p>
                                            <p className=''>Completed</p>
                                            <p className='font-semibold'>: 06/03/2024 14:56</p>
                                        </div>

                                    </div>

                                    {
                                        activeTab == 2 && (
                                            <div className="border mt-3 p-3 text-sm rounded-lg border-[#CFD1D4]">
                                                <p className=' pb-1'>Pathologist:</p>
                                                <p className=' pb-1 font-semibold'>Dr Nordashima Abd Shukor</p>
                                                <p className=' pb-1'>MMC 34009 <br /> Histopathologist & Cytopathologist</p>
                                                <p className=' pb-1 font-semibold pt-3'>DISCLAIMER:</p>
                                                <p className=' pb-1'>This is a computer-generated report. <br /> No signature is required.</p>
                                            </div>
                                        )
                                    }

                                    {
                                        activeTab == 1 && (
                                            <div className="border mt-3 p-3 text-sm rounded-lg border-[#CFD1D4] ">
                                                <p className='font-semibold pb-1'>Clinical History:</p>
                                                <p>A 39-year-old lady with multiple thyroid nodules. FNA performed on left midpole nodule; 1.7cm TIRADS 4.</p>
                                                <p className='font-semibold pb-1 pt-3'>Procedure:</p>
                                                <p>FNA left thyroid nodule (performed by radiology team).</p>
                                                <p className='font-semibold pb-1 pt-3'>Microscopic Description:</p>
                                                <p>Smears are hypocellular comprising of a few groups of uniform thyroid follicular cells, arranged in macrofollicles and small monolayered sheets with presence of thin and thick colloid. The background show few foamy macrophages and blood</p>
                                                <p className='font-semibold pb-1 pt-3'>Cytological interpretation:</p>
                                                <p>FNA left thyroid nodule: Cytological features are suggestive of colloid nodule with cystic degenerative changes. </p>
                                                <p className=' pb-1 pt-3'><b>Comment:</b> The sample are suboptimal. Advise to correlate with clinical and radiological findings.</p>
                                                <p className=' pb-1 pt-3'><b>Category:</b> Bethesda II ( Benign)</p>
                                                <p className=' pb-1 pt-3'>Date:6/03/2024</p>
                                                <p className=' pb-1 pt-3 font-semibold'>Reported by: <br /> Assoc. Prof Dr Nordashima Abd Shukor</p>
                                                <p className=' pb-1 '>MD (USM), MPath (UKM)
                                                    <br /> PathologistMMC
                                                    <br /> Full Registration Number: 34009
                                                    <br /> ANSR No: 130391</p>
                                            </div>
                                        )}


                                </div>
                            </div>

                            <div className={`mt-4 flex items-center ${previewDocument ? "justify-end" : "justify-between"}`}>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setActiveTab(1)}
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &lt;
                                    </button>
                                    <button onClick={() => setActiveTab(1)}
                                        className={`px-3.5 py-1 ${activeTab == 1 && "bg-primary text-white"} border-2 rounded-lg`}
                                    >
                                        1
                                    </button>
                                    <button onClick={() => setActiveTab(2)}
                                        className={`px-3.5 py-1  ${activeTab == 2 && "bg-primary text-white"} border-2 rounded-lg `}
                                    >
                                        2
                                    </button>
                                    <button onClick={() => setActiveTab(2)}
                                        className="px-3 py-1 bg-white border-2 rounded-lg"
                                    >
                                        &gt;
                                    </button>
                                </div>
                                {
                                    !previewDocument && (
                                        <div className="flex gap-2 items-center">
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

export default JabatanPopup