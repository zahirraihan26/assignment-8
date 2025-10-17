import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Head = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            

            <Footer></Footer>
        </div>
    );
};

export default Head;