import React from 'react';
import { Link } from 'react-router';
import playStoreIcon from '../../assets/playStoreUocn.png'
import appStoreIcon from '../../assets/AppStoreIcon.png'
import hero from '../../assets/hero.png'

 const totaldowonload=[{title:'Total Downloads', dowonReviwerapp:'29.6M', parsentage:'21% more than last month'},
        {title:'Total Reviews', dowonReviwerapp:'906K', parsentage:'46% more than last month'},
        {title:'Active Apps', dowonReviwerapp:'132+', parsentage:'31 more will Launch'},
    ]
const Banner = () => {
   

   
    return (
        <>
        <div className='pt-20 space-y-4'>
            <h1 className='text-7xl text-[#001931] text-center font-bold'>We Build <br />
<span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text  text-transparent  font-bold'>Productive</span> Apps</h1>
<p className='text-center px-90 text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
 <div className='flex justify-center gap-5'>
    <Link className='btn py-6'><img src={playStoreIcon}  alt="play store" /> Google Play</Link>
    <Link className='btn py-6'> <img src={appStoreIcon} alt="App store" />App Store</Link>
    </div>
     
      <div>
       <figure className='w-[700px] mx-auto mt-7' > <img src={hero} alt="" /></figure>

       <div className='py-10 space-y-7  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
           <h1 className='text-center  text-4xl text-white font-bold'>Trusted by Millions, Built for You</h1>
              <div className='flex justify-center gap-20'>
               {
                 
                    
                   totaldowonload.map((data,index)=> <div key={index} className='space-y-4 text-center'>

                    <p className='text-white'>{data.title}</p>
                    <h1 className='text-white font-bold text-6xl'>{data.dowonReviwerapp}</h1>
                    <p className='text-white'>{data.parsentage}</p>
                 
                    </div>)
                    
               }
              </div>
             </div>
       </div>
        </div>

        </>
    );
};

export default Banner;