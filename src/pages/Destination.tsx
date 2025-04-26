import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import kandy from '../assets/kandy.jpg';
import KandyLake from '../assets/the-beautiful-kandy-lake.jpg';
import garden from '../assets/Royal Botanical Gardens, Peradeniya.jpg';
import { MapPinIcon, CalendarIcon, ClockIcon, CarIcon, BedDoubleIcon } from 'lucide-react';

// Define type for destination data
interface Destination {
  name: string;
  heroImage: string;
  province: string;
  description: string;
  attractions: {
    name: string;
    image: string;
    description: string;
  }[];
  activities: string[];
  bestTimeToVisit: string;
  gettingThere: {
    fromColombo: string;
    fromAirport: string;
    localTransport: string;
  };
  accommodation: {
    luxury: string[];
    midRange: string[];
    budget: string[];
  };
}

interface DestinationData {
  [key: string]: Destination;
}

const destinationData: DestinationData = {
  kandy: {
    name: 'Kandy',
    heroImage: kandy,
    province: 'Central Province',
    description: 'Kandy, the last royal capital of Sri Lanka, is a picturesque city surrounded by hills and centered around a peaceful lake. The city is famous for its sacred Buddhist sites, including the Temple of the Tooth Relic, and its preservation of traditional arts and culture.',
    attractions: [{
      name: 'Temple of the Sacred Tooth Relic',
      image: kandy,
      description: "The most sacred Buddhist temple in Sri Lanka, housing Buddha's tooth relic."
    }, {
      name: 'Royal Botanical Gardens, Peradeniya',
      image: garden,
      description: 'Spectacular gardens featuring rare and endemic flora of Sri Lanka.'
    }, {
      name: 'Kandy Lake',
      image: KandyLake,
      description: 'Artificial lake in the heart of the city, perfect for evening walks.'
    }],
    activities: ['Visit the Temple of the Sacred Tooth Relic', 'Watch a traditional Kandyan dance performance', 'Explore the Royal Botanical Gardens', 'Take a stroll around Kandy Lake', 'Visit traditional arts & crafts centers', 'Experience the Kandy Esala Perahera (July/August)'],
    bestTimeToVisit: 'December to April (Dry season)',
    gettingThere: {
      fromColombo: '3-4 hours by train or car',
      fromAirport: '4 hours by car',
      localTransport: 'Tuk-tuks, local buses, and taxis available'
    },
    accommodation: {
      luxury: ["Earl's Regency", 'Mahaweli Reach Hotel'],
      midRange: ['Hotel Topaz', 'Hotel Suisse'],
      budget: ['Freedom Lodge', 'Clock Inn Kandy']
    }
  }
};

const Destination = () => {
  const { id } = useParams<{ id: string }>();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const destination = destinationData[id as string];

  if (!destination) {
    return (
      <div className="container px-4 py-16 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-3xl font-bold">Destination not found</h1>
          <Link
            to="/"
            className="text-green-600 hover:text-green-700"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

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

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: `url('${destination.heroImage}')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
              {destination.name}
            </h1>
            <div className="flex items-center justify-center text-white">
              <MapPinIcon className="w-6 h-6 mr-2" />
              <span className="text-xl">{destination.province}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="mb-6 text-3xl font-bold"
              variants={itemVariants}
            >
              Overview
            </motion.h2>
            <motion.p
              className="mb-8 text-lg leading-relaxed text-gray-600"
              variants={itemVariants}
            >
              {destination.description}
            </motion.p>
            <motion.div
              className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3"
              variants={containerVariants}
            >
              <motion.div
                className="p-4 rounded-lg bg-green-50"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <CalendarIcon className="w-8 h-8 mb-2 text-green-600" />
                <h3 className="mb-1 font-bold">Best Time to Visit</h3>
                <p className="text-gray-600">{destination.bestTimeToVisit}</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-green-50"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <ClockIcon className="w-8 h-8 mb-2 text-green-600" />
                <h3 className="mb-1 font-bold">Recommended Duration</h3>
                <p className="text-gray-600">2-3 days</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-green-50"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <CarIcon className="w-8 h-8 mb-2 text-green-600" />
                <h3 className="mb-1 font-bold">From Colombo</h3>
                <p className="text-gray-600">
                  {destination.gettingThere.fromColombo}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center"
            variants={itemVariants}
          >
            Top Attractions
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
          >
            {destination.attractions.map((attraction, index) => (
              <motion.div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="mb-8 text-3xl font-bold"
              variants={itemVariants}
            >
              Things to Do
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={containerVariants}
            >
              {destination.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4 font-bold text-green-600 bg-green-100 rounded-full">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{activity}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="mb-8 text-3xl font-bold"
              variants={itemVariants}
            >
              Where to Stay
            </motion.h2>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center mb-4">
                  <BedDoubleIcon className="w-6 h-6 mr-2 text-green-600" />
                  <h3 className="text-xl font-bold">Luxury Hotels</h3>
                </div>
                <ul className="ml-4 text-gray-600 list-disc list-inside">
                  {destination.accommodation.luxury.map((hotel, index) => (
                    <li key={index}>{hotel}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center mb-4">
                  <BedDoubleIcon className="w-6 h-6 mr-2 text-green-600" />
                  <h3 className="text-xl font-bold">Mid-Range Hotels</h3>
                </div>
                <ul className="ml-4 text-gray-600 list-disc list-inside">
                  {destination.accommodation.midRange.map((hotel, index) => (
                    <li key={index}>{hotel}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center mb-4">
                  <BedDoubleIcon className="w-6 h-6 mr-2 text-green-600" />
                  <h3 className="text-xl font-bold">Budget Options</h3>
                </div>
                <ul className="ml-4 text-gray-600 list-disc list-inside">
                  {destination.accommodation.budget.map((hotel, index) => (
                    <li key={index}>{hotel}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-green-700">
        <div className="container px-4 mx-auto text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold"
            variants={itemVariants}
          >
            Ready to Visit {destination.name}?
          </motion.h2>
          <motion.p
            className="mb-8 text-xl"
            variants={itemVariants}
          >
            Let us help you plan your perfect trip
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 font-bold text-green-700 transition duration-300 bg-white rounded-lg hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Destination;