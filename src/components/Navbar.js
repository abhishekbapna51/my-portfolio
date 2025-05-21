import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the slide-in animation once on mount
    setAnimate(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-500 ${
        animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">Abhishek's Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 text-gray-700 font-medium bg-white">
          <li><a href="#hero" onClick={toggleMenu} className="block hover:text-indigo-600">Home</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="block hover:text-indigo-600">Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block hover:text-indigo-600">Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block hover:text-indigo-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
