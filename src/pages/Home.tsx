import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon, UsersIcon } from 'lucide-react';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1580881517646-ba770b1d19aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover the Beauty of Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Experience the island's stunning landscapes, ancient temples, and
            rich culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Explore Tours
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Sri Lanka's most iconic and breathtaking destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sigiriya */}
            <Link to="/destination/sigiriya" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1586337021326-90c9d1ffafc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" alt="Sigiriya Rock Fortress" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPinIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Central Province</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Sigiriya Rock Fortress
                </h3>
                <p className="text-gray-600 mb-4">
                  Ancient rock fortress with frescoes and landscaped gardens, a
                  UNESCO World Heritage site.
                </p>
                <span className="text-green-600 font-medium hover:text-green-700">
                  Explore Destination &rarr;
                </span>
              </div>
            </Link>
            {/* Kandy */}
            <Link to="/destination/kandy" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1586517516743-608850983cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80" alt="Temple of the Sacred Tooth Relic, Kandy" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPinIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Central Province</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Kandy</h3>
                <p className="text-gray-600 mb-4">
                  Cultural capital featuring the Temple of the Sacred Tooth
                  Relic and beautiful Kandy Lake.
                </p>
                <span className="text-green-600 font-medium hover:text-green-700">
                  Explore Destination &rarr;
                </span>
              </div>
            </Link>
            {/* Galle */}
            <Link to="/destination/galle" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Galle Fort" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPinIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">Southern Province</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Galle Fort</h3>
                <p className="text-gray-600 mb-4">
                  Historic Dutch colonial fort with charming streets, boutique
                  shops, and ocean views.
                </p>
                <span className="text-green-600 font-medium hover:text-green-700">
                  Explore Destination &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handcrafted tour experiences to discover the best of Sri Lanka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cultural Triangle Tour */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1625058467240-4184117d34be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Cultural Triangle Tour" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Cultural Triangle Tour
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore ancient cities, rock fortresses, and sacred temples in
                  central Sri Lanka.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">5 Days</span>
                  </div>
                  <div className="flex items-center">
                    <UsersIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Max 12 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">$799</span>
                  <Link to="/services" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            {/* Beach Escape */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1588598198321-9735fd52455b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Beach Escape" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Beach Escape</h3>
                <p className="text-gray-600 mb-4">
                  Relax on pristine beaches along the southern coast of Sri
                  Lanka.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">7 Days</span>
                  </div>
                  <div className="flex items-center">
                    <UsersIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Max 10 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">$999</span>
                  <Link to="/services" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            {/* Wildlife Safari */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1562040574-a3b6b0c5d3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Wildlife Safari" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wildlife Safari</h3>
                <p className="text-gray-600 mb-4">
                  Encounter elephants, leopards, and exotic birds in Sri Lanka's
                  national parks.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">4 Days</span>
                  </div>
                  <div className="flex items-center">
                    <UsersIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Max 8 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">$699</span>
                  <Link to="/services" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're dedicated to providing exceptional travel experiences in Sri
              Lanka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Local Guides</h3>
              <p className="text-gray-600">
                Our guides have deep knowledge of Sri Lankan culture, history,
                and hidden gems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Experiences</h3>
              <p className="text-gray-600">
                Tailor-made itineraries designed to match your interests and
                preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Value</h3>
              <p className="text-gray-600">
                Competitive pricing without compromising on quality and
                experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated customer support throughout your journey for peace of
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-cover bg-center relative" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Sri Lanka?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Start planning your dream vacation to the pearl of the Indian Ocean
            today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              View Tour Packages
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;