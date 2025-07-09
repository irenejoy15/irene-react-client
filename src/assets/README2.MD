ES7 React/Redux/GraphQL/React-Native snippets
vscode-styled-components
auto rename tag

- https://vite.dev/ -> to create react app
- npm create vite@latest
- npm create vite@latest client -- --template react

SUMMARY
- FAVICON AND TITLE https://favicon.io/
- npm install @tanstack/react-query @tanstack/react-query-devtools axios dayjs react-icons react-router-dom react-toastify recharts styled-components
- npm install styled-components

REACT ROUTER
- [React Router](https://reactrouter.com/en/main) npm i react-router-dom
- App.jsx

CREATE PAGES
- create all pages 
import React from 'react'

const AddJob = () => {
  return (
    <h1>AddJob Page</h1>
  )
}

export default AddJob

- setup index js app.jsx
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
        element:<DashboardLayout/>
      }
    ]



CREATION OF NAVBAR
- Dapat meron Outlet Tag para sa mga Children ng Coutes
- app.jsx - lagay sa Children app
- Outlet Sa Navbar na tag or HomeLayout 
- Put index sa routes yung unang mag load sa children route

Error Page
- Error Page Put to routes App.jsx

Styled Components
- Same sa angular component.css  Logic
- Nasa Assets yung styled components
- Logo Components
- unDraw.co and Figma

CREATE GLOBAL CONTEXT LIKE USERS ETC
- const DashboardContext = createContext()

