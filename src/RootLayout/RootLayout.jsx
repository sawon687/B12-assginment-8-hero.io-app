import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import useApp from '../hook/usehook';
import Loading from '../components/Loading/Loading';

const RootLayout = () => {
 const [,loading]=useApp()
    return (
        < >
        
        { 
           !loading?
               (  <div>
                <Navbar></Navbar>
             <div className='min-h-screen bg-gray-100 '>     
            <Outlet />
           </div>
            <Footer></Footer>
            </div>): <Loading/>
        }
          
        
            
        </>)
};

export default RootLayout