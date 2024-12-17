import React, { useState } from 'react'
import pdfFile from "../../../assets/pdfFile.svg"
import pdf from "../../../assets/pdf.svg"
import AdmissionChecklist from "../../../assets/AdmissionChecklist.svg"
import AdmissionLetter from "../../../assets/AdmissionLetter.svg"
import PatientInformation from "../../../assets/PatientInformation.svg"
import { PiArrowsOutSimpleBold } from 'react-icons/pi'
import ChecklistPopup from './ChecklistPopup'
import PatientInformationPopup from './PatientInformationPopup'
import WardProceduresPopup from './WardProceduresPopup'
import InpatientRegistrationPopup from './InpatientRegistrationPopup'
import AdmissionLetterPopup from './AdmissionLetterPopup'
import DischargeChitPopup from './DischargeChitPopup'


const Admission = () => {
    const [popup1, setPopup1] = useState(false)
    const [popup2, setPopup2] = useState(false)
    const [popup3, setPopup3] = useState(false)
    const [popup4, setPopup4] = useState(false)
    const [popup5, setPopup5] = useState(false)
    const [popup6, setPopup6] = useState(false)

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-3 mt-4">


                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={AdmissionLetter} alt="" />
                            <h2 className='text-lg font-semibold'>Patient Registration...</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup3(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3 font-medium">
                        <div className="border p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                            <h3 className='font-medium '>Patient Registration Form</h3>
                            <div className="flex items-center justify-between">
                                <p className='text-sm pt-1'>Nurartini Sulong @ Mokhtar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-[#cfd1d4] rounded-lg bg-white">
                    <div className="flex items-center justify-between p-4 ">
                        <div className="flex items-center justify-between gap-3">
                            <img src={PatientInformation} alt="" />
                            <h2 className='text-lg font-semibold'>Patient Information</h2>
                        </div>
                        <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup4(true)} />
                    </div>
                    <div className="border-b border-[#cfd1d4]"></div>
                    <div className="p-4 flex flex-col gap-3 font-medium">
                        <div className="border p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                            <h3 className='font-medium '>Norartini, Sulong @Mokhtar</h3>
                            <div className="flex items-center justify-between">
                                <p className='text-sm pt-1'>N880842</p>
                            </div>
                        </div>
                        <div className=" p-3 rounded-lg text-[#1D1D1D] -[#cfd1d4] w-full">
                            <h3 className='font-medium '>&nbsp;</h3>
                            <div className="flex items-center justify-between">
                                <p className='text-sm pt-1'>&nbsp;</p>
                            </div>
                        </div>
                        <div className=" p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                            <h3 className='font-medium '>&nbsp;</h3>
                            <div className="flex items-center justify-between">
                                <p className='text-sm pt-1'>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {
                popup1 && (
                    <div className="fastFadeIn">
                        <ChecklistPopup setPopup1={setPopup1} />
                    </div>
                )
            }
            {/* Discharge Chit == Addmission letter */}
            {/* due to mistake */}
            {
                popup2 && (
                    <div className="fastFadeIn">
                        <AdmissionLetterPopup setPopup2={setPopup2} />
                    </div>
                )
            }
            {
                popup3 && (
                    <div className="fastFadeIn">
                        <InpatientRegistrationPopup setPopup3={setPopup3} />
                    </div>
                )
            }
            {
                popup4 && (
                    <div className="fastFadeIn">
                        <PatientInformationPopup setPopup4={setPopup4} />
                    </div>
                )
            }
            {/*  Addmission letter Discharge Chit == */}
            {/* due to mistake */}
            {
                popup5 && (
                    <div className="fastFadeIn">
                        <DischargeChitPopup setPopup5={setPopup5} />
                    </div>
                )
            }
            {
                popup6 && (
                    <div className="fastFadeIn">
                        <WardProceduresPopup setPopup6={setPopup6} />
                    </div>
                )
            }

        </div>
    )
}


export default Admission