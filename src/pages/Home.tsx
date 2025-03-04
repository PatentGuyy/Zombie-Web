import React from 'react';
import { motion } from 'framer-motion';
import { Music, Headphones, Zap, Server, Users } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Testimonial from '../components/Testimonial';
import MusicVisualizer from '../components/MusicVisualizer';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zombie-black to-zombie-gray opacity-50 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  Bring your Discord server to 
                  <span className="text-zombie-red"> life</span> with Zombie Music
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                  A powerful, reliable music bot that delivers crystal-clear audio with zero lag
                </p>
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    href="https://discord.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    Add to Discord
                  </Button>
                  <Button 
                    href="/commands" 
                    variant="outline"
                    size="lg"
                  >
                    View Commands
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  <div className="absolute inset-0 bg-zombie-red rounded-full opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-4 bg-zombie-gray rounded-full flex items-center justify-center">
                    <Music className="h-32 w-32 text-zombie-red" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-24 relative z-10">
          <MusicVisualizer />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Why Choose <span className="text-zombie-red">Zombie Music</span>?
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Powerful features that bring your server's music experience to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="High-Quality Audio"
              description="Experience crystal-clear sound quality with support for high-bitrate streaming."
              icon={Headphones}
            />
            <FeatureCard
              title="Lightning Fast"
              description="Zero lag and instant response times keep your music flowing smoothly."
              icon={Zap}
            />
            <FeatureCard
              title="Reliable Uptime"
              description="99.9% uptime guarantee means your music never stops unexpectedly."
              icon={Server}
            />
            <FeatureCard
              title="Simple Commands"
              description="Easy-to-use slash commands make controlling your music effortless."
              icon={Music}
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-zombie-red">50,000+</p>
              <p className="mt-2 text-xl text-gray-300">Discord Servers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-zombie-red">1M+</p>
              <p className="mt-2 text-xl text-gray-300">Songs Played Daily</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-zombie-red">5M+</p>
              <p className="mt-2 text-xl text-gray-300">Happy Users</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What Our Users <span className="text-zombie-red">Say</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Don't take our word for it - hear from the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="Zombie Music has completely transformed our server's music experience. The audio quality is incredible!"
              author="DarkLord42"
              role="Server Owner"
            />
            <Testimonial
              quote="I've tried many music bots, but Zombie Music is by far the most reliable. Never crashes during our gaming sessions."
              author="MusicMaster"
              role="Discord Moderator"
            />
            <Testimonial
              quote="The commands are so intuitive, and the response time is lightning fast. Couldn't ask for a better music bot!"
              author="GamingQueen"
              role="Community Manager"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zombie-black to-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to <span className="text-zombie-red">Revive</span> Your Server?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of Discord communities already enjoying the best music experience with Zombie Music.
          </p>
          <div className="mt-8">
            <Button 
              href="https://discord.com" 
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Add to Discord Now
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <Users className="h-6 w-6 text-zombie-red mr-2" />
            <p className="text-gray-300">
              Trusted by over 50,000 Discord servers
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;