import React, { useState } from 'react';
import Lottie from 'react-lottie';
import logo from '../assets/PentX.svg';
import menuAnimation from '../assets/Menu.json';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lottie animation options
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: menuAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <nav className="sticky mt-5 z-50 backdrop-blur-lg border border-neutral-700/80 rounded-[15px] w-full md:w-[65em] mx-auto">
      <div className="container px-4 mx-auto relative text-sm font-inter">
        <div className="flex justify-between items-center">
          <div className="flex text-white">
            <img src={logo} alt="PentX Logo" className="w-11 h-11 ml-2 md:ml-10" />
          </div>

          {/* Right Side - Navigation Links (Desktop) */}
          <div className="hidden md:flex mr-10">
            <div className="flex space-x-8">
              <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Features</div>
              <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Team</div>
              <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Contact</div>
              <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Join PentX</div>
            </div>
          </div>

          {/* Hamburger Icon with Lottie Animation (Mobile) */}
          <div className="flex md:hidden mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textColor focus:outline-none"
            >
              <Lottie 
                options={defaultOptions}
                height={25}
                width={25}
                direction={isOpen ? 1 : -1} // Play forward or reverse
                speed={3}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu*/}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out  ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
          <div className="mt-2 px-4 space-y-2">
            <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Features</div>
            <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Team</div>
            <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Contact</div>
            <div className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Join PentX</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
