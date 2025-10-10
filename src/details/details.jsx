import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaDownload, FaArrowLeft, FaShare, FaHeart,  } from 'react-icons/fa';


const Details = () => {


  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [AllApps, setAllApps] = useState([]);










  useEffect(() => {
    fetch('/allAppsData.json')
      .then(response => response.json())
      .then(data => {
        setAllApps(data);
        const foundApp = data.find(item => item.id === parseInt(id));
        setApp(foundApp);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading app data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">App Not Found</h2>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      
      <div className="bg-base-100 ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/apps" className="btn btn-ghost btn-circle">
              <FaArrowLeft />
            </Link>
            <h1 className="text-2xl font-bold">App Details</h1>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-base-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="flex-shrink-0">
              <img 
                src={app.image} 
                alt={app.title}
                className="w-64 h-64 rounded-2xl object-cover shadow-lg"
              />
            </div>

            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{app.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">Company Name : {app.companyName}</p>
                </div>
                
              </div>

              

             
              <div className="flex gap-15">
                <div className="text-center">
                  <FaDownload className="h-6 w-6 mx-auto text-green-400 mb-2" />
                  <p className="text-sm text-gray-500">Downloads</p>
                  <p className="font-bold text-3xl">{app.downloads?.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <FaStar className="h-6 w-6 mx-auto text-yellow-400 mb-2" />
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="font-bold text-3xl">{app.ratingAvg}</p>
                </div>
                <div className="text-center">
                  <FaHeart  className="h-6 w-6 mx-auto text-purple-400 mb-2"/>
                  <p className="text-sm text-gray-500">Total Reviews</p>
                  <p className="font-bold text-3xl">{app.reviews}</p>
                </div>
                
                
              </div>

            
 <button className="btn btn-primary btn-lg mb-6 mt-6 bg-cyan-500">
                Install Now ({app.size} MB)
              </button>

              
            </div>
          </div>
        </div>


        
<div className='w-full '>
          {app.ratings && (
          <div className="bg-base-100 p-6">
            <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
            <div className="space-y-4">
              {app.ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-20">{rating.name}</span>
                  <progress 
                    className="progress progress-primary w-full hover:progress-secondary " 
                    value={rating.count} 
                    max={Math.max(...app.ratings.map(r => r.count))}
                  ></progress>
                  <span className="text-sm text-black">{rating.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
</div>

        
        <div className="bg-base-100 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-lg leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;