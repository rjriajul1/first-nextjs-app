"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    if(!pathName.includes('dashboard')){
 return (
        <div>
            <nav>
                <ul className='flex gap-10 p-6 justify-center'>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/">Home</Link></li>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/services">Services</Link></li>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/about">About</Link></li>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/posts">Posts</Link></li>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
    }else{
        return <></>
    }
   
};

export default Navbar;