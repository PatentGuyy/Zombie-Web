import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, FileText, AlertTriangle, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import FAQItem from '../components/FAQItem';
import ContactForm from '../components/ContactForm';

const Support: React.FC = () => {
  const faqs = [
    {
      question: "How do I add Zombie Music to my Discord server?",
      answer: "Click the 'Add to Discord' button on our website, which will redirect you to Discord's authorization page. Select your server from the dropdown menu and click 'Authorize'. You'll need the 'Manage Server' permission to add bots to a server."
    },
    {
      question: "Why can't I hear any music?",
      answer: "There are several possible reasons: 1) Make sure you're in a voice channel before using the play command. 2) Check if the bot has permission to join and speak in voice channels. 3) Verify that the bot is not muted in your Discord settings. 4) Ensure the song or URL you're trying to play is valid and accessible."
    },
    {
      question: "How do I control who can use music commands?",
      answer: "Zombie Music respects Discord's role hierarchy. By default, everyone can use basic commands, but commands like stop, clear, and volume require the DJ role or moderator permissions. You can create a 'DJ' role in your server and assign it to trusted members."
    },
    {
      question: "What music sources are supported?",
      answer: "Zombie Music supports YouTube, Spotify, SoundCloud, Bandcamp, Twitch, Vimeo, and direct MP3 links. For Spotify, we search for equivalent tracks on YouTube for playback due to Spotify's API limitations."
    },
    {
      question: "Is there a limit to how many songs I can queue?",
      answer: "No, Zombie Music allows unlimited songs in the queue. However, for performance reasons, we recommend keeping queues under 500 songs for optimal experience."
    },
    {
      question: "How do I report a bug or request a feature?",
      answer: "You can report bugs or request features through our contact form on this page, or by joining our support Discord server where you can interact directly with the development team."
    },
    {
      question: "Why does the bot disconnect randomly?",
      answer: "The bot will automatically disconnect after 5 minutes of inactivity (no one in the voice channel) to save resources. If it's disconnecting during active use, it might be due to network issues or Discord API limitations. Premium users get 24/7 connection option."
    },
    {
      question: "How do I upgrade to Premium?",
      answer: "Visit our website's Premium page or use the /premium command in your Discord server to see available plans and features. Premium subscriptions can be managed through our dashboard."
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
              Support & <span className="text-zombie-red">Help</span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get the assistance you need to make the most of Zombie Music
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Support Options */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zombie-gray rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <HelpCircle className="h-12 w-12 text-zombie-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">FAQ</h3>
              <p className="text-gray-300 mb-4">
                Find answers to commonly asked questions about Zombie Music.
              </p>
              <Button 
                href="#faq" 
                variant="outline"
              >
                View FAQ
              </Button>
            </div>
            
            <div className="bg-zombie-gray rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <MessageSquare className="h-12 w-12 text-zombie-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discord Support</h3>
              <p className="text-gray-300 mb-4">
                Join our Discord server for direct support from our team.
              </p>
              <Button 
                href="https://discord.gg/zombiemusic" 
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Join Server
              </Button>
            </div>
            
            <div className="bg-zombie-gray rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <FileText className="h-12 w-12 text-zombie-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-300 mb-4">
                Detailed guides and documentation for all features.
              </p>
              <Button 
                href="#documentation" 
                variant="outline"
              >
                Read Docs
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-zombie-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Frequently Asked <span className="text-zombie-red">Questions</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Find answers to the most common questions about Zombie Music
            </p>
          </div>
          
          <div className="bg-zombie-black rounded-lg p-6 shadow-lg">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Troubleshooting Guide */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Troubleshooting <span className="text-zombie-red">Guide</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Common issues and how to resolve them
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zombie-gray/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-zombie-red mr-2" />
                <h3 className="text-xl font-medium">Bot Won't Join Voice Channel</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">1.</span>
                  <span>Check if the bot has the "Connect" and "Speak" permissions in your server settings.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">2.</span>
                  <span>Verify that the voice channel isn't full or restricted by permissions.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">3.</span>
                  <span>Try disconnecting and reconnecting to the voice channel yourself.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">4.</span>
                  <span>If using a region-locked voice channel, ensure the bot supports that region.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zombie-gray/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-zombie-red mr-2" />
                <h3 className="text-xl font-medium">Music Won't Play</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">1.</span>
                  <span>Check if the URL or search term is valid and accessible.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">2.</span>
                  <span>Verify that the content isn't region-restricted or age-restricted.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">3.</span>
                  <span>Try using a direct YouTube link instead of a search term.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">4.</span>
                  <span>Check if the bot has been rate-limited by the music service.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zombie-gray/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-zombie-red mr-2" />
                <h3 className="text-xl font-medium">Audio Quality Issues</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">1.</span>
                  <span>Check your Discord audio subsystem settings (Standard/Legacy).</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">2.</span>
                  <span>Verify that your server region is optimal for your location.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">3.</span>
                  <span>Try adjusting the volume with the /music volume command.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">4.</span>
                  <span>Check if other users are experiencing the same issue.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zombie-gray/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-zombie-red mr-2" />
                <h3 className="text-xl font-medium">Command Permissions</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">1.</span>
                  <span>Verify that you have the required permissions for the command.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">2.</span>
                  <span>Check if you have the DJ role for restricted commands.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">3.</span>
                  <span>Ensure the bot has the "Use Application Commands" permission.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-zombie-red mr-2">4.</span>
                  <span>Ask a server administrator to check role configurations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Section */}
      <section id="documentation" className="py-16 bg-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              <span className="text-zombie-red">Documentation</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Comprehensive guides to help you get the most out of Zombie Music
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#" className="block bg-zombie-black rounded-lg p-6 hover:bg-zombie-gray/80 transition-colors duration-300">
              <h3 className="text-xl font-medium mb-2 flex items-center">
                Getting Started
                <ExternalLink className="h-4 w-4 ml-2" />
              </h3>
              <p className="text-gray-300">
                Learn how to add the bot to your server and basic setup instructions.
              </p>
            </a>
            
            <a href="#" className="block bg-zombie-black rounded-lg p-6 hover:bg-zombie-gray/80 transition-colors duration-300">
              <h3 className="text-xl font-medium mb-2 flex items-center">
                Command Reference
                <ExternalLink className="h-4 w-4 ml-2" />
              </h3>
              <p className="text-gray-300">
                Detailed explanation of all available commands and their options.
              </p>
            </a>
            
            <a href="#" className="block bg-zombie-black rounded-lg p-6 hover:bg-zombie-gray/80 transition-colors duration-300">
              <h3 className="text-xl font-medium mb-2 flex items-center">
                Permissions Guide
                <ExternalLink className="h-4 w-4 ml-2" />
              </h3>
              <p className="text-gray-300">
                How to set up roles and permissions for optimal bot usage.
              </p>
            </a>
            
            <a href="#" className="block bg-zombie-black rounded-lg p-6 hover:bg-zombie-gray/80 transition-colors duration-300">
              <h3 className="text-xl font-medium mb-2 flex items-center">
                Premium Features
                <ExternalLink className="h-4 w-4 ml-2" />
              </h3>
              <p className="text-gray-300">
                Explore the additional features available with premium subscription.
              </p>
            </a>
            
            <a href="#" className="block bg-zombie-black rounded-lg p-6 hover:bg-zombie-gray/80 transition-colors duration-300">
              <h3 className="text-xl font-medium mb-2 flex items-center">
                Audio Filters
                <ExternalLink className="h-4 w-4 ml-2" />
              </h3>
              <p className="text-gray-300">
                Learn how to use audio filters to customize your music experience.
              </p>
            </a>
            
            <a href="#" className="block bg-zombie-black rounded-lg p-6 hover:bg-zombie-gray/80 transition-colors duration-300">
              <h3 className="text-xl font-medium mb-2 flex items-center">
                Playlist Management
                <ExternalLink className="h-4 w-4 ml-2" />
              </h3>
              <p className="text-gray-300">
                How to create, save, and manage playlists for your server.
              </p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Contact <span className="text-zombie-red">Us</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Can't find what you're looking for? Send us a message and we'll get back to you.
            </p>
          </div>
          
          <div className="bg-zombie-gray/20 rounded-lg p-6 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;