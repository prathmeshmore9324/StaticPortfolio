import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center fixed w-full top-0 left-0 z-50">
      {/* Name on the left */}
      <h1 className="text-xl font-bold text-red-400">Prathmesh More</h1>

      {/* Hamburger Menu Button (Only Mobile) */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center flex-1">
        <ul className="flex space-x-10">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Project</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>

      {/* Social Icons (Always Visible) */}
      <ul className="hidden md:flex space-x-7">
        <li><a href="https://www.linkedin.com/in/prathmesh-more-83b75b252" className="hover:text-blue-500"><i className="fab fa-linkedin-in text-2xl"></i></a></li>
        <li><a href="https://github.com/prathmeshmore9324" className="hover:text-blue-500"><i className="fab fa-github text-2xl"></i></a></li>
        <li><a href="https://x.com/PM54513747?t=blTE43cXRb6nFdLj2_mc7Q&s=09" className="hover:text-blue-500"><i className="fab fa-x text-2xl"></i></a></li>
      </ul>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg p-4">
          <ul className="flex flex-col space-y-4 text-center">
            <li><a href="#home" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Project</a></li>
            <li><a href="#contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
