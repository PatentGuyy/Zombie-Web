import React from 'react';
import { motion } from 'framer-motion';
import CommandTable from '../components/CommandTable';
import Button from '../components/Button';

const Commands: React.FC = () => {
  const commands = [
    {
      name: "/music play",
      description: "Plays a song or adds it to the queue. Supports YouTube, Spotify, SoundCloud, and more.",
      usage: "/music play [song name or URL]",
      permissions: "Everyone"
    },
    {
      name: "/music pause",
      description: "Pauses the currently playing track.",
      usage: "/music pause",
      permissions: "Everyone"
    },
    {
      name: "/music resume",
      description: "Resumes a paused track.",
      usage: "/music resume",
      permissions: "Everyone"
    },
    {
      name: "/music stop",
      description: "Stops playback and clears the queue.",
      usage: "/music stop",
      permissions: "DJ Role or Server Moderator"
    },
    {
      name: "/music skip",
      description: "Skips to the next song in the queue.",
      usage: "/music skip",
      permissions: "Everyone"
    },
    {
      name: "/music playing",
      description: "Shows information about the current track including title, artist, duration, and requester.",
      usage: "/music playing",
      permissions: "Everyone"
    },
    {
      name: "/music queue",
      description: "Displays the current music queue with pagination support.",
      usage: "/music queue [page number]",
      permissions: "Everyone"
    },
    {
      name: "/music clear",
      description: "Clears all songs from the current queue.",
      usage: "/music clear",
      permissions: "DJ Role or Server Moderator"
    },
    {
      name: "/music remove",
      description: "Removes a specific song from the queue by position number.",
      usage: "/music remove [position]",
      permissions: "DJ Role or Server Moderator"
    },
    {
      name: "/music loop",
      description: "Toggles loop mode for current song or entire queue.",
      usage: "/music loop [song/queue/off]",
      permissions: "Everyone"
    },
    {
      name: "/music shuffle",
      description: "Randomizes the order of songs in the queue.",
      usage: "/music shuffle",
      permissions: "Everyone"
    },
    {
      name: "/music volume",
      description: "Adjusts the playback volume (1-100).",
      usage: "/music volume [level]",
      permissions: "DJ Role or Server Moderator"
    },
    {
      name: "/music seek",
      description: "Jumps to a specific timestamp in the current song.",
      usage: "/music seek [time in seconds or MM:SS format]",
      permissions: "Everyone"
    },
    {
      name: "/music lyrics",
      description: "Displays lyrics for the current song if available.",
      usage: "/music lyrics",
      permissions: "Everyone"
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
              Bot <span className="text-zombie-red">Commands</span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              All the commands you need to control Zombie Music in your Discord server
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Commands Table Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zombie-gray/20 rounded-lg p-6 md:p-8 shadow-lg">
            <CommandTable commands={commands} />
          </div>
          
          <div className="mt-12 bg-zombie-gray/20 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">Command Usage Tips</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-zombie-red mb-2">Basic Usage</h3>
                <p className="text-gray-300">
                  All Zombie Music commands use the <code className="bg-zombie-gray px-2 py-1 rounded text-white">/music</code> prefix followed by the specific command. This makes them easy to remember and use.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-zombie-red mb-2">Playing Music</h3>
                <p className="text-gray-300 mb-3">
                  The play command is versatile and supports multiple formats:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Search terms: <code className="bg-zombie-gray px-2 py-1 rounded text-white">/music play despacito</code></li>
                  <li>Direct URLs: <code className="bg-zombie-gray px-2 py-1 rounded text-white">/music play https://www.youtube.com/watch?v=dQw4w9WgXcQ</code></li>
                  <li>Playlists: <code className="bg-zombie-gray px-2 py-1 rounded text-white">/music play https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M</code></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-zombie-red mb-2">Queue Management</h3>
                <p className="text-gray-300">
                  Use the queue command to view upcoming songs, clear to empty the queue, and remove to take out specific songs by their position number in the queue.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-zombie-red mb-2">Permissions</h3>
                <p className="text-gray-300">
                  Some commands require the DJ role or moderator permissions. Server administrators can configure which roles have access to these commands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Examples Section */}
      <section className="py-16 bg-zombie-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-center">
            Command <span className="text-zombie-red">Examples</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zombie-black rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-medium text-zombie-red mb-4">Creating a Music Session</h3>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-gray-300"><span className="text-zombie-red">&gt;</span> /music play lofi hip hop mix</p>
                <p className="text-gray-400 ml-4">🎵 Added "Lofi Hip Hop Mix - Beats to Relax/Study to" to the queue</p>
                <p className="text-gray-300"><span className="text-zombie-red">&gt;</span> /music volume 80</p>
                <p className="text-gray-400 ml-4">🔊 Volume set to 80%</p>
                <p className="text-gray-300"><span className="text-zombie-red">&gt;</span> /music queue</p>
                <p className="text-gray-400 ml-4">📋 Queue (1 song):<br />1. Lofi Hip Hop Mix - Beats to Relax/Study to (3:45:21)</p>
              </div>
            </div>
            
            <div className="bg-zombie-black rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-medium text-zombie-red mb-4">Managing Playback</h3>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-gray-300"><span className="text-zombie-red">&gt;</span> /music playing</p>
                <p className="text-gray-400 ml-4">🎵 Now playing: "Radiohead - Creep" (3:56)<br />Requested by: ZombieFan#1234<br />Progress: ▰▰▰▰▱▱▱▱▱▱ 1:45/3:56</p>
                <p className="text-gray-300"><span className="text-zombie-red">&gt;</span> /music seek 2:30</p>
                <p className="text-gray-400 ml-4">⏩ Seeked to 2:30</p>
                <p className="text-gray-300"><span className="text-zombie-red">&gt;</span> /music pause</p>
                <p className="text-gray-400 ml-4">⏸️ Playback paused</p>
                <p className="text-gray-300"><span className="text-zombie-red">&gt;</span> /music resume</p>
                <p className="text-gray-400 ml-4">▶️ Playback resumed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-zombie-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to Start <span className="text-zombie-red">Playing</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Add Zombie Music to your Discord server and start using these commands today.
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

export default Commands;