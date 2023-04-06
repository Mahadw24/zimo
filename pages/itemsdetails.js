import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Details from '@/components/details/Details';
import Midsectiondetails from '@/components/details/Midsectiondetails';



function itemdetails( { query }) {
    const product = query.product ? JSON.parse(query.product) : null;
    return (
        <>
            <Navbar />
            <Midsectiondetails product={product} />
            <Details product={product}/>
            <Footer/>  
        </>
    );
}

export default itemdetails;

itemdetails.getInitialProps = ({ query }) => {
    return { query };
}