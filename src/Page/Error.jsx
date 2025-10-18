
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';


const Error = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={errorImg} alt="404 not found" />


                </div>
                <div className='text-center'>
                    <h1 className='text-5xl font-semibold'>Oops, page not found!</h1>
                    <p className='text-gray-400 py-3'>The page you are looking for is not available.</p>
                    <Link to='/' className='text-white btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] px-10 mb-3 font-semibold'>
                        Back to Home
                    </Link>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Error;

