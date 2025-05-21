import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Añadido Link y useLocation
import { 
  DollarSign, 
  BarChart2, // Usado en las tarjetas de soluciones específicas
  LineChart, 
  FileText as FileTextIcon, // Renombrado para evitar conflicto si FileText se usa para el icono de la barra de navegación
  List // Para el botón "Todas las Soluciones"
  // Iconos para la barra de navegación (pueden omitirse si no se usan directamente en botones)
  // Users, Settings, Brain, MessageSquare, FileCode, 
} from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';

// --- Datos para la Navegación por Pestañas (Replicado o desde un archivo compartido) ---
// Este array define las principales categorías de soluciones para la barra de navegación.
const mainServicesNavigationData = [
  {
    navLabel: "Talento Humano",
    link: "/soluciones/talento-humano",
  },
  {
    navLabel: "Finanzas",
    link: "/soluciones/finanzas", // Enlace a esta misma página (se resaltará)
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

const FinancePage: React.FC = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const baseSolutionsPath = "/soluciones"; // Ruta base para el botón "Todas las Soluciones"

  return (
    <>
      <Hero
        title="Finanzas Reinventadas"
        subtitle="Optimiza tus procesos financieros con automatización inteligente y análisis predictivo."
        imageUrl="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                Transformación financiera con inteligencia artificial
              </h2>
              <p className="text-gray-600 mb-6">
                En Datia, transformamos los procesos financieros tradicionales en sistemas 
                inteligentes que automatizan tareas rutinarias, proporcionan análisis 
                predictivos y ofrecen visibilidad en tiempo real de la salud financiera 
                de tu organización.
              </p>
              <p className="text-gray-600">
                Nuestras soluciones permiten a los departamentos financieros pasar menos 
                tiempo procesando transacciones y más tiempo analizando datos, identificando 
                oportunidades y tomando decisiones estratégicas que impulsan el crecimiento 
                del negocio.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Finanzas Inteligentes" 
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
            title="Lo que puedes lograr"
            subtitle="Optimiza cada aspecto de tus procesos financieros"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> {/* Añadido mt-12 */}
            {/* Solution 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#FF6B2B]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#FF6B2B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B] transition-colors duration-300">
                  <DollarSign 
                    size={28} 
                    className="text-[#FF6B2B] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Conciliaciones bancarias automatizadas
                </h3>
                <p className="text-gray-600 mb-6">
                  Elimina horas de trabajo manual con nuestro sistema de conciliación 
                  bancaria inteligente que:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Procesa automáticamente estados de cuenta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Identifica y concilia transacciones con precisión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Detecta discrepancias y operaciones inusuales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Genera reportes detallados y auditables</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#03A9F4]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#03A9F4] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#03A9F4] transition-colors duration-300">
                  <BarChart2 
                    size={28} 
                    className="text-[#03A9F4] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  KPIs en tiempo real y en contexto
                </h3>
                <p className="text-gray-600 mb-6">
                  Monitorea la salud financiera de tu negocio con paneles dinámicos que:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Visualizan indicadores clave en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Comparan desempeño actual con periodos anteriores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Analizan tendencias y patrones financieros</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#03A9F4] font-bold mr-2">•</span>
                    <span>Generan alertas automáticas ante desviaciones</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#1A237E]"></div>
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#1A237E] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#1A237E] transition-colors duration-300">
                  <LineChart 
                    size={28} 
                    className="text-[#1A237E] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Inteligencia en tus balances
                </h3>
                <p className="text-gray-600 mb-6">
                  Convierte tus estados financieros en herramientas estratégicas con:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Análisis predictivo de flujo de caja</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Simulación de escenarios financieros</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Detección automática de anomalías</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A237E] font-bold mr-2">•</span>
                    <span>Recomendaciones para optimización financiera</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-[#FF6B2B]"></div> {/* Reutilizando color naranja para consistencia visual con la primera tarjeta */}
              <div className="p-6">
                <div className="p-4 rounded-full bg-[#FF6B2B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B] transition-colors duration-300">
                  <FileTextIcon 
                    size={28} 
                    className="text-[#FF6B2B] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-4">
                  Aplicaciones web instantáneas
                </h3>
                <p className="text-gray-600 mb-6">
                  Desarrolla herramientas financieras a medida sin necesidad de programación:
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Crea formularios y aplicaciones financieras personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Implementa flujos de aprobación automáticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Conecta con tus sistemas financieros existentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B2B] font-bold mr-2">•</span>
                    <span>Automatiza la generación de reportes personalizados</span>
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
            subtitle="¿Por qué elegir nuestras soluciones financieras?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"> {/* Añadido mt-12 y lg:grid-cols-3 para 6 items */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-[#FF6B2B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Ahorro de tiempo</h3>
              <p className="text-gray-600">
                Reduce hasta un 80% el tiempo dedicado a tareas financieras rutinarias, 
                permitiendo que tu equipo se enfoque en análisis estratégico.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-[#03A9F4] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#03A9F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Mayor precisión</h3>
              <p className="text-gray-600">
                Minimiza errores humanos en procesos financieros críticos, mejorando 
                la confiabilidad de tus datos y reportes financieros.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-[#1A237E] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A237E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Mejores decisiones</h3>
              <p className="text-gray-600">
                Toma decisiones financieras informadas con acceso a datos en tiempo real 
                y análisis predictivos que anticipan tendencias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-[#FF6B2B] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Colaboración mejorada</h3>
              <p className="text-gray-600">
                Facilita la comunicación entre finanzas y otras áreas con dashboards 
                compartidos y acceso controlado a información financiera relevante.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-[#03A9F4] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#03A9F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Mayor seguridad</h3>
              <p className="text-gray-600">
                Protege tu información financiera con sistemas seguros que cumplen 
                con estándares regulatorios y mejores prácticas de ciberseguridad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-[#1A237E] bg-opacity-10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A237E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3">Escalabilidad</h3>
              <p className="text-gray-600">
                Adapta tus procesos financieros al crecimiento de tu negocio con 
                soluciones que escalan sin necesidad de grandes inversiones adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A237E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transforma tus finanzas con inteligencia artificial
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones pueden optimizar tus procesos financieros, 
            reducir costos y proporcionar insights valiosos para impulsar el crecimiento 
            de tu negocio.
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

export default FinancePage;