import React from 'react';


const Apps = () => {
    return (
        <div className='px-20 mt-10'>
            <div className='space-y-5'>
             <h1 className='text-4xl text-[#001931] text-center font-bold'>Our All Applications</h1>
            <p className='text-gray-500 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mt-10'>
                <h1 className='text-[#001931] font-bold text-2xl'>(132)Apps Found</h1>
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
                <input type="search" required placeholder="Search" />
                  </label>
            </div>
            
        </div>
    );
};

export default Apps;