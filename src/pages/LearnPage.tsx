import React from 'react';
import { Link } from 'react-router-dom';
// Importa los iconos necesarios de lucide-react (he añadido los que faltaban)
import {
  Brain,
  MessageCircle,
  ClipboardCheck,
  Image as ImageIcon,
  ArrowRight,
  Award,
  Users,
  Zap,
  Target
} from 'lucide-react';

// Asume que la imagen está en src/assets/women.png
// Ajusta la ruta según la estructura de tu proyecto
import heroLearnImage from '../assets/women.png';

// --- Interfaz y Componente ServiceCard ---
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  keyPoints?: string[];
  bulletColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, keyPoints, bulletColor = 'text-[#FF6B2B]' }) => {
  return (
    <Link
      to={link}
      className="block group transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B]"
    >
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        <div
          className="w-16 h-16 rounded-lg bg-[#FF6B2B] bg-opacity-10 flex items-center justify-center mb-6
                     text-[#FF6B2B] group-hover:bg-[#FF6B2B] group-hover:text-white transition-colors duration-300"
        >
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-[#1A237E] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 text-base">{description}</p>
        {keyPoints && keyPoints.length > 0 && (
          <ul className="space-y-2 mb-6 text-gray-600 text-sm list-none pl-0">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className={`${bulletColor} font-bold mr-2`}>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        <div className={`mt-auto ${keyPoints && keyPoints.length > 0 ? '' : 'pt-2'}`}>
          <span className="inline-flex items-center text-[#FF6B2B] font-medium group-hover:text-orange-700 transition-colors">
            Conocer más
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

// --- Datos para los Módulos del Curso ---
const courseModulesData = [
  {
    title: "1. IA en Reclutamiento y Selección",
    description: "Con IA, transformamos el reclutamiento en una experiencia más eficiente y profundamente efectiva.",
    icon: <Brain size={32} />,
    link: "/contacto",
    keyPoints: ["Redacción de vacantes optimizadas con IA", "Comparación automatizada de candidatos usando GPTs personalizados", "Técnicas de Employer Branding impulsadas por IA", "Diseño de aplicaciones web para reportes de candidatos"],
    bulletColor: "text-[#FF6B2B]", // Naranja
  },
  {
    title: "2. IA aplicada a procesos de capacitación empresarial",
    description: " Mejora tus planes de formación hoy: Deja que la IA te muestre dónde y cómo avanzar.",
    icon: <MessageCircle size={32} />,
    link: "/contacto",
    keyPoints: ["Diagnóstico de necesidades formativas a partir del análisis de múltiples fuentes", "Identificación de brechas en competencias clave con apoyo de IA para el cruce de datos", "Desarrollo instantáneo de planes por puesto con trazabilidad entre funciones y competencias.", "Construcción de reportes web para el plan de formación", "Creación de contenido con plataformas de IA gratuitas",],
    bulletColor: "text-[#03A9F4]", // Azul
  },
  {
    title: "3. IA Aplicada al desempeño organizacional",
    description: "Mejora el desempeño de tus equipo con IA y convierte los datos en decisiones que impulsan el crecimiento.",
    icon: <ClipboardCheck size={32} />,
    link: "/contacto",
    keyPoints: ["Análisis avanzado de datos (KPIs, 360°, clima) impulsados con IA", "Evaluación de pruebas de personalidad y creación de planes de desarrollo", "Uso de plataformas IA para mejorar informes y presentaciones de feedback.", "Construcción de prompts para sesiones coaching y de retrolimentación del desempeño."],
    bulletColor: "text-green-500", // Verde
  },
{
  title: "4. Eficiencia Organizacional Inteligente con IA",
  description: "Analiza tu estructura, procesos y talento con el poder de la inteligencia artificial para eliminar ineficiencias y potenciar el crecimiento.",
  icon: <ImageIcon size={32} />,
  link: "/contacto",
  keyPoints: [
    "Diagnóstico Organizacional y evaluación integral de jerarquías, flujos de decisión y claridad de roles",
    "Encuesta de Efectividad que detecta fortalezas y oportunidades de mejora en las funciones de las áreas",
    "Análisis de Duplicidades para identificar redundancias y tareas de bajo valor",
    "Mapa de Capacidades Críticas que identifica competencias clave, roles y equipos estratégicos"
  ],
  bulletColor: "text-purple-500", // Púrpura
},
];


// --- Componente SectionHeader (AÑADIDO PARA QUE EL CÓDIGO FUNCIONE) ---
const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-3">{title}</h2>
    <p className="text-lg text-gray-600">{subtitle}</p>
  </div>
);


// --- Componente LearnPage ---
const LearnPage: React.FC = () => {
  return (
    // El div principal que envuelve todo el componente
    <div className="bg-white">

      {/* SECCIÓN HERO PARA LEARN PAGE */}
      <section className="relative text-white min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A237E] opacity-60 z-10"></div>
          <img
            src={heroLearnImage}
            alt="Aprender Inteligencia Artificial"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lidera el futuro del talento con Inteligencia Artificial aplicada
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Aprende a dominar la IA para que tu perfil sea irresistible en el mercado laboral actual y futuro. Estas habilidades ya están marcando la diferencia entre quién es promovido... y quién es reemplazado.
            </p>
          </div>
        </div>
      </section>

      {/* <<< NUEVA SECCIÓN 'PERFIL DEL ESTUDIANTE' CON VIÑETAS >>> */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
                Este curso es ideal para:
              </h2>
              <ul className="space-y-3 list-none pl-0 mb-8 text-gray-600 text-lg">
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span>
                  <span>Profesionales de Recursos Humanos que buscan integrar IA en sus procesos clave.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span>
                  <span>Consultores internos y business partners que necesitan optimizar la toma de decisiones.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span>
                  <span>Equipos de formación, selección o desarrollo que quieren automatizar tareas repetitivas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span>
                  <span>Líderes de talento humano que desean aportar mayor valor estratégico.</span>
                </li>
              </ul>
              <Link
                to="/Contacto"
                className="inline-flex items-center px-6 py-3 font-semibold text-[#FF6B2B] border-2 border-[#FF6B2B] rounded-lg hover:bg-[#FF6B2B] hover:text-white transition-colors duration-300 group"
              >
                Reserva tu cupo ahora
                <ArrowRight
                  size={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6937871/pexels-photo-6937871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Equipo Datia"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTENIDO CON LAS TARJETAS DE MÓDULOS */}
      <section id="modulos-curso" className="pt-8 pb-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModulesData.map((module, index) => (
              <ServiceCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                link={module.link}
                keyPoints={module.keyPoints}
                bulletColor={module.bulletColor}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="https://cal.com/datia"
              className="inline-block bg-[#FF6B2B] text-white font-semibold py-3 px-8 rounded-lg
                         hover:bg-orange-600 transition-colors duration-300 group text-lg
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B] focus:ring-offset-[#ECEFF1]"
            >
              ¿Tienes dudas? Agenda una cita
              <ArrowRight
                size={20}
                className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section (MOVIDA AQUÍ, AL FINAL, DENTRO DEL COMPONENTE) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Qué obtienes"
            subtitle="Porque el futuro del trabajo no espera... y tu mereces estar un paso adelante."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B2B] bg-opacity-10 mb-6">
                <Award size={32} className="text-[#FF6B2B]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Proyección</h3>
              <p className="text-gray-600">
                Incrementa tu valor profesional con habilidades en IA aplicadas a la gestión del talento
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#03A9F4] bg-opacity-10 mb-6">
                <Users size={32} className="text-[#03A9F4]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Eficiencia</h3>
              <p className="text-gray-600">
                Automatiza tareas clave en selección, formación y gestión del desempeño
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A237E] bg-opacity-10 mb-6">
                <Zap size={32} className="text-[#1A237E]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Influencia</h3>
              <p className="text-gray-600">
                Entrega reportes ejecutivos potenciados con IA con un enfoque visual y estratégico que elevan tu rol
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#607D8B] bg-opacity-10 mb-6">
                <Target size={32} className="text-[#607D8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Impacto</h3>
              <p className="text-gray-600">
                Utiliza IA para alinear perfiles, vacantes y decisiones de talento con los objetivos del negocio
              </p>
            </div>
          </div>
        </div>
      </section>

    </div> // Cierre del div principal
  );
};

export default LearnPage;