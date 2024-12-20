
import React, { useRef, useState } from 'react'
import { PiArrowsOutSimpleBold, PiPackageBold, PiPrinterBold } from 'react-icons/pi'
import RadiologyReport from "../../../assets/RadiologyReport2.svg"
import receipt from "../../../assets/receipt28.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Print from '../Print'

const RadiologyReportPopup = ({ setPopup6 }) => {
    const [previewDocument, setPreviewDocument] = useState(false)

    const popUp = useRef()


    const handleClose = () => {

        popUp.current.style.opacity = "0"

        setTimeout(() => {
            setPopup6(false)
        }, 500)
    }


    return (
        <div className="fixed flex items-center justify-center transition-all duration-500 inset-0" ref={popUp}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000006e]" onClick={handleClose}></div>
            <div className="max-w-[90%] w-full bg-white border border-[#CFD1D4] z-10 rounded-lg ">
                <div className="flex items-center justify-between p-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <img src={RadiologyReport} alt="" />
                        <h2 className='text-lg font-semibold'>Radiology Report</h2>
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
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>CT ABDOMEN</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>CT ABDOMEN</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                        <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
                                            <h3 className='font-medium text-[#1D1D1D]'>Chia Suwe Kiea</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <PiPackageBold />
                                                    <p className='text-sm'>CT ABDOMEN</p>
                                                </div>
                                                <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={` ${!previewDocument ? " max-w-[70%]" : " max-w-[50%]"} w-full`}>
                            <div className="border p-3 max-h-[65vh] overflow-y-auto rounded-t-lg border-[#cfd1d4]">

                                <h3 className='font-semibold text-[#1D1D1D] text-xl text-center'>RADIOLOGIST REPORT</h3>

                                <div className="p-3 mt-5 grid grid-cols-4 text-sm gap-y-1 rounded-lg  border pb-3">
                                  <p>PATIENT NAME</p>
                                  <p className='font-semibold'>CHUE SUWE KIEA</p>
                                  <p>ACCESSION NO</p>
                                  <p className='font-semibold'>1204728</p>
                                  <p>PATIENT ID</p>
                                  <p className='font-semibold'>00292086</p>
                                  <p>PATIENTS AGE</p>
                                  <p className='font-semibold'>64 Y 2 M 21 D</p>
                                  <p>STUDY DESCRIPTION</p>
                                  <p className='font-semibold'>CT ABDOMEN (PRE POST CONTRAST)</p>
                                  <p>PATIENT GENDER</p>
                                  <p className='font-semibold'>MALE</p>
                                  <p>NRIC / PASSPORT</p>
                                  <p className='font-semibold'>561007085677</p>
                                  <p>STUDY DATE</p>
                                  <p className='font-semibold'>28/12/2020 09:24</p>
                                </div>

                                <div className="rounded-lg border bg-[#f7f8fa] p-3 mt-3 border-[#cfd1d4]">
                                    <p className='text-[#1D1D1D] pb-3 text-sm'>
                                        Both lung bases are normal.
                                        <br /><br />
                                        The liver is of normal size. No focal lesion is seen. The margins are smooth.
                                        <br /><br />
                                        Well distended gallbladder. No wall edema or obvious radiopaque gallstones seen.
                                        <br />   The intra and extrahepatic biliary ducts are not dilated.
                                        <br />    Check ultrasound showed no gallstone.
                                        <br /><br />
                                        Spleen, pancreas and both adrenals are normal. No focal lesion.
                                        <br /><br />
                                        No small or large bowel related mass lesion. Noted several diverticula at the sigmoid colon. <br /> No changes of diverticulitis or abscess collection.
                                        <br /><br />
                                        Both kidneys are of normal configuration, size and shape.
                                        <br />    Noted 2 tiny stones in right kidney measures 1-2 mm. No hydronephrosis.
                                        <br /><br />
                                        No retroperitoneal lymphadenopathy.
                                        <br />    No free fluid in the abdomen or pelvis.
                                        <br /><br />
                                        The urinary bladder is normal. Prostate gland is not enlarged.
                                        <br /><br />
                                        There is bilateral short indirect inguinal hernia containing small bowel loops within. No <br /> changes of bowel strangulation is seen.
                                        <br />   Part of the bladder is seen extending into the left inguinal orifice.
                                        <br /><br />
                                        Degenerative bilateral L4/5 and L5/S1 facet joints.
                                        <br /><br />
                                        Sigmoid diverticulosis. No Change of diverticulitis or abscess collection
                                        <br />    Bilateral indirect inguinal hernia with small bowel within. Small herniation of uniary bladderon the left side.
                                        <br />    Tiny right renal stone. No hydronephrosis.
                                        <br />     Degenerative bilateral L4/5 and L4/5 and L5/S1 facet joints.
                                        Please correlate clinically.
                                        <br /><br />
                                        Print by KPJHEALTH/drbakri Print on 28/12/2020 10:21
                                        <br /><br />
                                        KAJANG SPECIALIST HOSPITAL SDN. BHD. (211797-T)
                                        <br />     (A Member of KPJ Healthcare Berhad)
                                        <br /><br />
                                        Lot 32726, Batu 14, Jalan Cheras, 43000 Kajang, Selangor Darul Ehsan, Malaysia.
                                        <br />     Tel No.: 603-8769 2999 Fax No.: 603-8769 2808
                                    </p>
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

export default RadiologyReportPopup