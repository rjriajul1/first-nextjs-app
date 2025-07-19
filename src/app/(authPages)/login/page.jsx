import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='border p-6 rounded-md'>
            <form className=''>
                <label className='p-2' htmlFor="email">Email</label>
                <input type="email" className='block border p-2 rounded-2xl  w-full px-4'placeholder='email' />
                <label className='' htmlFor="password">password</label>
                <input type="password" className='block border p-2 rounded-2xl w-full px-4'placeholder='password' />
                <div className='flex justify-center'>
                    <button type='submit' className='bg-white text-black px-4 py-1 rounded-xl font-bold mt-2 mx-auto'>login</button>
                </div>
            </form>
            <p className='p-2'>Don't have an account Please <Link className='text-blue-500 hover:underline' href="/register">Register</Link></p>
        </div>
    );
};

export default LoginPage;