import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Register,
  Login,
  Error,
  Landing,
  DashboardLayout,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin
} from './pages';

const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element: <Landing/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>
      }
      ,
      {
        path:'dashboard',
        element:<DashboardLayout/>,
        children:[
          {
            index:true,
            element:<AddJob/>
          },
          {
            path:'stats',
            element:<Stats/>
          },
          {
            path:'all-jobs',
            element:<AllJobs/>
          },
          {
            path:'profile',
            element:<Profile/>
          },
          {
            path:'admin',
            element:<Admin/>
          },
        ]
      }
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router = {router}/>
}

export default App
