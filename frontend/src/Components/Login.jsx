import React from 'react'
import Image from '../assets/landingVector.png'
import backGround from '../assets/background.jpg'

function Login() {
  return (
    <div  className="bg-gradient-to-r from-purple-400 via-purple-100 to-white">
    <div  className=" flex h-screen items-center justify-center ">
      <div className="container bg-white backdrop-blur-md bg-opacity-20 shadow-2xl h-2/3 w-[40vw]  rounded-3xl">
        <div className="flex justify-center mt-28">
          <h1 className="text-7xl font-NewAmsterdam tracking-wider">Login</h1>
        </div>
        <div className="flex justify-center mt-10">
          <form className="w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-Exo mb-2" for="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-md font-Exo mb-2" for="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white font-Exo py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white font-Exo py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container h-2/3 w-1/2">
        <img src={Image} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Login
