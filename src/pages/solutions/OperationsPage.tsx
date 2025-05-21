import React from 'react'; // ÚNICA importación de React
import { Link, useLocation } from 'react-router-dom';
// Importa los iconos necesarios de lucide-react
import { 
  Settings, 
  FileText, 
  BarChart2, 
  ArrowRight,
  List 
} from 'lucide-react';

// Componentes reutilizables (asume que existen en tu estructura de proyecto)
// Ajusta las rutas según sea necesario
import Hero from '../../components/Hero'; 
import SectionHeader from '../../components/SectionHeader'; 

// Imagen para el Hero de Operaciones (de assets)
// Asegúrate de que esta ruta es correcta desde src/pages/solutions/OperationsPage.tsx
import heroOperationsImage from '../../assets/callc.jpeg'; 

// Imagen para la sección Overview
const overviewImageUrl = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg";


// --- Interfaz y Componente ServiceCard (Reutilizado) ---
// Si este componente ya está definido en un archivo compartido (ej: ../../components/ServiceCard.tsx),
// DEBES importarlo desde allí en lugar de redefinirlo aquí.
// Si no está compartido, esta definición es correcta.
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

// --- Datos para las Soluciones de Operaciones ---
const operationsSolutionsData = [
  {
    title: "Producción con IA inteligente",
    description: "Moderniza tus procesos con automatización y análisis en tiempo real. Nuestra tecnología te ayuda a:",
    icon: <Settings size={32} />,
    link: "/contacto",
    keyPoints: [
      "Automatizar tareas repetitivas en planta",
      "Aumentar la productividad operativa",
      "Implementar cobots para trabajo colaborativo",
      "Detectar fallos antes de que ocurran con mantenimiento predictivo",
      "Reasignar talento humano a funciones estratégicas"
    ],
    bulletColor: "text-[#FF6B2B]", 
  },
  {
    title: "Órdenes de trabajo automatizadas",
    description: "Agiliza la gestión documental con Procesamiento Inteligente de Documentos (IDP). Nuestra solución permite:",
    icon: <FileText size={32} />,
    link: "/contacto",
    keyPoints: [
      "Extraer y clasificar datos clave en segundos",
      "Minimizar errores y duplicidad de tareas",
      "Procesar grandes volúmenes de solicitudes sin demoras",
      "Centralizar y acceder a documentos críticos en tiempo real",
      "Responder a miles de solicitudes simultáneamente"
    ],
    bulletColor: "text-[#03A9F4]", 
  },
  {
    title: "Reportes de producción en tiempo real",
    description: "Transforma tus decisiones con análisis predictivo y automatización de reportes. Nuestro sistema ofrece:",
    icon: <BarChart2 size={32} />,
    link: "/contacto",
    keyPoints: [
      "KPIs actualizados y análisis de tendencias",
      "Automatización de reportes periódicos y visuales",
      "Insights inmediatos a partir de datos históricos",
      "Herramientas de visualización intuitiva y útil",
      "Identificación proactiva de áreas de mejora y optimización"
    ],
    bulletColor: "text-green-500", 
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
    link: "/soluciones/marketing",
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


// --- Componente OperationsPage ---
const OperationsPage: React.FC = () => {
  const location = useLocation(); 
  const baseSolutionsPath = "/soluciones"; 

  return (
    <>
      <Hero
        title="Operaciones"
        subtitle="Optimice sus operaciones con soluciones impulsadas por IA"
        imageUrl={heroOperationsImage} 
      />

      {/* NAVEGACIÓN POR PESTAÑAS/BOTONES DE SOLUCIONES */}
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
                Transforma la Eficiencia de tus Operaciones
              </h2>
              <p className="text-gray-600 mb-6">
                En Datia, revolucionamos la gestión operativa mediante la aplicación 
                estratégica de inteligencia artificial y automatización. Nuestras 
                soluciones están diseñadas para optimizar cada faceta de tus 
                procesos productivos y de gestión, desde la planificación hasta 
                la ejecución y el análisis de resultados.
              </p>
              <p className="text-gray-600">
                Permitimos que tus equipos se liberen de tareas manuales y repetitivas, 
                enfocándose en la mejora continua, la innovación y la toma de 
                decisiones estratégicas que impulsan el crecimiento y la 
                rentabilidad de tu negocio.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={overviewImageUrl} 
                alt="Eficiencia Operativa" 
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
            title="Nuestras Soluciones para Operaciones"
            subtitle="Herramientas inteligentes para cada desafío operativo"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {operationsSolutionsData.map((solution, index) => (
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
            title="Beneficios Clave de Optimizar tus Operaciones"
            subtitle="¿Por qué elegir nuestras soluciones de IA para Operaciones?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"> 
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF6B2B]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para tu Empresa</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Reducción significativa de costos operativos y desperdicios.",
                  "Aumento de la productividad y eficiencia en toda la cadena de valor.",
                  "Mejora en la calidad del producto/servicio y satisfacción del cliente.",
                  "Mayor agilidad para responder a cambios en la demanda y el mercado.",
                  "Visibilidad completa y en tiempo real del rendimiento operativo."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#03A9F4]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para tus Equipos</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Eliminación de tareas manuales y propensas a errores.",
                  "Mejores herramientas para la toma de decisiones basadas en datos.",
                  "Entorno de trabajo más seguro y eficiente.",
                  "Capacidad para enfocarse en tareas de mayor valor añadido.",
                  "Reducción del estrés y mejora en la satisfacción laboral."
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
            Optimiza tus Operaciones Hoy Mismo
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de inteligencia artificial pueden 
            llevar la eficiencia de tus operaciones al siguiente nivel. 
            Contáctanos para una demostración personalizada.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-[#FF6B2B] text-white font-semibold py-3 px-8 rounded-lg 
                       hover:bg-orange-600 transition-colors duration-300 text-lg
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B] focus:ring-offset-[#1A237E]"
          >
            Solicitar una Demostración
          </Link>
        </div>
      </section>
    </>
  );
};

export default OperationsPage;