import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Github, Twitter, Disc as Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zombie-black border-t border-zombie-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Music className="h-8 w-8 text-zombie-red" />
              <span className="ml-2 text-xl font-heading font-bold">Zombie Music</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Bring your Discord server to life with Zombie Music
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-zombie-light-red">
                <Discord className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-zombie-light-red">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-zombie-light-red">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-zombie-light-red">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-zombie-light-red">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/commands" className="text-gray-400 hover:text-zombie-light-red">
                  Commands
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-zombie-light-red">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-zombie-light-red">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-zombie-light-red">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-zombie-light-red">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-zombie-light-red">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Subscribe
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Get the latest updates and news about Zombie Music.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md bg-zombie-gray text-white focus:outline-none focus:ring-1 focus:ring-zombie-red w-full"
                />
                <button
                  type="submit"
                  className="bg-zombie-red hover:bg-zombie-light-red text-white px-4 py-2 rounded-r-md transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 border-t border-zombie-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Zombie Music. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with 🧠 by undead developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;