import React from 'react';
import Contact from '@/components/Contact';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Midsection from '@/components/Midsection';
import Navbar from '@/components/Navbar';

function Home() {
    return (
        <>

            <Navbar />
            <Midsection />
            <Featured />
            <Contact />
            <Footer />

        </>
    );
}

export default Home;