import React, { useState } from 'react'
import LabRequest from "../../../assets/LabRequest.svg"
import LabReport from "../../../assets/LabReport.svg"
import MicrobiologyReport from "../../../assets/MicrobiologyReport.svg"
import PathologyReport from "../../../assets/PathologyReport.svg"
import Histo from "../../../assets/Histo.svg"
import Jabatan from "../../../assets/Jabatan.svg"
import RadiologyReport2 from "../../../assets/RadiologyReport2.svg"
import { PiArrowsOutSimpleBold, PiPackageBold } from 'react-icons/pi'
import LabReportPopup from './LabReportPopup'
import LabRequestPopup from './LabRequestPopup'
import PathologyReportPopup from './PathologyReportPopup'
import MicrobiologyReportpopup from './MicrobiologyReportpopup'
import RadiologyReportPopup from './RadiologyReportPopup'
import HistoPopup from './HistoPopup'
import JabatanPopup from './JabatanPopup'

const LabReports = () => {
  const [popup1, setPopup1] = useState(false)
  const [popup2, setPopup2] = useState(false)
  const [popup3, setPopup3] = useState(false)
  const [popup4, setPopup4] = useState(false)
  const [popup5, setPopup5] = useState(false)
  const [popup6, setPopup6] = useState(false)
  const [popup7, setPopup7] = useState(false)

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3 mt-4">

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={LabReport} alt="" />
              <h2 className='text-lg font-semibold'>Lab Report</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup1(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
              <h3 className='font-medium text-[#1D1D1D]'>Thyroid Function Tests</h3>
              <div className="flex items-center justify-between mt-2">
                  <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
              </div>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
              <h3 className='font-medium text-[#1D1D1D]'>General Screening DPS3C Profile </h3>
              <div className="flex items-center justify-between mt-2">
                  <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
              </div>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
              <h3 className='font-medium text-[#1D1D1D]'>Serum/Plasma Glucose</h3>
              <div className="flex items-center justify-between mt-2">
                  <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={RadiologyReport2} alt="" />
              <h2 className='text-lg font-semibold'>Radiology Report</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup6(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
              <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <PiPackageBold />
                  <p className='text-sm'>CT Abdomen</p>
                </div>
                  <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
              </div>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
              <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <PiPackageBold />
                  <p className='text-sm'>CT Abdomen</p>
                </div>
                  <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
              </div>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
              <h3 className='font-medium text-[#1D1D1D]'>Lorem Ipsum</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <PiPackageBold />
                  <p className='text-sm'>CT Abdomen</p>
                </div>
                  <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={Jabatan} alt="" />
              <h2 className='text-lg font-semibold'>Jabatan Perkhidmatan</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup7(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4] w-full">
              <h3 className='font-medium text-[#1D1D1D]'>Cytopathology</h3>
              <div className="flex items-center justify-between mt-2">
                  <p className='text-sm text-[#6E6E6E]'>15 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {
        popup1 && (
          <div className="fastFadeIn">
            <LabReportPopup setPopup1={setPopup1} />
          </div>
        )
      }
      {
        popup2 && (
          <div className="fastFadeIn">
            <LabRequestPopup setPopup2={setPopup2} />
          </div>
        )
      }
      {
        popup3 && (
          <div className="fastFadeIn">
            <PathologyReportPopup setPopup3={setPopup3} />
          </div>
        )
      }
      {
        popup4 && (
          <div className="fastFadeIn">
            <MicrobiologyReportpopup setPopup4={setPopup4} />
          </div>
        )
      }
      {
        popup5 && (
          <div className="fastFadeIn">
            <HistoPopup setPopup5={setPopup5} />
          </div>
        )
      }
      {
        popup6 && (
          <div className="fastFadeIn">
            <RadiologyReportPopup setPopup6={setPopup6} />
          </div>
        )
      }
      {
        popup7 && (
          <div className="fastFadeIn">
            <JabatanPopup setPopup7={setPopup7} />
          </div>
        )
      }

    </div>
  )
}
export default LabReports