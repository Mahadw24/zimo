import React, { useContext } from 'react';
import headphone from '../styles/assets/headphone.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '@/context/CartContext';

function Product({ isreversed, product }) {

    const { cartItems, checkForDisabled, addToCart } = useContext(CartContext);

    return (
        <>
            <div className={`p-4 sm:p-8 sm:flex sm:flex-row  sm:max-w-[700px]  ${isreversed ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
                <Link href={{
                    pathname: '/itemsdetails',
                    query: { product: JSON.stringify(product) }
                }}>
                    <Image className='object-contain rounded-2xl max-w-[400px] w-full sm:w-[300px]' src={product.images[0]} width={300} height={300} />
                </Link>
                <div className='p-4'>
                    <p className='text-2xl text-white py-1'>{product.title}</p>
                    <p className='text-white text-sm'>{product.description}</p>
                    <p className='mt-4 text-white'>
                        <span>$</span>
                        <span> {product.price}</span>
                    </p>
                    <button className='mt-4 rounded-md py-2 px-4 text-white bg-red-700' onClick={() => addToCart(product)} disabled={checkForDisabled(product.id)}>{checkForDisabled(product.id) ? "Added" : "Add to cart"} </button>
                </div>
            </div>
        </>
    );
}

export default Product;