import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faCogs, faHammer, faTasks } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="min-h-screen bg-slate-400 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16">
        <div className="mb-6 bg-green-500 p-4 border-2 rounded border-gray-600">
          <h1 className="text-3xl font-extrabold text-white">Experience</h1>
        </div>
        <div className="space-y-8">
          <motion.div 
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faIndustry} className="mr-2 text-gray-600" />
              Lab Engineer
            </h2>
            <p className="text-gray-700">University of Engineering and Technology, Taxila, Pakistan (May 2014 - Present)</p>
            <p className="text-gray-700 mt-2">
              Currently working as a Lab Engineer in the Industrial Engineering Department, responsible for:
            </p>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faCogs} className="mr-2 text-gray-600" />
                Subjects Taught:
              </h3>
              <div className="space-y-1">
                <p className="text-gray-700"><strong>Undergraduate Level:</strong></p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Manufacturing Processes (Theory + Practical)</li>
                  <li>Metal Forming and Cutting Analysis (Theory + Practical)</li>
                  <li>Smart Manufacturing (Practical)</li>
                  <li>Computer Aided Design and Modelling (Practical)</li>
                  <li>Workshop Practice (Theory + Practical)</li>
                  <li>Automotive and Production (Practical)</li>
                  <li>Engineering Drawing and Graphics (Theory + Practical)</li>
                  <li>Computer Integrated Manufacturing (Practical)</li>
                  <li>Industrial Automation and Robotics (Practical)</li>
                  <li>FEM and Machine Design (Practical)</li>
                </ul>
                <p className="text-gray-700"><strong>Postgraduate Level:</strong></p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Multicriteria and Decision Making</li>
                  <li>Advanced Topics in Engineering Management</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faTasks} className="mr-2 text-gray-600" />
                Supervision:
              </h3>
              <p className="text-gray-700">Supervised several undergraduate projects and co-supervised postgraduate theses.</p>

              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faHammer} className="mr-2 text-gray-600" />
                Administrative Work:
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Lab In-charge of Machine Tool and Machining Lab</li>
                <li>Upgraded the Machine Tool Lab by sourcing new equipment</li>
                <li>Ensured the functionality of all lab equipment and machines</li>
                <li>Prepared PC-I for labs equipment of Proposed Product Development Center, IED</li>
                <li>Member of the Assessment Committee for Outcome-Based Education (OBE) System</li>
                <li>Focal person for IED Alumni matters</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <FontAwesomeIcon icon={faIndustry} className="mr-2 text-gray-600" />
              Executive Engineer
            </h2>
            <p className="text-gray-700">Mecas Engineering Pvt Ltd., Lahore, Pakistan (July 2012 - May 2014)</p>
            <p className="text-gray-700 mt-2">
              Major responsibilities included:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Managed daily production in CNC machining shop for pump assembly</li>
              <li>Updated all production formats daily</li>
              <li>Acquired conditional reports and delivery reports regarding training and after-sales service issues</li>
              <li>Implemented time study and work study in the production line</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
