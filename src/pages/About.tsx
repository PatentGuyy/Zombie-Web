import React from 'react';
import { motion } from 'framer-motion';
import { Music, Code, Heart, Calendar, Shield, Zap } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Romero",
      role: "Lead Developer",
      bio: "Full-stack developer with a passion for audio processing and Discord bots.",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      bio: "Creating intuitive interfaces that make music bots accessible to everyone.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Marcus Johnson",
      role: "Audio Engineer",
      bio: "Professional sound engineer ensuring the highest quality audio experience.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Patel",
      role: "Community Manager",
      bio: "Building and nurturing the Zombie Music community across Discord and social media.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];
  
  const roadmapItems = [
    {
      quarter: "Q3 2025",
      title: "Advanced Audio Filters",
      description: "Introducing professional-grade audio filters including equalizer, bass boost, and custom presets."
    },
    {
      quarter: "Q4 2025",
      title: "Collaborative Playlists",
      description: "Allow server members to collaboratively build and manage playlists with voting features."
    },
    {
      quarter: "Q1 2026",
      title: "Music Recommendation System",
      description: "AI-powered song recommendations based on your server's listening history and preferences."
    },
    {
      quarter: "Q2 2026",
      title: "Live Events Integration",
      description: "Support for synchronized listening parties and integration with live streaming platforms."
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
              About <span className="text-zombie-red">Zombie Music</span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The story behind the The story behind the Discord bot that's bringing music back from the dead

</motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-heading font-semibold mb-6">
                Our <span className="text-zombie-red">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Zombie Music was born from frustration. In early 2024, when many popular Discord music bots were shutting down or becoming heavily restricted, a small team of developers and music enthusiasts decided to create something better.
                </p>
                <p>
                  We wanted to build a music bot that wasn't just a replacement for what was lost, but an improvement - something that would deliver exceptional audio quality, reliability, and user experience without compromising on features.
                </p>
                <p>
                  After months of development and testing, Zombie Music was officially launched in mid-2024. The name reflects our mission: to bring music back from the dead on Discord, making it better and more accessible than ever before.
                </p>
                <p>
                  Today, Zombie Music serves thousands of Discord communities, constantly evolving based on user feedback and technological advancements. Our commitment to quality, reliability, and user experience remains at the core of everything we do.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <div className="absolute inset-0 bg-zombie-red rounded-lg opacity-10 transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Music studio" 
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 bg-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Our <span className="text-zombie-red">Mission & Values</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zombie-black rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zombie-red/20 text-zombie-red mb-4 mx-auto">
                <Music className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-center mb-4">Quality First</h3>
              <p className="text-gray-300 text-center">
                We believe that music deserves to be heard in the highest possible quality. That's why we prioritize audio fidelity and performance in everything we build.
              </p>
            </div>
            
            <div className="bg-zombie-black rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zombie-red/20 text-zombie-red mb-4 mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-center mb-4">Community Driven</h3>
              <p className="text-gray-300 text-center">
                Our users are at the heart of what we do. We actively listen to feedback, engage with our community, and build features that enhance your Discord experience.
              </p>
            </div>
            
            <div className="bg-zombie-black rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zombie-red/20 text-zombie-red mb-4 mx-auto">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-center mb-4">Reliability</h3>
              <p className="text-gray-300 text-center">
                We understand that downtime ruins the experience. That's why we've built Zombie Music with redundancy and stability as core principles, ensuring your music keeps playing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Meet the <span className="text-zombie-red">Team</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              The people behind Zombie Music
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-zombie-gray rounded-lg p-6 shadow-lg text-center">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-zombie-red font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16 bg-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-heading font-semibold mb-6">
                Our <span className="text-zombie-red">Technology</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Zombie Music is built on a modern, scalable architecture designed for reliability and performance. Our technology stack includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom audio processing engine for optimal sound quality</li>
                  <li>Distributed infrastructure across multiple regions for low latency</li>
                  <li>Real-time analytics and monitoring to prevent issues before they occur</li>
                  <li>Advanced caching system for quick song loading and reduced bandwidth</li>
                  <li>Proprietary queue management system that ensures smooth playback</li>
                </ul>
                <p>
                  We're constantly improving our technology, implementing the latest advancements in audio processing and Discord integration to provide the best possible experience.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-zombie-black rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <Code className="h-6 w-6 text-zombie-red mr-2" />
                  <h3 className="text-xl font-medium">Tech Stack</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Audio Processing</span>
                      <span className="text-zombie-red">Advanced</span>
                    </div>
                    <div className="w-full bg-zombie-gray rounded-full h-2">
                      <div className="bg-zombie-red h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Scalability</span>
                      <span className="text-zombie-red">Excellent</span>
                    </div>
                    <div className="w-full bg-zombie-gray rounded-full h-2">
                      <div className="bg-zombie-red h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Reliability</span>
                      <span className="text-zombie-red">Outstanding</span>
                    </div>
                    <div className="w-full bg-zombie-gray rounded-full h-2">
                      <div className="bg-zombie-red h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">Response Time</span>
                      <span className="text-zombie-red">Lightning Fast</span>
                    </div>
                    <div className="w-full bg-zombie-gray rounded-full h-2">
                      <div className="bg-zombie-red h-2 rounded-full" style={{ width: '97%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roadmap Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Future <span className="text-zombie-red">Roadmap</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              What's coming next for Zombie Music
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-zombie-red/30 transform md:translate-x-[-50%]"></div>
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-zombie-red transform md:translate-x-[-50%]"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pl-6 md:pl-0 md:pr-12">
                    <div className={`bg-zombie-gray rounded-lg p-6 shadow-lg ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-zombie-red mr-2" />
                        <span className="text-zombie-red font-medium">{item.quarter}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Privacy Section */}
      <section className="py-16 bg-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Privacy & <span className="text-zombie-red">Data</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              How we handle your information
            </p>
          </div>
          
          <div className="bg-zombie-black rounded-lg p-8 shadow-lg">
            <div className="space-y-6 text-gray-300">
              <p>
                At Zombie Music, we take your privacy seriously. We collect minimal data necessary to provide our service and never share your information with third parties.
              </p>
              
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Data We Collect</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Server IDs for configuration settings</li>
                  <li>Command usage for service improvement</li>
                  <li>Error logs for troubleshooting</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Data We Don't Collect</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Message content outside of commands</li>
                  <li>Voice data or conversations</li>
                  <li>Personal information about users</li>
                  <li>Browsing history or activity outside Discord</li>
                </ul>
              </div>
              
              <p>
                All data is stored securely and encrypted. You can request deletion of your data at any time through our support channels.
              </p>
              
              <div className="flex justify-center mt-6">
                <Button 
                  href="#" 
                  variant="outline"
                >
                  View Full Privacy Policy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zombie-black to-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Join the <span className="text-zombie-red">Zombie Music</span> Community
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Add our bot to your Discord server and experience music like never before
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
              href="https://discord.gg/zombiemusic" 
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Join Support Server
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;