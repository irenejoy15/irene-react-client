import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<h1>jhome</h1>
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
