import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Añadido useLocation
// Importa los iconos necesarios de lucide-react
import { 
  TrendingUp, 
  Target, 
  Sparkles, 
  Send,
  BarChartHorizontalBig,
  BrainCircuit,
  ArrowRight,
  List // Añadido para el botón "Todas las Soluciones"
  // Iconos para la barra de navegación (pueden omitirse si no se usan directamente en botones)
} from 'lucide-react';

// Componentes reutilizables (asume que existen en tu estructura de proyecto)
// Ajusta las rutas según sea necesario
import Hero from '../../components/Hero'; 
import SectionHeader from '../../components/SectionHeader'; 

// Imágenes de assets (ajusta rutas si es necesario)
import heroMarketingImage from '../../assets/mkt.jpg'; 
import overviewMarketingImage from '../../assets/mktpeop.jpeg';

// --- Interfaz y Componente ServiceCard (Reutilizado) ---
// Si este componente ya está definido en un archivo compartido, impórtalo desde allí.
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

// --- Datos para las Soluciones de Marketing Inteligente ---
const marketingSolutionsData = [
  {
    title: "1. Monitoreo Inteligente de Tendencias",
    description: "Descubre cómo la inteligencia artificial permite rastrear en tiempo real lo que está marcando pauta en redes sociales, desde hashtags hasta menciones clave.",
    icon: <TrendingUp size={32} />,
    link: "/contacto",
    keyPoints: ["Herramientas de IA para detectar tendencias", "Análisis de sentimiento en tiempo real", "¿De qué habla tu audiencia hoy?"],
    bulletColor: "text-[#FF6B2B]", 
  },
  {
    title: "2. Identificación de Oportunidades de Alto Impacto",
    description: "Aprende a detectar patrones emergentes y anticiparte a la competencia ajustando tu estrategia digital con datos precisos.",
    icon: <Target size={32} />,
    link: "/contacto",
    keyPoints: ["Predicción de tendencias futuras", "Análisis competitivo en tiempo real", "Ajuste ágil de estrategias", "Actúa con ventaja: implementa lo que otros aún no ven"],
    bulletColor: "text-[#03A9F4]", 
  },
  {
    title: "3. Creación de Contenido Automatizado",
    description: "La IA ahora crea contenido relevante y personalizado en segundos, adaptado al comportamiento de tus usuarios.",
    icon: <Sparkles size={32} />,
    link: "/contacto",
    keyPoints: ["Textos, imágenes y videos con IA", "Contenido alineado a tendencias actuales", "Personalización para cada perfil", "Multiplica tu alcance con contenido inteligente"],
    bulletColor: "text-green-500", 
  },
  {
    title: "4. Publicación y Distribución Óptima",
    description: "Automatiza cuándo y dónde publicar para lograr el mayor impacto, mientras ajustas tus campañas según las reacciones en tiempo real.",
    icon: <Send size={32} />,
    link: "/contacto",
    keyPoints: ["Programación por horarios estratégicos", "Plataformas ideales para cada contenido", "Ajustes dinámicos por engagement", "Optimiza tu esfuerzo: publica con precisión"],
    bulletColor: "text-purple-500", 
  },
  {
    title: "5. Análisis y Medición Efectiva",
    description: "Evalúa cada paso con métricas clave como CTR y tasa de conversión para tomar decisiones que realmente impacten.",
    icon: <BarChartHorizontalBig size={32} />,
    link: "/contacto",
    keyPoints: ["Monitoreo de métricas clave", "Evaluación de resultados en tiempo real", "Decisiones basadas en datos", "Conviértete en un estratega con visión clara"],
    bulletColor: "text-teal-500", 
  },
  {
    title: "6. Optimización Continua con Aprendizaje Automático",
    description: "La IA aprende de tus campañas anteriores para mejorar cada nuevo esfuerzo publicitario de forma automática.",
    icon: <BrainCircuit size={32} />,
    link: "/contacto",
    keyPoints: ["Mejora constante de tus campañas", "Segmentación inteligente", "Personalización por comportamiento", "Haz que cada campaña sea mejor que la anterior"],
    bulletColor: "text-indigo-500", 
  },
];

// --- Datos para la Navegación por Pestañas (Idealmente desde un archivo compartido) ---
const mainServicesNavigationData = [
  {
    navLabel: "Talento Humano",
    link: "/soluciones/talento-humano",
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
    link: "/soluciones/marketing", // Enlace a esta misma página (se resaltará)
  },
  {
    navLabel: "Chatbots",
    link: "/soluciones/chatbots",
  },
  {
    navLabel: "Apps Web",
    link: "/soluciones/apps-web",
  },
];

// --- Componente SmartMarketingPage ---
const SmartMarketingPage: React.FC = () => {
  const location = useLocation(); 
  const baseSolutionsPath = "/soluciones"; 

  return (
    <>
      <Hero
        title="NextGen Marketing" // Manteniendo el título original de esta página
        subtitle="Potencia tu estrategia de marketing con soluciones impulsadas por IA que maximizan el impacto y el retorno de inversión."
        imageUrl={heroMarketingImage} 
      />

      {/* NAVEGACIÓN POR PESTAÑAS/BOTONES DE SOLUCIONES (AÑADIDA AQUÍ) */}
      <section className="py-6 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-4">
            <Link
              to={baseSolutionsPath}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out flex items-center gap-2
                ${ 
                  location.pathname === baseSolutionsPath || 
                  !mainServicesNavigationData.some(s => location.pathname.startsWith(s.link)) && location.pathname.startsWith(baseSolutionsPath)
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

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
                Revoluciona tu Estrategia de Marketing con IA
              </h2>
              <p className="text-gray-600 mb-6">
                En Datia, integramos la inteligencia artificial en el corazón de 
                tus estrategias de marketing. Desde el análisis predictivo de 
                tendencias hasta la creación de contenido personalizado y la 
                optimización automática de campañas, te proporcionamos las 
                herramientas para conectar con tu audiencia de manera más 
                efectiva y eficiente.
              </p>
              <p className="text-gray-600">
                Nuestras soluciones te permiten comprender profundamente a tus 
                clientes, anticipar sus necesidades y entregar mensajes 
                impactantes en el momento justo, transformando datos en 
                resultados medibles y un crecimiento sostenible.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={overviewMarketingImage} 
                alt="Estrategia de Marketing con IA" 
                className="w-full h-auto object-cover max-h-[400px] md:max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section (using ServiceCards) */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Capacidades Clave de Nuestro Marketing Inteligente"
            subtitle="Descubre cómo cada herramienta de IA puede potenciar tus campañas"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {marketingSolutionsData.map((solution, index) => (
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
            title="Impacto Directo en tus Resultados de Marketing"
            subtitle="Ventajas de implementar nuestras soluciones de Marketing Inteligente"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF6B2B]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para tu Estrategia</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Incremento del ROI en campañas publicitarias.",
                  "Mayor alcance y engagement con tu público objetivo.",
                  "Optimización del presupuesto de marketing.",
                  "Generación de leads más calificados.",
                  "Fortalecimiento del posicionamiento de marca."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#03A9F4]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para tu Equipo</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Automatización de tareas repetitivas y análisis de datos.",
                  "Acceso a insights accionables en tiempo real.",
                  "Capacidad para crear y distribuir contenido a escala.",
                  "Mejora en la toma de decisiones estratégicas.",
                  "Liberación de tiempo para la creatividad y la innovación."
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
            Transforma tu Marketing con Inteligencia Artificial
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Descubre cómo Datia puede ayudarte a diseñar, ejecutar y 
            optimizar campañas de marketing más inteligentes y efectivas. 
            ¡Hablemos!
          </p>
          <Link
            to="/contacto" 
            className="inline-block bg-[#FF6B2B] text-white font-semibold py-3 px-8 rounded-lg 
                       hover:bg-orange-600 transition-colors duration-300 text-lg
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B] focus:ring-offset-[#1A237E]"
          >
            Contacta a un Especialista
          </Link>
        </div>
      </section>
    </>
  );
};

export default SmartMarketingPage;