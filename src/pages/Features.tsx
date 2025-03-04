import React from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  Headphones, 
  Zap, 
  Server, 
  Clock, 
  Search, 
  Volume2, 
  Mic, 
  Shield, 
  BarChart, 
  Globe, 
  Heart 
} from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';

const Features: React.FC = () => {
  const featuresList = [
    {
      title: "High-Quality Audio",
      description: "Experience crystal-clear sound quality with support for high-bitrate streaming up to 384kbps.",
      icon: Headphones
    },
    {
      title: "Lightning Fast",
      description: "Zero lag and instant response times keep your music flowing smoothly without interruptions.",
      icon: Zap
    },
    {
      title: "Reliable Uptime",
      description: "99.9% uptime guarantee means your music never stops unexpectedly, even during peak hours.",
      icon: Server
    },
    {
      title: "Simple Commands",
      description: "Easy-to-use slash commands make controlling your music effortless for all server members.",
      icon: Music
    },
    {
      title: "No Queue Limits",
      description: "Add as many songs as you want to the queue without artificial restrictions.",
      icon: Clock
    },
    {
      title: "Advanced Search",
      description: "Find exactly what you're looking for with support for YouTube, Spotify, SoundCloud, and more.",
      icon: Search
    },
    {
      title: "Volume Control",
      description: "Adjust the volume to your preference without affecting other applications.",
      icon: Volume2
    },
    {
      title: "Lyrics Support",
      description: "Display lyrics for the currently playing song so everyone can sing along.",
      icon: Mic
    },
    {
      title: "Permissions System",
      description: "Control who can skip songs, adjust volume, or manage the queue with role-based permissions.",
      icon: Shield
    },
    {
      title: "Detailed Statistics",
      description: "Track your server's music habits with detailed statistics and listening history.",
      icon: BarChart
    },
    {
      title: "Global Support",
      description: "Available worldwide with low latency connections to servers in multiple regions.",
      icon: Globe
    },
    {
      title: "Regular Updates",
      description: "Constantly improving with new features and optimizations based on user feedback.",
      icon: Heart
    }
  ];
  
  const comparisonData = [
    {
      feature: "Audio Quality",
      zombieMusic: "384kbps",
      otherBot1: "256kbps",
      otherBot2: "128kbps"
    },
    {
      feature: "Response Time",
      zombieMusic: "<100ms",
      otherBot1: "200-500ms",
      otherBot2: "500ms+"
    },
    {
      feature: "Uptime",
      zombieMusic: "99.9%",
      otherBot1: "99%",
      otherBot2: "95%"
    },
    {
      feature: "Queue Limit",
      zombieMusic: "Unlimited",
      otherBot1: "500 songs",
      otherBot2: "100 songs"
    },
    {
      feature: "Supported Platforms",
      zombieMusic: "7+",
      otherBot1: "3-5",
      otherBot2: "1-2"
    },
    {
      feature: "Lyrics",
      zombieMusic: "✓",
      otherBot1: "✓",
      otherBot2: "✗"
    },
    {
      feature: "Advanced Filters",
      zombieMusic: "✓",
      otherBot1: "Limited",
      otherBot2: "✗"
    },
    {
      feature: "Free Tier Limitations",
      zombieMusic: "None",
      otherBot1: "Some features locked",
      otherBot2: "Many features locked"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Powerful <span className="text-zombie-red">Features</span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover all the ways Zombie Music can enhance your Discord server's audio experience
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Audio Quality Section */}
      <section className="py-16 bg-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Superior <span className="text-zombie-red">Audio Quality</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Zombie Music delivers an unparalleled listening experience with high-bitrate streaming up to 384kbps. 
                Our advanced audio processing ensures crystal-clear sound with minimal distortion, even during peak usage times.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">High-fidelity 384kbps audio streaming</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Advanced audio processing for clarity</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Optimized buffer management for smooth playback</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Consistent quality across all supported platforms</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-zombie-red rounded-lg opacity-10 transform rotate-3"></div>
                <div className="relative bg-zombie-black rounded-lg p-6 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">Audio Quality Comparison</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Zombie Music (384kbps)</span>
                        <span className="text-zombie-red">Excellent</span>
                      </div>
                      <div className="w-full bg-zombie-gray rounded-full h-2">
                        <div className="bg-zombie-red h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Other Bot (256kbps)</span>
                        <span className="text-yellow-500">Good</span>
                      </div>
                      <div className="w-full bg-zombie-gray rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Basic Bot (128kbps)</span>
                        <span className="text-gray-400">Average</span>
                      </div>
                      <div className="w-full bg-zombie-gray rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              How We <span className="text-zombie-red">Compare</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              See how Zombie Music stacks up against other popular Discord music bots
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zombie-gray">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-zombie-gray/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 bg-zombie-gray/50 text-left text-xs font-medium text-zombie-red uppercase tracking-wider">
                    Zombie Music
                  </th>
                  <th className="px-6 py-3 bg-zombie-gray/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Other Bot 1
                  </th>
                  <th className="px-6 py-3 bg-zombie-gray/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Other Bot 2
                  </th>
                </tr>
              </thead>
              <tbody className="bg-zombie-black divide-y divide-zombie-gray">
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-zombie-gray/10' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zombie-red font-semibold">
                      {row.zombieMusic}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {row.otherBot1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {row.otherBot2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Premium Features (if applicable) */}
      <section className="py-16 bg-gradient-to-r from-zombie-black to-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Premium <span className="text-zombie-red">Features</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Unlock even more powerful capabilities with Zombie Music Premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zombie-gray rounded-lg p-6 border border-zombie-red/30 hover:border-zombie-red transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4">24/7 Playback</h3>
              <p className="text-gray-300 mb-4">
                Keep the music playing non-stop, even when no one is in the voice channel.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Continuous playback</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Auto-reconnect on disconnection</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Scheduled playlists</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zombie-gray rounded-lg p-6 border border-zombie-red/30 hover:border-zombie-red transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4">Advanced Audio Filters</h3>
              <p className="text-gray-300 mb-4">
                Customize your sound with professional-grade audio filters and effects.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Equalizer with presets</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Bass boost, nightcore, vaporwave</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Custom filter combinations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zombie-gray rounded-lg p-6 border border-zombie-red/30 hover:border-zombie-red transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4">Exclusive Playlists</h3>
              <p className="text-gray-300 mb-4">
                Create and save unlimited playlists with advanced management features.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Unlimited saved playlists</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Collaborative playlist editing</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-zombie-red">✓</div>
                  <span className="ml-2 text-gray-300">Import from Spotify and YouTube</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              href="https://discord.com" 
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to Experience <span className="text-zombie-red">Zombie Music</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Add Zombie Music to your Discord server today and transform your audio experience.
          </p>
          <div className="mt-8">
            <Button 
              href="https://discord.com" 
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Add to Discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;