import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt41.png"
import PatientInformation from "../../../assets/PatientInformation.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const PatientInformationPopup = ({ setPopup4 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup4(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={PatientInformation} alt="" />
                        <h2 className='text-lg font-semibold'>Patient Information</h2>
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
                        <div className="flex mb-3 items-center px-4 justify-between border-t border-[#CFD1D4] pt-4">
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
                                        <div className="border bg-zinc-50 p-3 rounded-lg text-[#1D1D1D] border-[#cfd1d4] w-full">
                                            <h3 className='font-medium '>Norartini, Sulong @Mokhtar</h3>
                                            <div className="flex items-center justify-between">
                                                <p className='text-sm pt-1'>N880842</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border text-[#1D1D1D] rounded-lg border-[#cfd1d4] text-sm max-h-[70vh] overflow-auto">
                                <div className="flex p-3  items-center border-b justify-between gap-4  border-[#cfd1d4] pb-3">
                                    <h3 className={`font-semibold  text-xl`}>Patient Demographic</h3>
                                    <p className='text-lg font-semibold'>N739168</p>
                                </div>


                                <div className="overflow-x-auto p-3 ">
                                    <table className="min-w-full border-collapse border border-gray-300 text-sm">
                                        <tbody>
                                            {/* Row 1 */}
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300 w-1/4">Name</td>
                                                <td className="p-2 font-semibold border border-gray-300">
                                                    Norartini, Sulong @Mokhtar
                                                </td>
                                                <td className="p-2  border border-gray-300 w-1/4">MRN</td>
                                                <td className="p-2 font-semibold border border-gray-300">N880842</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-white border-b">
                                                <td className="p-2  border border-gray-300">Address 1</td>
                                                <td className="p-2 font-semibold border border-gray-300">
                                                    No 41, Jalan Kebun Nenas
                                                </td>
                                                <td className="p-2  border border-gray-300">NRIC</td>
                                                <td className="p-2 border font-semibold border-gray-300">8507031155180</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">Address 2</td>
                                                <td className="p-2 font-semibold border border-gray-300">
                                                    4S/KS8 Bandar Putera 2
                                                </td>
                                                <td className="p-2  border border-gray-300" >Old IC</td>
                                                <td className="p-2 border border-gray-300" />
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">Address 3</td>
                                                <td className="p-2 font-semibold border border-gray-300"></td>
                                                <td className="p-2  border border-gray-300" >Other ID Type</td>
                                                <td className="p-2 border border-gray-300" />
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">Address 4</td>
                                                <td className="p-2 font-semibold border border-gray-300"></td>
                                                <td className="p-2  border border-gray-300" >Other id No</td>
                                                <td className="p-2 border border-gray-300" />
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-white border-b">
                                                <td className="p-2  border border-gray-300">Post Code</td>
                                                <td className="p-2 font-semibold border border-gray-300">41200</td>
                                                <td className="p-2  border border-gray-300">D.O.B</td>
                                                <td className="p-2 font-semibold border border-gray-300">03/07/1985</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">City</td>
                                                <td className="p-2 font-semibold border border-gray-300">Klang</td>
                                                <td className="p-2  border border-gray-300">Age</td>
                                                <td className="p-2 border font-semibold border-gray-300">37 yr 4 mth</td>
                                            </tr>
                                            {/* Row 6 */}
                                            <tr className="bg-white border-b">
                                                <td className="p-2  border border-gray-300">State</td>
                                                <td className="p-2 font-semibold border border-gray-300">Selangor</td>
                                                <td className="p-2  border border-gray-300">Telephone (H)</td>
                                                <td className="p-2 border border-gray-300"></td>
                                            </tr>
                                            {/* Row 7 */}
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">Telephone HP</td>
                                                <td className="p-2 border border-gray-300 font-semibold" >0179369871</td>
                                                <td className="p-2  border border-gray-300">Telephone (0)</td>
                                                <td className="p-2 font-semibold border border-gray-300">Melayu</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">Gender</td>
                                                <td className="p-2 border border-gray-300 font-semibold" >Female</td>
                                                <td className="p-2  border border-gray-300">Race</td>
                                                <td className="p-2 font-semibold border border-gray-300">Melayu</td>
                                            </tr>
                                            {/* Row 8 */}
                                            <tr className="bg-white border-b">
                                                <td className="p-2  border border-gray-300">
                                                    Marital Status
                                                </td>
                                                <td className="p-2 font-semibold border border-gray-300">Berkahwin</td>
                                                <td className="p-2  border border-gray-300">Nationality</td>
                                                <td className="p-2 font-semibold border border-gray-300">
                                                    Citizen Malaysia
                                                </td>
                                            </tr>
                                            {/* Row 9 */}
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">Religion</td>
                                                <td className="p-2 border border-gray-300 font-semibold">Islam</td>
                                                <td className="p-2  border border-gray-300" >Occupation</td>
                                                <td className="p-2 border border-gray-300" />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="overflow-x-auto p-3 ">
                                    <table className="min-w-full border-collapse border border-gray-300 text-sm">
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="p-2  font-semibold">Office/ Schoold Address</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300 w-1/4">Address 1</td>
                                                <td className="p-2 font-semibold border border-gray-300"></td>
                                                <td className="p-2  border border-gray-300 w-1/4">Post Code</td>
                                                <td className="p-2 font-semibold border border-gray-300"></td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-white border-b">
                                                <td className="p-2  border border-gray-300"></td>
                                                <td className="p-2 font-semibold border border-gray-300">
                                                </td>
                                                <td className="p-2  border border-gray-300">City</td>
                                                <td className="p-2 border font-semibold border-gray-300"></td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300"></td>
                                                <td className="p-2 font-semibold border border-gray-300">
                                                </td>
                                                <td className="p-2  border border-gray-300" >State</td>
                                                <td className="p-2 border border-gray-300" />
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">&nbsp; </td>
                                                <td className="p-2 font-semibold border border-gray-300"></td>
                                                <td className="p-2  border border-gray-300" >&nbsp; </td>
                                                <td className="p-2 border border-gray-300" />
                                            </tr>
                                            <tr className="border-b">
                                                <td className="p-2  border border-gray-300">Tel (O)</td>
                                                <td className="p-2 font-semibold border border-gray-300"></td>
                                                <td className="p-2  border border-gray-300" >Ext</td>
                                                <td className="p-2 border border-gray-300" />
                                            </tr>
                                        </tbody>
                                    </table>
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

export default PatientInformationPopup