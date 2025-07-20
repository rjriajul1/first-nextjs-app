import Link from 'next/link';
import React from 'react';

const FoundPage = () => {
    return (
        <div className='bg-white text-black max-w-72 text-center p-10 rounded-2xl mx-auto mt-10 '>
            <h1 className='font-bold text-2xl'>Not Found Page now!!</h1>
            <button className='bg-amber-300 px-4 py-1 rounded-md mt-3 font-bold'>
                <Link href="/">Go to back home</Link>
            </button>
        </div>
    );
};

export default FoundPage;