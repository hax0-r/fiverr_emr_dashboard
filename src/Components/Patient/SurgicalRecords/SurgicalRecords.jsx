import React, { useState } from 'react'
import Consent from "../../../assets/ConsentforAnaesthesia.svg"
import Senarai from "../../../assets/Senarai.svg"
import { PiArrowsOutSimpleBold } from 'react-icons/pi'
import ButirPopup from './ButirPopup'
import SurgicalOperationPopup from './SurgicalOperationPopup'


const SurgicalRecords = () => {
    const [popup1, setPopup1] = useState(false)
    const [popup2, setPopup2] = useState(false)
    const [popup3, setPopup3] = useState(false)

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-3 mt-4">

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={Senarai} alt="" />
                            <h2 className='text-lg font-semibold'>Surgical Operation Rep...</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup1(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
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

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={Consent} alt="" />
                            <h2 className='text-lg font-semibold'>Perkhidmatan Bedah</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup2(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Perkhidmatan Dewan Bedah</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Perkhidmatan Dewan Bedah</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Perkhidmatan Dewan Bedah</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={Consent} alt="" />
                            <h2 className='text-lg font-semibold'>Butir Implant</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup3(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Butir Implant Pesakit Dewan Be...</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Butir Implant Pesakit Dewan Be...</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                            <h3 className='font-medium text-[#1D1D1D]'>Butir Implant Pesakit Dewan Be...</h3>
                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                        </div>
                    </div>
                </div>

            </div>

            {
                popup1 && (
                    <div className="fastFadeIn">
                        {/* <Report setPopup1={setPopup1} /> */}
                    </div>
                )
            }
            {
                popup2 && (
                    <div className="fastFadeIn">
                        <SurgicalOperationPopup setPopup2={setPopup2} />
                    </div>
                )
            }
            {
                popup3 && (
                    <div className="fastFadeIn">
                        <ButirPopup setPopup3={setPopup3} />
                    </div>
                )
            }

        </div>
    )
}

export default SurgicalRecords