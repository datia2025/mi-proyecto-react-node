import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  testimonial,
  rating = 5,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col relative">
      {/* Sección de Rating (Estrellas) */}
      <div className="absolute top-4 right-4 flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="text-[#FF6B2B] fill-current" />
        ))}
      </div>
      
      {/* Información de la Persona (Nombre, Posición, Compañía) */}
      <div className="mb-4 pt-2"> {/* ESTA SECCIÓN ES LA IMPORTANTE */}
        <h4 className="font-semibold text-lg text-[#1A237E]">{name}</h4>
        <p className="text-gray-600 text-sm">{position}, {company}</p>
      </div>
      
      {/* Testimonio */}
      <div className="flex-grow">
        <p className="text-gray-700 italic">"{testimonial}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;