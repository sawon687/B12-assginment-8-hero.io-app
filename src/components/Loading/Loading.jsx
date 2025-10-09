import React from 'react';
import logo from '../../assets/logo.png';
const Loading = () => {
    return (
        <div className='flex py-10 justify-center items-center'>
            <h1 className='text-9xl items-center flex justify-center'>L<img className=' h-40 w-60 animate-spin object-contain' src={logo} alt="" />ading...</h1>
        </div>
    );
};

export default Loading;