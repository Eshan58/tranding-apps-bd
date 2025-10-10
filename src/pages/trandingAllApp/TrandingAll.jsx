import React from 'react';
// import RatingApps from '../../assets/icon-ratings.png'
import ratingStar from '../../assets/icon-ratings.png'
import downloadsIcon from '../../assets/icon-downloads.png';
import { Link } from 'react-router';

const TrandingAll = ({ multiApp }) => {
    return (
        <div className="app-card">
         <Link to={`/about/${multiApp.id}`}><div>
               <img src={multiApp.image} alt={multiApp.title} />
            <h3>{multiApp.title}</h3>
            <div className='flex justify-between'>
                <p className='flex items-center'><img src={downloadsIcon} className='w-4 h-4 mr-1'  alt="" />{multiApp.downloads?.toLocaleString()}</p>
                <p className='flex items-center'><img src={ratingStar} className='w-4 h-4 mr-1' alt="" />{multiApp.ratingAvg}</p>
                
            </div>
         </div></Link>
        </div>
    );
};

export default TrandingAll;