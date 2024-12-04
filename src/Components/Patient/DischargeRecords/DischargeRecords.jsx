import React, { useState } from 'react'
import FinalReport from "../../../assets/FinalReport.svg"
import Discharges from "../../../assets/Discharges.svg"
import { PiArrowsOutSimpleBold } from 'react-icons/pi'
import DischargesPopup from './DischargesPopup'

const DischargeRecords = () => {
  const [popup1, setPopup1] = useState(false)
  const [popup2, setPopup2] = useState(false)

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3 mt-4">

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={Discharges} alt="" />
              <h2 className='text-lg font-semibold'>Discharges</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup1(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
              <p className='text-sm text-center text-[#6E6E6E]'>Ringkasan Discaj</p>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <ul className='pl-5 text-[#1D1D1D] list-decimal space-y-2'>
                <li> Provisional Diagnosis</li>
                <li> Principal Diagnosis</li>
                <li> Additional Diagnosis</li>
                <li> Operative Procedure</li>
                <li> Brief History and Essential Physical Findings</li>
                <li> Signifikan Laboratory X-Ray</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={FinalReport} alt="" />
              <h2 className='text-lg font-semibold'>Final Report</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup2(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
          </div>
        </div>

      </div>

      {
        popup1 && (
          <div className="fastFadeIn">
            <DischargesPopup setPopup1={setPopup1} />
          </div>
        )
      }
      {
        popup2 && (
          <div className="fastFadeIn">
            {/* <Perkhidmatan setPopup2={setPopup2} /> */}
          </div>
        )
      }
    </div>
  )
}

export default DischargeRecords