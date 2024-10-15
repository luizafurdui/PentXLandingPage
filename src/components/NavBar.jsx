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
            <button className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Features</button>
            <button className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Team</button>
            <button className="text-textColor hover:text-white font-medium cursor-pointer transition duration-300 ease-in-out">Contact</button>
            <button className="m-2 flex items-center bg-button-gradient text-white py-2 px-4 rounded-[9px]">
              <span className="mr-2">Join PentX</span>
            </button>
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


        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 w-full  overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
  <div className="bg-black">
    <div className="flex flex-col text-lg font-medium text-white space-y-2">
      <a href="#" className="transition duration-300 ease-in-out py-2 px-4 ">
        Features
      </a>
      <a href="#" className=" transition duration-300 ease-in-out py-2 px-4">
        Team
      </a>
      <a href="#" className=" transition duration-300 ease-in-out py-2 px-4 ">
        Contact
      </a>
      <a href="#" className="transition duration-300 ease-in-out py-2 px-4">
        Join PentX
      </a>
    </div>
  </div>
</div>

      </div>
    </nav>
  );
}
