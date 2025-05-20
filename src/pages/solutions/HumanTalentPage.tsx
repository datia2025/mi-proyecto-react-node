import React from 'react';
import { Award, Heart, BarChart, Users, FileCheck, Search } from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';

const HumanTalentPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Talento Humano Reinventado"
        subtitle="Transformamos la gestión del capital humano con soluciones inteligentes que optimizan cada proceso."
        imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
                Potencia tu departamento de recursos humanos
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  de datos avanzados. Nuestra plataforma te permite:
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
                    <span>Anticipa necesidades futuras de talento</span>
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
                  <Users 
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
          <a 
            href="/contacto" 
            className="btn bg-[#FF6B2B] text-white hover:bg-opacity-90"
          >
            Solicitar una demostración
          </a>
        </div>
      </section>
    </>
  );
};

export default HumanTalentPage;