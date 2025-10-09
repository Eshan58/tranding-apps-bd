import React,{useState} from 'react';
import ratingStar from '../../assets/icon-downloads.png';
import downloadsIcon from '../../assets/icon-ratings.png';
// import { image, img } from 'framer-motion/client';


const appsData = [
  { id: 1,image:"/src/assets/demo-app (1).webp", name: "Retro Studios", downloads: "500000", rating: "4.5" },
  { id: 2,image:"/src/assets/demo-app (2).webp", name: "Zen Labs", downloads: "50000", rating: "4.1" },
  { id: 3,image:"/src/assets/demo-app (3).webp", name: "Weather Tracker Pro", downloads: "800000", rating: "4.7" },
  { id: 4,image:"/src/assets/demo-app (4).webp", name: "HealthPlus Coach", downloads: "1200000", rating: "4.9" },
  { id: 5,image:"/src/assets/demo-app (5).webp", name: "Budget Planner", downloads: "650000", rating: "4.3" },
  { id: 6,image:"/src/assets/demo-app (6).webp", name: "Language Learn", downloads: "1850000", rating: "4.6" },
  { id: 7,image:"/src/assets/demo-app (1).webp", name: "Photo Editor Pro", downloads: "950000", rating: " 4.4" },
  { id: 8,image:"/src/assets/demo-app (2).webp", name: "Music Stream", downloads: "2100000", rating: "4.9" },
  { id: 9,image:"/src/assets/demo-app (3).webp", name: "Recipe Master", downloads: "720000", rating: " 4.6" },
  { id: 10,image:"/src/assets/demo-app (4).webp", name: "Puzzle Quest", downloads: "1100000", rating: "4.7" },
  { id: 11,image:"/src/assets/demo-app (5).webp", name: "Travel Guide", downloads: "680000", rating: "4.4" },
  { id: 12,image:"/src/assets/demo-app (6).webp", name: "Sleep Tracker", downloads: " 430000", rating: " 4.2" },
  { id: 13,image:"/src/assets/demo-app (1).webp", name: "Code Master", downloads: "1350000", rating: " 4.8" },
  { id: 14,image:"/src/assets/demo-app (2).webp", name: "Meditation Zone", downloads: " 590000", rating: "4.5" },
  { id: 15,image:"/src/assets/demo-app (3).webp", name: "Racing Extreme", downloads: "1650000", rating: "4.3" },
  { id: 16,image:"/src/assets/demo-app (4).webp", name: "Note Taker Pro", downloads: " 880000", rating: "4.7" },
  { id: 17,image:"/src/assets/demo-app (5).webp", name: "Social Camera", downloads: "980000", rating: "4.1" },
  { id: 18,image:"/src/assets/demo-app (6).webp", name: "Investment Tracker", downloads: "520000", rating: "4.6" },
  { id: 19,image:"/src/assets/demo-app (1).webp", name: "Fitness Tracker Pro", downloads:"820000", rating: "4.5" },
  { id: 20,image:"/src/assets/demo-app (2).webp", name: "Language Translate", downloads:"1250000", rating: "4.4" },

]



const AllApps = () => {


  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter apps based on search
  const filteredApps = appsData.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );





    return (
        
        <div>
            <div>
                <h1 className='text-center text-6xl font-bold'>Our All Applications</h1><br />
                <p className='text-center text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mt-10 mb-10 mx-10'>
              <h1>(20) apps found</h1>
              <div>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 focus:outline-none"/>
</label>
              </div>
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10 justify-items-center mx-auto'>
            <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (1).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Retro Studios
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />580000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.5</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                     <div className="card bg-base-100 w-96 shadow-lg">
           <figure>
            <img src="../src/assets/demo-app (2).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Zen Labs
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />420000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.2</div>
            </div>
            </div>
            </div>
                </div>



            <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (3).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             Weather Tracker Pro
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />890000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.7</div>
            </div>
            </div>
            </div>
                </div>




            <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (4).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              FitLife Coach
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />1200000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.8</div>
            </div>
            </div>
            </div>
                </div>



                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src= "../src/assets/demo-app (5).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Budget Planner
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />650000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.3</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (6).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Language Learn
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />1850000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.6</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (1).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Retro Studios
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />580000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.5</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (2).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Music Stream
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />2100000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.9</div>
            </div>
            </div>
            </div>
                </div>






                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (3).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Weather Tracker Pro
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />890000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.7</div>
            </div>
            </div>
            </div>
                </div>





                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src= "../src/assets/demo-app (4).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Puzzle Quest
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />1100000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.7</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (5).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             Travel Guide
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />680000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.4</div>
            </div>
            </div>
            </div>
                </div>



                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (6).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Sleep Tracker
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" /> 430000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.2</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (1).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              DevLearn Academy
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />1350000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.8</div>
            </div>
            </div>
            </div>
                </div>



                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (2).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Meditation Zone
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />590000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.5</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (3).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             Racing Extreme
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />1650000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.3</div>
            </div>
            </div>
            </div>
                </div>





                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (4).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             Note Taker Pro
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />880000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.8</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (5).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Social Camera
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />980000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.1</div>
            </div>
            </div>
            </div>
                </div>





                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (6).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Investment Tracker
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />520000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.6</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src="../src/assets/demo-app (1).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Fitness Tracker Pro
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" /> 820000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.5</div>
            </div>
            </div>
            </div>
                </div>




                <div>
                    <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img src= "../src/assets/demo-app (2).webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Language Translate
         
            </h2>
        
            <div className="card-actions justify-between">
              <div className="badge badge-outline"><img src={ratingStar} className='w-4 h-4' alt="" />1250000</div>
              <div className="badge badge-outline"><img src={downloadsIcon} className='w-4 h-4'  alt="" />4.4</div>
            </div>
            </div>
            </div>
                </div>



             
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10 justify-items-center mx-auto '>
                {filteredApps.map(app => (
                  <div key={app.id} className=" rounded-lg  p-6  card bg-base-100 w-96 shadow-lg">
                    <img className='items-center' src={app.image} alt={app.name} />
                    <h3 className="font-semibold text-lg">{app.name}</h3>
                    <div className='flex justify-between'>
                      <p className='flex items-center'><img src={ratingStar} className='w-4 h-4' alt="" />{app.downloads}</p>
                    <p className='flex items-center'> <img src={downloadsIcon} className='w-4 h-4' alt="" />{app.rating}</p>
                    </div>
                  </div>
                ))}
              </div>
        </div>
    );
};

export default AllApps;