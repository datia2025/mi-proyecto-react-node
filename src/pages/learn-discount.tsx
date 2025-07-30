import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  MessageCircle,
  ClipboardCheck,
  Image as ImageIcon,
  ArrowRight,
  Award,
  Users,
  Zap,
  Target,
  User,
  Users as UsersGroup,
  CheckCircle2,
} from 'lucide-react';

import heroLearnImage from '../assets/women.png'; // Ajusta la ruta si es necesario

// --- Interfaz y Componente ServiceCard (Sin cambios) ---
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
        </div>
      </Link>
    );
};
  
const courseModulesData = [
    {
        title: "1. IA en Reclutamiento y Selección",
        description: "Con IA, transformamos el reclutamiento en una experiencia más eficiente y profundamente efectiva.",
        icon: <Brain size={32} />,
        // AQUÍ EL CAMBIO
        link: "/learn-discount#planes",
        keyPoints: ["Redacción de vacantes optimizadas con IA", "Comparación automatizada de candidatos usando GPTs personalizados", "Técnicas de Employer Branding impulsadas por IA", "Diseño de aplicaciones web para reportes de candidatos"],
        bulletColor: "text-[#FF6B2B]",
    },
    {
        title: "2. IA aplicada a procesos de capacitación empresarial",
        description: " Mejora tus planes de formación hoy: Deja que la IA te muestre dónde y cómo avanzar.",
        icon: <MessageCircle size={32} />,
        // AQUÍ EL CAMBIO
        link: "/learn-discount#planes",
        keyPoints: ["Diagnóstico de necesidades formativas a partir del análisis de múltiples fuentes", "Identificación de brechas en competencias clave con apoyo de IA para el cruce de datos", "Desarrollo instantáneo de planes por puesto con trazabilidad entre funciones y competencias.", "Construcción de reportes web para el plan de formación", "Creación de contenido con plataformas de IA gratuitas",],
        bulletColor: "text-[#03A9F4]",
    },
    {
        title: "3. IA Aplicada al desempeño organizacional",
        description: "Mejora el desempeño de tus equipo con IA y convierte los datos en decisiones que impulsan el crecimiento.",
        icon: <ClipboardCheck size={32} />,
        // AQUÍ EL CAMBIO
        link: "/learn-discount#planes",
        keyPoints: ["Análisis avanzado de datos (KPIs, 360°, clima) impulsados con IA", "Evaluación de pruebas de personalidad y creación de planes de desarrollo", "Uso de plataformas IA para mejorar informes y presentaciones de feedback.", "Construcción de prompts para sesiones coaching y de retrolimentación del desempeño."],
        bulletColor: "text-green-500",
    },
    // Nota: He dejado el último módulo como estaba, ya que dice "Disponible muy pronto"
    // y quizás no quieras que lleve a los planes todavía. Si sí quieres que lleve,
    // simplemente cambia el link a "/learn-discount#planes" también.
];

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-3">{title}</h2>
    <p className="text-lg text-gray-600">{subtitle}</p>
  </div>
);

const pricingTiers = [
    { people: 1,  pricePerPerson: '$559.000',   totalPrice: '$559.000',   link: 'https://mpago.li/2widjrf' },
    { people: 2,  pricePerPerson: '$417.500',   totalPrice: '$835.000',   link: 'https://mpago.li/1m9TsTE' },
    { people: 3,  pricePerPerson: '$371.333',   totalPrice: '$1.114.000', link: 'https://mpago.li/2kjeFzi' },
    { people: 4,  pricePerPerson: '$348.000',   totalPrice: '$1.392.000', link: 'https://mpago.li/33acPNe' },
    { people: 5,  pricePerPerson: '$334.000',   totalPrice: '$1.670.000', link: 'https://mpago.li/2HN8U9e' },
    { people: 6,  pricePerPerson: '$324.833',   totalPrice: '$1.949.000', link: 'https://mpago.li/33486Nv' },
    { people: 7,  pricePerPerson: '$318.143',   totalPrice: '$2.227.000', link: 'https://mpago.li/1UuThsG' },
    { people: 8,  pricePerPerson: '$313.250',   totalPrice: '$2.506.000', link: 'https://mpago.li/214Smtd' },
    { people: 9,  pricePerPerson: '$309.333',   totalPrice: '$2.784.000', link: 'https://mpago.li/1PvAZ35' },
    { people: 10, pricePerPerson: '$306.200',   totalPrice: '$3.062.000', link: 'https://mpago.li/1PVNiKf' },
];

const inclusionsData = [
    "6 horas de clase en vivo aprende aplicando",
    "Capacitación 100% personalizada",
    "Trabajamos con tus propios insumos: vacantes, perfiles, evaluaciones, informes, indicadores",
    "Plantillas, prompts y flujos listos para adaptar a tus procesos",
    "Resultados reales en la sesión: informes, análisis y automatizaciones",
    "Certificado digital de participación aplicada",
    "Grabaciones en vivo para posterior consulta",
    "Soporte por WhatsApp después de la capacitación",
];

const LearnPageDiscount: React.FC = () => {
    const [selectedPeople, setSelectedPeople] = useState(1);
    const selectedTier = pricingTiers.find(tier => tier.people === selectedPeople) || pricingTiers[0];

  return (
    <div className="bg-white">
      {/* SECCIÓN HERO */}
      <section className="relative text-white flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A237E] opacity-60 z-10"></div>
          <img src={heroLearnImage} alt="Aprender Inteligencia Artificial" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl mx-auto bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400/50 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap size={32} className="text-yellow-400" />
              <h2 className="text-2xl font-bold text-yellow-400">¡OFERTA POR TIEMPO LIMITADO!</h2>
            </div>
            <div className="mt-2 text-center">
                 <p className="text-4xl text-gray-200"> {/* Tamaño ajustado a 2xl como ejemplo */}
                     La oferta finaliza el <span className="font-bold text-white">1 de Agosto de 2025</span>
                 </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lidera el futuro del talento con Inteligencia Artificial aplicada
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Aprende a dominar la IA para que tu perfil sea irresistible. Estas habilidades ya están marcando la diferencia entre quién es promovido... y quién es reemplazado.
            </p>
            <a href="#planes" className="inline-block bg-[#FF6B2B] text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-orange-600 transition-all duration-300 group shadow-lg transform hover:scale-105">
              ¡Ver Planes y Descuentos!
              <ArrowRight size={22} className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
           </div>
        </div>
      </section>

      {/* SECCIÓN DE PRECIOS INTERACTIVA */}
      <section id="planes" className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <SectionHeader title="Elige tu Plan y Ahorra en Equipo" subtitle="Selecciona el número de participantes y obtén el mejor precio." />
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">¿Cuántas personas se inscribirán?</h3>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {pricingTiers.map(tier => (
                        <button key={tier.people} onClick={() => setSelectedPeople(tier.people)}
                            className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg transition-all duration-300
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B2B]
                                        ${selectedPeople === tier.people ? 'bg-[#FF6B2B] text-white shadow-lg scale-110' : 'bg-gray-200 text-[#1A237E] hover:bg-gray-300'}`}>
                            {tier.people}
                        </button>
                    ))}
                </div>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#FF6B2B] p-6 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row justify-around text-center gap-6">
                    <div className="flex-1">
                        <div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
                           <User size={18} />
                           <span>Valor por persona</span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A237E]">{selectedTier.pricePerPerson}</p>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
                           <UsersGroup size={18} />
                           <span>Valor Total a Pagar</span>
                        </div>
                        <p className="text-3xl font-bold text-[#FF6B2B]">{selectedTier.totalPrice}</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a href={selectedTier.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FF6B2B] text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-orange-600 transition-all duration-300 group shadow-lg transform hover:scale-105">
                    {`Inscribirme y Pagar (${selectedPeople} ${selectedPeople > 1 ? 'personas' : 'persona'})`}
                    <ArrowRight size={22} className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECCIÓN ¿QUÉ INCLUYE EL CURSO? */}
      <section id="inclusiones" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <SectionHeader title="¿Qué incluye el curso?" subtitle="Todo lo que necesitas para transformar tu rol con IA, de principio a fin." />
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {inclusionsData.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-lg text-gray-700">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      
      {/* El resto de la página */}
      <section className="py-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">Este curso es ideal para:</h2>
              <ul className="space-y-3 list-none pl-0 mb-8 text-gray-600 text-lg">
                <li className="flex items-start"><span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span><span>Profesionales de Recursos Humanos que buscan integrar IA en sus procesos clave.</span></li>
                <li className="flex items-start"><span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span><span>Consultores internos y business partners que necesitan optimizar la toma de decisiones.</span></li>
                <li className="flex items-start"><span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span><span>Equipos de formación, selección o desarrollo que quieren automatizar tareas repetitivas.</span></li>
                <li className="flex items-start"><span className="text-[#FF6B2B] font-bold mr-3 mt-1">•</span><span>Líderes de talento humano que desean aportar mayor valor estratégico.</span></li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.pexels.com/photos/6937871/pexels-photo-6937871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Equipo Datia" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"/>
            </div>
          </div>
        </div>
      </section>

      <section id="modulos-curso" className="pt-8 pb-20 bg-[#ECEFF1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModulesData.map((module, index) => (
              <ServiceCard key={index} title={module.title} description={module.description} icon={module.icon} link={module.link} keyPoints={module.keyPoints} bulletColor={module.bulletColor}/>
            ))}
          </div>
          {/* === INICIO DE LA CORRECCIÓN === */}
          <div className="text-center mt-16">
            <a href="#planes" className="inline-block bg-[#FF6B2B] text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-orange-600 transition-all duration-300 group shadow-lg transform hover:scale-105">
                ¡Ver Planes y Descuentos!
                <ArrowRight size={22} className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          {/* === FIN DE LA CORRECCIÓN === */}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Qué obtienes" subtitle="Porque el futuro del trabajo no espera... y tu mereces estar un paso adelante."/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B2B] bg-opacity-10 mb-6"><Award size={32} className="text-[#FF6B2B]" /></div><h3 className="text-xl font-bold text-[#1A237E] mb-3">Proyección</h3><p className="text-gray-600">Incrementa tu valor profesional con habilidades en IA aplicadas a la gestión del talento</p></div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#03A9F4] bg-opacity-10 mb-6"><Users size={32} className="text-[#03A9F4]" /></div><h3 className="text-xl font-bold text-[#1A237E] mb-3">Eficiencia</h3><p className="text-gray-600">Automatiza tareas clave en selección, formación y gestión del desempeño</p></div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A237E] bg-opacity-10 mb-6"><Zap size={32} className="text-[#1A237E]" /></div><h3 className="text-xl font-bold text-[#1A237E] mb-3">Influencia</h3><p className="text-gray-600">Entrega reportes ejecutivos potenciados con IA con un enfoque visual y estratégico que elevan tu rol</p></div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#607D8B] bg-opacity-10 mb-6"><Target size={32} className="text-[#607D8B]" /></div><h3 className="text-xl font-bold text-[#1A237E] mb-3">Impacto</h3><p className="text-gray-600">Utiliza IA para alinear perfiles, vacantes y decisiones de talento con los objetivos del negocio</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnPageDiscount;