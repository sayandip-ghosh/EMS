import React from 'react';

const MyProfile = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
          <h2 className="text-xl text-gray-600">Software Engineer</h2>
        </div>
        <div className="mt-6">
          <div className="flex flex-col mb-4">
            <span className="text-gray-600 font-semibold">Email:</span>
            <span className="text-gray-800">john.doe@example.com</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-gray-600 font-semibold">Phone:</span>
            <span className="text-gray-800">+1 (123) 456-7890</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-gray-600 font-semibold">Address:</span>
            <span className="text-gray-800">123 Main St, Anytown, USA</span>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;