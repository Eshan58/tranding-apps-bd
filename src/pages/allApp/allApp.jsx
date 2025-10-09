import React, { Suspense } from 'react';
import TrendingAll from '../trandingAllApp/TrandingAll';
import SearchBar from '../searchBar/SearchBar';
import Loading from '../Loading/LoadingN';

const AllApp = ({ AllApp = [] }) => {
  
  const [searchTerm, setSearchTerm] = React.useState('');

  if (!Array.isArray(AllApp)) {
    console.log('AllApp is not an array:', AllApp);
    return <div>No apps data available</div>;
  }

  const filteredApps = AllApp.filter(app => {
    if (!searchTerm.trim()) return true;
    return app.title?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const displayedApps = filteredApps.slice(0, 20);

  return (
    <div>
      <div className='flex justify-between items-center'>

         <h2 className='font-semibold m-3'>Showing {displayedApps.length} apps</h2>
        <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        placeholder='Search Apps Name'
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