import React from 'react';
import shopping from '../styles/assets/Shopping.png'
import Image from 'next/image'

function Midsection() {
    return (
        <>
            <div className='mt-8 ml-4 flex flex-col items-center justify-center sm:flex-row sm:justify-around'>
                <div className=''>
                    <h3 className='font-bold text-2xl mb-6'>Welcome to NEXT Cart</h3>
                    <p className='text-lg sm:w-[600px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Beatae impedit, amet sint sapiente excepturi quibusdam ad
                        dolorum expedita reiciendis incidunt modi dolorem? Pariatur,
                        illo. Quasi veritatis cumque molestias dicta corporis.
                    </p>
                </div>
                <Image className='max-w-[300px]' src={shopping} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                {/* <button className='mt-2 border-2 border-black sm:rounded-sm px-2 py-1 bg-yellow-500 w-72'>
                    Products
                </button> */}
            </div>
        </>
    );
}

export default Midsection;