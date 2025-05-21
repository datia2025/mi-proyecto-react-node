import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';
import Hero from '../components/Hero'; // Asumo que la ruta es correcta
import SectionHeader from '../components/SectionHeader'; // Asumo que la ruta es correcta

// IMPORTA LAS IMÁGENES LOCALES
import lorenaOsorioImage from '../assets/lore.png'; // Ajusta esta ruta si es necesario
import fernandoGutierrezImage from '../assets/fer.png'; 

const AboutPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Nosotros"
        subtitle="Personas potenciando personas con automatización e inteligencia artificial."
        imageUrl="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF6B2B]">
              <div className="mb-4">
                <Target size={40} className="text-[#FF6B2B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A237E] mb-4">Nuestra Misión</h3>
              <p className="text-gray-600">
                Transformar la forma en que las empresas trabajan, utilizando la automatización 
                y la inteligencia artificial para eliminar tareas repetitivas y permitir que las 
                personas se enfoquen en lo que realmente importa: crear, innovar y generar valor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#03A9F4]">
              <div className="mb-4">
                <Zap size={40} className="text-[#03A9F4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A237E] mb-4">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser líderes en la creación de soluciones inteligentes que potencien el 
                trabajo humano, generando un impacto positivo en las organizaciones y 
                en la sociedad a través de la tecnología aplicada con propósito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nuestra Historia"
            subtitle="El camino que nos ha traído hasta aquí"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Desde el año 2023, nos hemos dedicado al mundo de la inteligencia artificial, acumulando miles de horas de entrenamiento y desarrollo. 
                En 2025, decidimos fundar nuestra propia empresa, con la misión de transformar la vida de las personas, permitiéndoles alcanzar su
                máximo potencial a través de la IA. 
              </p>
              <p className="text-gray-700 mb-6">
                Nuestro objetivo es que la gente vea la IA no como algo lejano o inalcanzable, sino como una 
                herramienta que les puede dar superpoderes, mejorando su calidad de vida y abriendo un mundo de posibilidades.
              </p>
              <p className="text-gray-700">
                Datia no es sólo una empresa tecnológica, es un compromiso profundo con el empoderamiento humano, derribando 
                la barrera de lo complejo para revelar el potencial transformador de la IA en cada individuo.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Historia de Datia" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nuestros Valores"
            subtitle="Los principios que guían nuestro trabajo"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B2B] bg-opacity-10 mb-6">
                <Award size={32} className="text-[#FF6B2B]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Excelencia</h3>
              <p className="text-gray-600">
                Nos comprometemos con la calidad en todo lo que hacemos, 
                superando expectativas y buscando la mejora continua.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#03A9F4] bg-opacity-10 mb-6">
                <Users size={32} className="text-[#03A9F4]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Colaboración</h3>
              <p className="text-gray-600">
                Creemos en el poder del trabajo en equipo y en construir 
                relaciones sólidas con nuestros clientes y socios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A237E] bg-opacity-10 mb-6">
                <Zap size={32} className="text-[#1A237E]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Innovación</h3>
              <p className="text-gray-600">
                Exploramos constantemente nuevas ideas y tecnologías para 
                crear soluciones que marquen la diferencia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#607D8B] bg-opacity-10 mb-6">
                <Target size={32} className="text-[#607D8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Impacto</h3>
              <p className="text-gray-600">
                Medimos nuestro éxito por el valor que generamos y la 
                diferencia positiva que hacemos en cada organización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nuestro Equipo"
            subtitle="Las mentes brillantes detrás de Datia"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Team Member 1 - Fernando Gutiérrez */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative overflow-hidden">
                <img 
                  src={fernandoGutierrezImage} 
                  alt="CEO Fernando Gutiérrez" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A237E]">Fernando Gutiérrez</h3>
                <p className="text-[#FF6B2B] font-medium mb-3">CEO & Fundador</p>
                <p className="text-gray-600">
                  Visionario tecnológico con más de 15 años de experiencia 
                  en transformación digital. Experto en IA y automatización.
                </p>
              </div>
            </div>

            {/* Team Member 2 - Lorena Osorio */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative overflow-hidden">
                <img 
                  src={lorenaOsorioImage} 
                  alt="CTO Lorena Osorio"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A237E]">Lorena Osorio</h3>
                <p className="text-[#FF6B2B] font-medium mb-3">CTO</p>
                <p className="text-gray-600">
                  Experta en gestión de talento, staffing y administración de recursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;