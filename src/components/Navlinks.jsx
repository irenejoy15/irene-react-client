import React from 'react'
import links from '../utils/links'
import { useDashboardContext } from '../pages/DashboardLayout'
import { NavLink } from 'react-router-dom'
const Navlinks = () => {
    const {toggleSidebar,user} = useDashboardContext();
    return (
        <div className="nav-links">
            {links.map((link)=>{
            const {text,path,icon} = link
            return <NavLink to={path} key={text} className='nav-link' onClick={toggleSidebar}>
                <span className='icon'>{icon}</span>
                {text}
            </NavLink>
            })}
        </div>
    )
}

export default Navlinks
