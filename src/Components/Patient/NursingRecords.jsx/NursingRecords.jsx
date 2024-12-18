import React, { useState } from 'react'
import ClinicalNotes from "../../../assets/ClinicalNotes.svg"
import ConsentforAnaesthesia from "../../../assets/ConsentforAnaesthesia.svg"
import Senarai from "../../../assets/Senarai.svg"
import pdfFile from "../../../assets/pdfFile.svg"
import pdf from "../../../assets/pdf.svg"
import KertasAnestesia from "../../../assets/KertasAnestesia.svg"
import { PiArrowsOutSimpleBold, PiBedBold, PiPackageBold } from 'react-icons/pi'
import PadPopup from './PadPopup'
import RekodPopup from './RekodPopup'
import SenaraiSemak from './SenaraiSemak'
import PostPopup from './PostPopup'
import CaraPopup from './CaraPopup'

const NursingRecords = () => {
    const [popup1, setPopup1] = useState(false)
    const [popup2, setPopup2] = useState(false)
    const [popup3, setPopup3] = useState(false)
    const [popup4, setPopup4] = useState(false)
    const [popup5, setPopup5] = useState(false)

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-3 mt-4">

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={ConsentforAnaesthesia} alt="" />
                            <h2 className='text-lg font-semibold'>Pad/Stool/Vomid Chart</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup1(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>SUNGKE922</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>N867921</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>FROSTY728</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>X452378</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>BREEZY314</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={ClinicalNotes} alt="" />
                            <h2 className='text-lg font-semibold'>Rekod Imbangan Cecair</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup2(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>BREEZY314</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>BREEZY314</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>BREEZY314</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={KertasAnestesia} alt="" />
                            <h2 className='text-lg font-semibold'>Senarai Semak Penja...</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={() => setPopup3(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Full Blood Count</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiPackageBold />
                                    <p className='text-sm'>Histopathology</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Urine Test</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiPackageBold />
                                    <p className='text-sm'>Histopathology</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Endocrine</h3>
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

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={Senarai} alt="" />
                            <h2 className='text-lg font-semibold'>Post Operative Nursing...</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={() => setPopup4(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>BREEZY314</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>BREEZY314</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <PiBedBold />
                                    <p className='text-sm'>BREEZY314</p>
                                </div>
                                <p className='text-sm text-[#6E6E6E]'>Q839104</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={pdf} alt="" />
                            <h2 className='text-lg font-semibold'>Cara Pemerhatian</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={() => setPopup5(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                            <img src={pdfFile} alt="" />
                            <div className="">
                                <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                            <img src={pdfFile} alt="" />
                            <div className="">
                                <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
                            <img src={pdfFile} alt="" />
                            <div className="">
                                <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {
                popup1 && (
                    <div className="fastFadeIn">
                        <PadPopup setPopup1={setPopup1} />
                    </div>
                )
            }
            {
                popup2 && (
                    <div className="fastFadeIn">
                        <RekodPopup setPopup2={setPopup2} />
                    </div>
                )
            }
            {
                popup3 && (
                    <div className="fastFadeIn">
                        <SenaraiSemak setPopup3={setPopup3} />
                    </div>
                )
            }
            {
                popup4 && (
                    <div className="fastFadeIn">
                        <PostPopup setPopup4={setPopup4} />
                    </div>
                )
            }
            {
                popup5 && (
                    <div className="fastFadeIn">
                        <CaraPopup setPopup5={setPopup5} />
                    </div>
                )
            }

        </div>
    )
}

export default NursingRecords