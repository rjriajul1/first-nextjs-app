import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex gap-10 p-6 justify-center'>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/">Home</Link></li>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/services">Services</Link></li>
                    <li className='hover:bg-white p-2 rounded-2xl hover:text-black'><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;