import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';


const RootLayout = () => {

    return (
        <div >
            <Navbar></Navbar>
           <div className='min-h-screen bg-gray-100 '>     
            <Outlet />
           </div>
            <Footer></Footer>
        </div>)
};

export default RootLayout