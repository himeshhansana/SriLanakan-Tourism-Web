import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
const About = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1611811236504-c18bd12e3801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto px-4">
              Learn about our passion for showcasing the beauty of Sri Lanka
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" alt="Sri Lanka Tourism Team" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 by a group of passionate Sri Lankan travel
                enthusiasts, Sri Lanka Tourism has grown from a small local tour
                operator to one of the country's leading travel companies. Our
                journey began with a simple mission: to share the authentic
                beauty and rich cultural heritage of Sri Lanka with travelers
                from around the world.
              </p>
              <p className="text-gray-600 mb-4">
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
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission & Vision */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guided by our core values and commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                To provide exceptional travel experiences that showcase the
                natural beauty, rich culture, and warm hospitality of Sri Lanka
                while promoting sustainable tourism practices that benefit local
                communities and preserve the environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    Create authentic experiences that connect travelers with Sri
                    Lankan culture
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    Support local communities through responsible tourism
                    initiatives
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    Provide personalized service that exceeds client
                    expectations
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-6">
                To be the leading sustainable tourism company in Sri Lanka,
                recognized globally for our commitment to excellence, authentic
                experiences, and positive impact on local communities and the
                environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    Become the first choice for travelers seeking authentic Sri
                    Lankan experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    Set industry standards for sustainable and responsible
                    tourism
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    Continuously innovate and improve our travel offerings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate travel experts dedicated to creating
              unforgettable Sri Lankan experiences
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Rajith Fernando - Founder & CEO" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rajith Fernando</h3>
                <p className="text-green-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years in tourism, Rajith's vision and leadership
                  drive our company forward.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Priya Mendis - Head of Operations" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Mendis</h3>
                <p className="text-green-600 font-medium mb-3">
                  Head of Operations
                </p>
                <p className="text-gray-600 mb-4">
                  Priya ensures every tour runs smoothly with her exceptional
                  organizational skills.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Dinesh Jayawardena - Senior Tour Guide" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dinesh Jayawardena</h3>
                <p className="text-green-600 font-medium mb-3">
                  Senior Tour Guide
                </p>
                <p className="text-gray-600 mb-4">
                  An expert in Sri Lankan history and culture with 10 years of
                  guiding experience.
                </p>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" alt="Amali De Silva - Customer Experience Manager" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Amali De Silva</h3>
                <p className="text-green-600 font-medium mb-3">
                  Customer Experience Manager
                </p>
                <p className="text-gray-600 mb-4">
                  Dedicated to creating memorable experiences and ensuring
                  client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from travelers who have experienced Sri Lanka with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">United Kingdom</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Our 10-day tour of Sri Lanka exceeded all expectations. The
                guides were knowledgeable, accommodations were excellent, and we
                experienced so much of this beautiful country. Will definitely
                recommend to friends!"
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Michael Chen" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Australia</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The wildlife safari was the highlight of our trip. We saw
                elephants, leopards, and so many birds! Our guide was extremely
                knowledgeable and made sure we had the best experience
                possible."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Lisa Mueller" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Lisa Mueller</h4>
                  <p className="text-gray-600 text-sm">Germany</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The cultural tour was fascinating and our guide made the
                history come alive. The accommodations were comfortable and the
                food was amazing. This was truly the trip of a lifetime!"
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to start planning your perfect Sri Lankan
            adventure.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default About;