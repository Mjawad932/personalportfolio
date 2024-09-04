import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing
import { FaLinkedin, FaFacebook, FaUser, FaGraduationCap, FaBriefcase, FaStar, FaBook, FaCog, FaEnvelope, FaGoogle, FaUniversity} from 'react-icons/fa';  // Importing necessary icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Title */}
          <div className="flex-shrink-0">
          <Link to="/about"><h1 className="text-2xl font-bold">Muhammad Jawad</h1></Link>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-10">
            <Link to="/about" className="flex items-center hover:text-gray-600">
              <FaUser className="mr-2" /> About
            </Link>
            <Link to="/education" className="flex items-center hover:text-gray-600">
              <FaGraduationCap className="mr-2" /> Education
            </Link>
            <Link to="/experience" className="flex items-center hover:text-gray-600">
              <FaBriefcase className="mr-2" /> Experience
            </Link>
            <Link to="/skills" className="flex items-center hover:text-gray-600">
              <FaStar className="mr-2" /> Skills
            </Link>
            <Link to="/research" className="flex items-center hover:text-gray-600">
              <FaBook className="mr-2" /> Research
            </Link>
            <Link to="/services" className="flex items-center hover:text-gray-600">
              <FaCog className="mr-2" /> Services
            </Link>
          </div>

          {/* Contact button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/about" 
              className="flex items-center hover:bg-gray-100 px-3 py-2"
              onClick={handleMenuClick}
            >
              <FaUser className="mr-2" /> About
            </Link>
            <Link 
              to="/education" 
              className="flex items-center hover:bg-gray-100 px-3 py-2"
              onClick={handleMenuClick}
            >
              <FaGraduationCap className="mr-2" /> Education
            </Link>
            <Link 
              to="/experience" 
              className="flex items-center hover:bg-gray-100 px-3 py-2"
              onClick={handleMenuClick}
            >
              <FaBriefcase className="mr-2" /> Experience
            </Link>
            <Link 
              to="/skills" 
              className="flex items-center hover:bg-gray-100 px-3 py-2"
              onClick={handleMenuClick}
            >
              <FaStar className="mr-2" /> Skills
            </Link>
            <Link 
              to="/research" 
              className="flex items-center hover:bg-gray-100 px-3 py-2"
              onClick={handleMenuClick}
            >
              <FaBook className="mr-2" /> Research
            </Link>
            <Link 
              to="/services" 
              className="flex items-center hover:bg-gray-100 px-3 py-2"
              onClick={handleMenuClick}
            >
              <FaCog className="mr-2" /> Services
            </Link>
            <Link
              to="/contact"
              className="flex items-center bg-gray-500 text-white text-center px-3 py-2 rounded hover:bg-gray-600"
              onClick={handleMenuClick}
            >
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </div>

          {/* Social media icons in mobile menu */}
          <div className="flex justify-center space-x-4 py-4 bg-gray-100">
            <a href="https://www.linkedin.com/in/dr-muhammad-jawad-63547559?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-800 hover:text-gray-600">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com/jawad.jd.14?mibextid=ZbWKwL" className="text-gray-800 hover:text-gray-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://scholar.google.com/citations?user=1PJ8uaUAAAAJ&hl=en" className="hover:text-gray-400">
            <FaGoogle size={29} />
          </a>
          <a href="https://fms.uettaxila.edu.pk/Profile/engr.jawad" className="hover:text-gray-400">
            <FaUniversity size={29} />
          </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
