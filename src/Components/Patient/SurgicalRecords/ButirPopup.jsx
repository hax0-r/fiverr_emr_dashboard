import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import Consent from "../../../assets/ConsentforAnaesthesia.svg"
import receipt from "../../../assets/receipt11.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const ButirPopup = ({ setPopup3 }) => {

    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()

    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup3(false)
        }, 500)
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);

    // Example data for table
    const data = [
        { id: 1, recovery: "Doc No : CODD22003132", recovery2 :"Item Code : CTF12", recovery3:"Batch No : 1443212", recovery4:"Expiry Date : 07/04/25  QTY : 1 pc", comment: "", Catitan: "" },
        { id: 2, recovery: "Doc No : CODD22003132", recovery2 :"Item Code : CTF12", recovery3:"Batch No : 1443212", recovery4:"Expiry Date : 10/02/25  QTY : 1 pc", comment: "", Catitan: "" },
        { id: 3, recovery: "Double J-Stamp", recovery2 :"Bfr. 24cm ", recovery3:"8903209043170", recovery4:"", comment: "", Catitan: "" },
        { id: 4, recovery: "Doc No : CODD22003132", recovery2 :"Item Code : CTF12", recovery3:"Batch No : 1443212", recovery4:"Expiry Date : 10/02/25  QTY : 1 pc", comment: "", Catitan: "" },
        { id: 5, recovery: "Hardh 36", comment: "", Catitan: "" },
        { id: 6, recovery: "Doc No : CODD22003132", recovery2 :"Item Code : CTF12", recovery3:"Batch No : 1443212", recovery4:"Expiry Date : 01/06/25  QTY : 1 pc", comment: "", Catitan: "" },
    ];

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(data.length / rowsPerPage);


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3"> 
                        <img src={Consent} alt="" />
                        <h2 className='text-lg font-semibold'>Butir Implant Pesakit Dewan Bedah</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Butir Implant Pesakit Dewan...</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>BREEZY314</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Butir Implant Pesakit Dewan...</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>BREEZY314</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Butir Implant Pesakit Dewan...</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>BREEZY314</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 max-h-[70vh] overflow-auto rounded-lg border-[#cfd1d4]">
                                <h3 className='font-semibold pb-4 text-[#1D1D1D] text-xl'>Butir Implant Pesakit Dewan Bedah</h3>


                                <div className="">
                                    <div className=" mb-4">
                                        <div className="bg-white border rounded-lg  p-4 w-full ">
                                            <div className="grid grid-cols-2 items-start gap-4 text-sm text-[#1D1D1D]">
                                                <div className='gap-y-2 grid grid-cols-2'>
                                                    <p>Name</p>
                                                    <p className='font-semibold'>Chia Suwe Kiea</p>
                                                    <p>RN</p>
                                                    <p className='font-semibold'>N867921</p>
                                                    <p>Kad Pengenal</p>
                                                    <p className='font-semibold'>560915-10-5691</p>
                                                    <p>Alamat</p>
                                                    <p className='font-semibold'>Lot 112 Taman Mutiara, Sabak Bernam, Ampang 45200 Selangor</p>
                                                    <p>Bilik Bedah</p>
                                                    <p className='font-semibold'>073</p>
                                                    <p>Prosedur Pembedahan</p>
                                                    <p className='font-semibold'>Lap @ partial nephrectomy & ureteric stenting</p>
                                                    <p>Kas Pembedahan</p>
                                                    <div className="">
                                                        <label className="flex items-center gap-1">
                                                            <input
                                                                type="checkbox"
                                                                className="form-checkbox text-blue-500"
                                                                disabled
                                                            />
                                                            Efektif
                                                        </label>
                                                        <label className="flex items-center gap-1">
                                                            <input
                                                                type="checkbox"
                                                                className="form-checkbox text-blue-500"
                                                                defaultChecked
                                                                disabled
                                                            />
                                                            Kecemasan
                                                        </label>
                                                    </div>
                                                    <p>Pakar Bedah</p>
                                                    <p className='font-semibold'>Prof Fam</p>
                                                    <p>1st Assistant</p>
                                                    <p className='font-semibold'> : -</p>
                                                    <p>2nd Assitant</p>
                                                </div>

                                                <div className='gap-y-2 grid grid-cols-2'>
                                                    <p>Tarik</p>
                                                    <p className='font-semibold'> : 12/11/2024</p>
                                                    <p>Ward</p>
                                                    <p className='font-semibold'> : Songket</p>
                                                    <p>No Telefon</p>
                                                    <p className='font-semibold'> : </p>
                                                    <p>1st Scrub Nurse</p>
                                                    <p className='font-semibold'> : Noorazila</p>
                                                    <p>2nd Scrub Nurse</p>
                                                    <p className='font-semibold'> : -</p>
                                                    <p>Circulating</p>
                                                    <p className='font-semibold'> : Fatimah</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Assessment Table */}
                                    <div className="bg-white border rounded-lg overflow-hidden text-[#1d1d1d]">
                                        <table className="table-auto w-full border-collapse rounded-lg overflow-hidden">
                                            <thead>
                                                <tr className=" text-left ">
                                                    <th className="p-4 font-medium">Bill</th>
                                                    <th className="p-4 font-medium">Jenis Implant</th>
                                                    <th className="p-4 font-medium">Kuantiti</th>
                                                    <th className="p-4 font-medium">Sistem</th>
                                                    <th className="p-4 font-medium">Catitan</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentRows.map((row, index) => (
                                                    <tr key={index} className={`text-sm ${index % 2 == 0 ? 'bg-gray-100' : ''} `}>
                                                        <td className="p-4 border-y">{row.id}</td>
                                                        <td className="p-4 border-y text-xs">{row.recovery} <br /> {row.recovery2} <br /> {row.recovery3} <br /> {row.recovery4}</td>
                                                        <td className="p-4 border-y">{row.comment}</td>
                                                        <td className="p-4 border-y">{row.comment}</td>
                                                        <td className="p-4">{row.comment}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
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

export default ButirPopup