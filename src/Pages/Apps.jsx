import React from 'react';
import Allaplication from '../components/Allaplication/Allaplication';
import useApp from '../hook/usehook';
import Loading from '../components/Loading/Loading';


const Apps = () => {
    const [,loading]=useApp()
    if(loading)
  {
    return <Loading></Loading>
  }
    return (
        <>
        
       <div className='lg:px-20  px-10  pt-10 '>
           <Allaplication></Allaplication>
        </div>
        
        </>
    );
};

export default Apps;