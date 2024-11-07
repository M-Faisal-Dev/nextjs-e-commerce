import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

function Log() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className='relative flex flex-row justify-center items-center space-x-2 cursor-pointer'
      onMouseEnter={handleMouseEnter} // Show dropdown on hover
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <AiOutlineUser className='text-2xl' />
      </div>
      <div className='flex text-sm flex-col justify-start items-start'>
        <h3 className='font-light'>Welcome</h3>
        <h3 className='font-medium'>Login / Register</h3>
      </div>
      <div>
        {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>

      {/* Dropdown menu with animation */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className='absolute top-[90%] right-0 w-40 p-4 text-black rounded-md'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            // onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            <div className='bg-black z-50'>
              <ul className='flex flex-col p-2'>
                {/* Login Button */}
                <li>
                  <button className='w-full px-4 py-2 mb-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    Login
                  </button>
                </li>
                {/* Register Button */}
                <li>
                  <button className='w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'>
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Log;
