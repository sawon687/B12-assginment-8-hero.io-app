import React from 'react';
import Errorimg from '../assets/error-404.png'
const ErrorPage = () => {
    return (
        <div className='mx-auto'>
            <figure><img src={Errorimg} alt="" /></figure>
        </div>
    );
};

export default ErrorPage;