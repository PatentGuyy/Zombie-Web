import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Commands', path: '/commands' },
    { name: 'Support', path: '/support' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-zombie-black border-b border-zombie-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Music className="h-8 w-8 text-zombie-red" />
              <span className="ml-2 text-xl font-heading font-bold">Zombie Music</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-zombie-light-red ${
                  location.pathname === link.path ? 'text-zombie-red' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zombie-red hover:bg-zombie-light-red text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Add to Discord
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-zombie-light-red focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zombie-black border-b border-zombie-gray">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-zombie-red'
                    : 'text-white hover:text-zombie-light-red'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 bg-zombie-red hover:bg-zombie-light-red text-white rounded-md text-base font-medium mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Add to Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;