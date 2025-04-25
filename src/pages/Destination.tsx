import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon, ClockIcon, CarIcon, BedDoubleIcon, UtensilsIcon } from 'lucide-react';
const destinationData = {
  kandy: {
    name: 'Kandy',
    heroImage: 'https://images.unsplash.com/photo-1586517516743-608850983cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80',
    province: 'Central Province',
    description: 'Kandy, the last royal capital of Sri Lanka, is a picturesque city surrounded by hills and centered around a peaceful lake. The city is famous for its sacred Buddhist sites, including the Temple of the Tooth Relic, and its preservation of traditional arts and culture.',
    attractions: [{
      name: 'Temple of the Sacred Tooth Relic',
      image: 'https://images.unsplash.com/photo-1625058467240-4184117d34be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      description: "The most sacred Buddhist temple in Sri Lanka, housing Buddha's tooth relic."
    }, {
      name: 'Royal Botanical Gardens, Peradeniya',
      image: 'https://images.unsplash.com/photo-1590766740016-50b67666ace7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      description: 'Spectacular gardens featuring rare and endemic flora of Sri Lanka.'
    }, {
      name: 'Kandy Lake',
      image: 'https://images.unsplash.com/photo-1586517516743-608850983cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80',
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
  // Add other destinations data here...
};
const Destination = () => {
  const {
    id
  } = useParams();
  const destination = destinationData[id as keyof typeof destinationData];
  if (!destination) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Destination not found</h1>
        <Link to="/" className="text-green-600 hover:text-green-700">
          Return to Home
        </Link>
      </div>;
  }
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: `url('${destination.heroImage}')`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center justify-center text-white">
              <MapPinIcon className="w-6 h-6 mr-2" />
              <span className="text-xl">{destination.province}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {destination.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <CalendarIcon className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-bold mb-1">Best Time to Visit</h3>
                <p className="text-gray-600">{destination.bestTimeToVisit}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <ClockIcon className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-bold mb-1">Recommended Duration</h3>
                <p className="text-gray-600">2-3 days</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <CarIcon className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-bold mb-1">From Colombo</h3>
                <p className="text-gray-600">
                  {destination.gettingThere.fromColombo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.attractions.map((attraction, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Things to Do */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Things to Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.activities.map((activity, index) => <div key={index} className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{activity}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Accommodation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Where to Stay</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <BedDoubleIcon className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold">Luxury Hotels</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  {destination.accommodation.luxury.map((hotel, index) => <li key={index}>{hotel}</li>)}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <BedDoubleIcon className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold">Mid-Range Hotels</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  {destination.accommodation.midRange.map((hotel, index) => <li key={index}>{hotel}</li>)}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <BedDoubleIcon className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold">Budget Options</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  {destination.accommodation.budget.map((hotel, index) => <li key={index}>{hotel}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Visit {destination.name}?
          </h2>
          <p className="text-xl mb-8">Let us help you plan your perfect trip</p>
          <Link to="/contact" className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>;
};
export default Destination;