import React from 'react'
// import { BsSearch } from "react-icons/bs"

const Find = () => {

    return (
        <section className='bg-[#F0F7FF] h-screen'>
            <div className='pt-10 space-y-10'>
                <div className='bg-white border w-2/4 h-20 mx-auto shadow rounded flex justify-between xs:justify-around items-center px-6 xs:px-2 xs:w-[380px]'>
                    <input className='w-[500px] px-6 py-5 h-10 bg-[#F0F7FF] text-xl rounded-full xs:w-9/12' type="text" placeholder='Search your problem' />
                    <button className='px-4 py-1 bg-[#F0F7FF] text-xl font-normal text-slate-700 rounded-full xs:text-lg' type='button'>Filters</button>
                </div>

                {/* Second Element */}
                <div className='bg-white border w-2/4 xs:w-11/12 mx-auto shadow rounded py-4 text-lg font-normal px-6'>
                    <p>
                        The box will contain two lines of text. 1st the title of the problem will show.
                        After the title lines empty spaces <span className='text-slate-400'>fill with details word. Then link with</span> <span className='text-blue-400 cursor-pointer'>more</span>
                    </p>
                    <hr className='mt-4' />

                    <div className='flex justify-around text-xl font-semibold text-slate-500 py-2'>
                        <p className='cursor-pointer'>Asker</p>
                        <p className='cursor-pointer'>Time</p>
                        <p className='cursor-pointer'>Solver</p>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Find