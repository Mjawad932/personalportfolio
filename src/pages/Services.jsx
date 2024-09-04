import React from 'react';
import { FaChalkboardTeacher, FaProductHunt, FaListAlt, FaCog, FaChartLine, FaCogs, FaBook, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between child animations
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <motion.div
      className="min-h-screen bg-slate-400 p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-20 "
        variants={itemVariants}
      >
        {/* Title */}
        <motion.div className="mb-6 bg-green-500 p-4 border-2 rounded border-gray-600" variants={itemVariants}>
          <h1 className="text-3xl font-extrabold text-white">Services</h1>
        </motion.div>

        {/* Consultation Services Section */}
        <motion.section className="mb-8" variants={containerVariants}>
          <motion.h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" variants={itemVariants}>
            <FaChalkboardTeacher className="mr-2 text-blue-500" /> Consultation Services
          </motion.h2>
          <motion.ul className="list-disc pl-5 text-gray-700 space-y-2" variants={containerVariants}>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaProductHunt className="mr-2 text-green-500" /> Product Development
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaListAlt className="mr-2 text-purple-500" /> Multicriteria and Decision Making
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCog className="mr-2 text-orange-500" /> Operations Research
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaChartLine className="mr-2 text-red-500" /> Statistical Analysis of Data
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCogs className="mr-2 text-teal-500" /> Design of Experiments and Optimization
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCog className="mr-2 text-blue-500" /> Industrial Simulation
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Research Section */}
        <motion.section variants={containerVariants}>
          <motion.h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" variants={itemVariants}>
            <FaBook className="mr-2 text-red-500" /> Research
          </motion.h2>
          <motion.ul className="list-disc pl-5 text-gray-700 space-y-2" variants={containerVariants}>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaFileAlt className="mr-2 text-gray-500" /> Research Articles
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaFileAlt className="mr-2 text-gray-500" /> Research Thesis
            </motion.li>
          </motion.ul>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Services;
