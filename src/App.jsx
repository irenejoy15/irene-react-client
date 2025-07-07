import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Register,
  Login,
  Error,
  Landing,
  DashboardLayout
} from './pages';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
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
        element:<DashboardLayout/>
      }
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router = {router}/>
}

export default App
