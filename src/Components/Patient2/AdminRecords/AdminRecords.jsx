import React, { useState } from 'react'
import umb from "../../../assets/umb.svg"
import pptx from "../../../assets/pptx.svg"
import Resit from "../../../assets/Resit.svg"
import Referral from "../../../assets/Referral.svg"
import myKad from "../../../assets/myKad.svg"
import { PiArrowsOutSimpleBold } from 'react-icons/pi'
import ResitPopup from './ResitPopup'
import ReferralPopup from './ReferralPopup'
import MyKadPopup from './MyKadPopup'
import LivingPopup from './LivingPopup'
import BorangPopup from './BorangPopup'

const AdminRecords = () => {
  const [popup1, setPopup1] = useState(false)
  const [popup2, setPopup2] = useState(false)
  const [popup3, setPopup3] = useState(false)
  const [popup4, setPopup4] = useState(false)
  const [popup5, setPopup5] = useState(false)
  const userInfo = [
    { label: "Name", value: "Ahmad Bin Ismail" },
    { label: "IC Number", value: "860101-14-1234" },
    { label: "Gender", value: "Male" },
    { label: "Citizenship", value: "Malaysian" },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3 mt-4">

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={umb} alt="" />
              <h2 className='text-lg font-semibold'>Living Assurance</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup1(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Great Eastern</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>AIA</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Prudential</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
          </div>
        </div>

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={pptx} alt="" />
              <h2 className='text-lg font-semibold'>Borang Tuntutan Rawa...</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup2(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Borang Tuntutan</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Borang Tuntutan</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Borang Tuntutan</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
          </div>
        </div>

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={Resit} alt="" />
              <h2 className='text-lg font-semibold'>Resit Rasmi</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup3(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Covid Test</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Covid Test</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Covid Test</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
          </div>
        </div>

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={Referral} alt="" />
              <h2 className='text-lg font-semibold'>Referral Letter</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup4(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Referral Letter</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Referral Letter</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
            <div className="border p-3 rounded-lg border-[#cfd1d4]">
              <h3 className='font-medium text-[#1D1D1D]'>Referral Letter</h3>
              <p className='text-sm pt-1 text-[#6E6E6E]'>15 Jan 2024</p>
            </div>
          </div>
        </div>

        <div className="border border-[#cfd1d4] rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center justify-between gap-3">
              <img src={myKad} alt="" />
              <h2 className='text-lg font-semibold'>MyKad</h2>
            </div>
            <PiArrowsOutSimpleBold className='text-[#9F9FA1] cursor-pointer text-2xl' onClick={() => setPopup5(true)} />
          </div>
          <div className="border-b border-[#cfd1d4]"></div>
          <div className="p-3">

            <div className="bg-white rounded-lg border border-gray-300">
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
          </div>
        </div>


      </div>

      {
        popup1 && (
          <div className="fastFadeIn">
            <LivingPopup setPopup1={setPopup1} />
          </div>
        )
      }
      {
        popup2 && (
          <div className="fastFadeIn">
            <BorangPopup setPopup2={setPopup2} />
          </div>
        )
      }
      {
        popup3 && (
          <div className="fastFadeIn">
            <ResitPopup setPopup3={setPopup3} />
          </div>
        )
      }
      {
        popup4 && (
          <div className="fastFadeIn">
            <ReferralPopup setPopup4={setPopup4} />
          </div>
        )
      }
      {
        popup5 && (
          <div className="fastFadeIn">
            <MyKadPopup setPopup5={setPopup5} />
          </div>
        )
      }

    </div>
  )
}

export default AdminRecords