import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>
  },{
    path:'/about',
    element:(
      <div>
        <h1>ABOUT PAGE</h1>
      </div>
    )
  }
]);

const App = () => {
  return <RouterProvider router = {router}/>
}

export default App
