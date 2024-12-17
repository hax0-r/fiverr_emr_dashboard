import React, { useState } from 'react'
import { GoHomeFill } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import { PiSquaresFourBold } from 'react-icons/pi'
import { Link } from 'react-router'
import Profile_Picture from "../assets/lady1.png"
import calender from "../assets/calender.svg"
import { IoFemale, IoMaleSharp } from 'react-icons/io5'
import { RiBarcodeLine } from 'react-icons/ri'
import { FaPhoneAlt } from 'react-icons/fa'
import MedicalNotes from '../Components/Patient2/MedicalNotes/MedicalNotes'
import NursingRecords from '../Components/Patient2/NursingRecords.jsx/NursingRecords'
import AdminRecords from '../Components/Patient2/AdminRecords/AdminRecords'
import Consent from '../Components/Patient2/Consent/Consent'
import Admission from '../Components/Patient2/Admission/Admission'
import DischargeRecords from '../Components/Patient2/DischargeRecords/DischargeRecords'
import SurgicalRecords from '../Components/Patient2/SurgicalRecords/SurgicalRecords'
import Radiology from '../Components/Patient2/Radiology/Radiology'
import LabReports from '../Components/Patient2/LabReports/LabReports'

const Emr2 = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('Medical Notes');

    // Helper function to render the active component
    const renderContent = () => {
        switch (activeTab) {
            case 'Medical Notes':
                return <MedicalNotes />;
            // case 'Nursing Records':
                // return <NursingRecords />;
            case 'Lab Reports':
                return <LabReports />;
            // case 'Radiology':
            //     return <Radiology />;
            // case 'Surgical Records':
            //     return <SurgicalRecords />;
            // case 'Discharge Records':
            //     return <DischargeRecords />;
            case 'Admission':
                return <Admission />;
            // case 'Consent':
            //     return <Consent />;
            case 'Admin Records':
                return <AdminRecords />;
            default:
                return null;
        }
    };

    return (


        <div className="pl-[84px] px-4 pb-10 bg-[#f6f6f7] min-h-[85.5vh]">

            <div className="bg-white inline-flex pl-3 pr-5 items-center p-1 justify-center gap-2 border-[#CFD1D4] border rounded-full">
                <GoHomeFill className="text-[#CFD1D4]" />
                <IoIosArrowForward className="text-[#CFD1D4]" />
                <Link to={"/patient"}>
                    <p className="text-[#CFD1D4] font-medium text-sm">Patient List</p>
                </Link>
                <IoIosArrowForward className="text-[#CFD1D4]" />
                <p className="text-primary font-medium text-sm">EMR</p>
            </div>

            <div className="flex items-center justify-between w-full mt-4">
                <Link to={"/patient"}>
                    <button className="bg-white border flex items-center justify-center gap-1 border-[#CFD1D4] pl-2.5 pr-4 py-2 rounded-full font-medium text-sm text-[#1D1D1D]">
                        <IoIosArrowForward className="text-lg rotate-180" />
                        Back
                    </button>
                </Link>
                <button className="bg-white border flex items-center justify-center gap-1 border-[#CFD1D4] px-5 py-3 rounded-lg font-medium text-[#1D1D1D]">
                    <PiSquaresFourBold className='text-lg' />
                    Edit Widget
                </button>
            </div>

            <div className="w-full  flex items-center gap-8 flex-wrap rounded-xl mt-4 border-[#CFD1D4] border bg-white p-5">
                <div className=" group flex items-center gap-3">
                    <img src={Profile_Picture} className='w-[60px] group-hover:border-blue-600 border-white transition-all duration-500 border-2 h-[60px] rounded-full overflow-hidden' alt="pic" />
                    <h3 className='text-lg text-[#1D1D1D] group-hover:text-blue-600 duration-500 transition-all cursor-default font-semibold'>Norartini, Sulong @Mokhtar</h3>
                    <h2 className='text-sm font-medium text-[#362702] bg-[#F9D67B] border-[#F5B920] border rounded-full py-1 px-3'>VIP</h2>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <IoFemale className="text-[#E02D2D] text-xl" />
                    <h3 className='text-[#1D1D1D] font-medium text-lg'>Female </h3>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <RiBarcodeLine className=" text-2xl" />
                    <h3 className='text-[#1D1D1D] font-medium text-lg'>N880842</h3>
                </div>
                <div className="flex items-center justify-center gap-2 text-[#E02D2D]">
                    <FaPhoneAlt className=" text-xl" />
                    <h3 className='font-medium text-lg underline'>0179369871</h3>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <img src={calender} alt="" />
                    <h3 className='text-[#1D1D1D] font-medium text-lg'>03/07/1985 (37 yr 4 mth)</h3>
                </div>
            </div>


            <div className='pt-5'>
                {/* Tabs */}
                <div className="bg-white flex items-center rounded-lg overflow-hidden border-[#CFD1D4] border">
                    {[
                        'Medical Notes',
                        'Lab Reports',
                        'Admission',
                        'Admin Records',
                    ].map((tab, idx) => (
                        <div key={tab} className="flex items-center">
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`p-4 px-[10px] text-lg font-medium ${activeTab === tab ? 'bg-secondary text-white' : 'text-[#6E6E6E]'
                                    }`}
                            >
                                {tab}
                            </button>
                            <div className="h-5 border-l border-[#cfd1d4]" />

                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-5 fastFadeIn">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};


export default Emr2