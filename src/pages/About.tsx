import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import aboutHero from '../assets/About Main.jpg';
import about1 from '../assets/about.jpg';
import man1 from '../assets/man1.avif';
import man2 from '../assets/man2.avif';
import man3 from '../assets/man3.avif';
import man4 from '../assets/man4.avif';
import man5 from '../assets/man5.avif';
import man6 from '../assets/man6.avif';

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

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Updated with proper image handling */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={aboutHero}
            alt="Sri Lanka landscape"
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
              About Us
            </motion.h1>
            <motion.p
              className="max-w-2xl px-4 mx-auto text-xl text-white md:text-2xl"
              variants={itemVariants}
            >
              Learn about our passion for showcasing the beauty of Sri Lanka
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="flex flex-col items-center gap-12 lg:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <img
                src={about1}
                alt="Our team in Sri Lanka"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2010 by a group of passionate Sri Lankan travel
                enthusiasts, Sri Lanka Tourism has grown from a small local tour
                operator to one of the country's leading travel companies. Our
                journey began with a simple mission: to share the authentic
                beauty and rich cultural heritage of Sri Lanka with travelers
                from around the world.
              </p>
              <p className="mb-4 text-gray-600">
                Over the years, we have crafted thousands of memorable journeys
                for our clients, from adventurous backpackers to luxury
                travelers. Our deep local knowledge and commitment to
                sustainable tourism practices have earned us recognition as a
                trusted name in the Sri Lankan tourism industry.
              </p>
              <p className="text-gray-600">
                Today, we continue to explore new destinations, create
                innovative travel experiences, and maintain our dedication to
                showing visitors the true essence of our beautiful island
                nation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold">Our Mission & Vision</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Guided by our core values and commitment to excellence
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              className="p-8 bg-white rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h3 className="mb-4 text-2xl font-bold text-green-700">
                Our Mission
              </h3>
              <p className="mb-6 text-gray-600">
                To provide exceptional travel experiences that showcase the
                natural beauty, rich culture, and warm hospitality of Sri Lanka
                while promoting sustainable tourism practices that benefit local
                communities and preserve the environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-600" />
                  <span className="text-gray-600">
                    Create authentic experiences that connect travelers with Sri
                    Lankan culture
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-600" />
                  <span className="text-gray-600">
                    Support local communities through responsible tourism
                    initiatives
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-600" />
                  <span className="text-gray-600">
                    Provide personalized service that exceeds client
                    expectations
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="p-8 bg-white rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h3 className="mb-4 text-2xl font-bold text-green-700">
                Our Vision
              </h3>
              <p className="mb-6 text-gray-600">
                To be the leading sustainable tourism company in Sri Lanka,
                recognized globally for our commitment to excellence, authentic
                experiences, and positive impact on local communities and the
                environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-600" />
                  <span className="text-gray-600">
                    Become the first choice for travelers seeking authentic Sri
                    Lankan experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-600" />
                  <span className="text-gray-600">
                    Set industry standards for sustainable and responsible
                    tourism
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-600" />
                  <span className="text-gray-600">
                    Continuously innovate and improve our travel offerings
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Meet the passionate travel experts dedicated to creating
              unforgettable Sri Lankan experiences
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Team Member 1 */}
            <motion.div
              className="overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={man1}
                  alt="Rajith Fernando"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Rajith Fernando</h3>
                <p className="mb-3 font-medium text-green-600">Founder & CEO</p>
                <p className="mb-4 text-gray-600">
                  With over 15 years in tourism, Rajith's vision and leadership
                  drive our company forward.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={man2}
                  alt="Priya Mendis"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Priya Mendis</h3>
                <p className="mb-3 font-medium text-green-600">
                  Head of Operations
                </p>
                <p className="mb-4 text-gray-600">
                  Priya ensures every tour runs smoothly with her exceptional
                  organizational skills.
                </p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={man3}
                  alt="Dinesh Jayawardena"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Dinesh Jayawardena</h3>
                <p className="mb-3 font-medium text-green-600">
                  Senior Tour Guide
                </p>
                <p className="mb-4 text-gray-600">
                  An expert in Sri Lankan history and culture with 10 years of
                  guiding experience.
                </p>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              className="overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={man4}
                  alt="Amali De Silva"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Amali De Silva</h3>
                <p className="mb-3 font-medium text-green-600">
                  Customer Experience Manager
                </p>
                <p className="mb-4 text-gray-600">
                  Dedicated to creating memorable experiences and ensuring
                  client satisfaction.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Hear from travelers who have experienced Sri Lanka with us
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Testimonial 1 */}
            <motion.div
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src={man5} alt="Sarah Johnson" className="object-cover w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">United Kingdom</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-600">
                "Our 10-day tour of Sri Lanka exceeded all expectations. The
                guides were knowledgeable, accommodations were excellent, and we
                experienced so much of this beautiful country. Will definitely
                recommend to friends!"
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src={man6} alt="Michael Chen" className="object-cover w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Australia</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-600">
                "The wildlife safari was the highlight of our trip. We saw
                elephants, leopards, and so many birds! Our guide was extremely
                knowledgeable and made sure we had the best experience
                possible."
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src={man4} alt="Lisa Mueller" className="object-cover w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold">Lisa Mueller</h4>
                  <p className="text-sm text-gray-600">Germany</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-600">
                "The cultural tour was fascinating and our guide made the
                history come alive. The accommodations were comfortable and the
                food was amazing. This was truly the trip of a lifetime!"
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
            Ready to Explore Sri Lanka?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to start planning your perfect Sri Lankan
            adventure.
          </p>
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="px-8 py-3 font-bold text-green-700 transition duration-300 bg-white rounded-lg hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default memo(About);