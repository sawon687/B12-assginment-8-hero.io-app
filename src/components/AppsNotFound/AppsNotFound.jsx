import React from 'react';
import notFoundAppIcon from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppsNotFound = () => {
   
    return (
        <div className="md:11/12 flex h-[700px] flex-col  justify-center items-center ">
            <img src={notFoundAppIcon} alt="" />
            <h1 className='text-5xl text-center font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='mt-4 text-center'>The App you are requesting is not found on our system.  please try another apps</p>
        </div>
    );
};

export default AppsNotFound;