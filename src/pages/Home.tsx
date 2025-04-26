import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPinIcon, CalendarIcon, UsersIcon } from 'lucide-react';
import kandy from '../assets/kandy.jpg';
import GalleFort from '../assets/GalleFort.jpg';
import segiriya from '../assets/segiriya.jpg';
import CulturalTriangle from '../assets/CulturalTriangle.jpg';
import BeachEscap from '../assets/BeachEscape.jpg';
import WildlifeSafari from '../assets/WildlifeSafari.jpg';
import CTA from '../assets/CTA.jpg';
import homepagemain from '../assets/homepage main.jpg';

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{
        backgroundImage: `url(${homepagemain})`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Discover the Beauty of Sri Lanka
          </motion.h1>
          <motion.p
            className="max-w-3xl mb-8 text-xl text-white md:text-2xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Experience the island's stunning landscapes, ancient temples, and
            rich culture
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="px-6 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700"
              >
                Explore Tours
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-6 py-3 font-bold text-white transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-green-700"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-3xl font-bold">Popular Destinations</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore Sri Lanka's most iconic and breathtaking destinations
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {/* Sigiriya */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Link to="/destination/sigiriya" className="block overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={segiriya}
                    alt="Sigiriya Rock Fortress"
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-gray-600">Central Province</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Sigiriya Rock Fortress
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Ancient rock fortress with frescoes and landscaped gardens, a
                    UNESCO World Heritage site.
                  </p>
                  <span className="font-medium text-green-600 hover:text-green-700">
                    Explore Destination &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Kandy */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Link to="/destination/kandy" className="block overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={kandy}
                    alt="Temple of the Sacred Tooth Relic, Kandy"
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-gray-600">Central Province</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Kandy</h3>
                  <p className="mb-4 text-gray-600">
                    Cultural capital featuring the Temple of the Sacred Tooth
                    Relic and beautiful Kandy Lake.
                  </p>
                  <span className="font-medium text-green-600 hover:text-green-700">
                    Explore Destination &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Galle */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Link to="/destination/galle" className="block overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={GalleFort}
                    alt="Galle Fort"
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-gray-600">Southern Province</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Galle Fort</h3>
                  <p className="mb-4 text-gray-600">
                    Historic Dutch colonial fort with charming streets, boutique
                    shops, and ocean views.
                  </p>
                  <span className="font-medium text-green-600 hover:text-green-700">
                    Explore Destination &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-3xl font-bold">Popular Tour Packages</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Handcrafted tour experiences to discover the best of Sri Lanka
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {/* Cultural Triangle Tour */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={CulturalTriangle}
                    alt="Cultural Triangle Tour"
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">
                    Cultural Triangle Tour
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Explore ancient cities, rock fortresses, and sacred temples in
                    central Sri Lanka.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-gray-700">5 Days</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-gray-700">Max 12 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">$799</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to="/services" className="inline-block px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded hover:bg-green-700">
                        View Details
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Beach Escape */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={BeachEscap}
                    alt="Beach Escape"
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Beach Escape</h3>
                  <p className="mb-4 text-gray-600">
                    Relax on pristine beaches along the southern coast of Sri
                    Lanka.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-gray-700">7 Days</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-gray-700">Max 10 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">$999</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to="/services" className="inline-block px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded hover:bg-green-700">
                        View Details
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wildlife Safari */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={WildlifeSafari}
                    alt="Wildlife Safari"
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Wildlife Safari</h3>
                  <p className="mb-4 text-gray-600">
                    Encounter elephants, leopards, and exotic birds in Sri Lanka's
                    national parks.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-gray-700">4 Days</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-gray-700">Max 8 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">$699</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to="/services" className="inline-block px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded hover:bg-green-700">
                        View Details
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're dedicated to providing exceptional travel experiences in Sri
              Lanka
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
          >
            <motion.div
              className="p-6 text-center bg-white rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Expert Local Guides</h3>
              <p className="text-gray-600">
                Our guides have deep knowledge of Sri Lankan culture, history,
                and hidden gems.
              </p>
            </motion.div>
            <motion.div
              className="p-6 text-center bg-white rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Customized Experiences</h3>
              <p className="text-gray-600">
                Tailor-made itineraries designed to match your interests and
                preferences.
              </p>
            </motion.div>
            <motion.div
              className="p-6 text-center bg-white rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Best Value</h3>
              <p className="text-gray-600">
                Competitive pricing without compromising on quality and
                experiences.
              </p>
            </motion.div>
            <motion.div
              className="p-6 text-center bg-white rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated customer support throughout your journey for peace of
                mind.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-center bg-cover" style={{
        backgroundImage: `url(${CTA})`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          className="container relative px-4 mx-auto text-center"
          variants={fadeIn}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Experience Sri Lanka?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-white">
            Start planning your dream vacation to the pearl of the Indian Ocean
            today.
          </p>
          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row"
            variants={containerVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="inline-block px-8 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700">
                Contact Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/services" className="inline-block px-8 py-3 font-bold text-white transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-green-700">
                View Tour Packages
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;