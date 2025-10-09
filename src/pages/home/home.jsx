import React from 'react';
import Banner from '../../components/banner/banner';
import Apps from '../apps/apps';
import { useLoaderData } from 'react-router';
import Ins from '../install/install'
import AllApp from '../allApps/allApps';



const Home = () => {
    const data = useLoaderData();
    console.log(data);
    // const appData = useLoaderData();
    // console.log(appData);
    // const Data = useLoaderData();
    // console.log(Data);
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
            {/* <AllApp Data={data}></AllApp> */}
            <Ins></Ins>
            {/* <AllApp AllApp={AllApp}></AllApp> */}
            
        </div>
    );
};

export default Home;