import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap, FaBook } from 'react-icons/fa';

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

const Education = () => {
  return (
    <motion.div
      className="min-h-screen p-6 bg-slate-400"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16"
        variants={itemVariants}
      >
        {/* Title */}
        <motion.div className=" bg-green-500 p-4 border-2 rounded border-gray-600 mb-6" variants={itemVariants}>
          <h1 className="text-3xl font-extrabold text-white">Education</h1>
        </motion.div>

        <div className="space-y-8">
          {/* PhD */}
          <motion.div className="bg-gray-50 p-6 rounded-lg shadow-md" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <FaUniversity className="text-blue-500 mr-4 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Doctor of Philosophy in Industrial Engineering</h2>
                <p className="text-gray-700">2018 - 2023</p>
                <p className="text-gray-700">University of Engineering and Technology (UET), Taxila</p>
                <p className="text-gray-700">Times Higher Education ranking: 601-800</p>
                <p className="text-gray-700">CGPA: 3.89/4</p>
                <p className="mt-2 text-gray-700">
                  Thesis: Investigating the effect of hybrid thermal tensioning and inter layer on residual stresses and mechanical properties of dissimilar metal welding.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Master’s Degree */}
          <motion.div className="bg-gray-50 p-6 rounded-lg shadow-md" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-green-500 mr-4 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Master of Science in Industrial Engineering</h2>
                <p className="text-gray-700">2014 - 2017</p>
                <p className="text-gray-700">University of Engineering and Technology (UET), Taxila</p>
                <p className="text-gray-700">CGPA: 3.28/4</p>
                <p className="mt-2 text-gray-700">
                  Thesis: Optimization of process parameters in Gas Tungsten Arc welding process by using Response Surface methodology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bachelor’s Degree */}
          <motion.div className="bg-gray-50 p-6 rounded-lg shadow-md" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <FaBook className="text-red-500 mr-4 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Bachelor of Science in Industrial and Manufacturing Engineering</h2>
                <p className="text-gray-700">2008 - 2012</p>
                <p className="text-gray-700">University of Engineering and Technology (UET), Lahore</p>
                <p className="text-gray-700">CGPA: 3.32/4</p>
                <p className="mt-2 text-gray-700">
                  Thesis: To investigate the effect of preheating temperature on heat affected zone, quality of weld and weld strength in TIG welding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
