import React from 'react';
import { Link } from 'react-router-dom';
// Importa los iconos necesarios de lucide-react
import { 
  Brain, 
  MessageCircle, 
  ClipboardCheck, 
  Image as ImageIcon, // Renombrado para evitar conflicto con el tag <Image> si se usa
  Film, 
  Briefcase, 
  ArrowRight
} from 'lucide-react';

// Asume que la imagen está en src/assets/women.png
// Ajusta la ruta según la estructura de tu proyecto
import heroLearnImage from '../assets/women.png';

// --- Interfaz y Componente ServiceCard (Reutilizado de SolutionsPage.tsx) ---
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
    title: "1. Fundamentos y el Impacto de la Inteligencia Artificial",
    description: "Explora los conceptos básicos de la IA y cómo transforma el mundo laboral, abordando también sus riesgos y desafíos.",
    icon: <Brain size={32} />,
    link: "/contacto",
    keyPoints: ["Introducción a la Inteligencia Artificial", "¿Las máquinas pueden pensar?", "Cómo afecta la IA a tu trabajo", "Los peligros de la IA e Impacto mundial"],
    bulletColor: "text-[#FF6B2B]", // Naranja
  },
  {
    title: "2. Dominando los Modelos de Lenguaje y Chatbots",
    description: "Enfocado en el uso práctico de herramientas de texto como ChatGPT y sus competidores, incluyendo técnicas de interacción avanzada.",
    icon: <MessageCircle size={32} />,
    link: "/contacto",
    keyPoints: ["ChatGPT: Uso profesional, Ejemplos y Opciones avanzadas", "El Prompting y Prompt Engineering", "Los GPTs, Acciones de GPT y Creación de GPTs propios", "Alternativas a ChatGPT: Gemini, Copilot, Claude, Grok"],
    bulletColor: "text-[#03A9F4]", // Azul
  },
  {
    title: "3. Inteligencia Artificial Aplicada a la Ofimática",
    description: "Aprende a integrar la IA en tus herramientas de productividad diaria para optimizar tareas de oficina.",
    icon: <ClipboardCheck size={32} />,
    link: "/contacto",
    keyPoints: ["Copilot en Microsoft Word, Excel y Powerpoint", "Copilot en Microsoft Outlook, Bing y One drive", "Gemini en Google sheets y Google Slides", "Gemini en Google Gmail y Google Drive"],
    bulletColor: "text-green-500", // Verde
  },
  {
    title: "4. Generación de Imágenes con Inteligencia Artificial",
    description: "Aprende a crear contenido visual potente utilizando las principales herramientas y técnicas de IA generativa.",
    icon: <ImageIcon size={32} />,
    link: "/contacto",
    keyPoints: ["Introducción a la IA generativa de imágenes", "MidJourney: Creación de imágenes, Parámetros y Ejemplos", "Generación de imágenes con DALL-E3", "Stable Diffusion: Introducción, Modelos, Uso y Flujo de trabajo"],
    bulletColor: "text-purple-500", // Púrpura
  },
  {
    title: "5. Generación de Video y Otros Medios con IA",
    description: "Descubre cómo la IA está revolucionando la creación de video, audio y otros formatos multimedia.",
    icon: <Film size={32} />,
    link: "/contacto",
    keyPoints: ["Introducción a la generación de video con IA", "Herramientas de generación de video: Runway y Pika", "Herramientas de Voz: Creación, Doblaje y ElevenLabs", "Los avatares digitales y Música con IA"],
    bulletColor: "text-teal-500", // Turquesa
  },
  {
    title: "6. Formación en IA Aplicada a Procesos de Negocio",
    description: "Capacitación personalizada para empresas que buscan integrar inteligencia artificial en sus operaciones y estrategia empresarial.",
    icon: <Briefcase size={32} />,
    link: "/contacto",
    keyPoints: [
      "Optimización Operativa: IA para mejorar eficiencia en logística, producción y administración.", 
      "Gestión Inteligente de Clientes: Análisis de datos y estrategias de fidelización con IA.", 
      "Toma de Decisiones Basada en Datos: Aplicación de modelos predictivos en gestión financiera, riesgos y planificación empresarial"
    ],
    bulletColor: "text-indigo-500", // Índigo
  },
];

// --- Componente LearnPage ---
const LearnPage: React.FC = () => {
  return (
    <div className="bg-white"> {/* Fondo general de la página */}

      {/* SECCIÓN HERO PARA LEARN PAGE */}
      <section className="relative text-white min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background con overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A237E] opacity-60 z-10"></div>
          <img
            src={heroLearnImage} // Imagen importada 'women.png'
            alt="Aprender Inteligencia Artificial"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido del Hero */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Impulsa tu Conocimiento en Inteligencia Artificial
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Explora nuestros módulos de formación diseñados para llevarte desde los fundamentos hasta la aplicación experta de la IA.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTENIDO CON LAS TARJETAS DE MÓDULOS */}
      <section id="modulos-curso" className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModulesData.map((module, index) => (
              <ServiceCard
                key={index} // Considera usar un ID único si tus módulos lo tienen
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
              to="/contacto"
              className="inline-block bg-[#FF6B2B] text-white font-semibold py-3 px-8 rounded-lg 
                         hover:bg-orange-600 transition-colors duration-300 group text-lg
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B] focus:ring-offset-[#ECEFF1]"
            >
              Solicita Más Información
              <ArrowRight 
                size={20} 
                className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnPage;