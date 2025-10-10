import React, { Suspense, } from 'react';
import App from '../app/app';
import { Link } from 'react-router';
import Loading from '../Loading/LoadingN';
// import allApp from '../../components/allApps'

const apps = ({data}) => {


    return (
        <div>
            
            <h1 className='text-5xl text-center font-bold mt-10 mb-5'>Trending Apps</h1><br />
            <p className='text-gray-400 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <Link to={`/about/${data.id}`}>
            <Suspense fallback={<Loading />}>  
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 justify-items-center mx-auto'>
                    {
                    data.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
                }
                </div>
                
                
            </Suspense>
            </Link>
            {/* <Suspense fallback={<span>Loading......</span>}>  
               
            </Suspense> */}
           
        </div>
    );
};

export default apps;