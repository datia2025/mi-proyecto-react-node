import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader'; // Asumiendo que ya no lo necesitamos aquí o se reemplaza
import { 
  Users, 
  BarChart2, 
  Settings, 
  Brain, 
  MessageSquare, 
  FileCode, 
  ArrowRight,
  List 
} from 'lucide-react';

// --- Interfaz y Componente ServiceCard (sin cambios) ---
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

// --- Datos para los ServiceCards y la navegación (sin cambios) ---
const servicesData = [
  {
    title: "Talento Humano Reinventado",
    description: "Transforma tu gestión de personal con soluciones de IA que optimizan compensaciones, desarrollo, evaluaciones y bienestar laboral.",
    icon: <Users size={32} />,
    link: "/soluciones/talento-humano",
    keyPoints: ["Compensaciones con lógica inteligente.", "Desarrollo guiado por datos.", "Evaluaciones objetivas y continuas.", "Bienestar medido para una cultura cuidada."],
    bulletColor: "text-[#FF6B2B]",
    navLabel: "Talento Humano",
  },
  {
    title: "Finanzas Reinventadas",
    description: "Optimiza tus procesos financieros con automatización inteligente para conciliaciones, análisis de KPIs y balances en tiempo real.",
    icon: <BarChart2 size={32} />,
    link: "/soluciones/finanzas",
    keyPoints: ["Conciliaciones bancarias automatizadas.", "KPIs en tiempo real y en contexto.", "Inteligencia en tus balances financieros.", "Aplicaciones web financieras al instante."],
    bulletColor: "text-[#03A9F4]",
    navLabel: "Finanzas",
  },
  {
    title: "Operaciones que Fluyen",
    description: "Mejora la eficiencia operativa con sistemas inteligentes para órdenes de trabajo, control de inventario y procesos de producción.",
    icon: <Settings size={32} />,
    link: "/soluciones/operaciones",
    keyPoints: ["Gestión inteligente de órdenes de trabajo.", "Automatización de tareas repetitivas en planta.", "Reasignar talento humano a funciones estratégicas.", "Procesar grandes volúmenes de solicitudes sin demoras."],
    bulletColor: "text-green-500",
    navLabel: "Operaciones",
  },
  {
    title: "Smart Marketing",
    description: "Potencia tus estrategias de marketing con segmentación dinámica de audiencias, personalización automatizada y medición de impacto.",
    icon: <Brain size={32} />,
    link: "/soluciones/marketing",
    keyPoints: ["Segmentación avanzada de audiencias.", "Personalización de campañas a escala.", "Optimización de la inversión publicitaria.", "Análisis de sentimiento y tendencias."],
    bulletColor: "text-purple-500",
    navLabel: "Marketing",
  },
  {
    title: "Conversaciones con Chatbots",
    description: "Implementa asistentes virtuales inteligentes para atención constante, diálogos personalizados e integración con CRM.",
    icon: <MessageSquare size={32} />,
    link: "/soluciones/chatbots",
    keyPoints: ["Atención al cliente 24/7 automatizada.", "Generación y cualificación de leads.", "Integración nativa con CRM y sistemas.", "Análisis de interacciones para mejora continua."],
    bulletColor: "text-teal-500",
    navLabel: "Chatbots",
  },
  {
    title: "Apps Web al Instante",
    description: "Desarrolla herramientas digitales a medida y paneles inteligentes que se adaptan a las necesidades específicas de tu negocio.",
    icon: <FileCode size={32} />,
    link: "/soluciones/apps-web",
    keyPoints: ["Desarrollo rápido sin código (No-Code/Low-Code).", "Automatización de flujos de trabajo internos.", "Creación de portales para clientes/proveedores.", "Paneles de control (dashboards) personalizados."],
    bulletColor: "text-indigo-500",
    navLabel: "Apps Web",
  },
];

// --- Componente SolutionsPage ---
const SolutionsPage: React.FC = () => {
  const location = useLocation();
  const baseSolutionsPath = "/soluciones"; 

  // URL de imagen para el Hero de esta página. ¡Cámbiala por una adecuada para Datia!
  const heroImageUrl = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Ejemplo: equipo trabajando

  return (
    <div className="bg-white"> {/* Fondo general de la página */}

        {/* NUEVA SECCIÓN HERO PARA SOLUTIONS PAGE */}
              <section className="relative text-white min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden"> {/* <-- CLASES AJUSTADAS */}
                {/* Background con overlay (la opacidad la ajustas aquí como prefieras, ej. opacity-60 como en tu Hero.tsx original) */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-[#1A237E] opacity-60 z-10"></div> {/* Usando opacity-60 como en tu Hero.tsx */}
                  <img
                    src={heroImageUrl} // Asegúrate que esta variable esté definida con la URL de tu imagen para este Hero
                    alt="Soluciones Datia"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido del Hero */}
                {/* El div 'container' ya maneja el ancho y el padding. */}
                {/* 'max-w-3xl mx-auto' ya centra el bloque de texto horizontalmente. */}
                {/* 'text-center' en el section padre ya centra el texto. */}
                {/* 'flex flex-col justify-center items-center' en el section padre centra verticalmente todo el bloque. */}
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl mx-auto"> {/* Aseguramos el centrado horizontal del bloque de texto */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      Soluciones Inteligentes para tu Negocio
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200"> {/* Ajusta el color si es necesario, text-gray-200 o text-white */}
                      Descubre cómo la automatización y la inteligencia artificial pueden transformar 
                      tus procesos, potenciar a tu equipo e impulsar el crecimiento.
                    </p>
                    {/* ... botones opcionales si los necesitas ... */}
                  </div>
                </div>
                
                {/* Círculos decorativos opcionales (si quieres replicar el estilo del Hero de la homepage) */}
                {/* <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute w-96 h-96 rounded-full bg-[#FF6B2B] opacity-10 top-0 right-0 transform translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute w-80 h-80 rounded-full bg-[#03A9F4] opacity-10 bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3" />
                </div> */}
              </section>

      {/* NAVEGACIÓN POR PESTAÑAS/BOTONES DE SOLUCIONES */}
      <section className="py-6 bg-white border-b border-gray-200 shadow-sm"> 
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-4">
            <Link
              to={baseSolutionsPath}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out flex items-center gap-2
                ${ location.pathname === baseSolutionsPath || !servicesData.some(s => location.pathname.startsWith(s.link))
                  ? 'bg-[#1A237E] text-white hover:bg-indigo-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
            >
              <List size={16} />
              Todas las Soluciones
            </Link>
            {servicesData.map((service) => (
              <Link
                key={service.navLabel}
                to={service.link}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                  ${ location.pathname.startsWith(service.link)
                    ? 'bg-[#1A237E] text-white hover:bg-indigo-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
              >
                {service.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTENIDO CON LAS TARJETAS DE SOLUCIONES */}
      {/* Ya no necesitamos el SectionHeader aquí si el Hero de página cumple esa función */}
      <section id="soluciones-cards" className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          {/* El SectionHeader anterior podría ser redundante. Evalúa si lo necesitas. */}
          {/* <SectionHeader
            title="Explora Nuestras Soluciones en Detalle" // Título alternativo si se mantiene
            subtitle="Cada categoría ofrece un conjunto de herramientas para abordar tus desafíos específicos."
          /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-0 mt-16"> {/* Ajustar mt si el SectionHeader se quita */}
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                keyPoints={service.keyPoints}
                bulletColor={service.bulletColor}
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
              Contáctanos para más información
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

export default SolutionsPage;