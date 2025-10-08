import React from 'react';
import errorImage from '../../assets/error-404.png';
import { Link } from 'react-router';

const errorPage = () => {
    return (
        <div >
            <img className='justify-center items-center w-2/8 h-2/8 mx-auto my-auto' src={errorImage} alt="" />
            <br />
            <h1 className='text-5xl text-center mx-auto my-auto'>Oops, page not found!</h1>
            <p className='text-2xl text-gray-400 mt-5 text-center mx-auto my-auto'>The page you are looking for is not available.</p>
            <div className='flex justify-center items-center'>
                <Link><button className="btn btn-primary mt-5 text-3xl ">Go Back!</button></Link>
            </div>

        </div>
    );
};

export default errorPage;