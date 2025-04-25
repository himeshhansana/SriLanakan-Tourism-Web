import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UsersIcon, MapPinIcon, ClockIcon, CheckIcon } from 'lucide-react';
const Services = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1583200786218-ccee132a6b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto px-4">
              Discover our range of expertly crafted Sri Lankan experiences
            </p>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From custom itineraries to guided tours, we provide comprehensive
              services to make your Sri Lankan journey unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Tour Packages</h3>
              <p className="text-gray-600 mb-4">
                Tailor-made itineraries designed specifically to match your
                interests, schedule, and budget. Our expert planners work with
                you to create the perfect Sri Lankan experience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Personalized itineraries
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Accommodation arrangements
                  </span>
                </li>
              </ul>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Guided Tours</h3>
              <p className="text-gray-600 mb-4">
                Explore Sri Lanka with our knowledgeable local guides who
                provide cultural insights, historical context, and access to
                hidden gems off the typical tourist path.
              </p>
              <ul className="space-y-2 mb-6">
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
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Transportation Services
              </h3>
              <p className="text-gray-600 mb-4">
                Reliable and comfortable transportation throughout your journey
                in Sri Lanka, from airport transfers to daily excursions and
                cross-country travel.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Airport pickups & drop-offs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Private vehicles with drivers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Comfortable, air-conditioned transport
                  </span>
                </li>
              </ul>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Accommodation Booking</h3>
              <p className="text-gray-600 mb-4">
                We handle all your accommodation needs, from luxury resorts to
                boutique hotels and authentic homestays, ensuring comfortable
                and memorable stays.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Vetted quality accommodations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Options for all budgets</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Unique local experiences
                  </span>
                </li>
              </ul>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Experiences</h3>
              <p className="text-gray-600 mb-4">
                Immerse yourself in authentic Sri Lankan culture with cooking
                classes, traditional dance performances, temple visits, and
                community interactions.
              </p>
              <ul className="space-y-2 mb-6">
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
            </div>
            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Special Interest Tours</h3>
              <p className="text-gray-600 mb-4">
                Specialized experiences focused on wildlife, photography,
                culinary arts, wellness, adventure sports, or historical
                exploration.
              </p>
              <ul className="space-y-2 mb-6">
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
                  <span className="text-gray-600">
                    Ayurvedic wellness retreats
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Tour Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Tour Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our most popular Sri Lankan adventures, carefully crafted to
              provide unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1625058467240-4184117d34be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Cultural Triangle Exploration" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">
                      Cultural Triangle Exploration
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Best Seller
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      4.9 (124 reviews)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>5 Days</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Central Province</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 12 people</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Explore the ancient cities of Anuradhapura, Polonnaruwa, the
                    rock fortress of Sigiriya, and the cave temples of Dambulla.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      $799
                    </span>
                    <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Package 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1562040574-a3b6b0c5d3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Wildlife Safari Adventure" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Wildlife Safari Adventure
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      4.8 (98 reviews)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>4 Days</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Southern & Eastern Provinces</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 8 people</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Experience thrilling safari adventures in Yala and Udawalawe
                    National Parks, home to leopards, elephants, and diverse
                    bird species.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      $699
                    </span>
                    <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Package 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1588598198321-9735fd52455b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Coastal Paradise" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2">Coastal Paradise</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      4.7 (86 reviews)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>7 Days</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Southern Coast</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 10 people</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Relax on pristine beaches, explore colonial Galle Fort, and
                    enjoy water sports along Sri Lanka's stunning southern
                    coastline.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      $999
                    </span>
                    <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Package 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1590767601184-fad3c37921ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80" alt="Hill Country Retreat" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Hill Country Retreat
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      4.9 (112 reviews)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>6 Days</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Central Highlands</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>Max 8 people</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Experience the cool climate and breathtaking landscapes of
                    Nuwara Eliya, Ella, and the tea plantations of Sri Lanka's
                    central highlands.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      $899
                    </span>
                    <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Request Custom Package
            </Link>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple process to create your perfect Sri Lankan experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Reach out through our contact form or email with your travel
                dates, interests, and any specific requirements.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customize Your Trip</h3>
              <p className="text-gray-600">
                Work with our travel experts to refine your itinerary,
                accommodations, and experiences to match your preferences.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Enjoy Sri Lanka</h3>
              <p className="text-gray-600">
                Relax and enjoy your journey with our comprehensive support
                throughout your Sri Lankan adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Sri Lankan Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to start creating your perfect travel experience.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;