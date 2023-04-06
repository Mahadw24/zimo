import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import Image from 'next/image'
import headphone from '../styles/assets/headphone.jpg'
import Product from './Product';

function Featured() {
    const [skipValue, setSkipValue] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 500,
            behavior: 'smooth',
        });
        fetch(`https://dummyjson.com/products?limit=10&skip=${skipValue}`)
            .then(res => res.json())
            .then((data) => setProducts(data.products))
    }, [skipValue])

    const [products, setProducts] = useState([]);

    return (
        <>
            <div>
                <p className='text-black text-center mb-6 font-bold text-2xl'>Featured Items!!</p>
                <div className='bg-[#171717] pt-10 mt-20 w-full sm:flex sm:flex-row sm:items-center sm:justify-around sm:flex-wrap'>
                    {
                        products.map((product) => {
                            return (
                                <>
                                    <Product key={product.id} product={product} isreversed={false} />
                                </>
                            )
                        })
                    }
                    <Pagination className='text-white bg-white flex items-center justify-center rounded-xl mx-10 py-4' defaultCurrent={1} onChange={(page, pagesize) => setSkipValue((page - 1) * 10)} total={60} />

                </div>
            </div>
        </>
    );
}

export default Featured;