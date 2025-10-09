import React from 'react';
import Errorimg from '../assets/error-404.png'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[600px] mt-20 flex flex-col justify-center items-center'>
                <figure className=''><img src={Errorimg} alt="" /></figure>
                <div>
                    <h1 className='text-center text-5xl font-bold mt-5'>Oops, page not found!</h1>
                    <p className='text-center mt-5'>The page you are looking for is not available.</p>
                    <div className=' flex justify-center pt-5' >
            <Link to='/' className=' btn px-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go to Back</Link>
           </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;