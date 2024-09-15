import React from 'react'

function Login() {
  return (
    <div className=" bg-orange-500 flex h-screen items-center justify-center ">
      <div className="container bg-white backdrop-blur-md bg-opacity-20 shadow-2xl h-2/3 w-1/2  rounded-3xl">
        <div className="flex justify-center mt-20">
          <h1 className="text-4xl font-bold">Login</h1>
        </div>
        <div className="flex justify-center mt-10">
          <form className="w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container"><img src="./assets.landingVector.png" alt="" /></div>
    </div>
  )
}

export default Login
