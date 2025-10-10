import React, { Suspense, useState, useEffect } from 'react';
import TrendingAll from '../trandingAllApp/TrandingAll';
import SearchBar from '../searchBar/SearchBar';
import Loading from '../Loading/LoadingN';

const AllApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data from your JSON file
    fetch('/allAppsData.json')
      .then(response => response.json())
      .then(data => {
        setAllApps(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading apps data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading text="Loading apps..." />;
  }

  if (!Array.isArray(allApps)) {
    return <div>No apps data available</div>;
  }

  const filteredApps = allApps.filter(app => {
    if (!searchTerm.trim()) return true;
    return app.title?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const displayedApps = filteredApps.slice(0, 20);

  return (
    <div className="p-4">
      <div className='flex justify-between items-center'>
        <h2 className="font-semibold m-3">Showing {displayedApps.length} apps</h2>
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        placeholder="Search apps..." 
      />
      </div>
      
      
      
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 justify-items-center mx-auto">
          {displayedApps.map((multiApp) => (
            <TrendingAll key={multiApp.id} multiApp={multiApp} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AllApp;