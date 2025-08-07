import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_8gy2jlt',
      'template_tks6d95',
      formData,
      'vasMzVe_1QERkzzP1'
    ).then(
      (result) => {
        setIsSubmitting(false);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        setIsSubmitting(false);
        console.error('EmailJS error:', error);
        alert('Oops! Something went wrong.');
      }
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-12" id="contact"> {/* Reduced py-16 to py-12 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 relative"> {/* Reduced text size and mb */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r text-white">
            Contact Me
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8"> {/* Reduced gap */}
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-2/5 space-y-6"> {/* Reduced space-y */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all transform hover:-translate-y-1 shadow-xl"> {/* Reduced padding */}
              <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"> {/* Reduced text size and mb */}
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-4 text-sm"> {/* Reduced mb and text size */}
                I'm currently open to new opportunities, collaborations, or just a friendly chat about web development.
              </p>
              
              <div className="space-y-2"> {/* Reduced space-y */}
                <div className="flex items-start space-x-3"> {/* Reduced space-x */}
                  <div className="mt-1 text-green-400">
                    <FaEnvelope size={18} /> {/* Reduced icon size */}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Email</h4> {/* Reduced text size */}
                    <a 
                      href="mailto:meenakandasamy2002@gmail.com" 
                      className="text-gray-400 hover:text-white transition-colors text-sm" /* Reduced text size */
                    >
                      meenakandasamy2245@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3"> {/* Reduced space-x */}
                  <div className="mt-1 text-green-400">
                    <FaPhone size={18} /> {/* Reduced icon size */}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Phone</h4> {/* Reduced text size */}
                    <span className="text-gray-400 text-sm">9344874835</span> {/* Reduced text size */}
                  </div>
                </div>
                
                 <div className="flex items-start space-x-3"> {/* Reduced space-x */}
                  <div className="mt-1 text-green-400">
                    <FaMapMarkedAlt size={18} /> {/* Reduced icon size */}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Location</h4> 
                    <span className="text-gray-400 text-sm">Chennai, India</span> 
                  </div>
                </div> 
              </div>
            </div>
            
             <motion.div
        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all transform hover:-translate-y-1 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-md font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Connect on Social
        </h4>

        <div className="flex flex-wrap gap-3">
          <motion.a
            href="https://leetcode.com/u/Meenakandasamy/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            LeetCode
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/meena-kandasamy-68085025a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
    
            LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/meenakandasamy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          
            GitHub
          </motion.a>
        </div>
      </motion.div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-3/5">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all transform hover:-translate-y-1 shadow-xl"> {/* Reduced padding */}
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"> {/* Reduced text size and mb */}
                Send Me a Message
              </h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}> {/* Reduced space-y */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1"> {/* Reduced text size and mb */}
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all text-sm" /* Reduced padding and text size */
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1"> {/* Reduced text size and mb */}
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all text-sm" /* Reduced padding and text size */
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1"> {/* Reduced text size and mb */}
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" /* Reduced rows from 5 to 4 */
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all text-sm" /* Reduced padding and text size */
                    placeholder="Hi Meena, I'd like to talk about..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium transition-all text-sm ${isSubmitting ? 'opacity-70' : 'hover:shadow-lg'}`} /* Reduced padding and text size */
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" size={14} /> {/* Reduced icon size */}
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;