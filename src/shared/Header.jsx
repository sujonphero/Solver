import React from 'react'
import logo from "../assets/logo.svg"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { BsSearch, BsBell } from "react-icons/bs"
import { BiUserCircle } from "react-icons/bi"
import { RiSettingsLine } from "react-icons/ri"
// import { CustomLink } from 'react-router-dom'
import CustomLink from '../components/CustomLink'

function Header() {


    return (
        <header className='w-full h-[80px] px-24 xs:px-4 flex justify-between items-center bg-white shadow'>
            {/* Logo Section */}
            <div className='flex justify-center items-center space-x-2 cursor-pointer'>
                <img src={logo} alt="logo" />
                <h3 className='text-[#1479FF] xs:hidden font-semibold text-xl'>Solver</h3>
            </div>

            {/* Navigation Section */}
            <nav className='flex space-x-6 text-[#1479FF]'>

                <CustomLink to="/">
                    <div className='flex items-center xs:p-2 px-4 py-1 space-x-2 cursor-pointer text-xl hover:bg-[#F0F7FF] duration-200 hover:rounded-full'>
                        <AiOutlineQuestionCircle />
                        <p className='xs:hidden'>Ask</p>
                    </div>
                </CustomLink>

                <CustomLink to="/find">
                    <div className='flex items-center xs:p-2 px-4 py-1 space-x-2 cursor-pointer text-xl hover:bg-[#F0F7FF] duration-200 hover:rounded-full'>
                        <BsSearch />
                        <p className='xs:hidden'>Find</p>
                    </div>
                </CustomLink>

                <CustomLink to="/you">
                    <div className='flex items-center xs:p-2 px-4 py-1 space-x-2 cursor-pointer text-xl hover:bg-[#F0F7FF] duration-200 hover:rounded-full'>
                        <BiUserCircle />
                        <p className='xs:hidden'>You</p>
                    </div>
                </CustomLink>

                <CustomLink to="/bell">
                    <div className='flex items-center xs:p-2 px-4 py-1 space-x-2 cursor-pointer text-xl hover:bg-[#F0F7FF] duration-200 hover:rounded-full'>
                        <BsBell />
                        <p className='xs:hidden'>Bell</p>
                    </div>
                </CustomLink>
            </nav>

            {/* ToolBar Section */}
            <CustomLink to="/tools">
                <div className='flex items-center xs:p-2 px-4 py-1 space-x-2 cursor-pointer text-xl hover:bg-[#F0F7FF] duration-200 hover:rounded-full'>
                    <RiSettingsLine />
                    <p className='xs:hidden'>Tools</p>
                </div>
            </CustomLink>
        </header >
    )
}

export default Header