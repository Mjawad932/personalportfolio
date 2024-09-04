import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaGoogle, FaUniversity } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left side - Contact information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <FaEnvelope className="mr-2" />
            <span>engineerjawad68@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <FaEnvelope className="mr-2" />
            <span>engr.jawad@uettaxila.edu.pk</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2" />
            <span>Industrial Engineering Department, UET Taxila</span>
          </div>
        </div>

        {/* Right side - Social media & other links */}
        <div className="flex space-x-4 justify-center md:justify-end">
          <a href="https://www.linkedin.com/in/dr-muhammad-jawad-63547559?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-400">
            <FaLinkedin size={29} />
          </a>
          <a href="https://www.facebook.com/jawad.jd.14?mibextid=ZbWKwL" className="hover:text-gray-400">
            <FaFacebook size={29} />
          </a>
          <a href="https://scholar.google.com/citations?user=1PJ8uaUAAAAJ&hl=en" className="hover:text-gray-400">
            <FaGoogle size={29} />
          </a>
          <a href="https://fms.uettaxila.edu.pk/Profile/engr.jawad" className="hover:text-gray-400">
            <FaUniversity size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
