import React from 'react';
import Banner from '../components/Banner/Banner';
import TrendingApps from '../components/TrendingApps/TrendingApps';
import Loading from '../components/Loading/Loading';
import useApp from '../hook/usehook';

const Home = () => {
    const [,loading]=useApp()
    return (
        <>
        {
            !loading?(<div className='bg-[#f5f5f5]'>
            <Banner></Banner>
            <TrendingApps></TrendingApps>
           
            </div>):<Loading/>
        }
        </>
    );
};

export default Home;