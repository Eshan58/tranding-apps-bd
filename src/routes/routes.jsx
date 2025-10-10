import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/root';
import ErrorPage from '../pages/errorPage/errorPage';
import home from '../pages/home/home';
import AllApps from '../pages/allApps/allApps';
import install from '../pages/install/install';
import installlation from '../../src/installlation/installlation';
import Details from '../../src/details/details'
import Demo from '../demo/demo';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[{
        index:true,
        loader:()=>fetch('/appsData.json'),
        path:'/',
        Component: home
    },
    {
      path:'/apps',
      loader:()=>fetch('/allAppsData.json'),
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
      Component: Demo,
    }
  ]
}
]);