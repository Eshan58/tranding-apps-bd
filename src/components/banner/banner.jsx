import React from 'react';
import bannerImage from '../../assets/hero.png';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

const banner = () => {
    return (
        <div>
            <div>
                <div className='text-center'><h1 className='text-7xl font-bold'>We Build
                    <br /><span className='text-purple-500'> Productive </span>Apps</h1></div>
                <div className='text-center m-5'><p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p></div>
            </div>
            <div className='text-center mt-5 mb-5 space-x-5'>
                <a href="https://play.google.com/store/games?device=windows"><button className="btn btn-outline"><span><FaGooglePlay /></span>Google play</button></a>
                
                <a href="https://www.apple.com/app-store/"><button className="btn btn-outline"><span><FaAppStoreIos /></span>App store</button></a>
            </div>
            <div><img className=' mx-auto' src={bannerImage} alt="" /></div>
            <div className='bg-purple-600 text-white text-center p-10'>
                <h2 className='text-5xl'>Trusted by Millions, Built for You</h2><br />
                <div className='flex justify-center gap-80'>
                    <p>Total Downloads</p><p>Total Reviews</p><p>Active Apps</p>
                </div>
                <div className='flex justify-center gap-60'>
                    <p className='text-7xl font-bold'>29.6M</p><p className='text-7xl font-bold'>906K</p><p className='text-7xl font-bold'>132+</p>
                </div>
                <div className='flex justify-center gap-60'>
                    <p>21% more than last month</p><p>46% more than last month</p><p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default banner;