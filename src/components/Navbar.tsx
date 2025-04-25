import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Contact Us',
    path: '/contact'
  }];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-green-700">
            <span className="text-yellow-600">Sri Lanka</span> Tourism
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium hover:text-green-700 transition-colors ${isActive(link.path) ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-700'}`}>
              {link.name}
            </Link>)}
        </div>
        {/* Mobile Navigation Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>
      {/* Mobile Navigation Menu */}
      {isOpen && <div className="md:hidden bg-white absolute w-full shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`py-2 px-4 font-medium hover:bg-gray-100 rounded ${isActive(link.path) ? 'text-green-700' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>)}
          </div>
        </div>}
    </header>;
};
export default Navbar;