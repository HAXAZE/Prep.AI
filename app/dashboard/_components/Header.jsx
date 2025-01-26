"use client"
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react'
import Image from 'next/image';
import {UserButton} from '@clerk/nextjs';
function Header() {

    const path = usePathname();
    useEffect(()=>{
        console.log(path);
    },[])
  return (
    <>
<div className='flex p-4 items-center justify-between bg-gradient-to-r from-sky-200 to-blue-400 shadow-sm'>
        <Image src = {'/logo.svg'} width = {50} height = {30} alt  = "logo"/>
        <ul className=' hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition:all cursor-pointer ${path == '/dashboard' && 'text-primary font -bold'}`}>
            Dashboard</li>

            <li className={`hover:text-primary hover:font-bold transition:all cursor-pointer ${path == '/interview' && 'text-primary font -bold'}`}>
            Ai Based Interview</li>

            <li className={`hover:text-primary hover:font-bold transition:all cursor-pointer ${path == '/works' && 'text-primary font -bold'}`}>
            How It Works</li>
        </ul>
        <UserButton/>
    </div>
    </>
  ) 
}
export default Header;