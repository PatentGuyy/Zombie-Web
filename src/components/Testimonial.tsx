import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, avatarUrl }) => {
  return (
    <div className="bg-zombie-gray rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {avatarUrl ? (
            <img
              className="h-12 w-12 rounded-full"
              src={avatarUrl}
              alt={author}
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-zombie-red flex items-center justify-center text-white font-bold text-lg">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-medium text-white">{author}</h4>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{quote}"</p>
    </div>
  );
};

export default Testimonial;