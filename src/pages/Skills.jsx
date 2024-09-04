import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaTools, FaListUl, FaGraduationCap, FaUserTie, FaCogs } from 'react-icons/fa'; // Importing icons

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

const Skills = () => {
  return (
    <motion.div
      className="min-h-screen bg-slate-400 p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16"
        variants={itemVariants}
      >
        {/* Title */}
        <motion.div className="mb-6 bg-green-500 p-4 border-2 rounded border-gray-600" variants={itemVariants}>
          <h1 className="text-3xl font-extrabold text-white">Skills</h1>
        </motion.div>
        
        {/* Soft Skills Section */}
        <motion.section className="mb-8" variants={containerVariants}>
          <motion.h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" variants={itemVariants}>
            <FaTools className="mr-2 text-blue-500" /> Soft Skills
          </motion.h2>
          <motion.ul className="list-disc pl-5 text-gray-700 space-y-2" variants={containerVariants}>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaPython className="mr-2 text-green-500" /> Python
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaTools className="mr-2 text-blue-500" /> SolidWorks
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaListUl className="mr-2 text-purple-500" /> Minitab
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCogs className="mr-2 text-gray-500" /> Design Expert
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCogs className="mr-2 text-gray-500" /> Abaqus
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaUserTie className="mr-2 text-orange-500" /> Expert Choice
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Academic Skills Section */}
        <motion.section className="mb-8" variants={containerVariants}>
          <motion.h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" variants={itemVariants}>
            <FaGraduationCap className="mr-2 text-red-500" /> Academic Skills
          </motion.h2>
          <motion.ul className="list-disc pl-5 text-gray-700 space-y-2" variants={containerVariants}>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaGraduationCap className="mr-2 text-red-500" /> Teaching
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaGraduationCap className="mr-2 text-red-500" /> Research Supervision
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaGraduationCap className="mr-2 text-red-500" /> Curriculum Development
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Personal Skills Section */}
        <motion.section variants={containerVariants}>
          <motion.h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" variants={itemVariants}>
            <FaUserTie className="mr-2 text-green-500" /> Personal Skills
          </motion.h2>
          <motion.ul className="list-disc pl-5 text-gray-700 space-y-2" variants={containerVariants}>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCogs className="mr-2 text-gray-500" /> Comprehensive problem-solving ability
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
   <FaCogs className="mr-2 text-gray-500" /> Excellent verbal and written communication skills
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCogs className="mr-2 text-gray-500" /> Ability to deal with people diplomatically
            </motion.li>
            <motion.li className="flex items-center" variants={itemVariants}>
              <FaCogs className="mr-2 text-gray-500" /> Conscientious, honest, and frank
            </motion.li>
          </motion.ul>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Skills;


