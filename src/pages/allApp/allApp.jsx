import React, { useState } from 'react';
import ratingStar from '../../assets/icon-downloads.png';
import downloadsIcon from '../../assets/icon-ratings.png';

// Your apps data - add this with your actual apps
const appsData = [
  { id: 1, name: "Retro Studios", downloads: "500000", rating: "4.5" },
  { id: 2, name: "Zen Labs", downloads: "50000", rating: "4.1" },
  { id: 3, name: "Weather Tracker Pro", downloads: "800000", rating: "4.7" },
  { id: 4, name: "Fillife Coach", downloads: "1200000", rating: "4.9" },
  // Add your other apps here...
];

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter apps based on search
  const filteredApps = appsData.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <h1 className="text-center text-6xl font-bold">Our All Applications</h1>
        <p className="text-center text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      
      <div className="flex justify-between mt-10 mb-10 mx-10">
        <h1>({filteredApps.length}) apps found</h1>
        
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
            
            <input 
              type="search" 
              required 
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 focus:outline-none"
            />
          </label>
        </div>
      </div>

      {/* Your apps grid - replace with your actual app cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10 justify-items-center mx-auto">
        {filteredApps.map(app => (
          <div key={app.id} className="bg-white rounded-lg shadow-md p-6 w-full">
            <h3 className="font-semibold text-lg">{app.name}</h3>
            <p><img src={downloadsIcon} className='w-4 h-4' alt="" />{app.downloads}</p>
            <p> <img src={ratingStar} className='w-4 h-4' alt="" />{app.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApps;