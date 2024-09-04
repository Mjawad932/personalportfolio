import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import img from '../assets/solo.jpeg.jpg'; // Make sure the file path is correct

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between child animations
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Aboutme = () => {
  return (
    <motion.div
      className="min-h-screen bg-slate-400 flex items-center justify-center p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200 mt-16"
        variants={itemVariants}
      >
        {/* Title */}
        <motion.div className=" " variants={itemVariants}>
          <h1 className="text-4xl font-medium text-white bg-green-500 p-4 border-2 rounded border-gray-600  mb-4 ">About Me</h1>
         
        </motion.div>

        {/* Image and Text Section */}
        <motion.div className="flex flex-col md:flex-row items-center" variants={itemVariants}>
          <motion.div className="w-full md:w-1/3 mb-6 md:mb-4" variants={itemVariants}>
            <img
              src={img}
              alt="Muhammad Jawad"
              className="w-full h-auto rounded-s-3xl border-4 border-gray-500 shadow-lg  duration-500 hover:opacity-100"
            />
          </motion.div>

          <motion.div className="w-full md:w-2/3 md:pl-6" variants={itemVariants}>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I'm <span className="font-semibold text-gray-600">Muhammad Jawad</span>, a Lab Engineer at the{' '}
              <span className="font-semibold text-blue-600">University of Engineering and Technology Taxila</span>,
              Pakistan. With a specialization in{' '}
              <span className="font-semibold text-blue-600">Industrial and Manufacturing Engineering</span>, I bring over{' '}
              <span className="font-semibold text-blue-600">12 years of experience</span> spanning academia, industry, and
              research.
            </p>
            <p className="text-lg text-gray-700">
              My journey has been dedicated to advancing the field through innovative research and a strong commitment to
              the academic success of my students. I strive to make a significant impact by blending my extensive
              background with a passion for education and a drive for excellence.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Aboutme;
