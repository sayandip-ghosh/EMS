import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

function Myprofile() {
    const projects = [
      { id: '#6969', lead: 'AI Workshop', status: '31.04.2024' },
      { id: '#6969', lead: 'Code Craft 5.0', status: '31.04.2024' },
      { id: '#6969', lead: 'Web Dev Workshop', status: '31.04.2024' },
    ];

  return (
    <div className="flex bg-gray-100 p-6 rounded-lg">
      <div className=" bg-white rounded-lg shadow-lg p-4 m-auto">
      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">My Profile</h1>
          <button className="text-red-500 bg-red-100 p-2 rounded-md hover:bg-red-500 hover:text-neutral-100">Logout</button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* Profile Info */}
          <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center shadow-md hover:bg-blue-200">
            <div className="h-32 w-32 bg-black rounded-full"></div>
            <h2 className="mt-4 font-semibold text-lg">Debangan Dey</h2>
            <div className="flex flex-col mt-10 gap-1 items-center">
              <button className="bg-black text-white px-2 py-1 rounded">Web Development Team</button>
              <button className="bg-yellow-500 text-white px-2 py-1 rounded">Poster Team</button>
            </div>
            <div className="mt-8">
            <FaRegEdit className="h-9 w-auto"/>
            </div>
            
            <div className="mt-8 mb-2 space-x-4 flex text-2xl text-gray-700 gap-2 h-8">
              {/* Icons */}
              <FaFacebookSquare className="h-7 w-auto"/>
              <FaInstagram className="h-7 w-auto"/>
              <FaLinkedin className="h-7 w-auto"/>
              <FaGithub className="h-7 w-auto"/>
              <FaSquareXTwitter className="h-7 w-auto"/>
            </div>
          </div>

          {/* Information Section */}
          <div className="grid gap-6 ">
          <div className="bg-blue-100 rounded-lg p-4 space-y-2 shadow-md hover:bg-blue-200">
            <h3 className="font-semibold border-b border-neutral-800 pb-1">Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <p><span className="font-semibold">Stream:</span> CSE</p>
              <p><span className="font-semibold">Academic Year:</span> 3rd</p>
              <p><span className="font-semibold">Email:</span> abcdef@msit.edu.in</p>
              <p><span className="font-semibold">Phone:</span> 123 456 7890</p>
            </div>
          </div>

          {/* Projects / Assignments Section */}
          <div className="bg-blue-100 rounded-lg p-4 space-y-2 shadow-md hover:bg-blue-200">
            <h3 className="font-semibold border-b border-neutral-800 pb-1">Projects/Assignments</h3>
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-inherit">
                  <th className="p-2">Project</th>
                  <th className="p-2">Project Lead</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-400 transition-colors"
                  >
                    <td className="p-2 border-b rounded-s-3xl">{project.id}</td>
                    <td className="p-2 border-b">{project.lead}</td>
                    <td className="p-2 border-b rounded-e-3xl">{project.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {/* Performance and Attendance Section */}
        <div className="bg-blue-100 rounded-lg p-4 shadow-md hover:bg-blue-200 h-48">
          <h3 className="font-semibold border-b border-neutral-800">Performance and Attendance</h3>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Myprofile
