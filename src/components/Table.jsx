import React from 'react'
import { FiEdit } from 'react-icons/fi'


export const Table = () => {
    return (
        <section className='bg-white w-2/4 py-4 mx-auto xs:w-full xs:py-2'>
            <div className='w-[700px] py-10 max-auto px-20 xs:w-full xs:px-2 xs:py-2'>
                <div className='flex justify-end mb-4'>
                    <FiEdit className='text-3xl font-semibold text-blue-400 cursor-pointer shadow-sm hover:text-blue-500 duration-200' />
                </div>

                <div className='flex border border-slate-500 text-slate-700'>
                    <div className='font-medium w-[200px] xs:w-3/6'>
                        <div className='border-b border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Full Name</h2>
                        </div>
                        <div className='border-b border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Nick Name</h2>
                        </div>
                        <div className='border-b border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Age</h2>
                        </div>
                        <div className='border-b border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Gender</h2>
                        </div>
                        <div className='border-b border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Occuption</h2>
                        </div>
                        <div className='border-b border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Riligion</h2>
                        </div>
                        <div className='border-b border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Language</h2>
                        </div>
                        <div className='border-slate-500 border-r'>
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Nationality</h2>
                        </div>
                    </div>

                    <div className='font-medium w-[500px] xs:w-full'>
                        <div className="border-slate-500 border-b">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Sujon Sheikh</h2>
                        </div>
                        <div className="border-slate-500 border-b">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Sujon</h2>
                        </div>
                        <div className="border-slate-500 border-b">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>24</h2>
                        </div>
                        <div className="border-slate-500 border-b">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Male</h2>
                        </div>
                        <div className="border-slate-500 border-b">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Frontend Web developer</h2>
                        </div>
                        <div className="border-slate-500 border-b">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Islam</h2>
                        </div>
                        <div className="border-slate-500 border-b">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Bangla</h2>
                        </div>
                        <div className="border-slate-500">
                            <h2 className='pl-4 py-2 text-xl xs:text-sm xs:pl-2'>Bangladesh</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}

            <section className='w-[510px] mx-auto xs:w-full pb-10'>
                <h1 className='py-4 text-2xl text-gray-700 mx-6'>Description</h1>
                <div className='mx-6'>
                    <textarea className='border border-gray-300 w-full h-40 mx-auto' name="text" id="description" cols="60" rows="10" />
                </div>
            </section>
        </section>

    )
}
