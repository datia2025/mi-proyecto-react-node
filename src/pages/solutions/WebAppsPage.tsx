import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Importa los iconos necesarios de lucide-react
import { 
  AppWindow, 
  Puzzle, 
  Users2, 
  DollarSign,
  LockKeyhole,
  BarChartBig,
  ArrowRight,
  List,
  // Iconos para la barra de navegación (los mismos que en mainServicesNavigationData)
  Users, 
  BarChart2 as FinanzasIcon, 
  Settings as OperacionesIcon, 
  Brain as MarketingIcon, 
  MessageSquare as ChatbotsIcon, 
  FileCode as AppsWebIconPage, // Renombrado para la página actual
} from 'lucide-react';

// Componentes reutilizables (asume que existen en tu estructura de proyecto)
import Hero from '../../components/Hero'; 
import SectionHeader from '../../components/SectionHeader'; 

// Imágenes de assets (ajusta rutas si es necesario)
import heroWebAppsImage from '../../assets/lego.png'; 
import overviewWebAppsImage from '../../assets/appusr.png';

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

// --- Datos para las Soluciones de Aplicaciones Web (Contenido específico de la página) ---
const webAppsSolutionsData = [
  {
    title: "1. Digitalización Estratégica con Aplicaciones Web",
    description: "Las apps web permiten transformar procesos manuales en soluciones digitales centralizadas, aumentando la eficiencia y el control operativo.",
    icon: <AppWindow size={32} />,
    link: "/contacto",
    keyPoints: ["Acceso desde cualquier dispositivo sin instalaciones", "Gestión centralizada de operaciones y equipos", "Digitalización de flujos clave como ventas, logística o soporte", "Mayor visibilidad y trazabilidad de procesos"],
    bulletColor: "text-[#FF6B2B]", 
  },
  {
    title: "2. Soluciones a Medida para Necesidades Reales",
    description: "A diferencia del software genérico, las apps web personalizadas se adaptan a la lógica interna de tu empresa y escalan contigo.",
    icon: <Puzzle size={32} />,
    link: "/contacto",
    keyPoints: ["Funcionalidades alineadas a procesos internos específicos", "Interfaces diseñadas para tu equipo y cliente ideal", "Escalabilidad progresiva según crecimiento del negocio", "Integración con herramientas existentes (ERP, CRM, etc.)"],
    bulletColor: "text-[#03A9F4]", 
  },
  {
    title: "3. Accesibilidad y Colaboración en Tiempo Real",
    description: "Una app web elimina las barreras físicas y fomenta la colaboración fluida entre equipos, departamentos y sedes.",
    icon: <Users2 size={32} />,
    link: "/contacto",
    keyPoints: ["Usuarios conectados desde distintas ubicaciones", "Actualización de datos en tiempo real sin conflictos", "Colaboración simultánea en entornos seguros", "Mejor comunicación interdepartamental y toma de decisiones"],
    bulletColor: "text-green-500", 
  },
  {
    title: "4. Reducción de Costos Operativos y Técnicos",
    description: "Las aplicaciones web optimizan recursos al eliminar licencias innecesarias, infraestructura compleja y soporte técnico recurrente.",
    icon: <DollarSign size={32} />,
    link: "/contacto",
    keyPoints: ["Sin necesidad de instalar ni mantener software local", "Actualizaciones centralizadas sin interrupciones", "Menor dependencia de soporte técnico", "Reducción de errores y retrabajos costosos"],
    bulletColor: "text-purple-500", 
  },
  {
    title: "5. Seguridad Corporativa y Control de Acceso",
    description: "Las apps web permiten un manejo avanzado de permisos y datos sensibles, cumpliendo estándares de seguridad para entornos empresariales.",
    icon: <LockKeyhole size={32} />,
    link: "/contacto",
    keyPoints: ["Gestión de usuarios y roles con diferentes niveles de acceso", "Protección de datos sensibles con cifrado y backups", "Cumplimiento normativo (como RGPD o ISO)", "Trazabilidad completa de acciones dentro del sistema"],
    bulletColor: "text-teal-500", 
  },
  {
    title: "6. Toma de Decisiones Basada en Datos",
    description: "Las aplicaciones web integran reportes y dashboards que facilitan el análisis en tiempo real, impulsando decisiones estratégicas.",
    icon: <BarChartBig size={32} />,
    link: "/contacto",
    keyPoints: ["Visualización de KPIs clave en paneles personalizables", "Automatización de reportes y alertas", "Detección de cuellos de botella y áreas de mejora", "Decisiones ágiles fundamentadas en datos actuales"],
    bulletColor: "text-indigo-500", 
  },
];

// --- Datos para la Navegación por Pestañas (Idealmente desde un archivo compartido) ---
const mainServicesNavigationData = [
  { navLabel: "Talento Humano", link: "/soluciones/talento-humano" },
  { navLabel: "Finanzas", link: "/soluciones/finanzas" },
  { navLabel: "Operaciones", link: "/soluciones/operaciones" },
  { navLabel: "Marketing", link: "/soluciones/marketing" },
  { navLabel: "Chatbots", link: "/soluciones/chatbots" },
  { navLabel: "Apps Web", link: "/soluciones/apps-web" }, // Enlace a esta misma página
];

// --- Componente WebAppsPage ---
const WebAppsPage: React.FC = () => {
  const location = useLocation(); 
  const baseSolutionsPath = "/soluciones"; 

  return (
    <>
      <Hero
        title="Aplicaciones Web"
        subtitle="Soluciones web personalizadas para su negocio"
        imageUrl={heroWebAppsImage} 
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
                Impulsa tu Negocio con Aplicaciones Web a Medida
              </h2>
              <p className="text-gray-600 mb-6">
                En Datia, creamos aplicaciones web robustas, intuitivas y 
                escalables que se alinean perfectamente con tus procesos y 
                objetivos de negocio. Transformamos tus ideas en soluciones 
                digitales que optimizan la eficiencia, mejoran la colaboración 
                y te proporcionan una ventaja competitiva.
              </p>
              <p className="text-gray-600">
                Desarrollamos aplicaciones diseñadas para ofrecer una visualización ágil y efectiva de los datos,
                adaptadas a procesos que requieren rapidez y una presentación sofisticada. Con un enfoque en 
                optimización y eficiencia, nuestras soluciones facilitan la interacción con la información en tiempo real,
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={overviewWebAppsImage} 
                alt="Aplicaciones Web a Medida" 
                className="w-full h-auto object-cover max-h-[400px] md:max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section (using ServiceCards for Web Apps specifics) */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Capacidades Clave de Nuestras Aplicaciones Web"
            subtitle="Descubre cómo potenciamos tu transformación digital"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {webAppsSolutionsData.map((solution, index) => (
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
            title="Ventajas Estratégicas de Nuestras Aplicaciones Web"
            subtitle="Invierte en soluciones digitales que impulsan tu crecimiento y eficiencia"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF6B2B]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Beneficios Empresariales</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Optimización de procesos clave y reducción de la carga manual.",
                  "Mejora de la productividad y eficiencia en todas las áreas.",
                  "Adaptabilidad y escalabilidad para el crecimiento futuro.",
                  "Centralización de la información para una mejor toma de decisiones.",
                  "Fortalecimiento de la seguridad y el control de datos."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#03A9F4]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Beneficios para Usuarios</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Interfaces intuitivas y fáciles de usar, adaptadas a sus necesidades.",
                  "Acceso a información y herramientas desde cualquier lugar y dispositivo.",
                  "Mejora en la colaboración y comunicación entre equipos.",
                  "Reducción de errores y frustraciones por procesos ineficientes.",
                  "Experiencia de usuario optimizada que fomenta la adopción."
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
            Construyamos tu Próxima Aplicación Web
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            ¿Listo para transformar tus procesos y alcanzar nuevos niveles 
            de eficiencia? Contáctanos y exploremos juntos cómo una 
            aplicación web a medida puede impulsar tu negocio.
          </p>
          <Link
            to="/contacto" 
            className="inline-block bg-[#FF6B2B] text-white font-semibold py-3 px-8 rounded-lg 
                       hover:bg-orange-600 transition-colors duration-300 text-lg
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B] focus:ring-offset-[#1A237E]"
          >
            Solicitar Asesoría
          </Link>
        </div>
      </section>
    </>
  );
};

export default WebAppsPage;