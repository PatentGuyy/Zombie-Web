import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-zombie-gray rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zombie-red/20">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zombie-red/20 text-zombie-red mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;