import React from 'react';
import { Link } from 'react-router-dom';
import bg_Img from '../assets/GymHeroBg.jpg';

const LoginSignup = () => {
  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed justify-center relative"
      style={{
        backgroundImage: `url(${bg_Img})`,
      }}
    >
      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Logo and Logout Button */}
      <div className="flex items-center justify-between mb-10 px-2 sm:px-6 md:px-20 relative z-10">
        <Link to="/">
          <div id="logo-style" className="text-4xl sm:text-3xl font-bold text-white cursor-pointer">
          FitHub
          </div>
        </Link>
        <button className="py-1 px-4 bg-cyan-800 font-bold text-lg rounded-md shadow-[-7px_7px_0px_#fff] border border-transparent hover:text-gray-300">
          Logout
        </button>
      </div>

      {/* Login Form */}
      <div className="w-full sm:w-96 md:w-[420px] bg-[rgba(53,49,110,0.16)] rounded-lg p-6 sm:p-8 md:p-10 mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">Signup</h1>
        <form>
          {/* Sign-Up Name Input */}
          <input
            className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
            type="text"
            placeholder="Your name"
          />

          {/* Email Input */}
          <input
            className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
            type="email"
            placeholder="Email"
          />

          {/* Password Input */}
          <input
            className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
            type="password"
            placeholder="Password"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border-none outline-none p-4 bg-cyan-800 text-white rounded-md text-base font-medium mt-5 cursor-pointer"
          >
            Continue
          </button>

          {/* Helper Text */}
          <div className="flex items-center justify-between text-sm text-[#b3b3b3] mt-4">
            <div className="flex items-center gap-1">
              <input className="w-4 h-4" type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p className="cursor-pointer hover:underline">Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
