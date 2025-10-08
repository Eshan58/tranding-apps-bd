import React, { Suspense, } from 'react';
import App from '../app/app';
// import allApp from '../../components/allApps'

const apps = ({data}) => {


    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-10 mb-5'>Trending Apps</h1><br />
            <p className='text-gray-400 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>Loading...</span>}>  
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10 justify-items-center mx-auto'>
                    {
                    data.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
                }
                </div>
                {/* <Link to='/apps'><button className="btn btn-primary">Show All</button></Link> */}
            </Suspense>
        </div>
    );
};

export default apps;