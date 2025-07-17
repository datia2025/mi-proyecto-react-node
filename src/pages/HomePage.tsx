import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  BarChart2, 
  Users, 
  MessageSquare, 
  Settings, 
  FileCode,
  ChevronRight
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard'; // Asumimos que este ya está modificado para no usar imageUrl

// ✅ Importar imagen local
import peopleImage from '../assets/people.png';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Redescubre el trabajo con tecnologías que trabajan para tí"
        subtitle="Conectamos personas con el poder de la automatización y la inteligencia artificial para transformar la forma en que trabajas."
        buttonText="Descubre cómo"
        buttonLink="#servicios"
        imageUrl={peopleImage} // ✅ Imagen local usada aquí
      />



      {/* About Brief Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
                Redefiniendo el trabajo para mejorar la calidad de vida de las personas
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                En Datia, creemos en el poder de la tecnología para amplificar el potencial humano. 
                Nuestras soluciones inteligentes están diseñadas para eliminar tareas repetitivas, 
                proporcionar información valiosa y permitir que las personas se enfoquen en lo que realmente importa.
              </p>
              <Link 
                to="/nosotros" 
                className="btn btn-outline group"
              >
                Conoce más sobre nosotros
                <ArrowRight 
                  size={20} 
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipo Datia" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Soluciones Inteligentes"
            subtitle="Lo que haces, pero con menos esfuerzo y más impacto."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Talento Humano Reinventado"
              description="Transforma tu gestión de personal con soluciones de IA que optimizan compensaciones, desarrollo, evaluaciones y bienestar laboral."
              icon={<Users size={28} />}
              link="/soluciones/talento-humano"
            />
            <ServiceCard
              title="Finanzas Reinventadas"
              description="Optimiza tus procesos financieros con automatización inteligente para conciliaciones, análisis de KPIs y balances en tiempo real."
              icon={<BarChart2 size={28} />}
              link="/soluciones/finanzas"
            />
            <ServiceCard
              title="Operaciones que Fluyen"
              description="Mejora la eficiencia operativa con sistemas inteligentes para órdenes de trabajo, control de inventario y procesos de producción."
              icon={<Settings size={28} />}
              link="/soluciones/operaciones"
            />
            <ServiceCard
              title="NextGen Marketing"
              description="Potencia tus estrategias de marketing con segmentación dinámica de audiencias, personalización automatizada y medición de impacto."
              icon={<Brain size={28} />}
              link="/soluciones/marketing"
            />
            <ServiceCard
              title="Conversaciones con Chatbots"
              description="Implementa asistentes virtuales inteligentes para atención constante, diálogos personalizados e integración con CRM."
              icon={<MessageSquare size={28} />}
              link="/soluciones/chatbots"
            />
            <ServiceCard
              title="Apps Web al Instante"
              description="Desarrolla herramientas digitales a medida y paneles inteligentes que se adaptan a las necesidades específicas de tu negocio."
              icon={<FileCode size={28} />}
              link="/soluciones/apps-web"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/soluciones" className="btn btn-primary group">
              Ver todas nuestras soluciones
              <ArrowRight 
                size={20} 
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
                Aprender con IA: Domina el futuro. Hoy.
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Descubre cómo la inteligencia artificial está transformando el entorno laboral y 
                cómo puedes aprovecharla para impulsar tu desarrollo profesional.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <ChevronRight size={20} className="text-[#FF6B2B]" />
                  <p className="ml-2">El poder de la IA y su impacto en tu vida profesional</p>
                </div>
                <div className="flex items-center">
                  <ChevronRight size={20} className="text-[#FF6B2B]" />
                  <p className="ml-2">Habilidades digitales clave para el futuro</p>
                </div>
                <div className="flex items-center">
                  <ChevronRight size={20} className="text-[#FF6B2B]" />
                  <p className="ml-2">IA práctica: aplica lo aprendido en tu entorno laboral</p>
                </div>
              </div>
              
              <Link 
                to="/aprender-con-ia" 
                className="btn btn-outline group"
              >
                Comenzar a aprender
                <ArrowRight 
                  size={20} 
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Aprendizaje con IA" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#283A80]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Historias de Transformación"
            subtitle="Testimonios reales. Cambios duraderos."
            color="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <TestimonialCard
              name="Juan Ricardo Navas"
              position="Gerente General"
              company="Crea Finanzas Inteligentes"
              testimonial="Las soluciones de automatización de Datia han revolucionado la manera en que gestionamos nuestras proyecciones financieras y pensionales. Lo que antes nos tomaba horas de cálculos y ajustes manuales, ahora se realiza en cuestión de minutos, permitiéndonos tomar decisiones estratégicas con mayor rapidez y precisión."
              // imageUrl prop eliminada
            />
            <TestimonialCard
              name="José Luis Rodríguez"
              position="CFO"
              company="Club Social"
              testimonial="Gracias a la mentoría en inteligencia artificial y el diseño de dashboards, hemos optimizado nuestros procesos financieros, reduciendo tiempos y mejorando la comunicación de resultados. La presentación visual y estructurada de la información ha facilitado el análisis y la toma de decisiones estratégicas, asegurando una mejor comprensión y alineación dentro del equipo y la alta dirección."
              // imageUrl prop eliminada
            />
            
          </div>
          
          <div className="text-center mt-12">
            <Link to="/historias" className="btn btn-primary group">
              Ver más historias
              <ArrowRight 
                size={20} 
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
            ¿Listo para trabajar con más inteligencia?
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo nuestras soluciones inteligentes pueden 
            transformar tu forma de trabajar y potenciar los resultados de tu negocio.
          </p>
          <Link to="/contacto" className="btn btn-primary group">
            Hablemos
            <ArrowRight 
              size={20} 
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;