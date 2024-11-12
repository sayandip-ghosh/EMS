import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ role, isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed bg-gray-200 text-gray-800 lg:relative overflow-y-auto font-poppins transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 lg:hidden">
        Close
      </button>
      <nav className="mt-8 ml-2">
        <ul className="space-y-4 mr-2">
          <li>
            <NavLink 
              to={`/${role}/home`} 
              className={({ isActive }) => 
                isActive 
                  ? 'bg-blue-500 text-white p-2 rounded-md block transition duration-300 ease-in-out' 
                  : 'p-2 block hover:bg-blue-300 rounded-md transition duration-300 ease-in-out transform hover:scale-105'
              }
            >
              Home
            </NavLink>
          </li>
          {role === 'admin' && (
            <li>
              <NavLink 
                to={`/${role}/dashboard`} 
                className={({ isActive }) => 
                  isActive 
                    ? 'bg-blue-500 text-white p-2 rounded-md block transition duration-300 ease-in-out' 
                    : 'p-2 block hover:bg-blue-300 rounded-md transition duration-300 ease-in-out transform hover:scale-105'
                }
              >
                Dashboard
              </NavLink>
            </li>
          )}
          <li>
            <NavLink 
              to={`/${role}/projects`} 
              className={({ isActive }) => 
                isActive 
                  ? 'bg-blue-500 text-white p-2 rounded-md block transition duration-300 ease-in-out' 
                  : 'p-2 block hover:bg-blue-300 rounded-md transition duration-300 ease-in-out transform hover:scale-105'
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={`/${role}/events`} 
              className={({ isActive }) => 
                isActive 
                  ? 'bg-blue-500 text-white p-2 rounded-md block transition duration-300 ease-in-out' 
                  : 'p-2 block hover:bg-blue-300 rounded-md transition duration-300 ease-in-out transform hover:scale-105'
              }
            >
              Events
            </NavLink>
          </li>
          {role === "member" && (
            <li>
              <NavLink 
                to={`/${role}/myprofile`} 
                className={({ isActive }) => 
                  isActive 
                    ? 'bg-blue-500 text-white p-2 rounded-md block transition duration-300 ease-in-out' 
                    : 'p-2 block hover:bg-blue-300 rounded-md transition duration-300 ease-in-out transform hover:scale-105'
                }
              >
                My Profile
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;