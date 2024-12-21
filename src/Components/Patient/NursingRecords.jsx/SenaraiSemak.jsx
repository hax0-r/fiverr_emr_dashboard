import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPrinterBold } from 'react-icons/pi'
import Senarai from "../../../assets/Senarai.svg"
import receipt from "../../../assets/receipt6.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const SenaraiSemak = ({ setPopup3 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup3(false)
        }, 500)
    }
    const [checkedState, setCheckedState] = useState({
        indikasi: true,
        komplikasi: true,
        kakitangan: true,
        retensiUrin: false,
        pemantauanUrin: false,
        sebelumPembedahan: true,
        imobilisasi: false,
        membantu: false,
        lainLain: "",
        beriPrivasi: false,
        cuciTangan: false,
        pakaiPPE: false,
    });

    const handleCheckboxChange = (key) => {
        setCheckedState((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCheckedState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={Senarai} alt="" />
                        <h2 className='text-lg font-semibold'>Senarai Semak Penjagaan Harian Kateter URIN</h2>
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
                                            <h3 className='font-medium text-[#1D1D1D]'>Full Blood</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>Histopathology</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Endocrine</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>Histopathology</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Liver</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>Histopathology</p>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4]">
                                            <h3 className='font-medium text-[#1D1D1D]'>Urine Test</h3>
                                            <p className='text-sm pt-1 text-[#6E6E6E]'>Histopathology</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 rounded-lg border-[#cfd1d4] max-h-[65vh] overflow-auto">
                                <h3 className='font-semibold text-[#1D1D1D] text-xl'>Sebelum Prosedur - Sila Tandakan Ya (✓) dan Tidak (X)</h3>


                                <div className="mt-4 ">
                                    <div className="">
                                        {/* Section 1 */}
                                        <div className="space-y-2 bg-white border text-[#1d1d1d] rounded-lg mb-6">
                                            <div className="p-4 flex items-center justify-between space-x-4">
                                                <label htmlFor="indikasi" className="">
                                                    Indikasi pemasangan kateter urin dan potensi komplikasi telah diambilkira
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="indikasi"
                                                    checked={checkedState.indikasi}
                                                    onChange={() => handleCheckboxChange("indikasi")}
                                                    className="w-5 h-5"
                                                    disabled
                                                />
                                            </div>
                                            <div className="flex items-center justify-between border-y bg-[#f5f7fa] p-4 space-x-4">
                                                <label htmlFor="indikasi" className="">
                                                    Prosedur pemasangan kateter urin serta komplikasi telah diterangkan oleh Pegawai Perubatan
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="indikasi"
                                                    checked={checkedState.indikasi}
                                                    onChange={() => handleCheckboxChange("indikasi")}
                                                    className="w-5 h-5"
                                                    disabled
                                                />
                                            </div>
                                            <div className="p-4 flex items-center justify-between space-x-4">
                                                <label htmlFor="indikasi" className="">
                                                    Prosedur Pemasangan kateter urin dilaksanakan oleh kakitangan terlatih
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="indikasi"
                                                    checked={checkedState.indikasi}
                                                    onChange={() => handleCheckboxChange("indikasi")}
                                                    className="w-5 h-5"
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        {/* Section 2 */}
                                        <div className="mb-6">
                                            <h2 className="font-semibold text-lg mb-4">
                                                Sebelum Prosedur - Sila Tandakan Ya (✓) dan Tidak (✗)
                                            </h2>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-4">
                                                    <input
                                                        type="checkbox"
                                                        id="retensiUrin"
                                                        checked={checkedState.retensiUrin}
                                                        onChange={() => handleCheckboxChange("retensiUrin")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                    <label htmlFor="retensiUrin" className="text-gray-800">
                                                        Retensi Urin (<span className="italic">Urinary retention</span>)
                                                    </label>
                                                </div>

                                                <div className="flex items-center space-x-4">
                                                    <input
                                                        type="checkbox"
                                                        id="pemantauanUrin"
                                                        checked={checkedState.pemantauanUrin}
                                                        onChange={() => handleCheckboxChange("pemantauanUrin")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                    <label htmlFor="pemantauanUrin" className="text-gray-800">
                                                        Pemantauan pengeluaran urin (<span className="italic">Urine output monitoring</span>)
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <input
                                                        type="checkbox"
                                                        id="membantu"
                                                        checked={checkedState.membantu}
                                                        onChange={() => handleCheckboxChange("membantu")}
                                                        className="w-5 h-5"
                                                        disabled
                                                        checked
                                                    />
                                                    <label htmlFor="membantu" className="text-gray-800">
                                                        Sebelum pembedahan <u>TURBTcc</u> (nyatakan jenis pembedahan)
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <input
                                                        type="checkbox"
                                                        id="membantu"
                                                        checked={checkedState.membantu}
                                                        onChange={() => handleCheckboxChange("membantu")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                    <label htmlFor="membantu" className="text-gray-800">
                                                        Imobilisasi berpanjangan
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <input
                                                        type="checkbox"
                                                        id="membantu"
                                                        checked={checkedState.membantu}
                                                        onChange={() => handleCheckboxChange("membantu")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                    <label htmlFor="membantu" className="text-gray-800">
                                                        Membantu dalam pemulihan kudis tekanan tekanan kepada pesakit inkontinen
                                                    </label>
                                                </div>
                                                <div className="flex space-x-4">
                                                    <input
                                                        type="checkbox"
                                                        id="membantu"
                                                        checked={checkedState.membantu}
                                                        onChange={() => handleCheckboxChange("membantu")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                    <label htmlFor="membantu" className="text-gray-800">
                                                        Lain-lain: .....................................................................................................................................................................................
                                                        <br />
                                                        (Sila nyatakan)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Section 3 */}
                                        <div>
                                            <h2 className="font-semibold text-lg mb-4">Semasa Prosedur</h2>
                                            <div className="space-y-2 bg-white border text-[#1d1d1d] rounded-lg mb-6">
                                                <div className="p-4 flex items-center justify-between space-x-4">
                                                    <label htmlFor="indikasi" className="">
                                                    Beri privasi kepada pesakit
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="indikasi"
                                                        onChange={() => handleCheckboxChange("indikasi")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between border-y bg-[#f5f7fa] p-4 space-x-4">
                                                    <label htmlFor="indikasi" className="">
                                                    Cuci tangan
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="indikasi"
                                                        onChange={() => handleCheckboxChange("indikasi")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                </div>
                                                <div className="p-4 flex items-center justify-between space-x-4">
                                                    <label htmlFor="indikasi" className="">
                                                    Pakai PPE
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="indikasi"
                                                        onChange={() => handleCheckboxChange("indikasi")}
                                                        className="w-5 h-5"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
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

export default SenaraiSemak