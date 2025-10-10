import React, {  } from 'react';
import ratingStar from '../../assets/icon-downloads.png';
import downloadsIcon from '../../assets/icon-ratings.png';



const app = ({singleApp}) => {
   
    const {companyName,image,ratingAvg,downloads} = singleApp;


    return (
        
        <div>
            <div>
            <div className="card bg-base-100 w-70 shadow-lg">
  <figure>
    <img src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {companyName}
 
    </h2>

    <div className="card-actions justify-between">
      <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />{downloads}</div>
      <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />{ratingAvg}</div>
    </div>
  </div>
</div>
        </div>
            
        </div>
        
    );
};  


export default app;