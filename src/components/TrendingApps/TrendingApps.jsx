import React from 'react';
import useApp from '../../hook/usehook';
import Appcard from '../appCard/appCard';

const TrendingApps = () => {
    const [app,loading ,Error]=useApp()
    const trendinApps=app.slice(0,8)
    console.log(trendinApps)
    return (
        <div className='my-10'>
            <h1 className='text-center my-4 text-5xl font-bold'>Trending Apps</h1>
            <p className='text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
           <div className='grid lg:grid-cols-4 gap-10 mt-10 px-20 md:grid-cols-3 grid-cols-1 '>
             {
                 trendinApps.map((appData)=> <Appcard appData={appData}></Appcard> )
             }
           </div>

           <div className=' flex justify-center py-10' >
            <button className=' btn px-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button>
           </div>
        </div>
    );
};

export default TrendingApps;