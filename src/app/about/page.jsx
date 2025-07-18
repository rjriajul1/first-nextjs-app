"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter()
    const loggedIn = true;

    const handle = () => {
        if(loggedIn){
            router.push("/about/address")
        }else{
            router.push("/")
        }
    }

    return (
        <div>
            <p>About page </p>
            <br />
            <button className='hover:bg-white p-2 rounded-2xl hover:text-black' onClick={handle} type='button'>
            <Link href="/about/address">Address page</Link>
            </button>
        </div>
    );
};

export default AboutPage;