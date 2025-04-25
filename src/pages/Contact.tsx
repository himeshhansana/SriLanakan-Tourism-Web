import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

import contactHero from '../assets/contact main.jpg';

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

const Contact: React.FC = () => {
  // Coordinates for Colombo, Sri Lanka
  const colomboCoordinates: [number, number] = [6.9271, 79.8612];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Updated with proper image handling */}
      <section className="relative h-[50vh] min-h-[400px] sm:h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={contactHero} 
            alt="Contact Sri Lanka Tourism" 
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="max-w-2xl px-4 mx-auto text-xl text-white md:text-2xl"
              variants={itemVariants}
            >
              We're here to help you plan your perfect Sri Lankan adventure
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="grid grid-cols-1 gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
              <p className="mb-8 text-gray-600">
                Whether you have questions about our tours, need help planning
                your trip, or want to customize your Sri Lankan experience, our
                team is ready to assist you.
              </p>
              <div className="mb-8 space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 mr-4 bg-green-100 rounded-full">
                    <MapPinIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Our Office</h3>
                    <p className="text-gray-600">
                      123 Temple Road, Colombo 00300
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 mr-4 bg-green-100 rounded-full">
                    <PhoneIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Phone</h3>
                    <p className="text-gray-600">
                      +94 11 234 5678
                      <br />
                      +94 77 123 4567 (WhatsApp)
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 mr-4 bg-green-100 rounded-full">
                    <MailIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Email</h3>
                    <p className="text-gray-600">
                      info@srilankatourism.com
                      <br />
                      bookings@srilankatourism.com
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 mr-4 bg-green-100 rounded-full">
                    <ClockIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
              {/* Map */}
              <motion.div 
                className="h-[300px] rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.01 }}
              >
                <Map 
                  center={colomboCoordinates} 
                  zoom={13} 
                  markerPosition={colomboCoordinates} 
                  markerPopup="<strong>Sri Lanka Tourism</strong><br />123 Temple Road, Colombo" 
                />
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Find answers to common questions about traveling in Sri Lanka
            </p>
          </motion.div>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <h3 className="mb-2 text-xl font-bold">
                What is the best time to visit Sri Lanka?
              </h3>
              <p className="text-gray-600">
                Sri Lanka has a tropical climate with distinct wet and dry
                seasons that vary by region. The best time to visit the west and
                south coasts is from December to March, while the east coast is
                best from April to September. The central highlands are pleasant
                year-round but can be chilly in the evenings.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <h3 className="mb-2 text-xl font-bold">
                Do I need a visa to visit Sri Lanka?
              </h3>
              <p className="text-gray-600">
                Most visitors to Sri Lanka need an Electronic Travel
                Authorization (ETA) before arrival. This can be obtained online
                through the official Sri Lankan ETA website. Some nationalities
                may be eligible for visa on arrival. We recommend checking the
                latest visa requirements before your trip.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <h3 className="mb-2 text-xl font-bold">
                What currency is used in Sri Lanka?
              </h3>
              <p className="text-gray-600">
                The Sri Lankan Rupee (LKR) is the official currency. Credit
                cards are widely accepted in hotels and larger establishments,
                but it's advisable to carry cash for smaller vendors, especially
                in rural areas. ATMs are available in major towns and cities.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <h3 className="mb-2 text-xl font-bold">
                How far in advance should I book my tour?
              </h3>
              <p className="text-gray-600">
                We recommend booking at least 2-3 months in advance, especially
                during the high season (December to March). This ensures
                availability of preferred accommodations and activities. For
                custom tours or group travel, 4-6 months advance booking is
                advisable.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              variants={itemVariants}
            >
              <h3 className="mb-2 text-xl font-bold">
                Is Sri Lanka safe for tourists?
              </h3>
              <p className="text-gray-600">
                Sri Lanka is generally a safe destination for tourists. As with
                any travel, we recommend taking standard precautions with
                personal belongings and being aware of your surroundings. Our
                guides are knowledgeable about local conditions and will ensure
                your safety throughout your journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;