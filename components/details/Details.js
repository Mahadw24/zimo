import React, { useContext } from 'react';
import Image from 'next/image'
import { Carousel } from 'antd';
import { CartContext } from '@/context/CartContext';

function Details({ product }) {
    const { addToCart,cartItems,checkForDisabled } = useContext(CartContext);

    return (
        <div className='pt-12 pb-12 bg-[#171717] sm:flex sm: items-center sm:justify-center'>
            <div className='flex items-center justify-center'>
                <Carousel className='w-[300px] sm:w-[400px] mb-10' autoplay>
                    {product.images.map((image) => {
                        return (
                            <>
                                <Image className='p-3 object-contain' src={image} width={400} height={400} alt=""/>
                            </>
                        )
                    })}
                </Carousel>
            </div>
            <div className='ml-6 mr-6'>
                <p className='text-white pb-2 pl-3 text-3xl font-semibold'>{product.title}</p>
                <p className='text-white pb-2 pl-3'>{product.description}</p>
                <p className='text-white pb-2 pl-3'>{product.category}</p>
                <p className='text-white pb-2 pl-3'>{product.brand}</p>
                <p className='text-2xl'>
                    <span className='text-white pl-3'>$</span>
                    <span className='text-red-600'> {product.price}</span>
                </p>
                <button className='text-white border-2 rounded-lg border-red-600 px-6 ml-3 mt-6'  onClick={() => addToCart(product)} disabled={checkForDisabled(product.id)}>{checkForDisabled(product.id) ? "Added" : "Add to cart"} </button>
                <p className='text-white ml-3 mt-3'>Average ratings: {product.rating}</p>
            </div>
        </div>
    );
}

export default Details;