import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
           <div className='h-[calc(auto-285px)]'>
              <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;