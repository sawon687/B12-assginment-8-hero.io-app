import React, { useState } from 'react';
import useApp from '../../hook/usehook';
import Allcard from '../AllaplicationCard/Allcard';

const Allaplication = () => {
    const [allApp]=useApp()
    const [search,setSearch]=useState('')
    const term=search.trim().toLowerCase()
    const searchApp=term? allApp.filter(app=> app.title.toLowerCase().includes(term)):allApp

    return (
        <div>
              <div className='space-y-5'>
             <h1 className='text-4xl text-[#001931] text-center font-bold'>Our All Applications</h1>
            <p className='text-gray-500 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mt-10'>
                <h1 className='text-[#001931] font-bold text-2xl'>({searchApp.length})Apps Found</h1>
                <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
               strokeWidth="2.5"
              fill="none"
                 stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                 </g>
                      </svg>
                <input value={search} type="search" onChange={(e)=> setSearch(e.target.value)} required placeholder="Search" />
                  </label>
            </div>

           <div className='grid py-15 lg:grid-cols-4 gap-10 mt-10 px-20 md:grid-cols-3 grid-cols-1 '>
            {
               searchApp.map(appdata=> <Allcard key={appdata} appdata={appdata}></Allcard>) 
            }
           </div>
        </div>
    );
};

export default Allaplication;