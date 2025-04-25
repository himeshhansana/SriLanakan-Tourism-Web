import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
const Contact = () => {
  // Coordinates for Colombo, Sri Lanka
  const colomboCoordinates: [number, number] = [6.9271, 79.8612];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto px-4">
              We're here to help you plan your perfect Sri Lankan adventure
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our tours, need help planning
                your trip, or want to customize your Sri Lankan experience, our
                team is ready to assist you.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPinIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      123 Temple Road, Colombo 00300
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <PhoneIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +94 11 234 5678
                      <br />
                      +94 77 123 4567 (WhatsApp)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MailIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@srilankatourism.com
                      <br />
                      bookings@srilankatourism.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <ClockIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
                <Map center={colomboCoordinates} zoom={13} markerPosition={colomboCoordinates} markerPopup="<strong>Sri Lanka Tourism</strong><br />123 Temple Road, Colombo" />
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about traveling in Sri Lanka
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                What is the best time to visit Sri Lanka?
              </h3>
              <p className="text-gray-600">
                Sri Lanka has a tropical climate with distinct wet and dry
                seasons that vary by region. The best time to visit the west and
                south coasts is from December to March, while the east coast is
                best from April to September. The central highlands are pleasant
                year-round but can be chilly in the evenings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Do I need a visa to visit Sri Lanka?
              </h3>
              <p className="text-gray-600">
                Most visitors to Sri Lanka need an Electronic Travel
                Authorization (ETA) before arrival. This can be obtained online
                through the official Sri Lankan ETA website. Some nationalities
                may be eligible for visa on arrival. We recommend checking the
                latest visa requirements before your trip.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                What currency is used in Sri Lanka?
              </h3>
              <p className="text-gray-600">
                The Sri Lankan Rupee (LKR) is the official currency. Credit
                cards are widely accepted in hotels and larger establishments,
                but it's advisable to carry cash for smaller vendors, especially
                in rural areas. ATMs are available in major towns and cities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                How far in advance should I book my tour?
              </h3>
              <p className="text-gray-600">
                We recommend booking at least 2-3 months in advance, especially
                during the high season (December to March). This ensures
                availability of preferred accommodations and activities. For
                custom tours or group travel, 4-6 months advance booking is
                advisable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Is Sri Lanka safe for tourists?
              </h3>
              <p className="text-gray-600">
                Sri Lanka is generally a safe destination for tourists. As with
                any travel, we recommend taking standard precautions with
                personal belongings and being aware of your surroundings. Our
                guides are knowledgeable about local conditions and will ensure
                your safety throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;