import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search apps..." }) => {
  return (
    <div className="form-control w-64 mr-3">
      <div className="join w-full ">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered join-item w-full"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {/* <button className="btn btn-primary join-item">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button> */}
      </div>
    </div>
  );
};

export default SearchBar;