import React from 'react';

import InstallApps from '../components/InstallApps/InstallApps';
import useApp from '../hook/usehook';
import Loading from '../components/Loading/Loading';

const Installation = () => {
    const [,loading]=useApp()
    return (
        <>
        {
           !loading?<div>
            <InstallApps ></InstallApps>
        </div>:<Loading/> 
        }
        
        </>
    );
};

export default Installation;