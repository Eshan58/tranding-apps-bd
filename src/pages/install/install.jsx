import React from 'react';
import { NavLink } from 'react-router';

const install = () => {
    return (
        <div className='text-center mt-10 mb-10'>
                <NavLink to='/apps'><button className="btn btn-primary">Show All</button></NavLink>
            </div>
    );
};

export default install;