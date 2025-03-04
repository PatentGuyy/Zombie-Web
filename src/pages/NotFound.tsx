import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Home, Search } from 'lucide-react';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search the site or redirect to search results
    console.log('Searching for:', searchTerm);
  };
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Music className="h-64 w-64 text-zombie-red" />
          </div>
          <div className="relative">
            <h1 className="text-9xl font-heading font-bold text-zombie-red">404</h1>
            <div className="mt-4 flex items-center justify-center">
              <div className="h-0.5 w-16 bg-zombie-gray"></div>
              <span className="mx-4 text-xl">Page Not Found</span>
              <div className="h-0.5 w-16 bg-zombie-gray"></div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-heading font-semibold mb-4">
          Looks like this page has been devoured by zombies!
        </h2>
        
        <p className="text-gray-300 mb-8">
          We've lost the beat to this page. It might have moved, been deleted, or never existed in the first place.
        </p>
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-zombie-red hover:text-zombie-light-red transition-colors duration-200">
            <Home className="h-5 w-5 mr-2" />
            Return to the home page
          </Link>
        </div>
        
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for something else..."
                className="pl-10 pr-4 py-2 w-full bg-zombie-gray text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-zombie-red"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="rounded-l-none"
            >
              Search
            </Button>
          </form>
        </div>
        
        <div className="text-gray-400 italic">
          "Even zombies can't find this page, and they're pretty good at finding things."
        </div>
      </div>
    </div>
  );
};

export default NotFound;