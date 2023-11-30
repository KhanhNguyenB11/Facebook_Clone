"use client"
import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SlGameController } from "react-icons/sl";
import { AiFillMessage } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillBell } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import { useSession } from 'next-auth/react';
function Header() {
  const session = useSession();
  console.log(session)
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
      <div className='flex min-w-fit '>
        <Image src="/Facebook_Logo.png" alt="Facebook_logo" width={40} height={40}/>
      <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-200 text-gray-500'>
        <CiSearch size={20}/>
        <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type="text" placeholder='Search Facebook' />
      </div>
      </div>
      {/* Center */}
      <div className='flex flex-grow justify-center mx-2'>
        <div className='flex items-center '>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
            <IoHomeOutline size={25}/>
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
            <FaRegFlag size={25}/>
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
            <MdOutlineOndemandVideo size={25}/>
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
            <AiOutlineShoppingCart size={25}/>
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
            <SlGameController size={25}/>
          </div>

        </div>

      </div>
      <div className='flex items-center justify-end min-w-fit space-x-2'>
      <CgMenuGridO size={20} className='hidden xl:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
      <AiFillMessage size={20} className='hidden xl:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
      <AiFillBell size={20} className='hidden xl:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
      <MdOutlineExpandMore size={20} className='hidden xl:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
      <Image src={session?.data?.user?.image} alt="user_image" width={40} height={40} className='rounded-full'/>
      </div>
    </div>
  )
}

export default Header