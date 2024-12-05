import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import receipt from "../../../assets/receipt21.png"
import myKad from "../../../assets/myKad.svg"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const MyKadPopup = ({ setPopup5 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup5(false)
        }, 500)
    }

    const userInfo = [
        { label: "Name", value: "Ahmad Bin Ismail" },
        { label: "IC Number", value: "860101-14-1234" },
        { label: "Gender", value: "Male" },
        { label: "Citizenship", value: "Malaysian" },
        { label: "Address", value: "No. 0, Jalan Mawar, Taman Melati, 53100 Kuala Lumpur, Malaysia" },
        { label: "Date of Birth", value: "01/01/1980" },
        { label: "Religion", value: "Islam" },
        { label: "Blood Type", value: "O+" },
        { label: "Race", value: "Malay" },
    ];


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center border-b justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={myKad} alt="" />
                        <h2 className='text-lg font-semibold'>MyKad</h2>
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
                    <div className=" max-h-[80vh] overflow-auto">

                        <img src={receipt} className='mx-auto h-[300px]' alt="" />

                        <div className="mt-10 bg-white rounded-lg shadow border border-gray-300">
                            <table className="w-full border-collapse">
                                <tbody>
                                    {userInfo.map((info, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b ${index === userInfo.length - 1 ? "" : "border-gray-300"} text-gray-700`}
                                        >
                                            <td className="p-4 font-medium bg-zinc-100 border-r w-1/4">{info.label}</td>
                                            <td className="p-4">{info.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div className={` w-full`}>
                            {
                                previewDocument && (
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

export default MyKadPopup