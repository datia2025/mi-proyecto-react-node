import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <div className="card group h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="p-4 rounded-full bg-[#FF6B2B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 text-[#FF6B2B] group-hover:bg-[#FF6B2B] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#1A237E]">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="flex items-center font-medium text-[#FF6B2B] group-hover:text-[#1A237E] transition-colors duration-300"
        >
          Conocer más
          <ArrowRight 
            size={18} 
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;