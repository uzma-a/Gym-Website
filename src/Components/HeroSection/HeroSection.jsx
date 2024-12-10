import React, { useState, useEffect, useRef } from 'react';
import './HeroSection';
import bg_Img from '../../assets/GymHeroBg.jpg';
import menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Reference to the menu element
  const menuRef = useRef(null);

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="main-container h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bg_Img})`, // Apply the background image
      }}
    >
      {/* Dimmed overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div> {/* Dim effect */}

      {/* { Navbar Section } */}
      <div className="nav flex items-center justify-between py-4 sm:py-6 px-6 sm:px-10 lg:px-20 relative z-10">

        <Link to="/">
          <p className="text-3xl sm:text-3xl font-bold text-white">GymFluencer</p>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-red-500 text-3xl">
            <img src={menu} alt="menu icon" /> {/* Hamburger Icon */}
          </button>
        </div>

        {/* Desktop and Tablet Menu */}
        <div className="options hidden lg:flex items-center">
          <ul className="list-none flex items-center  justify-center gap-5 sm:gap-10 text-sm sm:text-lg  py-2 mt-2 px-2 sm:px-10 rounded-full">
            
          <Link to='/service'><li className="cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-gray-300">Services</li></Link>
            <Link to='/trainers'>
            <li className="hover hover:underline underline-offset-4 decoration-2 hover:text-gray-300 cursor-pointer">
              Trainers
            </li>
            </Link>
            <Link to='/plans'>
            <li className="hover hover:underline underline-offset-4 decoration-2 hover:text-gray-300 cursor-pointer">
              Membership Plans
            </li>
            </Link>
            <Link to='/contact'>
              <li className="hover hover:underline underline-offset-4 decoration-2 hover:text-gray-300 cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:block">
          <Link to="/login">
            <button className="py-1 sm:py-2 text-white px-6 sm:px-6 bg-cyan-800 font-normal text-sm sm:text-xl rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff] hover hover:bg-cyan-900">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      {menuOpen && (
        <div
          ref={menuRef} // Assign ref to the menu container
          className="lg:hidden fixed top-0 right-0 bottom-0 bg-black bg-opacity-80 z-20 w-1/3 transition-all ease-in-out duration-300"
        >
          <div className="w-full h-full flex flex-col items-center justify-center">
            <ul className="list-none text-white text-center space-y-4">
              <Link to='/service'><li className="cursor-pointer hover:underline">Services</li></Link>
              <Link to='/trainers'>
            <li className="hover hover:underline underline-offset-4 decoration-2 hover:text-gray-300 cursor-pointer">
              Trainers
            </li>
            </Link>
              <Link to='/plans'><li className="cursor-pointer hover:underline">Membership Plans</li></Link>
              <Link to='/contact'><li className="cursor-pointer hover:underline">Contact Us</li></Link>
              <li>
                <Link to="/login">
                  <button className="py-2 sm:py-2 text-white px-6 sm:px-8 bg-cyan-800 font-medium text-sm sm:text-xl rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff] hover hover:bg-cyan-900">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* { Hero Section } */}
      <div className="hero-sec text-center flex flex-col items-center gap-6 w-[90%] sm:w-[80%] mx-auto mt-12 sm:mt-20 lg:mt-16 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mt-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          YOUR FITNESS JOURNEY STARTS HERE
        </h1>
        <p className="text-base sm:text-lg md:text-lg font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Welcome to{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            GYMFluencer
          </span>
          , your ultimate{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            fitness destination
          </span>
          . Whether you're just starting your{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            fitness journey
          </span>{' '}
          or looking to take it to the next level, we provide{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            top-notch services
          </span>
          ,{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            experienced trainers
          </span>
          , and{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            flexible membership plans
          </span>{' '}
          to help you achieve your goals.{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            Join us
          </span>{' '}
          today and begin your{' '}
          <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
            transformation
          </span>
          !
        </p>
        <Link to='/plans'><button className="py-2 sm:py-2 text-center mt-5 text-white px-12 sm:px-14 bg-cyan-800 text-xl sm:text-2xl font-semibold rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff] hover hover:bg-cyan-900">
          Get Started
        </button></Link>
      </div>
    </div>
  );
};

export default HeroSection;
