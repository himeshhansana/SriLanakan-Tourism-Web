import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UsersIcon, MapPinIcon, ClockIcon, CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import about from '../assets/about.jpg';
import wild from '../assets/Wildlife.jpg';
import CoastalParadise from '../assets/CoastalParadise.jpg';
import HillCountry from '../assets/HillCountry.jpg';

import servicesHero from '../assets/services.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const Services: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Updated with proper image handling */}
      <section className="relative h-[50vh] min-h-[400px] sm:h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={servicesHero}
            alt="Sri Lanka Tourism Services"
            className="object-cover w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="px-4 text-center">
            <motion.h1
              className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="max-w-2xl px-4 mx-auto text-xl text-white md:text-2xl"
              variants={itemVariants}
            >
              Discover our range of expertly crafted Sri Lankan experiences
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold">What We Offer</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              From custom itineraries to guided tours, we provide comprehensive
              services to make your Sri Lankan journey unforgettable
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Service 1 */}
            <motion.div
              className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Custom Tour Packages</h3>
              <p className="mb-4 text-gray-600">
                Tailor-made itineraries designed specifically to match your
                interests, schedule, and budget.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Personalized itineraries</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Accommodation arrangements</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Guided Tours</h3>
              <p className="mb-4 text-gray-600">
                Explore Sri Lanka with our knowledgeable local guides who
                provide cultural insights and historical context.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Expert local guides</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Cultural immersion</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Small group experiences</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Transportation Services</h3>
              <p className="mb-4 text-gray-600">
                Reliable and comfortable transportation throughout your journey
                in Sri Lanka.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Airport transfers</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Private vehicles</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Air-conditioned comfort</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Accommodation Booking</h3>
              <p className="mb-4 text-gray-600">
                We handle all your accommodation needs, from luxury resorts to
                boutique hotels.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Vetted quality</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">All budgets</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Unique experiences</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Cultural Experiences</h3>
              <p className="mb-4 text-gray-600">
                Immerse yourself in authentic Sri Lankan culture with cooking
                classes and traditional performances.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Cooking workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Local arts & crafts</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Traditional ceremonies</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Special Interest Tours</h3>
              <p className="mb-4 text-gray-600">
                Specialized experiences focused on wildlife, photography, and
                adventure sports.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Wildlife safaris</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Photography tours</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Wellness retreats</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold">Featured Tour Packages</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our most popular Sri Lankan adventures, carefully crafted to
              provide unforgettable experiences
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Package 1 */}
            <motion.div
              className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={about}
                    alt="Cultural Triangle Exploration"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Cultural Triangle Exploration</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Best Seller
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (<span key={i}>★</span>))}
                    </div>
                    <span className="text-sm text-gray-600">4.9 (124 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>5 Days</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Central Province</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 12 people</span>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Explore the ancient cities of Anuradhapura, Polonnaruwa, the
                    rock fortress of Sigiriya, and the cave temples of Dambulla.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">$799</span>
                    <Link
                      to="/contact"
                      className="px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded hover:bg-green-700"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Package 2 */}
            <motion.div
              className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={wild}
                    alt="Wildlife Safari Adventure"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="mb-2 text-xl font-bold">Wildlife Safari Adventure</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (<span key={i}>★</span>))}
                    </div>
                    <span className="text-sm text-gray-600">4.8 (98 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>4 Days</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Southern & Eastern Provinces</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 8 people</span>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Experience thrilling safari adventures in Yala and Udawalawe
                    National Parks, home to leopards, elephants, and diverse
                    bird species.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">$699</span>
                    <Link
                      to="/contact"
                      className="px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded hover:bg-green-700"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Package 3 */}
            <motion.div
              className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={CoastalParadise}
                    alt="Coastal Paradise"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="mb-2 text-xl font-bold">Coastal Paradise</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (<span key={i}>★</span>))}
                    </div>
                    <span className="text-sm text-gray-600">4.7 (86 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>7 Days</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Southern Coast</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 10 people</span>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Relax on pristine beaches, explore colonial Galle Fort, and
                    enjoy water sports along Sri Lanka's stunning southern
                    coastline.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">$999</span>
                    <Link
                      to="/contact"
                      className="px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded hover:bg-green-700"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Package 4 */}
            <motion.div
              className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={HillCountry}
                    alt="Hill Country Retreat"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="mb-2 text-xl font-bold">Hill Country Retreat</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (<span key={i}>★</span>))}
                    </div>
                    <span className="text-sm text-gray-600">4.9 (112 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>6 Days</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Central Highlands</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 8 people</span>
                    </div>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Experience the cool climate and breathtaking landscapes of
                    Nuwara Eliya, Ella, and the tea plantations of Sri Lanka's
                    central highlands.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">$899</span>
                    <Link
                      to="/contact"
                      className="px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded hover:bg-green-700"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link
              to="/contact"
              className="px-8 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700"
            >
              Request Custom Package
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our simple process to create your perfect Sri Lankan experience
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Step 1 */}
            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
                <span className="text-3xl font-bold text-green-600">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Contact Us</h3>
              <p className="text-gray-600">
                Reach out through our contact form or email with your travel
                dates, interests, and any specific requirements.
              </p>
            </motion.div>
            {/* Step 2 */}
            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Customize Your Trip</h3>
              <p className="text-gray-600">
                Work with our travel experts to refine your itinerary,
                accommodations, and experiences to match your preferences.
              </p>
            </motion.div>
            {/* Step 3 */}
            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Enjoy Sri Lanka</h3>
              <p className="text-gray-600">
                Relax and enjoy your journey with our comprehensive support
                throughout your Sri Lankan adventure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 text-white bg-green-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Plan Your Sri Lankan Adventure?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to start creating your perfect travel experience.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="px-8 py-3 font-bold text-green-700 transition duration-300 bg-white rounded-lg hover:bg-gray-100"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default memo(Services);