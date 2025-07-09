import { Outlet } from "react-router-dom"

import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar,SmallSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";


const DashboardContext = createContext()

const DashboardLayout = () => {
  // temp
  const user = {name:'irene'}
  const [showSideBar,setShowSidebar] = useState(false);
  const [isDarkTheme,setIsDarkTheme] = useState(false);
  
  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  } ;

  const logoutUser = async() => {
     console.log('logout user');
  }


  return (
    <DashboardContext.Provider value={{user,showSideBar,isDarkTheme,toggleDarkTheme,toggleSidebar,logoutUser}}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar/>
          <div>
            <Navbar/>
            <div className="dashboard-page">
              <Outlet/>
            </div>  
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout
