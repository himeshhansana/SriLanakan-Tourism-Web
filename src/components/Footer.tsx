import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sri Lanka Tourism</h3>
            <p className="text-gray-300 mb-4">
              Discover the beauty and wonders of Sri Lanka with our expert
              guided tours and travel services. Experience the pearl of the
              Indian Ocean like never before.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Popular Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Sigiriya</span>
              </li>
              <li>
                <span className="text-gray-300">Kandy</span>
              </li>
              <li>
                <span className="text-gray-300">Galle Fort</span>
              </li>
              <li>
                <span className="text-gray-300">Ella</span>
              </li>
              <li>
                <span className="text-gray-300">Yala National Park</span>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Temple Road, Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-green-500" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-2 text-green-500" />
                <span className="text-gray-300">info@srilankatourism.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Sri Lanka Tourism. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;