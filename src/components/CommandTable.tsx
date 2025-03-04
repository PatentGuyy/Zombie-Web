import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Command {
  name: string;
  description: string;
  usage: string;
  permissions: string;
}

interface CommandTableProps {
  commands: Command[];
}

const CommandTable: React.FC<CommandTableProps> = ({ commands }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCommands = commands.filter(command => 
    command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    command.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="w-full">
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search commands..."
          className="pl-10 pr-4 py-2 w-full bg-zombie-gray text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zombie-red"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zombie-gray">
          <thead className="bg-zombie-gray/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Command
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Usage
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Permissions
              </th>
            </tr>
          </thead>
          <tbody className="bg-zombie-black divide-y divide-zombie-gray">
            {filteredCommands.map((command, index) => (
              <tr key={index} className="hover:bg-zombie-gray/20">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zombie-red">
                  {command.name}
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">
                  {command.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">
                  {command.usage}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {command.permissions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredCommands.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No commands found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommandTable;