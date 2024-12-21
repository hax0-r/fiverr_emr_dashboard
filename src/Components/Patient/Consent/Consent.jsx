import React, { useState } from 'react'
import pdfFile from "../../../assets/pdfFile.svg"
import pdf from "../../../assets/pdf.svg" 
import { PiArrowsOutSimpleBold } from 'react-icons/pi'
import ConsentPopup from './ConsentPopup'

const Consent = () => {
  const [popup1, setPopup1] = useState(false)

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3 mt-4">

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={pdf} alt="" />
              <h2 className='text-lg font-semibold'>Consent Forms</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] text-2xl cursor-pointer' onClick={() => setPopup1(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border bg-zinc-100 p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
              <img src={pdfFile} alt="" />
              <div className="w-full">
                <h3 className='font-medium text-[#1D1D1D]'>Pembedahan</h3>
                <div className="flex items-center justify-between w-full">
                  <p className='text-sm pt-1 text-[#1d1d1d]'>Chia Suwe Kiea</p>
                  <p className='text-sm pt-1 text-[#6E6E6E]'>5 Aug 2024</p>
                </div>
              </div>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
              <img src={pdfFile} alt="" />
              <div className="w-full">
                <h3 className='font-medium text-[#1D1D1D]'>Maklumat Perubatan</h3>
                <div className="flex items-center justify-between w-full">
                  <p className='text-sm pt-1 text-[#1d1d1d]'>Chia Suwe Kiea</p>
                  <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
                </div>
              </div>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4] flex items-center gap-4">
              <img src={pdfFile} alt="" />
              <div className="w-full">
                <h3 className='font-medium text-[#1D1D1D]'>Pemindahan Darah</h3>
                <div className="flex items-center justify-between w-full">
                  <p className='text-sm pt-1 text-[#1d1d1d]'>Chia Suwe Kiea</p>
                  <p className='text-sm pt-1 text-[#6E6E6E]'>11 Nov 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {
        popup1 && (
          <div className="fastFadeIn">
            <ConsentPopup setPopup1={setPopup1} />
          </div>
        )
      }

    </div>
  )
}

export default Consent