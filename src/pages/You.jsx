import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { BsCheckCircle, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { Table } from '../components/Table'




const You = () => {
    return (
        <section className='bg-[#F0F7FF]'>
            <div className='pt-10 space-y-10'>
                <div className='bg-white w-2/4 py-4 mx-auto shadow rounded xs:w-full'>
                    <div className='flex justify-between items-center px-6 xs:px-2'>
                        {/* Section Left */}
                        <div className='flex space-x-4 xs:space-x-2'>
                            <div className='bg-[#729ac9] xs:h-32 rounded'>
                                <BiUserCircle className='w-20 h-20 m-8 text-pink-300 xs:m-4' />
                            </div>

                            <div className='space-y-2 text-xl text-slate-800 xs:space-y-1'>
                                <p>User name</p>
                                <p>Occupation</p>
                                <p>Join</p>
                                <p>Rank</p>
                            </div>
                        </div>

                        {/* Section Right*/}
                        <div className='flex space-x-2 items-center'>
                            <div className='space-y-4 text-xl'>

                                <div className='w-5 h-5 border-2 border-yellow-500 rounded-full flex justify-center items-center'>
                                    <p className='text-yellow-500 text-sm pb-1'>p</p>
                                </div>
                                <BsQuestionCircle className='text-pink-600' />
                                <BsCheckCircle className='text-green-400' />
                                <AiOutlineHeart className='text-pink-600' />
                            </div>

                            <div className='space-y-2 text-xl'>
                                <p>000000</p>
                                <p>000000</p>
                                <p>000000</p>
                                <p>000000</p>
                            </div>
                        </div>
                    </div>


                    {/* Bottom Section */}
                    <div className='pt-8'>
                        <hr className='pb-4' />

                        <div className='flex justify-around text-xl'>
                            <p className='cursor-pointer text-slate-800 font-medium'>Ask</p>
                            <p className='cursor-pointer text-slate-800 font-medium'>Ans</p>
                            <p className='cursor-pointer text-slate-800 font-medium'>Save</p>
                            <p className='cursor-pointer text-slate-800 font-medium'>Mate</p>
                            <p className='cursor-pointer text-blue-700 font-semibold'>Info</p>
                        </div>
                    </div>
                </div>


                {/* Table Section */}
                <Table />
            </div>
        </section >
    )
}

export default You