import React, { useState } from 'react'
import ClinicalNotes from "../../../assets/ClinicalNotes.svg"
import ConsentforAnaesthesia from "../../../assets/ConsentforAnaesthesia.svg"
import KertasAnestesia from "../../../assets/KertasAnestesia.svg"
import { PiArrowsOutSimpleBold } from 'react-icons/pi'
import ClinicalNotesPopup from './ClinicalNotesPopup'
import ClinicalTHTPopup from './ClinicalTHTPopup'
import ConsentPopup from './ConsentPopup'
import KertasPopup from './KertasPopup'

const MedicalNotes = () => {

    const [popup1, setPopup1] = useState(false)
    const [popup2, setPopup2] = useState(false)
    const [popup3, setPopup3] = useState(false)
    const [popup4, setPopup4] = useState(false)

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-3 mt-4">

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={ClinicalNotes} alt="" />
                            <h2 className='text-lg font-semibold'>Clinical Notes</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup1(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                    </div>
                </div>

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={ClinicalNotes} alt="" />
                            <h2 className='text-lg font-semibold'>Clinical Notes THT</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup2(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes THT</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes THT</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Clinical Notes THT</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                    </div>
                </div>

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={KertasAnestesia} alt="" />
                            <h2 className='text-lg font-semibold'>Consent for Anaesthesia</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={() => setPopup3(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
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

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={ConsentforAnaesthesia} alt="" />
                            <h2 className='text-lg font-semibold'>Kertas Anestesia</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer'  onClick={() => setPopup4(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Kertas Anestesia</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Kertas Anestesia</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Kertas Anestesia</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                    </div>
                </div>

            </div>

            {
                popup1 && (
                    <div className="fastFadeIn">
                        <ClinicalNotesPopup setPopup1={setPopup1} />
                    </div>
                )
            }
            {
                popup2 && (
                    <div className="fastFadeIn">
                        <ClinicalTHTPopup setPopup2={setPopup2} />
                    </div>
                )
            }
            {
                popup3 && (
                    <div className="fastFadeIn">
                        <KertasPopup setPopup3={setPopup3} />
                    </div>
                )
            }
            {
                popup4 && (
                    <div className="fastFadeIn">
                        <ConsentPopup setPopup4={setPopup4} />
                    </div>
                )
            }

        </div>
    )
}

export default MedicalNotes