import React from 'react';
import Banner from '../../components/banner/banner';
import Apps from '../apps/apps';
import { useLoaderData } from 'react-router';
// import AllApp from '../allApps/allApps';



const Home = () => {
    const data = useLoaderData();
    console.log(data);
    // const Data = useLoaderData();
    // console.log(Data);
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
            {/* <AllApp Data={data}></AllApp> */}
        </div>
    );
};

export default Home;