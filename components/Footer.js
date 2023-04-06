import React from 'react';
// import Image from 'next/image'
// import FaLinkedinIn from 'react-icons/fa'

function Footer() {
    return (
        <>
        <div className='bg-black pt-10 p-8'>
            <p className='text-red-700 text-2xl font-bold mb-2'>NEXT CART</p>
            <p className='text-white mb-4'>Developed by Mahad Waseem</p>
            {/* <Image src={FaLinkedinIn} width={200} height={200}/> */}
            <p className='text-white mb-4'>
                <span>
                copyright@ 2023 All rights reserved designed and developed by 
                </span>
                <span className='text-red-700'> Mahad.</span>
                </p>
        </div>
        </>
    );
}

export default Footer;