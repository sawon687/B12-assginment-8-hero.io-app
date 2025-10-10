import React from 'react';
import useApp from '../../hook/usehook';

import Homecard from '../Homecard/Homecard';
import { Link } from 'react-router';
import Loading from '../Loading/Loading';

const TrendingApps = () => {
    const [app]=useApp()
    const trendinApps=app.slice(0,8)
    console.log(trendinApps)
    return (
        <div className='md:11/12 '>

           (
                     <div className='py-10'>
            <h1 className='text-center my-4 text-5xl font-bold'>Trending Apps</h1>
            <p className='text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
           <div className='grid lg:grid-cols-4 gap-10 mt-10 md:grid-cols-3 grid-cols-1 md:px-20 px-7'>
             {
                 trendinApps.map((appData)=> <Homecard appData={appData}></Homecard> )
             }
           </div>

           <div className=' flex justify-center py-10' >
            <Link to='/Apps' className=' btn px-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</Link>
           </div>
               </div>) 
          

        
        </div>
    );
};

export default TrendingApps;