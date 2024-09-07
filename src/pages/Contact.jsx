import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaTag, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_s7deq95', // Replace with your EmailJS Service ID
        'template_2k1hmxq', // Replace with your EmailJS Template ID
        formData,
        'FMQ2BgYzmxViBlYLt' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setErrorMessage('Failed to send message. Please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6 bg-slate-400	"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg mt-16"
        variants={itemVariants}
      >
        <motion.div className="mb-6 bg-green-500 p-4 border-2 rounded border-gray-600" variants={itemVariants}>
          <h1 className="text-4xl font-medium text-white">Contact Us</h1>
        </motion.div>

        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <motion.form onSubmit={sendEmail} variants={containerVariants}>
          <motion.div className="mb-6" variants={itemVariants}>
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
              <FaUser className="inline-block mr-2 text-gray-500" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
              <FaEnvelope className="inline-block mr-2 text-gray-500" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label htmlFor="subject" className="block text-gray-700 text-lg font-medium mb-2">
              <FaTag className="inline-block mr-2 text-gray-500" />
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">
              <FaPaperPlane className="inline-block mr-2 text-gray-500" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gray-700 text-white p-3 rounded-lg shadow hover:bg-gray-800 transition-colors duration-300"
            variants={itemVariants}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
