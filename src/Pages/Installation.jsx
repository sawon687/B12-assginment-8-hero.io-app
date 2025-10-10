import React from 'react';

import InstallApps from '../components/InstallApps/InstallApps';
import useApp from '../hook/usehook';
import Loading from '../components/Loading/Loading';

const Installation = () => {
    const [,loading]=useApp()
    if(loading)
    {
        return <Loading/>
    }
    return (
        <>
        <div>
            <InstallApps ></InstallApps>
        </div>
        
        
        </>
    );
};

export default Installation;