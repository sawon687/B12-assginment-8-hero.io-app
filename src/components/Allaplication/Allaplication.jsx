import React, { useEffect, useState } from 'react';
import useApp from '../../hook/usehook';
import Allcard from '../AllaplicationCard/Allcard';

import Loading from '../Loading/Loading';
import AppsNotFound from '../AppsNotFound/AppsNotFound';
const Allaplication = () => {
    const [allApp,loading]=useApp()
    const [search,setSearch]=useState('')
    const [searchApp,setSearchApp]=useState([])
    const [searchloading,setsearchLoading]=useState(false)
    const term=search.trim().toLowerCase()
    
       useEffect(()=> {
        setsearchLoading(true)
          const timer=setTimeout(() => {
              if(term)
            {
                const filter =allApp.filter(app=> app.title.toLowerCase().includes(term) )
                setSearchApp(filter)
              
            }
            else{
                setSearchApp(allApp)
            }
             setsearchLoading(false)
          }, 300);
          return ()=>clearTimeout(timer)
       },[term,allApp])
     
    return (
        <div >
              <div className='space-y-5 '>
             <h1 className='text-4xl text-[#001931] text-center font-bold'>Our All Applications</h1>
            <p className='text-gray-500 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between md:flex-row flex-col items-center space-y-4 mt-10'>
                <h1 className='text-[#001931] font-bold text-2xl'>({allApp.length})Apps Found</h1>
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
             <div > 
           

           { loading || searchloading?(
                    <Loading></Loading>
            ): searchApp.length > 0 ? 
             ( <div className='grid py-15 lg:grid-cols-4 gap-5 mt-10  md:grid-cols-3 grid-cols-1'>  {searchApp.map(appdata=> <Allcard key={appdata.id}  appdata={appdata}></Allcard>) } </div>) :
             ( <div className='-mt-20 space-y-3'>
                  <AppsNotFound/>
                 <div className='flex justify-center -mt-26 mb-4'>
                   <button onClick={()=> setSearch('')}  className=' btn py-6 mt-6 px-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back </button>
                 </div>
             </div>)


            }
        
                     
           </div>
          
        </div>
        
    );
};

export default Allaplication;