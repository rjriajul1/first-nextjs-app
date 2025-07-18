import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
    const services = [
        {
            "id":1,
            "name":"water",
            "price": 20
        },
        {
            "id":2,
            "name":"tea",
            "price": 5
        },
        {
            "id":3,
            "name":"biskut",
            "price": 20
        },
    ]
    return (
        <div>
            <h1 className='text-center'>All Service</h1>
            <div className='flex gap-6 py-2'>
                {services.map(ser=> <div className='border p-6 text-center space-y-3' key={ser.id}>
                    <h1>{ser.id}</h1>
                    <p>{ser.name}</p>
                    <Link href={`/services/${ser.id}`}><button className='bg-white text-black rounded-2xl px-3 py-1'>details</button></Link>
                </div>)}
            </div>
        </div>
    );
};

export default ServicesPage;