import React from 'react';
import Image from 'next/image'

function Midsectiondetails({ product }) {
    return (
        <>
        <div className='pt-[100px] pb-[100px] bg-black bg-repeat bg-cover' style={{ backgroundImage: `url("${product.images[1]}")`}}>
            <p className='text-black font-bold text-center text-5xl'>{product.title}</p>
        </div>
        </>
    );
}

export default Midsectiondetails;