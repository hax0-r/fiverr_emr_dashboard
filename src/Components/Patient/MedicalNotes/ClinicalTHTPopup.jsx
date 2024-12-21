import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import ClinicalNotes from "../../../assets/ClinicalNotes.svg"
import receipt from "../../../assets/receipt2.png"
import sign from "../../../assets/sign11.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'
import { RiImage2Line } from 'react-icons/ri'

const ClinicalTHTPopup = ({ setPopup2 }) => {

    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup2(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={ClinicalNotes} alt="" />
                        <h2 className='text-lg font-semibold'>Clinical Notes</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinic Notes THT</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinic Notes THT</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Clinic Notes THT</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[65vh] overflow-auto">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Clinic Notes THT</h3>
                                <p className='font-medium text-sm pt-2 text-[#6E6E6E]'>Date : 15 January 2024</p>
                                <p className='font-medium text-sm text-[#6E6E6E]'>Occupation : </p>
                                <p className='text-primary text-sm font-medium inline-flex mt-1 items-center gap-2 border border-primary rounded-lg py-1.5 px-2'><RiImage2Line className='text-lg' /> Attachment - Investigation Image <PiArrowsOutSimpleBold className='text-lg' /> </p>
                                <div className="overflow-x-auto mt-3 rounded-lg border border-gray-200">
                                    <table className="w-full border-collapse  text-sm text-left">
                                        <tbody>
                                            {/* Present History */}
                                            <tr>
                                                <td className="border bg-[#f5f7fa] p-4 ">Present History</td>
                                                <td className="border  p-4 font-medium">
                                                    <ul className="list-disc list-inside">
                                                        <li>Aspiration symptoms x2/52</li>
                                                        <li>Hoarseness x1/52</li>
                                                        <li>Throat clearing</li>
                                                        <li>Dysphagia x3/52 (difficulty eating solid food, no problem with fluid)</li>
                                                        <li>No odynophagia</li>
                                                        <li>No ear pain</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            {/* Previous History */}
                                            <tr className="">
                                                <td className="border  p-4  bg-[#f5f7fa]">Previous History</td>
                                                <td className="border  p-4 font-medium">None</td>
                                            </tr>
                                            {/* Drug History */}
                                            <tr>
                                                <td className="border  p-4  bg-[#f5f7fa]">Drug History</td>
                                                <td className="border  p-4 font-medium">No Allergy</td>
                                            </tr>
                                            {/* Previous Admissions */}
                                            <tr className="">
                                                <td className="border  p-4  bg-[#f5f7fa]">Previous Admissions</td>
                                                <td className="border  p-4 font-medium">No history of surgery</td>
                                            </tr>
                                            {/* Social History */}
                                            <tr>
                                                <td className="border  p-4  bg-[#f5f7fa]">Social History</td>
                                                <td className="border  p-4">Stop smoking for 39 years</td>
                                            </tr>
                                            {/* Diagnosis */}
                                            <tr className="">
                                                <td className="border  p-4  bg-[#f5f7fa]">Diagnosis</td>
                                                <td className="border  p-4 font-medium">Treat as LPR</td>
                                            </tr>
                                            {/* Treatment */}
                                            <tr>
                                                <td className="border  p-4  bg-[#f5f7fa]">Treatment</td>
                                                <td className="border  p-4 font-medium">T. Pantoprazole 40mg BDc</td>
                                            </tr>
                                            {/* Haematological Ix */}
                                            <tr className="">
                                                <td className="border  p-4  bg-[#f5f7fa]">Haematological Ix</td>
                                                <td className="border  p-4 font-medium"></td>
                                            </tr>
                                            {/* Radiological Ix */}
                                            <tr>
                                                <td className="border  p-4  bg-[#f5f7fa]">Radiological Ix</td>
                                                <td className="border  p-4 font-medium"></td>
                                            </tr>
                                            <tr>
                                                <td className="border  p-4  bg-[#f5f7fa]">Advise</td>
                                                <td className="border  p-4 font-medium"></td>
                                            </tr>
                                            <tr>
                                                <td className="border  p-4  bg-[#f5f7fa]">TCA</td>
                                                <td className="border  p-4 font-medium">1/12 , Rescope in 1/12 , ((L)  False cord edema, possibly active )</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid mt-5 text-sm  grid-cols-3 gap-6 text-[#6E6E6E]">
                                    <div className="">
                                        <p>Name :</p>
                                        <p>Dr Foong Seong Kin
                                            Pegawai Perubatan (MD, MRCSEd)Jabatan OtornalirngologiHCTM, Pusat Perubatan UKMNo <br /><br /> No Pendafataran Penuh MPM : 57763</p>
                                    </div>
                                    <p className='text-center'>Signature :</p>
                                    <img src={sign} className='h-16' alt="" />
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

export default ClinicalTHTPopup