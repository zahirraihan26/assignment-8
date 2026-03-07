import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ChatAssistant from '../Components/ChatAssistant';
import { Outlet } from 'react-router';

const Head = () => {
    return (
        <div className='flex flex-col min-h-screen relative'>
            <Navbar></Navbar>

            <div className='flex-1' >
                <Outlet></Outlet>
            </div>

            <ChatAssistant />
            <Footer></Footer>
        </div>
    );
};

export default Head;