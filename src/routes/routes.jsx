import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/root';
import ErrorPage from '../pages/errorPage/errorPage';
import home from '../pages/home/home';
// import about from '../pages/about/about';
import AllApps from '../pages/allApps/allApps';
import install from '../pages/install/install';
import installlation from '../pages/installlation/installlation';
import Details from '../pages/details/details'
// import allApp from '../pages/allApp/allApp';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[{
        index:true,
        loader:()=>fetch('appsData.json'),
        path:'/',
        Component: home
    },
    {
      path:'/apps',
      loader:()=>fetch('allAppsData.json'),
      element:<AllApps/>,
      
    },
    {
      path:'/install',
      Component: install
    },
    {
      path:'/installlation',
      Component: installlation,
    },
    {
      path:'/about/:id',
      Component:Details
    }
  ]
}
]);