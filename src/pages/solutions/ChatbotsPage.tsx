import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Añadido useLocation
// Importa los iconos necesarios de lucide-react
import { 
  MessageSquareHeart, 
  Network, 
  BotMessageSquare, 
  Filter,
  AreaChart,
  TrendingUp,
  ArrowRight,
  List, // Añadido para el botón "Todas las Soluciones"
  // Iconos para la barra de navegación (los mismos que en servicesData de SolutionsPage)
  Users, 
  BarChart2 as FinanzasIcon, // Renombrado para evitar conflicto si BarChart2 se usa en otro lado
  Settings as OperacionesIcon, // Renombrado
  Brain as MarketingIcon, // Renombrado
  MessageSquare as ChatbotsIcon, // Renombrado
  FileCode as AppsWebIcon, // Renombrado
} from 'lucide-react';

// Componentes reutilizables (asume que existen en tu estructura de proyecto)
import Hero from '../../components/Hero'; 
import SectionHeader from '../../components/SectionHeader'; 

// Imágenes de assets (ajusta rutas si es necesario)
import heroChatbotsImage from '../../assets/chats.jpg'; 
import overviewChatbotsImage from '../../assets/celchat.png';

// --- Interfaz y Componente ServiceCard (Reutilizado) ---
// Asume que este componente está importado desde un archivo compartido si es el caso.
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

// --- Datos para las Soluciones de Chatbots Inteligentes (Contenido específico de la página) ---
const chatbotsSolutionsData = [
  {
    title: "1. Automatización Inteligente de Atención al Cliente",
    description: "Los chatbots permiten gestionar miles de interacciones simultáneas, mejorando la experiencia del cliente sin aumentar los costos operativos.",
    icon: <MessageSquareHeart size={32} />,
    link: "/contacto",
    keyPoints: ["Respuestas instantáneas 24/7 sin tiempos de espera", "Atención consistente y libre de errores humanos", "Escalado eficiente de consultas frecuentes", "Reducción de carga sobre equipos humanos"],
    bulletColor: "text-[#FF6B2B]", 
  },
  {
    title: "2. Integración Omnicanal sin Fricciones",
    description: "Un solo chatbot puede operar en múltiples plataformas, garantizando coherencia en la comunicación y disponibilidad donde esté el cliente.",
    icon: <Network size={32} />,
    link: "/contacto",
    keyPoints: ["Presencia automatizada en web, WhatsApp, redes sociales y más", "Experiencia de usuario fluida y continua", "Centralización de interacciones y métricas", "Mejora de la fidelización del cliente con soporte accesible"],
    bulletColor: "text-[#03A9F4]", 
  },
  {
    title: "3. Optimización de Procesos Internos",
    description: "Los chatbots también se aplican a tareas internas, optimizando operaciones y liberando tiempo para que los equipos se enfoquen en tareas estratégicas.",
    icon: <BotMessageSquare size={32} />,
    link: "/contacto",
    keyPoints: ["Asistentes virtuales para empleados (soporte IT, RRHH, etc.)", "Automatización de respuestas internas repetitivas", "Reducción del tiempo de respuesta en procesos clave", "Mejor comunicación organizacional y autogestión"],
    bulletColor: "text-green-500", 
  },
  {
    title: "4. Captura y Calificación de Leads Automatizada",
    description: "Los chatbots son una herramienta eficaz para convertir visitantes en oportunidades comerciales cualificadas de forma inmediata y precisa.",
    icon: <Filter size={32} />,
    link: "/contacto",
    keyPoints: ["Detección de intención y segmentación automatizada", "Calificación de prospectos según reglas de negocio", "Derivación al equipo comercial con contexto completo", "Mayor conversión sin intervención humana inicial"],
    bulletColor: "text-purple-500", 
  },
  {
    title: "5. Análisis de Datos y Mejora Continua",
    description: "Cada conversación genera datos valiosos que pueden aprovecharse para mejorar productos, servicios y procesos de atención.",
    icon: <AreaChart size={32} />,
    link: "/contacto",
    keyPoints: ["Reportes sobre comportamiento, dudas y fricciones del cliente", "Identificación de nuevas oportunidades comerciales", "Ajustes automáticos en base a patrones de uso", "Decisiones basadas en datos conversacionales"],
    bulletColor: "text-teal-500", 
  },
  {
    title: "6. Escalabilidad y Retorno de Inversión",
    description: "Implementar un chatbot es una decisión estratégica que permite crecer sin comprometer la calidad del servicio ni los costos.",
    icon: <TrendingUp size={32} />,
    link: "/contacto",
    keyPoints: ["Costo operativo reducido frente a atención humana", "Alta escalabilidad en picos de demanda", "Implementación rápida y adaptable a distintos sectores", "Retorno de inversión medible en corto plazo"],
    bulletColor: "text-indigo-500", 
  },
];

// --- Datos para la Navegación por Pestañas (Replicado de SolutionsPage o un archivo compartido) ---
// Este array define las principales categorías de soluciones para la barra de navegación.
// Debería ser consistente en todas las páginas que usen esta barra.
// Idealmente, estos datos vendrían de un archivo compartido de constantes o datos.
const mainServicesNavigationData = [
  {
    navLabel: "Talento Humano",
    link: "/soluciones/talento-humano", 
    // Podrías añadir un icono aquí si quisieras mostrarlo en el botón,
    // pero el diseño original de SolutionsPage no lo hacía para cada item.
  },
  {
    navLabel: "Finanzas",
    link: "/soluciones/finanzas",
  },
  {
    navLabel: "Operaciones",
    link: "/soluciones/operaciones",
  },
  {
    navLabel: "Marketing",
    link: "/soluciones/marketing",
  },
  {
    navLabel: "Chatbots",
    link: "/soluciones/chatbots", // Enlace a esta misma página (se resaltará)
  },
  {
    navLabel: "Apps Web",
    link: "/soluciones/apps-web",
  },
];


// --- Componente ChatbotsPage ---
const ChatbotsPage: React.FC = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const baseSolutionsPath = "/soluciones"; // Ruta base para el botón "Todas las Soluciones"

  return (
    <>
      <Hero
        title="Chatbots Inteligentes"
        subtitle="Automatice la atención al cliente con chatbots impulsados por IA"
        imageUrl={heroChatbotsImage} 
      />

      {/* NAVEGACIÓN POR PESTAÑAS/BOTONES DE SOLUCIONES (AÑADIDA AQUÍ) */}
      <section className="py-6 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40"> {/* sticky top-0 para fijarla al hacer scroll */}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-4">
            <Link
              to={baseSolutionsPath}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out flex items-center gap-2
                ${ 
                  location.pathname === baseSolutionsPath || 
                  !mainServicesNavigationData.some(s => location.pathname.startsWith(s.link)) && location.pathname.startsWith(baseSolutionsPath) // Condición para "Todas las Soluciones"
                  ? 'bg-[#1A237E] text-white hover:bg-indigo-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
            >
              <List size={16} />
              Todas las Soluciones
            </Link>
            {mainServicesNavigationData.map((service) => (
              <Link
                key={service.navLabel}
                to={service.link}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                  ${ location.pathname.startsWith(service.link) // Resalta si la ruta actual comienza con el enlace del servicio
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

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
                Transforma la Interacción con Asistentes Virtuales Avanzados
              </h2>
              <p className="text-gray-600 mb-6">
                En Datia, diseñamos chatbots inteligentes que van más allá de 
                las respuestas automáticas. Creamos experiencias conversacionales 
                fluidas y personalizadas que resuelven consultas, optimizan 
                procesos y fortalecen la relación con tus clientes y empleados, 24/7.
              </p>
              <p className="text-gray-600">
                Nuestras soluciones de IA conversacional se integran perfectamente 
                en tus canales existentes, aprenden continuamente y se adaptan 
                para ofrecer un servicio excepcional, liberando a tu equipo humano 
                para tareas de mayor valor estratégico.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={overviewChatbotsImage} 
                alt="Chatbots Inteligentes en Acción" 
                className="w-full h-auto object-cover max-h-[400px] md:max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section (using ServiceCards for Chatbots specifics) */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Capacidades Clave de Nuestros Chatbots Inteligentes"
            subtitle="Descubre cómo transformamos la interacción con tus clientes y equipos"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {chatbotsSolutionsData.map((solution, index) => (
              <ServiceCard
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                link={solution.link}
                keyPoints={solution.keyPoints}
                bulletColor={solution.bulletColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Beneficios Tangibles de Implementar Chatbots Inteligentes"
            subtitle="Impacto directo en tu eficiencia, costos y satisfacción del cliente"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF6B2B]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para tu Negocio</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Reducción de hasta un 60% en costos de atención al cliente.",
                  "Aumento de la capacidad de atención sin incrementar personal.",
                  "Mejora en la eficiencia operativa y tiempos de respuesta.",
                  "Generación y calificación de leads 24/7.",
                  "Recopilación de datos valiosos para la toma de decisiones."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#03A9F4]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para tus Clientes y Empleados</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Atención inmediata y disponible a cualquier hora.",
                  "Resolución rápida de consultas y problemas comunes.",
                  "Experiencia de usuario consistente y personalizada.",
                  "Acceso fácil a información y soporte.",
                  "Reducción de la frustración por tiempos de espera."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A237E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Implementa tu Chatbot Inteligente Hoy
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Lleva tu atención al cliente y eficiencia interna al siguiente nivel. 
            Contáctanos para una consulta gratuita y descubre el poder de la 
            IA conversacional.
          </p>
          <Link
            to="/contacto" 
            className="inline-block bg-[#FF6B2B] text-white font-semibold py-3 px-8 rounded-lg 
                       hover:bg-orange-600 transition-colors duration-300 text-lg
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B] focus:ring-offset-[#1A237E]"
          >
            Hablar con un Experto
          </Link>
        </div>
      </section>
    </>
  );
};

export default ChatbotsPage;