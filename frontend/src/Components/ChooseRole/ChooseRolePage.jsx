import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/Images/background.jpg'; // Adjust path according to your project

const ChooseRolePage = ({ setRole }) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Select Role to Login
        </h1>
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 gap-8">
          {/* Admin Option */}
          <Link
            to="/admin/login"
            onClick={() => setRole('admin')}
            state={{ role: 'admin' }}
            className="flex flex-col items-center p-6 bg-blue-100 rounded-lg hover:bg-blue-200 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="text-5xl mb-4 text-blue-600">👨‍💼</div>
            <h2 className="text-xl font-semibold text-gray-700">Admin</h2>
            <p className="text-gray-600 text-center mt-2">
              Login as an admin to manage employees and system settings.
            </p>
          </Link>

          {/* Member Option */}
          <Link
            to="/member/login"
            onClick={() => setRole('member')}
            state={{ role: 'member' }}
            className="flex flex-col items-center p-6 bg-green-100 rounded-lg hover:bg-green-200 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="text-5xl mb-4 text-green-600">👨‍💻</div>
            <h2 className="text-xl font-semibold text-gray-700">Member</h2>
            <p className="text-gray-600 text-center mt-2">
              Login as a member to view your profile and manage tasks.
            </p>
          </Link>
        </div>
        <div className="mt-4 text-center">
        <Link to={`/member/signup`} className=" text-blue-500 hover:underline">
                Don't have an account? Sign Up
              </Link>
              </div>
      </div>
    </div>
  );
};

export default ChooseRolePage;
