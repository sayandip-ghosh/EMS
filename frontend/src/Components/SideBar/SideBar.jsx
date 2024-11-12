import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <aside className="fixed bg-gray-200 text-gray-800 lg:relative overflow-y-auto font-poppins transition-all duration-300 w-64 h-screen lg:h-auto z-50">
      {/* Sidebar Content */}
      <div className="lg:w-64">
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
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
