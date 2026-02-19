import React from "react";

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b">
      {/* Search Bar and other items */}
      <button 
        onClick={onLoginClick} 
        className="bg-[#0D0C22] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90"
      >
        Log in
      </button>
    </nav>
  );
};
export default Navbar;