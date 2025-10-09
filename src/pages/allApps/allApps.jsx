import React from 'react';
import AllApp from '../allApp/allApp';
import { useLoaderData } from 'react-router-dom';

const AllApps = () => {
    const appData = useLoaderData();
    console.log(appData);

    return (
        <div>
            <AllApp AllApp={appData} />
        </div>
    );
};

export default AllApps;