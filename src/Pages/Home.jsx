import React from 'react';
import Banner from '../components/Banner/Banner';
import TrendingApps from '../components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;