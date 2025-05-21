import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      {/* Capa oscura encima de la imagen para mejorar contraste */}
      <div className="absolute inset-0 bg-[#1A237E] opacity-60 z-[-1]" />

      {/* Círculos decorativos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 rounded-full bg-[#FF6B2B] opacity-10 top-0 right-0 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute w-80 h-80 rounded-full bg-[#03A9F4] opacity-10 bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="inline-flex items-center gap-2 bg-[#FF6B2B] hover:bg-orange-600 px-6 py-3 rounded-md text-white font-semibold transition-all group"
            >
              {buttonText}
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
