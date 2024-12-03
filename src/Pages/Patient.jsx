import React, { useState } from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { BiExport } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { IoArrowForward } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { TABLE_DATA } from '../Data/Data';
import { Link } from 'react-router';

const Patient = () => {
    const itemsPerPage = 10;
    const totalItems = TABLE_DATA.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleSearchChange = (event) => setSearchQuery(event.target.value);
    const handleDateChange = (event) => setSelectedDate(event.target.value);

    const getVisiblePages = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, 5);
            } else if (currentPage >= totalPages - 2) {
                pages.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
            }
        }
        return pages;
    };

    const visiblePages = getVisiblePages();

    // Filter data based on search and date
    const filteredData = TABLE_DATA.filter((row) => {
        const matchesSearch = row.patientName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = selectedDate
            ? row.scanDateTime.split(' ')[0] === selectedDate
            : true;
        return matchesSearch && matchesDate;
    });

    const totalFilteredItems = filteredData.length;
    const filteredTotalPages = Math.ceil(totalFilteredItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page > 0 && page <= filteredTotalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pl-[84px] px-4 pb-10 bg-[#f6f6f7]">
            <div>
                <div className="bg-white inline-flex pl-3 pr-5 items-center p-1 justify-center gap-2 border-[#CFD1D4] border rounded-full">
                    <GoHomeFill className="text-[#CFD1D4]" />
                    <IoIosArrowForward className="text-[#CFD1D4]" />
                    <p className="text-primary font-medium text-sm">Patient List</p>
                </div>
            </div>
            <div className="w-full rounded-lg mt-5 bg-white border border-[#CFD1D4]">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center border-[#CFD1D4] rounded-lg overflow-hidden border justify-center max-w-[350px] w-full">
                        <input
                            type="text"
                            className="w-full p-2"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <div className="w-[55px] h-[44px] bg-[#f5f7fa] flex border-[#CFD1D4] border-l items-center justify-center">
                            <FiSearch className="text-xl" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="bg-white border border-[#CFD1D4] px-5 py-3 rounded-lg text-sm text-[#434343]">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                        <button className="bg-primary border-2 flex items-center justify-center gap-2 border-primary px-5 py-2.5 transition-all duration-500 hover:opacity-95 rounded-full text-[#fff]">
                            <BiExport className="text-xl mb-0.5" />
                            Export CSV
                        </button>
                    </div>
                </div>
                <div className="w-full border-b border-[#CFD1D4]"></div>

                <div className="p-4">
                    <div className="overflow-x-auto border border-[#CFD1D4] rounded-lg">
                        <table className="min-w-full">
                            <thead className="text-[#1D1D1D]">
                                <tr>
                                    <th className="px-4 py-4 text-left font-medium">No</th>
                                    <th className="px-2 py-4 text-left font-medium">Patient Name</th>
                                    <th className="px-2 py-4 text-left font-medium">Doctor Name</th>
                                    <th className="px-2 py-4 text-left font-medium">Total Document</th>
                                    <th className="px-2 py-4 text-left font-medium">Scan Date & Time</th>
                                    <th className="px-2 py-4 text-left font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((row, index) => (
                                    <tr key={index} className="odd:bg-[#f5f7fa] even:bg-white text-[#1D1D1D]">
                                        <td className="border-t border-[#CFD1D4] px-4 py-4 text-sm">
                                            {(currentPage - 1) * itemsPerPage + index + 1}
                                        </td>
                                        <td className="border-t border-[#CFD1D4] px-2 py-4 text-sm">{row.patientName}</td>
                                        <td className="border-t border-[#CFD1D4] px-2 py-4 text-sm">{row.doctorName}</td>
                                        <td className="border-t border-[#CFD1D4] px-2 py-4 text-sm">{row.totalDocuments}</td>
                                        <td className="border-t border-[#CFD1D4] px-2 py-4 text-sm">{row.scanDateTime}</td>
                                        <td className="border-t border-[#CFD1D4] px-2 py-4  flex ">
                                            <Link to={"/emr"} className="flex items-center transition-all duration-500 justify-center w-8 h-8 bg-primary text-white rounded-full hover:opacity-95">
                                                <IoArrowForward />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex items-center justify-between p-4">
                    <p>
                        Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                        {Math.min(currentPage * itemsPerPage, totalFilteredItems)} of {totalFilteredItems} items
                    </p>
                    <div className="flex items-center justify-center gap-1">
                        {/* Previous Button */}
                        <button
                            className="w-8 h-8 rotate-180 flex items-center justify-center border border-[#CFD1D4] text-[#1D1D1D] text-sm rounded-lg"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <IoIosArrowForward className="text-[#1D1D1D]" />
                        </button>

                        {/* Page Buttons */}
                        {visiblePages[0] > 1 && (
                            <>
                                <button
                                    className="w-8 h-8 flex items-center justify-center border border-[#CFD1D4] text-[#1D1D1D] text-sm rounded-lg"
                                    onClick={() => handlePageChange(1)}
                                >
                                    1
                                </button>
                                <BsThreeDots className="text-[#1D1D1D]" />
                            </>
                        )}

                        {visiblePages.map((page) => (
                            <button
                                key={page}
                                className={`w-8 h-8 flex items-center justify-center ${currentPage === page
                                    ? 'bg-primary text-white'
                                    : 'border border-[#CFD1D4] text-[#1D1D1D]'
                                    } text-sm rounded-lg`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}

                        {visiblePages[visiblePages.length - 1] < filteredTotalPages && (
                            <>
                                <BsThreeDots className="text-[#1D1D1D]" />
                                <button
                                    className="w-8 h-8 flex items-center justify-center border border-[#CFD1D4] text-[#1D1D1D] text-sm rounded-lg"
                                    onClick={() => handlePageChange(filteredTotalPages)}
                                >
                                    {filteredTotalPages}
                                </button>
                            </>
                        )}

                        {/* Next Button */}
                        <button
                            className="w-8 h-8 flex items-center justify-center border border-[#CFD1D4] text-[#1D1D1D] text-sm rounded-lg"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === filteredTotalPages}
                        >
                            <IoIosArrowForward className="text-[#1D1D1D]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;
