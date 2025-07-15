import { Outlet, redirect, useLoaderData,useNavigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar,SmallSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";
import { toast } from 'react-toastify';

import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data.user;
  } catch (error) {  
    return redirect('/login');
  }
};

const DashboardContext = createContext()

const DashboardLayout = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const [showSideBar,setShowSidebar] = useState(false);
  const [isDarkTheme,setIsDarkTheme] = useState(() => checkDefaultTheme())
  
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme',newDarkTheme);
    localStorage.setItem('darkTheme',newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  } ;

  const logoutUser = async() => {
    navigate('/');
    await customFetch.get('auth/logout');
    // LARAVEL
    // localStorage.removeItem("user")
    toast.success('logging out');
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
              <Outlet context={{user}}/>
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
