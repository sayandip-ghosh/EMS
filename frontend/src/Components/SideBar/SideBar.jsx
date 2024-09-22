import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <aside className="w-64  fixed bg-purple-700 text-white lg:relative overflow-y-auto">
      <nav className="mt-8 ml-2">
        <ul className="space-y-4 mr-2">
          <li>
            <NavLink 
              to={`/${role}/home`} 
              className={({ isActive }) => isActive ? 'bg-purple-900 p-2 rounded-md block' : 'p-2 block hover:bg-purple-900 rounded-md'}
            >
              Home
            </NavLink>
            </li>
            {
              role==='admin'?(
              <li>
                <NavLink 
                  to={`/${role}/dashboard`} 
                  className={({ isActive }) => isActive ? 'bg-purple-900 p-2 rounded-md block' : 'p-2 block hover:bg-purple-900 rounded-md'}
                >
                  Dashboard
                </NavLink>
              </li>):(<></>)
            }
          
          <li>
            <NavLink 
              to={`/${role}/projects`} 
              className={({ isActive }) => isActive ? 'bg-purple-900 p-2 rounded-md block' : 'p-2 block hover:bg-purple-900 rounded-md'}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={`/${role}/events`} 
              className={({ isActive }) => isActive ? 'bg-purple-900 p-2 rounded-md block' : 'p-2 block hover:bg-purple-900 rounded-md'}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={`/${role}/myprofile`} 
              className={({ isActive }) => isActive ? 'bg-purple-900 p-2 rounded-md block' : 'p-2 block hover:bg-purple-900 rounded-md'}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
