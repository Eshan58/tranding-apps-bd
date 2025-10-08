import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/root';
import ErrorPage from '../pages/errorPage/errorPage';
import home from '../pages/home/home';
// import about from '../pages/about/about';
import allApps from '../pages/allApps/allApps';


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
      Component: allApps
    },
  ]
}
]);