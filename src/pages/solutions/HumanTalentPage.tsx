import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Añadido Link y useLocation
import { 
  Award, 
  Heart, 
  BarChart, // Usado en las tarjetas de soluciones específicas
  Users as UsersIcon, // Renombrado para evitar conflicto si Users se usa para el icono de la barra de navegación
  FileCheck, 
  Search,
  List, // Para el botón "Todas las Soluciones"
  // Iconos para la barra de navegación (los mismos que en servicesData de SolutionsPage)
  // Se puede omitir si no se usarán directamente en los botones de la barra.
  // Users, // Ya está como UsersIcon si se necesita para la barra.
  // BarChart2 as FinanzasIcon, 
  // Settings as OperacionesIcon, 
  // Brain as MarketingIcon, 
  // MessageSquare as ChatbotsIcon, 
  // FileCode as AppsWebIcon, 
} from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';

// --- Datos para la Navegación por Pestañas (Replicado o desde un archivo compartido) ---
// Este array define las principales categorías de soluciones para la barra de navegación.
const mainServicesNavigationData = [
  {
    navLabel: "Talento Humano",
    link: "/soluciones/talento-humano", // Enlace a esta misma página (se resaltará)
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


const HumanTalentPage: React.FC = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const baseSolutionsPath = "/soluciones"; // Ruta base para el botón "Todas las Soluciones"

  return (
    <>
      <Hero
        title="Talento Humano Reinventado"
        subtitle="Transformamos la gestión del capital humano con soluciones inteligentes que optimizan cada proceso."
        imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                Potencia tu departamento de talento humano
              </h2>
              <p className="text-gray-600 mb-6">
                En Datia, reinventamos la gestión del talento humano utilizando 
                inteligencia artificial y automatización para transformar cada 
                aspecto del ciclo de vida del empleado: desde la selección y 
                contratación hasta el desarrollo, compensación y bienestar.
              </p>
              <p className="text-gray-600">
                Nuestras soluciones permiten a los equipos de RRHH liberarse de 
                tareas administrativas repetitivas para enfocarse en lo que realmente 
                importa: el desarrollo estratégico del capital humano y la construcción 
                de culturas organizacionales sólidas.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Talento Humano" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nuestras Soluciones"
            subtitle="Optimiza cada aspecto de la gestión del talento humano"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"> {/* Añadido mt-12 para espaciado */}
            {/* Solution 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#FF6B2B]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#FF6B2B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B] transition-colors duration-300">
                  <BarChart 
                    size={28} 
                    className="text-[#FF6B2B] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Compensaciones con lógica inteligente
                </h3>
                <p className="text-gray-600 mb-6">
                  Optimiza y personaliza tus esquemas de compensación con análisis 
                  de datos avanzados. Nuestras implementaciones te permite:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Diseñar esquemas salariales competitivos y equitativos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Analizar tendencias del mercado laboral en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Identificar brechas salariales y oportunidades de mejora</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Automatizar cálculos de bonificaciones y comisiones</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#03A9F4]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#03A9F4] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#03A9F4] transition-colors duration-300">
                  <Award 
                    size={28} 
                    className="text-[#03A9F4] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Desarrollo guiado por datos
                </h3>
                <p className="text-gray-600 mb-6">
                  Potencia el crecimiento profesional de tus colaboradores con planes 
                  de desarrollo personalizados basados en análisis de datos:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Identifica necesidades de capacitación específicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Crea rutas de carrera personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Mide el impacto de los programas de desarrollo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Genera contenido de capacitación a gran velocidad usando IA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#1A237E]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#1A237E] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#1A237E] transition-colors duration-300">
                  <FileCheck 
                    size={28} 
                    className="text-[#1A237E] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Evaluaciones objetivas
                </h3>
                <p className="text-gray-600 mb-6">
                  Transforma tus procesos de evaluación con herramientas que eliminan 
                  sesgos y proporcionan visibilidad completa del desempeño:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Evaluaciones 360° automatizadas y fáciles de implementar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Análisis de objetivos y KPIs en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Feedback continuo y constructivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Identificación de talento de alto potencial</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#607D8B]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#607D8B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#607D8B] transition-colors duration-300">
                  <Heart 
                    size={28} 
                    className="text-[#607D8B] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Bienestar medido, cultura cuidada
                </h3>
                <p className="text-gray-600 mb-6">
                  Monitorea y mejora el clima organizacional con herramientas que miden 
                  y analizan la satisfacción y bienestar de tus colaboradores:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#607D8B] font-bold mr-2">•</span>
                    <span>Encuestas de clima laboral con análisis en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#607D8B] font-bold mr-2">•</span>
                    <span>Medición de engagement y satisfacción</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#607D8B] font-bold mr-2">•</span>
                    <span>Programas de bienestar personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#607D8B] font-bold mr-2">•</span>
                    <span>Análisis predictivo de rotación y retención</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#FF6B2B]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#FF6B2B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B] transition-colors duration-300">
                  <UsersIcon 
                    size={28} 
                    className="text-[#FF6B2B] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Gestión de personal con IA
                </h3>
                <p className="text-gray-600 mb-6">
                  Simplifica procesos administrativos y optimiza la gestión diaria de 
                  tu equipo con herramientas inteligentes:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Automatización de procesos de onboarding y offboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Gestión inteligente de vacaciones y ausencias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Documentación digital con firma electrónica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Portal del empleado con autoservicio inteligente</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#03A9F4]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#03A9F4] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#03A9F4] transition-colors duration-300">
                  <Search 
                    size={28} 
                    className="text-[#03A9F4] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Selección precisa y efectiva
                </h3>
                <p className="text-gray-600 mb-6">
                  Optimiza tu proceso de reclutamiento y selección con herramientas que 
                  identifican al mejor talento de manera eficiente:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Matching inteligente entre candidatos y posiciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Evaluaciones técnicas y de competencias automatizadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Análisis predictivo de adaptación cultural</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Seguimiento y análisis de fuentes de reclutamiento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Beneficios"
            subtitle="¿Por qué elegir nuestras soluciones de Talento Humano?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"> {/* Añadido mt-12 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF6B2B]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para la organización</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                  <span>Reducción de hasta un 40% en costos administrativos de RRHH</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                  <span>Mejora en la retención de talento clave</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                  <span>Decisiones basadas en datos, no en intuiciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                  <span>Mayor agilidad y adaptabilidad organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                  <span>Cultura organizacional más sólida y alineada</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#03A9F4]">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6">Para los colaboradores</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#03A9F4] font-bold mr-2">•</span>
                  <span>Mayor transparencia en procesos de evaluación y compensación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#03A9F4] font-bold mr-2">•</span>
                  <span>Desarrollo profesional personalizado y efectivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#03A9F4] font-bold mr-2">•</span>
                  <span>Mejor experiencia del empleado en cada punto de contacto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#03A9F4] font-bold mr-2">•</span>
                  <span>Reconocimiento justo y oportuno del desempeño</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#03A9F4] font-bold mr-2">•</span>
                  <span>Mayor autonomía y autogestión</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A237E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Reinventa la gestión de tu talento humano
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones pueden transformar tu departamento de RRHH, 
            optimizar procesos y potenciar el desarrollo de tu equipo.
          </p>
          {/* Cambiado <a> a <Link> para consistencia con enrutamiento de React Router */}
          <Link 
            to="/contacto" 
            className="inline-block bg-[#FF6B2B] text-white font-semibold py-3 px-8 rounded-lg 
                       hover:bg-orange-600 transition-colors duration-300 text-lg
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B] focus:ring-offset-[#1A237E]"
          >
            Solicitar una demostración
          </Link>
        </div>
      </section>
    </>
  );
};

export default HumanTalentPage;