import React from 'react'
import scanned from '../../assets/scanned.svg'
import uploaded from '../../assets/uploaded.svg'
import sent from '../../assets/sent.svg'

const Scanned_data = [
    {
        id: 1,
        name: "Total File Scanned",
        value: 34.429,
        total: "+1.281",
        image: scanned
    },
    {
        id: 2,
        name: "Total File Uploaded",
        value: 5.179,
        total: "+282",
        image: uploaded
    },
    {
        id: 3,
        name: "Total File Sent",
        value: 17.021,
        total: "-272",
        image: sent
    },
]

const Card = () => {

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 py-5">

            {
                Scanned_data.map((data, index) => (
                    <div className="w-full border border-[#E0DFDF] bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <img src={data.image} alt="" className='w-10 h-10' />
                            <h2 className='font-bold text-primary text-[32px]'>{data.value}</h2>
                        </div>
                        <div className="flex items-center mt-5 justify-between">
                            <div className="">
                                <p className='text-sm font-medium text-[#03110A]'>{data.name}</p>
                            </div>
                            <select name="" id="" className='border tracking-wide p-1 rounded-lg border-[#CFD1D4] text-xs text-[#1D1D1D]'>
                                <option value="Weekly">Weekly</option>
                                <option value="monthly" selected>monthly</option>
                                <option value="yearly">yearly</option>
                            </select>
                        </div>
                        <p className={`text-[10px]  ${data.total.includes("-")? "text-[#E02D2D]" :"text-[#20991E]" }`}>{data.total}  this week</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Card